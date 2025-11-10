'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import CubeSatClient from '@/components/CubeSatClient'
import { ArrowDown } from 'lucide-react'

export default function TejoOneHero() {
  const [isVisible, setIsVisible] = useState(false)
  const locale = useLocale()
  const t = useTranslations('tejoone_page.hero')

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const scrollToSpecs = () => {
    const element = document.getElementById('specifications')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#0a1f1a] to-[#1a3a2e] overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="stars opacity-40"></div>
        <div className="stars2 opacity-30"></div>
        <div className="stars3 opacity-20"></div>
      </div>

      {/* Large orbital ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-[#9cc5ad]/10 rounded-full animate-spin-slow" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 xl:px-24 min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left - Dramatic title */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-2">
              <div className="text-[#9cc5ad] text-sm uppercase tracking-[0.3em] font-semibold">
                {t('badge')}
              </div>
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold">
                <span className="bg-gradient-to-b from-white via-[#9cc5ad] to-[#5da284] bg-clip-text text-transparent">
                  TEJO
                </span>
                <br />
                <span className="bg-gradient-to-b from-[#9cc5ad] to-[#5da284] bg-clip-text text-transparent">
                  ONE
                </span>
              </h1>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-[#9cc5ad] to-transparent" />

            <div className="space-y-4">
              <p className="text-2xl text-white font-light">
                {t('subtitle')}
              </p>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Key specs - inline */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-[#9cc5ad]">{t('specs.volume.value')}</div>
                <div className="text-sm text-gray-500">{t('specs.volume.unit')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-[#9cc5ad]">{t('specs.mass.value')}</div>
                <div className="text-sm text-gray-500">{t('specs.mass.unit')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-[#9cc5ad]">{t('specs.altitude.value')}</div>
                <div className="text-sm text-gray-500">{t('specs.altitude.unit')}</div>
              </div>
            </div>

            <button
              onClick={scrollToSpecs}
              className="group flex items-center gap-3 text-[#9cc5ad] hover:text-white transition-colors mt-8"
            >
              <span className="text-sm uppercase tracking-wider">
                {t('cta')}
              </span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right - Large 3D model */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Dramatic glow */}
              <div className="absolute inset-0 bg-[#9cc5ad]/20 blur-[100px] rounded-full" />
              
              {/* Model container */}
              <div className="relative z-10">
                <CubeSatClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}