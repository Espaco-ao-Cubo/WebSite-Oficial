'use client'

import { useLocale, useTranslations, useMessages } from 'next-intl'
import { CheckCircle, Circle } from 'lucide-react'

export default function Timeline() {
  const locale = useLocale()
  const t = useTranslations('tejoone_page.timeline')
  const messages = useMessages()

  // Access the raw JSON object (booleans included)
  const phases = messages.tejoone_page.timeline.phases
  const phaseKeys = ['concept', 'preliminary', 'critical', 'integration', 'campaign', 'launch', 'operations']

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#173A3C] to-[#0f2d2f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Desktop only */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#84B295]/30 hidden md:block" />

            {/* Timeline line - Mobile (left side) */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#84B295]/30 md:hidden" />

            <div className="space-y-6 sm:space-y-8">
              {phaseKeys.map((key, index) => {
                const phase = phases[key]
                return (
                  <div key={index} className="relative flex items-start gap-4 sm:gap-6">
                    {/* Icon - Mobile version (smaller) */}
                    <div className="relative z-10 flex-shrink-0 md:hidden">
                      {phase.completed ? (
                        <CheckCircle className="w-12 h-12 text-[#84B295] bg-[#173A3C] rounded-full p-1" />
                      ) : (
                        <Circle className="w-12 h-12 text-[#84B295]/50 bg-[#173A3C] rounded-full p-1" />
                      )}
                    </div>

                    {/* Icon - Desktop version (larger) */}
                    <div className="relative z-10 flex-shrink-0 hidden md:block">
                      {phase.completed ? (
                        <CheckCircle className="w-16 h-16 text-[#84B295] bg-[#173A3C] rounded-full" />
                      ) : (
                        <Circle className="w-16 h-16 text-[#84B295]/50 bg-[#173A3C] rounded-full" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 p-4 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                        phase.completed
                          ? 'bg-[#84B295]/10 border-[#84B295]/30'
                          : 'bg-white/5 border-[#84B295]/20'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-[#84B295] font-bold text-base sm:text-lg">
                          {phase.date}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}