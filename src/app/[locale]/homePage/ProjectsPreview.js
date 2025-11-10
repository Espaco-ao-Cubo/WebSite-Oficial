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

export default async function ProjectsPreview({ locale }) {
  
  const t = await getTranslations({ locale, namespace: 'mainPage.projectPreview' })

  console.log("Locale in ProjectsPreview:", locale)

  const allProjects = getAllProjects(locale)
  const projects = allProjects.slice(0, 3)

  const getIcon = (iconName) => {
    return iconMap[iconName] || BookOpen
  }

  return (
    <section className="py-12 lg:py-16 bg-[#1a3a2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9cc5ad] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7ba591] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
              {projects.map((project) => {
                const IconComponent = getIcon(project.icon)
                
                return (
                  <Link
                    key={project.slug}
                    href={`/${locale}/projetos/${project.slug}`}
                    className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl overflow-hidden hover:border-[#9cc5ad]/40 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#9cc5ad]/10"
                  >
                    {/* Image or Icon */}
                    <div className="relative h-56 bg-gradient-to-br from-[#2d5a4a] to-[#1a3a2e] flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />
                        </>
                      ) : (
                        <>
                          <IconComponent className="w-20 h-20 text-[#9cc5ad]/40 group-hover:text-[#9cc5ad]/60 transition-all duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#9cc5ad] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center text-[#9cc5ad] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        {t("learnMore")} →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            {allProjects.length > 3 && (
              <div className="text-center">
                <Link href={`/${locale}/projetos`}>
                  <button className="bg-[#7ba591] hover:bg-[#9cc5ad] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9cc5ad]/50">
                    {t('viewAll')}
                  </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              {t('noProjects')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}