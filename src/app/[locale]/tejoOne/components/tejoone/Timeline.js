'use client'

import { CheckCircle, Circle } from 'lucide-react'

export default function Timeline() {
  const phases = [
    {
      title: 'Fase de Conceito',
      date: '2023',
      description: 'Definição da missão, requisitos e arquitetura do satélite',
      completed: true,
    },
    {
      title: 'Design Preliminar',
      date: '2024 Q1-Q2',
      description: 'Desenvolvimento dos subsistemas e seleção de componentes',
      completed: true,
    },
    {
      title: 'Design Crítico',
      date: '2024 Q3-Q4',
      description: 'Finalização do design e preparação para fabricação',
      completed: true,
    },
    {
      title: 'Integração e Testes',
      date: '2025 Q1-Q2',
      description: 'Montagem do satélite e testes ambientais',
      completed: false,
    },
    {
      title: 'Campanha de Lançamento',
      date: '2025 Q3',
      description: 'Preparação final e integração no lançador',
      completed: false,
    },
    {
      title: 'Lançamento',
      date: '2025 Q4',
      description: 'Lançamento para órbita terrestre baixa',
      completed: false,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#1a3a2e]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Timeline do Projeto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acompanhe as fases de desenvolvimento do TejoOne desde o conceito até ao lançamento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#9cc5ad]/30" />

            {phases.map((phase, index) => (
              <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  {phase.completed ? (
                    <CheckCircle className="w-16 h-16 text-[#9cc5ad] bg-[#1a3a2e] rounded-full" />
                  ) : (
                    <Circle className="w-16 h-16 text-[#9cc5ad]/50 bg-[#1a3a2e] rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    phase.completed
                      ? 'bg-[#9cc5ad]/10 border-[#9cc5ad]/30'
                      : 'bg-white/5 border-[#9cc5ad]/20'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      <span className="text-[#9cc5ad] font-semibold text-sm">{phase.date}</span>
                    </div>
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}