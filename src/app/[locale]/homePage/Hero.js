'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, Satellite, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import CubeSatClient from "@/components/CubeSatClient"


export default function Hero() {
  const t = useTranslations('hero')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a] overflow-hidden pt-20">
      {/* Animated background stars */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Floating satellite decoration */}
      <div 
        className="absolute top-32 right-20 opacity-10 pointer-events-none hidden xl:block transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        <Satellite className="w-40 h-40 text-[#9cc5ad] animate-float-slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 xl:px-24 py-12 flex items-center min-h-[calc(100vh-5rem)]">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center w-full max-w-7xl mx-auto">
          
          {/* Left side - Text content */}
          <div 
            className={`text-white space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-block bg-[#9cc5ad]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#9cc5ad]/30">
              <span className="text-[#9cc5ad] text-sm md:text-base font-medium">
                {t('badge')}
              </span>
            </div>
            
            {/* Main title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
              <span className="bg-gradient-to-r from-white via-[#9cc5ad] to-white bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#9cc5ad] font-light leading-relaxed">
              {t('subtitle')}
            </p>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/tejoOne" className="inline-block">
                <button className="w-full sm:w-auto group relative bg-[#7ba591] hover:bg-[#9cc5ad] text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9cc5ad]/50 flex items-center justify-center gap-3">
                  <span>{t('btnDiscover')}</span>
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/associacao" className="inline-block">
                <button className="w-full sm:w-auto relative bg-transparent border-2 border-[#9cc5ad] text-[#9cc5ad] hover:bg-[#9cc5ad] hover:text-[#1a3a2e] px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105">
                  {t('btnAbout')}
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-bold text-[#9cc5ad] mb-2 group-hover:scale-110 transition-transform">
                  1U
                </div>
                <div className="text-sm md:text-base text-gray-400">{t('statCubesat')}</div>
              </div>
              
              <div className="text-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-bold text-[#9cc5ad] mb-2 group-hover:scale-110 transition-transform">
                  50+
                </div>
                <div className="text-sm md:text-base text-gray-400">{t('statStudents')}</div>
              </div>
              
              <div className="text-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-bold text-[#9cc5ad] mb-2 group-hover:scale-110 transition-transform">
                  2025
                </div>
                <div className="text-sm md:text-base text-gray-400">{t('statLaunch')}</div>
              </div>
            </div>
          </div>

          {/* Right side - Satellite visualization */}
          <div 
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Orbital rings */}
              <div className="absolute inset-0 border-2 border-[#9cc5ad]/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-8 border-2 border-[#7ba591]/30 rounded-full animate-spin-reverse" />
              
              {/* Center satellite - OTIMIZADO PARA EVITAR FLICKER */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative animate-float"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    perspective: 1000
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#9cc5ad]/30 blur-3xl rounded-full animate-pulse" />
                  
                  {/* Satellite cube - com estabilização */}
                  <div 
                    className="inline-flex items-center gap-4"
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <CubeSatClient />
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-[#9cc5ad] rounded-full animate-pulse" />
              <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#7ba591] rounded-full animate-pulse-delay" />
              <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#9cc5ad] rounded-full animate-pulse-delay-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#9cc5ad] hover:text-white transition-colors group z-20"
        aria-label="Scroll para baixo"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-current rounded-full" />
          </div>
        </div>
      </button>
    </div>
  )
}