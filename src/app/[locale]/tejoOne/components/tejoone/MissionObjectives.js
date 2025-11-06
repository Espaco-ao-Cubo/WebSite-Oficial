'use client'

import { AlertTriangle, Radar, Satellite, Target } from 'lucide-react'

export default function DebrisThreat() {
  const stats = [
    { label: 'Debris pieces', value: '100M+' },
    { label: 'Tracked objects', value: '28,000' },
    { label: 'Average speed', value: '7 km/s' },
    { label: 'Our detection target', value: '<5 cm' },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0b1d18] via-[#133229] to-[#1a3a2e] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#9cc5ad]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#9cc5ad]/30 mb-6">
            <span className="text-[#9cc5ad] text-sm md:text-base font-medium uppercase tracking-wider">
              Orbital Awareness
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Hidden Threat in Earth Orbit
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Earth’s orbit is crowded — with over{' '}
            <span className="text-[#9cc5ad] font-semibold">100 million</span>{' '}
            pieces of debris traveling at extreme speeds. These fragments, often
            smaller than a marble, can cause catastrophic damage to active satellites.
          </p>
        </div>

        {/* Description block */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-400 leading-relaxed">
            While most detection systems only identify debris larger than{' '}
            <span className="text-[#9cc5ad]">3–5 cm</span>,{' '}
            <span className="text-white font-semibold">TejoOne</span> aims to push this
            boundary by using a compact, affordable platform.  
            <br className="hidden md:block" />
            Our mission: to help build a public debris catalog and make orbit cleaner and safer.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#9cc5ad]/40 transition-all duration-500"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#9cc5ad] mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
