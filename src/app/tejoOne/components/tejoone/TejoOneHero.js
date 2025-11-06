'use client'

import { useEffect, useState } from 'react'
import { Satellite } from 'lucide-react'

export default function TejoOneHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in after mount
    const timeout = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#030b0a] via-[#0b1d18] to-[#112e26] overflow-hidden pt-20">
      {/* Background stars */}
      <div className="absolute inset-0 opacity-10">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      {/* Orbit lines */}
      <div className="absolute w-[1200px] h-[1200px] rounded-full border border-[#3d7a66]/20 animate-spin-slow" />
      <div className="absolute w-[900px] h-[900px] rounded-full border border-[#3d7a66]/10 animate-spin-reverse" />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center text-white px-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#9cc5ad] to-[#5da284] bg-clip-text text-transparent">
            TejoOne
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-16">
          O primeiro CubeSat português — um marco na engenharia espacial estudantil.
        </p>

        {/* Satellite render */}
        <div
          className={`relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 border border-[#9cc5ad]/20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-8 border border-[#9cc5ad]/10 rounded-full animate-spin-reverse"></div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-[#9cc5ad]/20 blur-3xl rounded-full" />
            <div className="relative w-64 h-64 flex items-center justify-center rounded-xl border border-[#9cc5ad]/40 bg-gradient-to-br from-[#1d3e33] to-[#274b3d] shadow-2xl">
              <Satellite className="w-28 h-28 text-[#9cc5ad]" />
            </div>
          </div>
        </div>

        {/* Mission tagline */}
        <p
          className={`mt-16 text-sm uppercase tracking-widest text-[#9cc5ad]/80 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Missão de Demonstração Tecnológica
        </p>
      </div>
    </section>
  )
}
