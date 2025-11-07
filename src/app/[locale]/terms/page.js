 'use client'

import { useTranslations } from 'next-intl'

export default function TermsPage() {
  const t = useTranslations('legal')

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 lg:px-16 bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('termsTitle')}</h1>
        <p className="text-lg text-gray-300 mb-4">{t('termsIntro')}</p>
        <p className="text-gray-300 mb-4">{t('termsParagraph1')}</p>
        <p className="text-gray-300 mb-4">{t('termsParagraph2')}</p>
        <p className="text-gray-300">{t('termsContact')}</p>
      </div>
    </section>
  )
}
