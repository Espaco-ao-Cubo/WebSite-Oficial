'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import SponsorCard from '@/components/SponsorCard'
import sponsorsData from '@/data/sponsors.json'

export default function SponsorsPage() {
  const t = useTranslations('sponsors_page')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  let globalIndex = 0

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 bg-[#0a1f1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-white/60 text-base max-w-3xl mx-auto mt-6">
            {t('subtitle')}
          </p>
        </div>

        {/* Parceiros Section */}
        <div className={`mb-32 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-24">
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex-1 h-px bg-white/20"></div>
              <h2 className="text-lg font-medium text-white/80 tracking-wider uppercase whitespace-nowrap">
                {t('parceiro')}
              </h2>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sponsorsData.parceiros.map((parceiro) => {
                const currentIndex = globalIndex++
                return (
                  <SponsorCard key={currentIndex} sponsor={parceiro} index={currentIndex} tier="parceiro" />
                )
              })}
            </div>
          </div>
        </div>

        {/* Patrocínios Section */}
        <div className={`mb-32 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-24">
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex-1 h-px bg-white/20"></div>
              <h2 className="text-lg font-medium text-white/80 tracking-wider uppercase whitespace-nowrap">
                {t('patrocinio')}
              </h2>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sponsorsData.patrocinios.map((patrocinio) => {
                const currentIndex = globalIndex++
                return (
                  <SponsorCard key={currentIndex} sponsor={patrocinio} index={currentIndex} tier="patrocinio" />
                )
              })}
            </div>
          </div>
        </div>

        {/* Apoios Section */}
        <div className={`mb-32 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-24">
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex-1 h-px bg-white/20"></div>
              <h2 className="text-lg font-medium text-white/80 tracking-wider uppercase whitespace-nowrap">
                {t('apoio')}
              </h2>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {sponsorsData.apoios.map((apoio) => {
                const currentIndex = globalIndex++
                return (
                  <SponsorCard key={currentIndex} sponsor={apoio} index={currentIndex} tier="apoio" />
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-32 max-w-3xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border border-white/10 rounded-lg p-12 text-center">
            <h3 className="text-xl font-medium text-white mb-3">
              {t('cta_title')}
            </h3>
            <p className="text-white/50 text-sm mb-8">
              {t('cta_description')}
            </p>
            <a
              href="/contactos"
              className="inline-block bg-white text-[#0a1f1a] font-medium px-8 py-3 rounded transition-all duration-300 hover:bg-white/90"
            >
              {t('cta_button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}