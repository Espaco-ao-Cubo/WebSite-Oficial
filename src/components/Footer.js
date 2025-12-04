'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Mail, MapPin, Phone, Instagram, Linkedin, X } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/tejoOne`, label: tNav('tejoone') },
    { href: `/${locale}/associacao`, label: tNav('association') },
    { href: `/${locale}/projetos`, label: tNav('projects') },
    { href: `/${locale}/blog`, label: tNav('blog') },
    { href: `/${locale}/contactos`, label: tNav('contact') },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/espaco_ao_cubo/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/espacoaocubo', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com/Tejo_One', label: 'X' }
  ]

  return (
    <footer className="bg-[#0a1f1a] border-t border-[#9cc5ad]/20">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-[#9cc5ad] font-bold text-xl mb-4">Espaço ao Cubo</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {locale === 'pt' 
                ? 'Associação estudantil dedicada ao desenvolvimento de tecnologia espacial e educação aeroespacial.'
                : 'Student association dedicated to space technology development and aerospace education.'}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#9cc5ad]/20 hover:bg-[#9cc5ad] flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#9cc5ad] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#9cc5ad] font-bold text-xl mb-4">
              {locale === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#9cc5ad] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#9cc5ad] font-bold text-xl mb-4">
              {locale === 'pt' ? 'Legal' : 'Legal'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/termos`}
                  className="text-gray-400 hover:text-[#9cc5ad] transition-colors"
                >
                  {locale === 'pt' ? 'Termos de Serviço' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacidade`}
                  className="text-gray-400 hover:text-[#9cc5ad] transition-colors"
                >
                  {locale === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#9cc5ad] font-bold text-xl mb-4">
              {locale === 'pt' ? 'Contacto' : 'Contact'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#9cc5ad] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:tejo.one@espacoaocubo.pt"
                  className="text-gray-400 hover:text-[#9cc5ad] transition-colors"
                >
                  geral@espacoaocubo.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#9cc5ad] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+351123456789"
                  className="text-gray-400 hover:text-[#9cc5ad] transition-colors"
                >
                  +351 926 253 903
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9cc5ad] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Lisboa, Portugal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9cc5ad]/25 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
            {/* Copyright */}
            <p className="text-center md:text-left">
              © {currentYear} <span className="text-white font-medium">Espaço ao Cubo</span>. {t('allRights')}.
            </p>

            {/* Credits */}
            <p className="text-center md:text-right">
              {t('credits')}{' '}
              <Link
                href="https://www.linkedin.com/in/eduardo-barata/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#9cc5ad] font-medium transition-colors duration-200"
              >
                Eduardo Barata
              </Link>{' '}
              &{' '}
              <Link
                href="https://www.linkedin.com/in/manuelmcruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#9cc5ad] font-medium transition-colors duration-200"
              >
                Manuel Cruz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}