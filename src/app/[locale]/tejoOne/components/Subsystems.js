'use client'

import { useState } from 'react'
import { Cpu, Radio, Battery, Camera, Compass, Boxes, Thermometer, Code, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Subsystems() {
  const t = useTranslations('tejoone_page.subsystems')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const subsystemsConfig = [
    { icon: Cpu, key: 'obdh', image: '/images/subsystems/obdh.png' },
    { icon: Radio, key: 'comms', image: '/images/subsystems/comms.png' },
    { icon: Battery, key: 'eps', image: '/images/subsystems/eps.png' },
    { icon: Compass, key: 'adcs', image: '/images/subsystems/adcs.png' },
    { icon: Camera, key: 'payload', image: '/images/subsystems/payload.png' },
    { icon: Boxes, key: 'structure', image: '/images/subsystems/structure.png' },
    { icon: Thermometer, key: 'missionAnalysis', image: '/images/subsystems/mission.png' },
  ]

  const subsystems = subsystemsConfig.map(config => ({
    icon: config.icon,
    name: t(`items.${config.key}.name`),
    fullName: t(`items.${config.key}.fullName`),
    description: t(`items.${config.key}.description`),
    image: config.image,
    details: t(`items.${config.key}.details`),
    specs: t(`items.${config.key}.specs`),
  }))

  const nextSubsystem = () => {
    setCurrentIndex((prev) => (prev + 1) % subsystems.length)
  }

  const prevSubsystem = () => {
    setCurrentIndex((prev) => (prev - 1 + subsystems.length) % subsystems.length)
  }

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextSubsystem()
    }
    if (isRightSwipe) {
      prevSubsystem()
    }
  }

  const currentSubsystem = subsystems[currentIndex]
  const Icon = currentSubsystem.icon

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-[#0f2d2f] via-[#173A3C] to-[#0f2d2f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={prevSubsystem}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 bg-[#84B295]/20 hover:bg-[#84B295]/40 backdrop-blur-sm border border-[#84B295]/30 rounded-full p-3 lg:p-4 transition-all duration-300 group"
            aria-label="Previous subsystem"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-[#84B295] group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextSubsystem}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 bg-[#84B295]/20 hover:bg-[#84B295]/40 backdrop-blur-sm border border-[#84B295]/30 rounded-full p-3 lg:p-4 transition-all duration-300 group"
            aria-label="Next subsystem"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#84B295] group-hover:text-white transition-colors" />
          </button>

          {/* Main Card */}
          <div 
            className="bg-white/5 backdrop-blur-sm border border-[#84B295]/30 rounded-2xl lg:rounded-3xl overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[500px] bg-gradient-to-br from-[#588798]/20 to-[#173A3C] overflow-hidden flex items-center justify-center">
                <img
                  src={currentSubsystem.image}
                  alt={currentSubsystem.name}
                  className="absolute inset-0 w-full h-full object-cover lg:object-contain lg:p-8"
                />
                {/* Gradient Overlay - Hidden on desktop now as we want a clean view of the diagram */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173A3C]/60 to-transparent lg:hidden" />
              </div>

              {/* Right Side - Info */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="mb-4 lg:mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#84B295]/20 rounded-lg lg:hidden">
                        <Icon className="w-5 h-5 text-[#84B295]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {currentSubsystem.name}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-[#84B295] font-semibold">
                      {currentSubsystem.fullName}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      {currentSubsystem.description}
                    </p>
                    
                    {currentSubsystem.details && (
                      <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                        {currentSubsystem.details}
                      </p>
                    )}
                  </div>

                  {/* Specs/Technical Details */}
                  {currentSubsystem.specs && (
                    <div className="bg-white/5 border border-[#84B295]/20 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
                      <h4 className="text-xs sm:text-sm uppercase tracking-wider text-[#84B295] font-semibold mb-2 lg:mb-3">
                        {t('specsTitle')}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {currentSubsystem.specs}
                      </p>
                    </div>
                  )}
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-between pt-4 lg:pt-6 border-t border-[#84B295]/20">
                  <div className="flex gap-1.5 lg:gap-2">
                    {subsystems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-6 lg:w-8 bg-[#84B295]'
                            : 'w-1.5 lg:w-2 bg-[#84B295]/30 hover:bg-[#84B295]/50'
                        }`}
                        aria-label={`Go to ${subsystems[index].name}`}
                      />
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    <span className="text-[#84B295] font-semibold">{currentIndex + 1}</span>
                    {' / '}
                    {subsystems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Arrows - Only visible on mobile */}
          <div className="flex md:hidden justify-between mt-4 px-4">
            <button
              onClick={prevSubsystem}
              className="bg-[#84B295]/20 hover:bg-[#84B295]/40 backdrop-blur-sm border border-[#84B295]/30 rounded-full p-3 transition-all duration-300"
              aria-label="Previous subsystem"
            >
              <ChevronLeft className="w-5 h-5 text-[#84B295]" />
            </button>

            <button
              onClick={nextSubsystem}
              className="bg-[#84B295]/20 hover:bg-[#84B295]/40 backdrop-blur-sm border border-[#84B295]/30 rounded-full p-3 transition-all duration-300"
              aria-label="Next subsystem"
            >
              <ChevronRight className="w-5 h-5 text-[#84B295]" />
            </button>
          </div>

          {/* Subsystem Navigation Pills - Below card */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 lg:gap-3 mt-6 lg:mt-8">
            {subsystems.map((subsystem, index) => {
              const SubIcon = subsystem.icon
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg border transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#84B295]/20 border-[#84B295]/50 text-white'
                      : 'bg-white/5 border-[#84B295]/20 text-gray-400 hover:bg-white/10 hover:border-[#84B295]/40 hover:text-white'
                  }`}
                >
                  <SubIcon className="w-4 h-4" />
                  <span className="text-xs lg:text-sm font-semibold">{subsystem.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}