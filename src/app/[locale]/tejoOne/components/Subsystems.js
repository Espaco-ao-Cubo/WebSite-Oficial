'use client'

import { useState } from 'react'
import { Cpu, Radio, Battery, Camera, Compass, Boxes, Thermometer, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Subsystems() {
  const t = useTranslations('tejoone_page.subsystems')
  const [currentIndex, setCurrentIndex] = useState(0)

  const subsystemsConfig = [
    { icon: Cpu, key: 'obdh', image: '/images/subsystems/obdh.png' },
    { icon: Radio, key: 'comms', image: '/images/subsystems/obdh.png' },
    { icon: Battery, key: 'eps', image: '/images/subsystems/obdh.png' },
    { icon: Compass, key: 'adcs', image: '/images/subsystems/obdh.png' },
    { icon: Camera, key: 'payload', image: '/images/subsystems/obdh.png' },
    { icon: Boxes, key: 'structure', image: '/images/subsystems/obdh.png' },
    { icon: Thermometer, key: 'missionAnalysis', image: '/images/subsystems/obdh.png' },
  ]

  const subsystems = subsystemsConfig.map(config => ({
    icon: config.icon,
    name: t(`items.${config.key}.name`),
    fullName: t(`items.${config.key}.fullName`),
    description: t(`items.${config.key}.description`),
    image: config.image,
    details: t(`items.${config.key}.details`, { defaultValue: '' }),
    specs: t(`items.${config.key}.specs`, { defaultValue: '' }),
  }))

  const nextSubsystem = () => {
    setCurrentIndex((prev) => (prev + 1) % subsystems.length)
  }

  const prevSubsystem = () => {
    setCurrentIndex((prev) => (prev - 1 + subsystems.length) % subsystems.length)
  }

  const currentSubsystem = subsystems[currentIndex]
  const Icon = currentSubsystem.icon

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0f2d2f] via-[#173A3C] to-[#0f2d2f]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSubsystem}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 bg-[#84B295]/20 hover:bg-[#84B295]/40 backdrop-blur-sm border border-[#84B295]/30 rounded-full p-4 transition-all duration-300 group"
            aria-label="Previous subsystem"
          >
            <ChevronLeft className="w-6 h-6 text-[#84B295] group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextSubsystem}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 bg-[#84B295]/20 hover:bg-[#84B295]/40 backdrop-blur-sm border border-[#84B295]/30 rounded-full p-4 transition-all duration-300 group"
            aria-label="Next subsystem"
          >
            <ChevronRight className="w-6 h-6 text-[#84B295] group-hover:text-white transition-colors" />
          </button>

          {/* Main Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#84B295]/30 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Image */}
              <div className="relative h-[400px] lg:h-[600px] bg-gradient-to-br from-[#588798]/20 to-[#173A3C]">
                {/* Placeholder para a imagem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {
                  <Image
                    src={currentSubsystem.image}
                    alt={currentSubsystem.name}
                    fill
                    className="object-cover"
                  />
                  }
                </div>
              </div>

              {/* Right Side - Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white mb-2">
                      {currentSubsystem.name}
                    </h3>
                    <p className="text-lg text-[#84B295] font-semibold">
                      {currentSubsystem.fullName}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {currentSubsystem.description}
                    </p>
                    
                    {currentSubsystem.details && (
                      <p className="text-gray-400 leading-relaxed">
                        {currentSubsystem.details}
                      </p>
                    )}
                  </div>

                  {/* Specs/Technical Details */}
                  {currentSubsystem.specs && (
                    <div className="bg-white/5 border border-[#84B295]/20 rounded-xl p-6 mb-8">
                      <h4 className="text-sm uppercase tracking-wider text-[#84B295] font-semibold mb-3">
                        {t('specsTitle', { defaultValue: 'Especificações Técnicas' })}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {currentSubsystem.specs}
                      </p>
                    </div>
                  )}
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-between pt-6 border-t border-[#84B295]/20">
                  <div className="flex gap-2">
                    {subsystems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-8 bg-[#84B295]'
                            : 'w-2 bg-[#84B295]/30 hover:bg-[#84B295]/50'
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

          {/* Subsystem Navigation Pills - Below card */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {subsystems.map((subsystem, index) => {
              const SubIcon = subsystem.icon
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#84B295]/20 border-[#84B295]/50 text-white'
                      : 'bg-white/5 border-[#84B295]/20 text-gray-400 hover:bg-white/10 hover:border-[#84B295]/40 hover:text-white'
                  }`}
                >
                  <SubIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{subsystem.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}