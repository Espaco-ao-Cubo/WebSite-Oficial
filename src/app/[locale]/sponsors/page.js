'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import sponsorsData from '@/data/sponsors.json'

// Partner Card Component with Description
function PartnerCard({ partner, index }) {
  return (
    <div 
      className="group bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 hover:border-[#9cc5ad]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#9cc5ad]/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Logo */}
      <div className="relative h-32 mb-6 flex items-center justify-center bg-white rounded-xl p-4">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={200}
          height={100}
          className="max-h-24 w-auto object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#9cc5ad] transition-colors">
        {partner.name}
      </h3>

      {/* Description */}
      {partner.description && (
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {partner.description}
        </p>
      )}

      {/* Website Link */}
      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#9cc5ad] hover:text-[#b8dbc4] text-sm font-medium transition-colors group-hover:gap-3"
        >
          Visitar website
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  )
}

// Sponsor Card Component with Description
function SponsorCard({ sponsor, index }) {
  return (
    <div 
      className="group bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-6 hover:border-[#9cc5ad]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9cc5ad]/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Logo */}
      <div className="relative h-24 mb-4 flex items-center justify-center bg-white rounded-xl p-3">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={150}
          height={80}
          className="max-h-20 w-auto object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#9cc5ad] transition-colors">
        {sponsor.name}
      </h3>

      {/* Description */}
      {sponsor.description && (
        <p className="text-gray-400 text-xs leading-relaxed mb-3">
          {sponsor.description}
        </p>
      )}

      {/* Website Link */}
      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#9cc5ad] hover:text-[#b8dbc4] text-xs font-medium transition-colors"
        >
          Website
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  )
}

// Support Card Component (Simple)
function SupportCard({ support, index }) {
  return (
    <a
      href={support.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-xl p-6 hover:border-[#9cc5ad]/40 transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-20 flex items-center justify-center bg-white rounded-xl p-3">
        <Image
          src={support.logo}
          alt={support.name}
          width={120}
          height={60}
          className="max-h-16 w-auto object-contain"
        />
      </div>
    </a>
  )
}

export default function SponsorsPage() {
  const t = useTranslations('sponsors_page')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#9cc5ad]/30"></div>
            <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
              {t('parceiro')}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#9cc5ad]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sponsorsData.parceiros.map((parceiro, index) => (
              <PartnerCard key={index} partner={parceiro} index={index} />
            ))}
          </div>
        </div>

        {/* Patrocínios Section */}
        <div className={`mb-32 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#9cc5ad]/30"></div>
            <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
              {t('patrocinio')}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#9cc5ad]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sponsorsData.patrocinios.map((patrocinio, index) => (
              <SponsorCard key={index} sponsor={patrocinio} index={index} />
            ))}
          </div>
        </div>

        {/* Apoios Section */}
        <div className={`mb-32 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#9cc5ad]/30"></div>
            <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
              {t('apoio')}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#9cc5ad]/30"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sponsorsData.apoios.map((apoio, index) => (
              <SupportCard key={index} support={apoio} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section - Highlighted */}
        <div className={`mt-32 max-w-4xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-[#2d5a4a] to-[#1a3a2e] border-2 border-[#9cc5ad]/40 rounded-2xl p-12 text-center overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9cc5ad] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7ba591] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="text-5xl">🤝</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('cta_title')}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {t('cta_description')}
              </p>
              
              <a
                href="/contactos"
                className="inline-block bg-[#9cc5ad] hover:bg-[#b8dbc4] text-[#0a1f1a] font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                {t('cta_button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}