'use client'

import { useTranslations } from 'next-intl'
import { Target, Satellite, Microscope, GraduationCap } from 'lucide-react'

export default function MissionObjectives() {
  const t = useTranslations('tejoone_page.missionObjectives')

  const objectives = [
    {
      icon: Target,
      title: t('objectives.techDemo.title'),
      description: t('objectives.techDemo.description'),
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Satellite,
      title: t('objectives.national.title'),
      description: t('objectives.national.description'),
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Microscope,
      title: t('objectives.research.title'),
      description: t('objectives.research.description'),
      color: 'from-green-500 to-green-700',
    },
    {
      icon: GraduationCap,
      title: t('objectives.education.title'),
      description: t('objectives.education.description'),
      color: 'from-orange-500 to-orange-700',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 hover:border-[#9cc5ad]/60 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${obj.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-br ${obj.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <obj.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9cc5ad] transition-colors">
                  {obj.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}