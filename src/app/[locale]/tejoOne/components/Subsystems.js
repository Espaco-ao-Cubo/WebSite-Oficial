'use client'

import { Cpu, Radio, Battery, Camera, Compass, Boxes, Thermometer } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Subsystems() {
  const t = useTranslations('tejoone_page.subsystems')

  const subsystemsConfig = [
    { icon: Cpu, key: 'obdh' },
    { icon: Radio, key: 'comms' },
    { icon: Battery, key: 'eps' },
    { icon: Compass, key: 'adcs' },
    { icon: Camera, key: 'payload' },
    { icon: Boxes, key: 'structure' },
    { icon: Thermometer, key: 'thermal' },
  ]

  const subsystems = subsystemsConfig.map(config => ({
    icon: config.icon,
    name: t(`items.${config.key}.name`),
    fullName: t(`items.${config.key}.fullName`),
    description: t(`items.${config.key}.description`),
  }))

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsystems.map((subsystem, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-xl p-6 hover:bg-white/10 hover:border-[#9cc5ad]/40 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#7ba591] to-[#9cc5ad] rounded-lg group-hover:scale-110 transition-transform">
                  <subsystem.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#9cc5ad] transition-colors">
                    {subsystem.name}
                  </h3>
                  <p className="text-sm text-[#9cc5ad]">{subsystem.fullName}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {subsystem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}