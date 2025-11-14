'use client'

import { useLocale, useTranslations, useMessages } from 'next-intl'
import { CheckCircle, Circle } from 'lucide-react'
import Link from 'next/link'

export default function Timeline() {
  const locale = useLocale()
  const t = useTranslations('tejoone_page.timeline')
  const messages = useMessages()

  // Access the raw JSON object (booleans included)
  const phases = messages.tejoone_page.timeline.phases
  const phaseKeys = ['concept', 'preliminary', 'critical', 'integration', 'campaign', 'launch']

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#173A3C] to-[#0f2d2f]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#84B295]/30 hidden md:block" />

            <div className="space-y-8">
              {phaseKeys.map((key, index) => {
                const phase = phases[key]
                return (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 hidden md:block">
                      {phase.completed ? (
                        <CheckCircle className="w-16 h-16 text-[#84B295] bg-[#173A3C] rounded-full" />
                      ) : (
                        <Circle className="w-16 h-16 text-[#84B295]/50 bg-[#173A3C] rounded-full" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                        phase.completed
                          ? 'bg-[#84B295]/10 border-[#84B295]/30'
                          : 'bg-white/5 border-[#84B295]/20'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#84B295] font-bold text-lg">{phase.date}</span>
                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      </div>
                      <p className="text-gray-300">{phase.description}</p>
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