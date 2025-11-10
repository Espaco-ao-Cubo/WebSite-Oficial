'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { Mail, Users, BookOpen } from 'lucide-react'

export default function CTASection() {
  const locale = useLocale()
  const t = useTranslations('cta')

  const ctas = [
    {
      icon: Users,
      title: t('joinTeam.title'),
      description: t('joinTeam.description'),
      buttonText: t('joinTeam.button'),
      href: `/${locale}/associacao`,
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: BookOpen,
      title: t('workshops.title'),
      description: t('workshops.description'),
      buttonText: t('workshops.button'),
      href: `/${locale}/projetos`,
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Mail,
      title: t('sponsor.title'),
      description: t('sponsor.description'),
      buttonText: t('sponsor.button'),
      href: `/${locale}/contactos`,
      color: 'from-green-500 to-green-700',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a1f1a] to-[#1a3a2e]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctas.map((cta, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 hover:border-[#9cc5ad]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cta.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-br ${cta.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cta.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9cc5ad] transition-colors">
                  {cta.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {cta.description}
                </p>
                
                <Link href={cta.href}>
                  <button className="w-full bg-[#7ba591] hover:bg-[#9cc5ad] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                    {cta.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}