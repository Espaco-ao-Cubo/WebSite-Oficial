import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { getAllPosts } from '@/utils/mdToBlog'

export default function BlogPreview() {
  const t = useTranslations('blog')
  const locale = useLocale()
  
  // Get the last 3 posts for current locale
  const allPosts = getAllPosts(locale)
  const posts = allPosts.slice(0, 3) // Get first 3 (already sorted by date)

  const categoryColors = {
    Milestone: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    milestone: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    Event: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    event: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    News: 'bg-green-500/20 text-green-300 border-green-500/30',
    news: 'bg-green-500/20 text-green-300 border-green-500/30',
  }

  // If no posts, show placeholder
  if (posts.length === 0) {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-300">
              {locale === 'pt' 
                ? 'Nenhum post disponível ainda.' 
                : 'No posts available yet.'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl overflow-hidden hover:border-[#9cc5ad]/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Featured Image or Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#2d5a4a] to-[#1a3a2e] flex items-center justify-center overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl">📡</div>
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                {post.category && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
                    categoryColors[post.category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
                  }`}>
                    {post.category}
                  </span>
                )}

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#9cc5ad] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt || post.description}
                </p>

                {/* Date and Read More */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString(
                        locale === 'pt' ? 'pt-PT' : 'en-US'
                      )}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[#9cc5ad] font-semibold group-hover:gap-2 transition-all">
                    {t('readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href={`/${locale}/blog`}>
            <button className="bg-transparent border-2 border-[#9cc5ad] text-[#9cc5ad] hover:bg-[#9cc5ad] hover:text-[#1a3a2e] px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('viewAll')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}