'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Users, ArrowRight } from 'lucide-react'

export default function MeetTheTeam() {
  // Usamos a chave 'association' para buscar a tradução da equipa e do botão
  const t = useTranslations('association')

  // Detecta o locale para construir o link corretamente
  const locale = t('badge') === 'About Us' ? 'en' : 'pt' 

  return (
    <section className="py-20 bg-gradient-to-t from-[#0f2d2f] to-[#173A3C]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <Users className="w-16 h-16 text-[#9cc5ad] mx-auto mb-4" />

        {/* Título: Usamos o título da equipa da secção 'association' */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('teamTitle')}
        </h2>
        
        {/* Subtítulo/Descrição */}
        <p className="text-xl text-[#9cc5ad]/80 mb-8">
          {t('subtitle')}
        </p>

        {/* Botão CTA para a página da Associação/Equipa */}
        <Link 
          href={`/${locale}/associacao`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#9cc5ad] text-[#0a1f1a] font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#84B295] shadow-lg shadow-[#9cc5ad]/40"
        >
          <span>{t('goToProject', { defaultValue: 'Conhecer a Equipa' })}</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}