'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import ProfileCard from '@/components/ProfileCard'
import { Target, Rocket, Users, Heart, ExternalLink } from 'lucide-react'
import teamData from '@/data/teamMembers.json' // <-- Direct, clean import!

// Reorder logic: always put 'association' first
const orderedProjects = [...teamData.projects].sort((a, b) => 
  a.id === 'association' ? -1 : b.id === 'association' ? 1 : 0
);

export default function TeamSection() {
  const [selectedProject, setSelectedProject] = useState(orderedProjects[0]?.id || null) 
  const t = useTranslations('association')
  const locale = t('badge') === 'About Us' ? 'en' : 'pt' 

  const values = [
    { icon: Target, titleKey: 'values.mission.title', descKey: 'values.mission.description' },
    { icon: Rocket, titleKey: 'values.vision.title', descKey: 'values.vision.description' },
    { icon: Users, titleKey: 'values.education.title', descKey: 'values.education.description' },
    { icon: Heart, titleKey: 'values.coreValues.title', descKey: 'values.coreValues.description' }
  ]

  const currentProject = orderedProjects.find(p => p.id === selectedProject)
  const getProjectLink = (id) => id === 'tejoone' ? `/${locale}/tejoOne` : `/${locale}/projetos`

  // Helper function to format the year natively based on language
  const formatYear = (yearNum) => {
    if (!yearNum) return '';
    if (locale === 'pt') return `${yearNum}º ano`;
    return yearNum === "1" ? "1st year" : yearNum === "2" ? "2nd year" : yearNum === "3" ? "3rd year" : `${yearNum}th year`;
  }

  // Helper to translate a member object so ProfileCard doesn't break
  const localizeMember = (member) => ({
    name: member.name,
    role: member[`role_${locale}`] || '',
    university: member.university,
    course: member[`course_${locale}`] || '',
    degree: member[`degree_${locale}`] || '',
    year: formatYear(member.year),
    image: member.image,
    linkedin: member.linkedin
  })

  let globalCardIndex = 0

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
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

        {/* Project Selection Menu */}
        <div className="mb-16 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
          {orderedProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedProject === project.id
                  ? 'bg-[#9cc5ad] text-[#0a1f1a] shadow-lg shadow-[#9cc5ad]/50 scale-105'
                  : 'bg-white/5 text-[#9cc5ad] border border-[#9cc5ad]/30 hover:bg-white/10'
              }`}
            >
              {project[`name_${locale}`]}
            </button>
          ))}
        </div>

        {/* Selected Project Content */}
        {currentProject && (
          <div key={selectedProject} className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {currentProject[`name_${locale}`]}
                </h3>
                <p className="text-[#9cc5ad]/70 text-lg">
                  {currentProject[`description_${locale}`]}
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-[#9cc5ad] to-transparent mt-4"></div>
              </div>
              
              {currentProject.id !== 'association' && (
                <Link 
                  href={getProjectLink(currentProject.id)}
                  className="group flex items-center gap-2 px-6 py-3 bg-[#9cc5ad] text-[#0a1f1a] font-semibold rounded-lg hover:bg-[#84B295] transition-all shadow-lg hover:scale-105"
                >
                  <span>{t('goToProject')}</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>

            {/* Render Organs (Association) */}
            {currentProject.organs?.map((organ) => (
              <div key={organ.id} className="mb-16">
                <h4 className="text-2xl font-bold text-[#9cc5ad] mb-6 text-center">{organ[`name_${locale}`]}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {organ.members?.map((member, idx) => (
                    <ProfileCard key={globalCardIndex++} member={localizeMember(member)} index={globalCardIndex} positionInRow={idx} />
                  ))}
                </div>
              </div>
            ))}

            {/* Render Advisors (Association) */}
            {currentProject.advisors?.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center justify-center mb-12">
                   <div className="flex-1 h-px bg-[#9cc5ad]/30"></div>
                   <h3 className="px-6 text-3xl font-bold text-white">{locale === 'en' ? 'Advisors' : 'Conselheiros'}</h3>
                   <div className="flex-1 h-px bg-[#9cc5ad]/30"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {currentProject.advisors.map((advisor, idx) => (
                    <ProfileCard key={globalCardIndex++} member={localizeMember(advisor)} index={globalCardIndex} positionInRow={idx} />
                  ))}
                </div>
              </div>
            )}

            {/* Render Departments (Other Projects) */}
            {currentProject.departments?.map((dept) => (
              <div key={dept.id} className="mb-16">
                <h4 className="text-2xl font-bold text-[#9cc5ad] mb-6">{dept[`name_${locale}`]}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {dept.members?.map((member, idx) => (
                    <ProfileCard key={globalCardIndex++} member={localizeMember(member)} index={globalCardIndex} positionInRow={idx} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}