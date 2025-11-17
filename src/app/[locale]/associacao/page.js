'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import ProfileCard from '@/components/ProfileCard'
import { Target, Rocket, Users, Heart, ExternalLink } from 'lucide-react'

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [projectsData, setProjectsData] = useState(null)
  const [selectedProject, setSelectedProject] = useState('tejoone')
  const t = useTranslations('association')
  const locale = t('badge') === 'About Us' ? 'en' : 'pt' // Detecta locale

  useEffect(() => {
    setIsVisible(true)
    
    const loadProjectsData = async () => {
      try {
        const data = await import(`@/data/new_teamMembers_${locale}.json`)
        setProjectsData(data.default)
      } catch (error) {
        console.error('Error loading projects data:', error)
        // Fallback para inglês se houver erro
        const fallbackData = await import('@/data/new_teamMembers_pt.json')
        setProjectsData(fallbackData.default)
      }
    }
    
    loadProjectsData()
  }, [locale])

  // Contador global para o index dos cards
  let globalCardIndex = 0

  if (!projectsData) {
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

  // Encontrar o projeto selecionado
  const currentProject = projectsData.projects.find(p => p.id === selectedProject)

  // Função para obter o link do projeto
  const getProjectLink = (projectId) => {
    if (projectId === 'tejoone') {
      return `/${locale}/tejoOne`
    }
    // Para outros projetos, assume-se que estão na página de projetos
    return `/${locale}/projetos`
  }

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
          <div className="relative w-full rounded-2xl overflow-hidden mb-12 border border-[#9cc5ad]/20">
            {/* Altura responsiva: mais baixa em mobile, mais alta em desktop */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
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
              </div>
              {/* Imagem com object-fit responsivo */}
              <Image 
                src="/images/team/team_photo_association_page.jpg" 
                alt="Espaço ao Cubo Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
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

        {/* Project Selection Menu */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {projectsData.projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProject === project.id
                    ? 'bg-[#9cc5ad] text-[#0a1f1a] shadow-lg shadow-[#9cc5ad]/50 scale-105'
                    : 'bg-white/5 text-[#9cc5ad] border border-[#9cc5ad]/30 hover:border-[#9cc5ad]/60 hover:bg-white/10'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Content */}
        {currentProject && (
          <div key={selectedProject} className="transition-all duration-500">
            {/* Project Header with Go to Project Button */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    {currentProject.name}
                  </h3>
                  <p className="text-[#9cc5ad]/70 text-lg">
                    {currentProject.description}
                  </p>
                  <div className="h-1 w-32 bg-gradient-to-r from-[#9cc5ad] to-transparent mt-4"></div>
                </div>
                
                {/* Go to Project Button - Only show for projects with dedicated pages */}
                {currentProject.id !== 'association' && (
                  <Link 
                    href={getProjectLink(currentProject.id)}
                    className="group flex items-center gap-2 px-6 py-3 bg-[#9cc5ad] text-[#0a1f1a] font-semibold rounded-lg hover:bg-[#84B295] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#9cc5ad]/30 hover:scale-105"
                  >
                    <span>Go to Project</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            </div>

            {/* Check if it's Association project (has organs and advisors) */}
            {currentProject.id === 'association' ? (
              <>
                {/* Association Organs */}
                {currentProject.organs && currentProject.organs.length > 0 && (
                  <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                      {locale === 'en' ? 'Governing Bodies' : 'Órgãos Sociais'}
                    </h3>
                    {currentProject.organs.map((organ) => (
                      <div key={organ.id} className="mb-16">
                        {/* Organ Header */}
                        <div className="mb-8">
                          <h4 className="text-2xl md:text-3xl font-bold text-[#9cc5ad] mb-2">
                            {organ.name}
                          </h4>
                        </div>

                        {/* Organ Members Grid */}
                        {organ.members && organ.members.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {organ.members.map((member, memberIndex) => {
                              const currentIndex = globalCardIndex++
                              return (
                                <ProfileCard 
                                  key={currentIndex} 
                                  member={{
                                    ...member,
                                    role: member.position // Map position to role for ProfileCard
                                  }} 
                                  index={currentIndex}
                                  positionInRow={memberIndex}
                                />
                              )
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Divider between Organs and Advisors */}
                {currentProject.organs && currentProject.advisors && (
                  <div className="mb-20 flex items-center justify-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9cc5ad]/30 to-transparent"></div>
                  </div>
                )}

                {/* Advisors Section */}
                {currentProject.advisors && currentProject.advisors.length > 0 && (
                  <div className="mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                      {locale === 'en' ? 'Advisors' : 'Conselheiros'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {currentProject.advisors.map((advisor, advisorIndex) => {
                        const currentIndex = globalCardIndex++
                        return (
                          <ProfileCard 
                            key={currentIndex} 
                            member={{
                              name: advisor.name,
                              role: 'Advisor',
                              university: advisor.institution,
                              course: '',
                              degree: '',
                              year: '',
                              linkedin: advisor.linkedin,
                              image: advisor.image
                            }} 
                            index={currentIndex}
                            positionInRow={advisorIndex}
                          />
                        )
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Regular projects with departments */
              <>
                {currentProject.departments && currentProject.departments.length > 0 ? (
                  currentProject.departments.map((department, deptIndex) => (
                    <div key={department.id} className="mb-16">
                      {/* Department Header */}
                      <div className="mb-8">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#9cc5ad] mb-2">
                          {department.name}
                        </h4>
                      </div>

                      {/* Members Grid */}
                      {department.members && department.members.length > 0 ? (
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
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-[#9cc5ad]/50 text-lg">
                            {locale === 'en' ? 'No members in this department yet.' : 'Ainda não há membros neste departamento.'}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20">
                    <Users className="w-24 h-24 text-[#9cc5ad]/30 mx-auto mb-6" />
                    <p className="text-[#9cc5ad]/50 text-xl mb-4">
                      {locale === 'en' ? 'Team members coming soon!' : 'Membros da equipa em breve!'}
                    </p>
                    <p className="text-[#9cc5ad]/30 text-sm">
                      {locale === 'en' ? 'This project is currently being organized.' : 'Este projeto está atualmente a ser organizado.'}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}