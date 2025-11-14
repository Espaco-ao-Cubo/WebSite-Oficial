'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ className = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/associacao`, label: t('association') },
    { href: `/${locale}/tejoOne`, label: t('tejoone') },
    { href: `/${locale}/sponsors`, label: t('sponsors') },
    { href: `/${locale}/projetos`, label: t('projects') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contactos`, label: t('contact') },
  ]

  const isActive = (href) => {
    if (!pathname) return false
    
    // Remove locale prefix from href for comparison
    // href is like "/pt/tejoOne", we need to compare with pathname which might be "/tejoOne"
    const hrefWithoutLocale = href.replace(`/${locale}`, '') || '/'
    
    // Normalize paths by removing trailing slashes
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const normalizedHref = hrefWithoutLocale === '/' ? '/' : hrefWithoutLocale.replace(/\/$/, '')
    
    // Exact match
    return normalizedPath === normalizedHref
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a3a2e]/95 backdrop-blur-lg shadow-xl' 
          : 'bg-[#1a3a2e]/80 backdrop-blur-sm'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center z-50">
            <Image
              src="/images/logo.png"
              alt="Espaço ao Cubo Logo"
              width={224}    
              height={224}
              className="h-14 w-auto hover:scale-110 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-base items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors duration-200 font-medium group py-2 ${
                    active 
                      ? 'text-[#9cc5ad]' 
                      : 'text-white hover:text-[#9cc5ad]'
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#9cc5ad] transition-all duration-300 ${
                      active 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              )
            })}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-[#2d5a4a] rounded-lg transition-all duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-6 space-y-4 border-t border-[#2d5a4a]">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block hover:translate-x-2 transition-all duration-200 font-medium text-lg py-2 ${
                    active 
                      ? 'text-[#9cc5ad]' 
                      : 'text-white hover:text-[#9cc5ad]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}