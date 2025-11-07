'use client'

import { BookOpen, School } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function ProjectsPreview() {
  const t = useTranslations('projects')
  const projects = [
    {
      icon: School,
      title: t('workshops.title'),
      description: t('workshops.description'),
      image: '/images/workshop.jpg', // Add your image
      link: '/projetos',
    },
    {
      icon: BookOpen,
      title: t('winterSchool.title'),
      description: t('winterSchool.description'),
      image: '/images/winter-school.jpg', // Add your image
      link: '/projetos',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#1a3a2e]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl overflow-hidden hover:border-[#9cc5ad]/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-[#2d5a4a] to-[#1a3a2e] flex items-center justify-center overflow-hidden">
                <project.icon className="w-24 h-24 text-[#9cc5ad]/30" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9cc5ad] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="inline-flex items-center text-[#9cc5ad] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('learnMore')} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/projetos">
            <button className="bg-[#7ba591] hover:bg-[#9cc5ad] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9cc5ad]/50">
              {t('viewAll')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}