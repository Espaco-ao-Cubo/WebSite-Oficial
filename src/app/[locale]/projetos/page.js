import { getAllProjects } from '@/utils/projects'
import { BookOpen, School, Rocket, Users, Lightbulb, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

const iconMap = {
  BookOpen,
  School,
  Rocket,
  Users,
  Lightbulb,
  Globe,
}

export default async function ProjectsPage({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects_page' })
  const projects = getAllProjects(locale)

  const getIcon = (iconName) => {
    return iconMap[iconName] || BookOpen
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 bg-[#0a1f1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-white/60 text-base max-w-3xl mx-auto mt-6">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = getIcon(project.icon)
            
            return (
              <Link
                key={project.slug}
                href={`/${locale}/projetos/${project.slug}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl overflow-hidden hover:border-[#9cc5ad]/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Image or Icon */}
                <div className="relative h-70 bg-gradient-to-br from-[#2d5a4a] to-[#1a3a2e] flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    </>
                  ) : (
                    <>
                      <IconComponent className="w-16 h-16 text-[#9cc5ad]/30" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9cc5ad] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-[#9cc5ad]/80 text-sm font-medium mb-3 line-clamp-1">
                      {project.subtitle}
                    </p>
                  )}
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">
              {t('empty_state')}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}