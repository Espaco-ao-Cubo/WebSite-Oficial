import { getPostData, getRelatedPosts, getAllPostSlugs } from '@/utils/mdToBlog'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import './blog.css'

export async function generateStaticParams() {
  const locales = ['pt', 'en']
  const params = []

  for (const locale of locales) {
    const slugs = getAllPostSlugs(locale)
    slugs.forEach(({ slug }) => {
      params.push({ locale, slug })
    })
  }

  return params
}

export default async function PostPage({ params }) {
  const { locale, slug } = await params
  const post = await getPostData(slug, locale)
  
  if (!post) {
    // Redireciona para a listagem do blog no idioma correto
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {locale === 'en' ? 'Post not found' : 'Post não encontrado'}
          </h1>
          <p className="text-[#9cc5ad]/70 mb-8 text-lg">
            {locale === 'en' 
              ? 'This post is not available in English. Browse our English posts below.' 
              : 'Este post não está disponível em português. Veja os posts em português abaixo.'}
          </p>
          <Link 
            href={`/${locale}/blog`} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9cc5ad] text-[#0a1f1a] rounded-lg font-semibold hover:bg-[#7ba591] transition-colors"
          >
            {locale === 'en' ? 'View all posts' : 'Ver todos os posts'}
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(slug, locale)

  // Calcula tempo de leitura
  const wordCount = post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-[#9cc5ad] hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {locale === 'en' ? 'Back to blog' : 'Voltar ao blog'}
        </Link>

        {/* Featured Image */}
        {post.image && (
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Category Badge */}
        {post.category && (
          <div className="mb-4">
            <span className="inline-block bg-[#9cc5ad] text-[#0a1f1a] px-4 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-[#9cc5ad]/70 mb-8 pb-8 border-b border-[#9cc5ad]/20">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(post.date).toLocaleDateString(locale, { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <div>
              <span className="text-white font-semibold">{post.author}</span>
              {post.authorRole && (
                <span className="text-sm"> · {post.authorRole}</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>
              {readingTime} min {locale === 'en' ? 'read' : 'de leitura'}
            </span>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-[#9cc5ad]/10 text-[#9cc5ad] border border-[#9cc5ad]/30 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Content with custom styling from blog.css */}
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Author Box */}
        <div className="mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#9cc5ad]/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#9cc5ad]/20 flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-[#9cc5ad]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{post.author}</h3>
              {post.authorRole && (
                <p className="text-[#9cc5ad]/70">{post.authorRole}</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              {locale === 'en' ? 'Related Posts' : 'Posts Relacionados'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.slug}
                  href={`/${locale}/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#9cc5ad]/20 hover:border-[#9cc5ad]/50 transition-all h-full">
                    {relatedPost.image && (
                      <div className="relative h-32 bg-[#1a3a2e] overflow-hidden">
                        <Image 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-[#9cc5ad] transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[#9cc5ad]/60">
                        {new Date(relatedPost.date).toLocaleDateString(locale)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}