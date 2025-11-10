import { getProjectBySlug, getAllProjects } from '@/utils/projects'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
          {locale === 'pt' ? 'Voltar aos Projetos' : 'Back to Projects'}
        </Link>

        {/* Header */}
        <div className="mb-12">
          {project.image && (
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          
          {project.date && (
            <p className="text-[#9cc5ad]/60 text-sm">
              {new Date(project.date).toLocaleDateString(locale === 'pt' ? 'pt-PT' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ node, children, ...props }) => (
                <h1 className="text-3xl font-bold text-white mb-4 mt-8" {...props}>{children}</h1>
              ),
              h2: ({ node, children, ...props }) => (
                <h2 className="text-2xl font-bold text-white mb-3 mt-6" {...props}>{children}</h2>
              ),
              h3: ({ node, children, ...props }) => (
                <h3 className="text-xl font-bold text-white mb-2 mt-4" {...props}>{children}</h3>
              ),
              p: ({ node, children, ...props }) => (
                <p className="text-gray-300 leading-relaxed mb-4" {...props}>{children}</p>
              ),
              ul: ({ node, children, ...props }) => (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props}>{children}</ul>
              ),
              ol: ({ node, children, ...props }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props}>{children}</ol>
              ),
              li: ({ node, children, ...props }) => (
                <li className="text-gray-300" {...props}>{children}</li>
              ),
              a: ({ node, href, children, ...props }) => (
                <a
                  href={href}
                  className="text-[#9cc5ad] hover:text-[#b8dbc4] underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ),
              strong: ({ node, children, ...props }) => (
                <strong className="text-white font-semibold" {...props}>{children}</strong>
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  )
}