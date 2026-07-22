import { getProjectBySlug, getAllProjects } from '@/utils/projects'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'
import rehypeRaw from 'rehype-raw'
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import ProjectSections from './ProjectSections'

export async function generateStaticParams() {
  const locales = ['pt', 'en']
  const params = []

  for (const locale of locales) {
    const projects = getAllProjects(locale)
    projects.forEach((project) => {
      params.push({
        locale,
        slug: project.slug,
      })
    })
  }

  return params
}

export default async function ProjectDetailPage({ params }) {
  const { locale, slug } = await params
  const t = await getTranslations('projects_page')
  const project = getProjectBySlug(slug, locale)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 bg-[#0a1f1a]">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/${locale}/projetos`}
          className="inline-flex items-center gap-2 text-[#9cc5ad] hover:text-[#b8dbc4] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('back_to_projects')}
        </Link>

        {/* Registration Banner (if open) */}
        {project.registrationOpen && project.registrationLink && (
          <div className="mb-8 bg-gradient-to-r from-[#7ba591] to-[#9cc5ad] rounded-2xl p-6 text-center shadow-2xl shadow-[#9cc5ad]/20 border border-[#9cc5ad]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {locale === 'pt' ? 'Inscrições Abertas!' : 'Registrations Open!'}
                  </h3>

                  {project.dateRange && (
                    <p className="text-white/90 text-sm">
                      {project.dateRange}
                    </p>
                  )}
                </div>
              </div>
              <a
                href={project.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1a3a2e] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
              >
                {locale === 'pt' ? 'Inscrever-me Agora' : 'Sign Up Now'}

                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-12">
          {project.image && (
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8 border border-[#9cc5ad]/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {project.title}
              </h1>
              
              {project.subtitle && (
                <p className="text-[#9cc5ad] text-xl font-medium mb-4">
                  {project.subtitle}
                </p>
              )}
            </div>
            
            {project.dateRange && (
              <div className="flex items-center gap-2 bg-[#9cc5ad]/10 border border-[#9cc5ad]/30 px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-[#9cc5ad]" />
                <span className="text-[#9cc5ad] font-semibold">
                  {project.dateRange}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, children, ...props }) => (
                <h1 className="text-3xl font-bold text-white mb-6 mt-12 pb-3 border-b border-[#9cc5ad]/20" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ node, children, ...props }) => (
                <h2 className="text-2xl font-bold text-white mb-4 mt-10" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ node, children, ...props }) => (
                <h3 className="text-xl font-bold text-[#9cc5ad] mb-3 mt-6" {...props}>
                  {children}
                </h3>
              ),
              h4: ({ node, children, ...props }) => (
                <h4 className="text-lg font-semibold text-[#84B295] mb-2 mt-4" {...props}>
                  {children}
                </h4>
              ),
              p: ({ node, children, ...props }) => (
                <p className="text-gray-300 leading-relaxed mb-4" {...props}>
                  {children}
                </p>
              ),
              ul: ({ node, children, ...props }) => (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ node, children, ...props }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2 ml-4" {...props}>
                  {children}
                </ol>
              ),
              li: ({ node, children, ...props }) => (
                <li className="text-gray-300" {...props}>{children}</li>
              ),
              a: ({ node, href, children, ...props }) => (
                <a
                  href={href}
                  className="text-[#9cc5ad] hover:text-[#b8dbc4] underline transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ),
              strong: ({ node, children, ...props }) => (
                <strong className="text-white font-semibold" {...props}>
                  {children}
                </strong>
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-8 border-t border-[#9cc5ad]/20" {...props} />
              ),
              blockquote: ({ node, children, ...props }) => (
                <blockquote 
                  className="border-l-4 border-[#9cc5ad] pl-4 py-2 my-4 bg-[#9cc5ad]/5 italic text-gray-400" 
                  {...props}
                >
                  {children}
                </blockquote>
              ),
              img: ({ node, src, alt, ...props }) => (
                <div className="my-8 rounded-xl overflow-hidden border border-[#9cc5ad]/20">
                  <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-auto"
                    {...props}
                  />
                </div>
              ),
              // Custom styling for the registration banner in markdown
              div: ({ node, className, children, ...props }) => {
                if (className === 'registration-banner') {
                  return (
                    <div className="my-6 bg-gradient-to-r from-[#7ba591] to-[#9cc5ad] rounded-xl p-6 text-center" {...props}>
                      <div className="text-white text-xl font-bold">
                        {children}
                      </div>
                    </div>
                  )
                }
                if (className === 'cta-button') {
                  return (
                    <div className="my-8 text-center" {...props}>
                      <div className="inline-block">
                        {children}
                      </div>
                    </div>
                  )
                }
                return <div className={className} {...props}>{children}</div>
              },
            }}
          >
            {project.content}
          </ReactMarkdown>
        </article>

        {/* Structured sections (Thematic blocks, Schedule, Speakers, Apoios,
            Contact) — all editable in TinaCMS as forms, no raw HTML. */}
        <ProjectSections project={project} locale={locale} />
      </div>
    </main>
  )
}