'use client'

import { Target, Rocket, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function MissionSection() {
  const t = useTranslations('mission')
  
  const missions = [
    {
      icon: Target,
      title: t('objective'),
      description: t('objectiveDesc'),
    },
    {
      icon: Rocket,
      title: t('missionTitle'),
      description: t('missionDesc'),
    },
    {
      icon: GraduationCap,
      title: t('education'),
      description: t('educationDesc'),
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a1f1a] to-[#1a3a2e] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9cc5ad] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7ba591] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-[#9cc5ad] bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#9cc5ad]/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#7ba591] to-[#9cc5ad] rounded-xl group-hover:scale-110 transition-transform duration-300">
                <mission.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9cc5ad] transition-colors">
                {mission.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {mission.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9cc5ad]/0 to-[#7ba591]/0 group-hover:from-[#9cc5ad]/10 group-hover:to-[#7ba591]/10 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/associacao">
            <button className="bg-transparent border-2 border-[#9cc5ad] text-[#9cc5ad] hover:bg-[#9cc5ad] hover:text-[#1a3a2e] px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('btnLearnMore')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}