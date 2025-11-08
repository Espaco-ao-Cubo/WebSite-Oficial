'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Tag, ArrowRight, Search, X } from 'lucide-react'

export default function BlogList({ posts, categories }) {
  const params = useParams()
  const locale = params.locale || 'pt'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filtrar por categoria
  const categoryFiltered = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  // Filtrar por pesquisa
  const filteredPosts = categoryFiltered.filter(post => {
    if (!searchQuery) return true
    
    const query = searchQuery.toLowerCase()
    const titleMatch = post.title?.toLowerCase().includes(query)
    const excerptMatch = post.excerpt?.toLowerCase().includes(query)
    const authorMatch = post.author?.toLowerCase().includes(query)
    const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(query))
    const categoryMatch = post.category?.toLowerCase().includes(query)
    
    return titleMatch || excerptMatch || authorMatch || tagsMatch || categoryMatch
  })

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9cc5ad] text-sm font-semibold tracking-wider uppercase bg-[#9cc5ad]/10 px-4 py-2 rounded-full border border-[#9cc5ad]/30">
              {locale === 'en' ? 'Our Blog' : 'Nosso Blog'}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-[#9cc5ad] to-white bg-clip-text text-transparent">
            {locale === 'en' ? 'News & Updates' : 'Notícias & Atualizações'}
          </h1>
          <p className="text-xl text-[#9cc5ad]/70 max-w-3xl mx-auto">
            {locale === 'en' 
              ? 'Follow our journey developing the first Portuguese student CubeSat' 
              : 'Acompanha a nossa jornada a desenvolver o primeiro CubeSat estudantil português'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9cc5ad]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={locale === 'en' ? 'Search posts...' : 'Pesquisar posts...'}
              className="w-full pl-12 pr-12 py-4 bg-white/5 border border-[#9cc5ad]/20 rounded-xl text-white placeholder-[#9cc5ad]/50 focus:outline-none focus:border-[#9cc5ad]/50 focus:bg-white/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#9cc5ad]/50 hover:text-[#9cc5ad] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Search Results Count */}
          {searchQuery && (
            <div className="mt-3 text-center text-sm text-[#9cc5ad]/70">
              {filteredPosts.length} {locale === 'en' ? 'post(s) found' : 'post(s) encontrado(s)'}
            </div>
          )}
        </div>

        {/* Categories Filter */}
        {categories.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#9cc5ad] text-[#0a1f1a]'
                  : 'bg-white/10 text-white hover:bg-[#9cc5ad]/20 border border-[#9cc5ad]/30'
              }`}
            >
              {locale === 'en' ? 'All' : 'Todos'}
            </button>
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#9cc5ad] text-[#0a1f1a]'
                    : 'bg-white/10 text-white hover:bg-[#9cc5ad]/20 border border-[#9cc5ad]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#9cc5ad]/20 hover:border-[#9cc5ad]/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative h-48 bg-[#1a3a2e] overflow-hidden">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#9cc5ad]/30">
                    <Tag className="w-16 h-16" />
                  </div>
                )}
                
                {/* Category Badge */}
                {post.category && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#9cc5ad] text-[#0a1f1a] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-[#9cc5ad]/60 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#9cc5ad] transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[#9cc5ad]/10 text-[#9cc5ad] border border-[#9cc5ad]/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More */}
                <Link 
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#9cc5ad] hover:text-white font-semibold group/link"
                >
                  {locale === 'en' ? 'Read more' : 'Ler mais'}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            {searchQuery ? (
              <>
                <Search className="w-16 h-16 text-[#9cc5ad]/30 mx-auto mb-4" />
                <p className="text-[#9cc5ad]/60 text-xl mb-4">
                  {locale === 'en' 
                    ? `No posts found for "${searchQuery}"` 
                    : `Nenhum post encontrado para "${searchQuery}"`}
                </p>
                <button
                  onClick={clearSearch}
                  className="text-[#9cc5ad] hover:text-white underline"
                >
                  {locale === 'en' ? 'Clear search' : 'Limpar pesquisa'}
                </button>
              </>
            ) : (
              <p className="text-[#9cc5ad]/60 text-xl">
                {locale === 'en' ? 'No posts found.' : 'Nenhum post encontrado.'}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}