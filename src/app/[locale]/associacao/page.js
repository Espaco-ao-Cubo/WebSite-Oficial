'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProfileCard from '@/components/ProfileCard'
import { Target, Rocket, Users, Heart } from 'lucide-react'

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [teamData, setTeamData] = useState(null)
  const t = useTranslations('association')
  const locale = t('badge') === 'About Us' ? 'en' : 'pt' // Detecta locale

  useEffect(() => {
    setIsVisible(true)
    
    // Importar o JSON correto baseado no locale
    const loadTeamData = async () => {
      try {
        const data = await import(`@/data/teamMembers_${locale}.json`)
        setTeamData(data.default)
      } catch (error) {
        console.error('Error loading team data:', error)
        // Fallback para português se houver erro
        const fallbackData = await import('@/data/teamMembers_pt.json')
        setTeamData(fallbackData.default)
      }
    }
    
    loadTeamData()
  }, [locale])

  // Contador global para o index dos cards
  let globalCardIndex = 0

  if (!teamData) {
    return (
      <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
          <div className="text-[#9cc5ad] text-xl">Loading...</div>
        </div>
      </section>
    )
  }

  // Valores da associação com ícones
  const values = [
    {
      icon: Target,
      titleKey: 'values.mission.title',
      descKey: 'values.mission.description'
    },
    {
      icon: Rocket,
      titleKey: 'values.vision.title',
      descKey: 'values.vision.description'
    },
    {
      icon: Users,
      titleKey: 'values.education.title',
      descKey: 'values.education.description'
    },
    {
      icon: Heart,
      titleKey: 'values.coreValues.title',
      descKey: 'values.coreValues.description'
    }
  ]

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-[#9cc5ad] text-sm font-semibold tracking-wider uppercase bg-[#9cc5ad]/10 px-4 py-2 rounded-full border border-[#9cc5ad]/30">
              {t('badge')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-[#9cc5ad] to-white bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-[#9cc5ad]/70 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Team Photo Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative h-140 rounded-2xl overflow-hidden mb-12 border border-[#9cc5ad]/20">
            {/* Placeholder para foto da equipa */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2e] to-[#0a1f1a] flex items-center justify-center">
              <div className="text-center">
                <Users className="w-32 h-32 text-[#9cc5ad]/30 mx-auto mb-4" />
                <p className="text-[#9cc5ad]/50 text-lg">
                  {t('photoPlaceholder')}
                </p>
                <p className="text-[#9cc5ad]/30 text-sm mt-2">
                  {t('photoSubtext')}
                </p>
              </div>
              <Image 
                src="/images/team/team_photo_association_page.jpg" 
                alt="Espaço ao Cubo Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('intro1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('intro2')}
            </p>
          </div>
        </div>

        {/* Values/Mission Grid */}
        <div className={`mb-24 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('valuesTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.titleKey}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#9cc5ad]/20 hover:border-[#9cc5ad]/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#9cc5ad]/20 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#9cc5ad]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(value.titleKey)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9cc5ad]/30 to-transparent"></div>
            <div className="px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t('teamTitle')}
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9cc5ad]/30 to-transparent"></div>
          </div>
        </div>

        {/* Teams - CARDS TAMANHO ORIGINAL (4 colunas) */}
        {teamData.teams.map((team, teamIndex) => (
          <div key={team.id}>
            <div 
              className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(teamIndex + 6) * 100}ms` }}
            >
              {/* Team Header */}
              <div className="mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {team.name}
                </h3>
                <p className="text-[#9cc5ad]/70 text-lg">
                  {team.description}
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-[#9cc5ad] to-transparent mt-4"></div>
              </div>

              {/* Departments */}
              {team.departments.map((department) => (
                <div key={department.id} className="mb-16">
                  {/* Department Header */}
                  <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-[#9cc5ad] mb-2">
                      {department.name}
                    </h4>
                  </div>

                  {/* Members Grid - TAMANHO ORIGINAL (4 colunas) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {department.members.map((member, memberIndex) => {
                      const currentIndex = globalCardIndex++
                      return (
                        <ProfileCard 
                          key={currentIndex} 
                          member={member} 
                          index={currentIndex}
                          positionInRow={memberIndex}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Divisor entre equipas (exceto na última) */}
            {teamIndex < teamData.teams.length - 1 && (
              <div className="mb-32 flex items-center justify-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9cc5ad]/30 to-transparent"></div>
                <div className="mx-8">
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}