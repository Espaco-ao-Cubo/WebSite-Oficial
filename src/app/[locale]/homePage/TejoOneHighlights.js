'use client'

import { useTranslations, useMessages } from 'next-intl'
import Link from 'next/link'
import { Rocket, Gauge, Calendar, Globe } from 'lucide-react'

export default function TejoOneHighlights() {
  const t = useTranslations('mainPage.TejoOneHighlights')
  const messages = useMessages()
  const icons = { Rocket, Gauge, Calendar, Globe }

  // Access raw object safely from messages
  const highlights = Object.values(messages.mainPage.TejoOneHighlights.highlights)

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#2d5a4a] to-[#1a3a2e] overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#9cc5ad] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#7ba591] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left side */}
          <div className="text-white space-y-4 sm:space-y-6">
            <div className="inline-block bg-[#9cc5ad]/20 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-[#9cc5ad]/30 text-xs sm:text-sm">
              <span className="text-[#9cc5ad] font-medium">{t('projectLabel')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-[#9cc5ad] bg-clip-text text-transparent leading-tight">
              {t('title')}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {t('description')}
            </p>

            <Link href="/tejoOne">
              <button className="group bg-[#7ba591] hover:bg-[#9cc5ad] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9cc5ad]/50 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <span>{t('cta')}</span>
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => {
              const Icon = icons[item.icon] || Rocket
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-[#9cc5ad]/40 transition-all duration-500 hover:scale-105"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#9cc5ad] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="text-base sm:text-lg text-[#9cc5ad] font-semibold">
                      {item.unit}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-snug">
                    {item.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}