'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '')
    // Navigate to new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`)
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-[#9cc5ad]" />
      <button
        onClick={() => switchLocale(locale === 'pt' ? 'en' : 'pt')}
        className="px-3 py-1 rounded-lg bg-[#9cc5ad]/20 hover:bg-[#9cc5ad]/30 text-white font-medium transition-all duration-200 text-sm"
      >
        {locale === 'pt' ? 'EN' : 'PT'}
      </button>
    </div>
  )
}