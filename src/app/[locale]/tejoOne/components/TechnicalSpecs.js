'use client'

import { useTranslations } from 'next-intl'
import { Ruler, Weight, Zap, Radio, Thermometer, Gauge } from 'lucide-react'

export default function TechnicalSpecs() {
  const t = useTranslations('tejoone_page.technicalSpecs')

  const specs = [
    {
      category: t('categories.dimensions.title'),
      icon: Ruler,
      items: [
        { 
          label: t('categories.dimensions.items.formFactor.label'), 
          value: t('categories.dimensions.items.formFactor.value') 
        },
        { 
          label: t('categories.dimensions.items.size.label'), 
          value: t('categories.dimensions.items.size.value') 
        },
        { 
          label: t('categories.dimensions.items.mass.label'), 
          value: t('categories.dimensions.items.mass.value') 
        },
        { 
          label: t('categories.dimensions.items.volume.label'), 
          value: t('categories.dimensions.items.volume.value') 
        },
      ]
    },
    {
      category: t('categories.power.title'),
      icon: Zap,
      items: [
        { 
          label: t('categories.power.items.solarPanels.label'), 
          value: t('categories.power.items.solarPanels.value') 
        },
        { 
          label: t('categories.power.items.avgPower.label'), 
          value: t('categories.power.items.avgPower.value') 
        },
        { 
          label: t('categories.power.items.battery.label'), 
          value: t('categories.power.items.battery.value') 
        },
        { 
          label: t('categories.power.items.voltage.label'), 
          value: t('categories.power.items.voltage.value') 
        },
      ]
    },
    {
      category: t('categories.communications.title'),
      icon: Radio,
      items: [
        { 
          label: t('categories.communications.items.band.label'), 
          value: t('categories.communications.items.band.value') 
        },
        { 
          label: t('categories.communications.items.txFreq.label'), 
          value: t('categories.communications.items.txFreq.value') 
        },
        { 
          label: t('categories.communications.items.rxFreq.label'), 
          value: t('categories.communications.items.rxFreq.value') 
        },
        { 
          label: t('categories.communications.items.dataRate.label'), 
          value: t('categories.communications.items.dataRate.value') 
        },
      ]
    },
    {
      category: t('categories.orbit.title'),
      icon: Gauge,
      items: [
        { 
          label: t('categories.orbit.items.altitude.label'), 
          value: t('categories.orbit.items.altitude.value') 
        },
        { 
          label: t('categories.orbit.items.inclination.label'), 
          value: t('categories.orbit.items.inclination.value') 
        },
        { 
          label: t('categories.orbit.items.type.label'), 
          value: t('categories.orbit.items.type.value') 
        },
        { 
          label: t('categories.orbit.items.period.label'), 
          value: t('categories.orbit.items.period.value') 
        },
      ]
    },
    {
      category: t('categories.thermal.title'),
      icon: Thermometer,
      items: [
        { 
          label: t('categories.thermal.items.operating.label'), 
          value: t('categories.thermal.items.operating.value') 
        },
        { 
          label: t('categories.thermal.items.survival.label'), 
          value: t('categories.thermal.items.survival.value') 
        },
        { 
          label: t('categories.thermal.items.control.label'), 
          value: t('categories.thermal.items.control.value') 
        },
      ]
    },
    {
      category: t('categories.payload.title'),
      icon: Weight,
      items: [
        { 
          label: t('categories.payload.items.type.label'), 
          value: t('categories.payload.items.type.value') 
        },
        { 
          label: t('categories.payload.items.resolution.label'), 
          value: t('categories.payload.items.resolution.value') 
        },
        { 
          label: t('categories.payload.items.fov.label'), 
          value: t('categories.payload.items.fov.value') 
        },
        { 
          label: t('categories.payload.items.storage.label'), 
          value: t('categories.payload.items.storage.value') 
        },
      ]
    }
  ]

  return (
    <section id="specifications" className="py-20 lg:py-32 bg-gradient-to-b from-[#173A3C] to-[#0f2d2f]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-[#84B295]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#84B295]/40 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#588798] to-[#84B295] rounded-lg">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{spec.category}</h3>
              </div>

              <div className="space-y-4">
                {spec.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#84B295]/10 last:border-0">
                    <span className="text-sm text-gray-400">{item.label}</span>
                    <span className="text-sm font-semibold text-[#84B295]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}