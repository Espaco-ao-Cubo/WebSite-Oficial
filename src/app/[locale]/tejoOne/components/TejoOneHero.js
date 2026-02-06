'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowDown } from 'lucide-react'

// CubeSat Client Component (embedded)
function CubeSatClient() {
  return (
    <div 
      className="w-full h-full max-w-[500px] max-h-[500px] md:max-w-[700px] md:max-h-[700px] mx-auto"
      style={{
        position: 'relative',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'auto'
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/cubesat-render/cubesat.gif"
          alt="CubeSat rotating animation"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default function TejoOneHero() {
  const [isVisible, setIsVisible] = useState(false)
  const locale = useLocale()
  const t = useTranslations('tejoone_page.hero')

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const scrollToSpecs = () => {
    // Scroll to the next section (Timeline, MissionObjectives, or Subsystems)
    const section = document.querySelector('section:not(:first-child)')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#0a1f1a] to-[#173A3C] overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="stars opacity-40"></div>
        <div className="stars2 opacity-30"></div>
        <div className="stars3 opacity-20"></div>
      </div>

      {/* Large orbital ring - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-[#84B295]/10 rounded-full animate-spin-slow" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 min-h-screen flex items-center pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          
          {/* Left - Dramatic title */}
          <div 
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-2">
              <div className="text-[#84B295] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
                {t('badge')}
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                <span className="bg-gradient-to-b from-white via-[#84B295] to-[#588798] bg-clip-text text-transparent">
                  TEJO
                </span>
                <br />
                <span className="bg-gradient-to-b from-[#84B295] to-[#588798] bg-clip-text text-transparent">
                  ONE
                </span>
              </h1>
            </div>

            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#84B295] to-transparent" />

            <div className="space-y-3 sm:space-y-4">
              <p className="text-xl sm:text-2xl text-white font-light">
                {t('subtitle')}
              </p>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Key specs - inline */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#84B295]">
                  {t('specs.volume.value')}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {t('specs.volume.unit')}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#84B295]">
                  {t('specs.mass.value')}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {t('specs.mass.unit')}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#84B295]">
                  {t('specs.altitude.value')}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {t('specs.altitude.unit')}
                </div>
              </div>
            </div>

            <button
              onClick={scrollToSpecs}
              className="group flex items-center gap-3 text-[#84B295] hover:text-white transition-colors mt-6 sm:mt-8"
            >
              <span className="text-xs sm:text-sm uppercase tracking-wider">
                {t('cta')}
              </span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right - Large 3D model */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Dramatic glow */}
              <div className="absolute inset-0 bg-[#84B295]/20 blur-[100px] rounded-full" />
              
              {/* Model container */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <CubeSatClient />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        :global(.animate-spin-slow) {
          animation: rotate 120s linear infinite;
        }

        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 50px 50px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 90px 10px, white, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: zoom 30s infinite;
        }

        .stars2 {
          background-image: 
            radial-gradient(1px 1px at 40px 60px, white, transparent),
            radial-gradient(1px 1px at 110px 90px, white, transparent),
            radial-gradient(1px 1px at 80px 30px, white, transparent);
          background-size: 250px 250px;
          animation: zoom 40s infinite;
        }

        .stars3 {
          background-image: 
            radial-gradient(1px 1px at 70px 40px, white, transparent),
            radial-gradient(1px 1px at 150px 100px, white, transparent),
            radial-gradient(1px 1px at 30px 80px, white, transparent);
          background-size: 300px 300px;
          animation: zoom 50s infinite;
        }

        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}