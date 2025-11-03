'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPreview() {
  // Mock blog posts - replace with real data later
  const posts = [
    {
      id: 1,
      title: 'Primeiro teste de comunicações bem sucedido',
      excerpt: 'A equipa do TejoOne completou com sucesso o primeiro teste do subsistema de comunicações...',
      category: 'Milestone',
      date: '2024-10-15',
      image: '/images/blog1.jpg',
    },
    {
      id: 2,
      title: 'Workshop no Agrupamento de Escolas de Queluz',
      excerpt: 'Mais de 100 alunos participaram no nosso workshop sobre satélites e exploração espacial...',
      category: 'Event',
      date: '2024-09-28',
      image: '/images/blog2.jpg',
    },
    {
      id: 3,
      title: 'Novo patrocinador junta-se ao projeto',
      excerpt: 'Temos o prazer de anunciar que a empresa XYZ se juntou como patrocinador oficial...',
      category: 'News',
      date: '2024-09-10',
      image: '/images/blog3.jpg',
    },
  ]

  const categoryColors = {
    Milestone: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    Event: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    News: 'bg-green-500/20 text-green-300 border-green-500/30',
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Últimas Notícias
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Acompanhe o progresso do TejoOne e as nossas atividades
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl overflow-hidden hover:border-[#9cc5ad]/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#2d5a4a] to-[#1a3a2e] flex items-center justify-center overflow-hidden">
                <div className="text-6xl">📡</div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${categoryColors[post.category]}`}>
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#9cc5ad] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date and Read More */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('pt-PT')}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[#9cc5ad] font-semibold group-hover:gap-2 transition-all">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/blog">
            <button className="bg-transparent border-2 border-[#9cc5ad] text-[#9cc5ad] hover:bg-[#9cc5ad] hover:text-[#1a3a2e] px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Ver Todos os Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}