'use client'

import { Cpu, Radio, Battery, Camera, Compass, Boxes, Thermometer } from 'lucide-react'

export default function Subsystems() {
  const subsystems = [
    {
      icon: Cpu,
      name: 'OBDH',
      fullName: 'On-Board Data Handling',
      description: 'Computador de bordo responsável pelo processamento de dados e controlo geral do satélite.',
    },
    {
      icon: Radio,
      name: 'COMMS',
      fullName: 'Communications',
      description: 'Sistema de comunicações por rádio para envio de telemetria e receção de comandos.',
    },
    {
      icon: Battery,
      name: 'EPS',
      fullName: 'Electrical Power System',
      description: 'Sistema de energia com painéis solares e baterias para alimentação do satélite.',
    },
    {
      icon: Compass,
      name: 'ADCS',
      fullName: 'Attitude Determination and Control',
      description: 'Sistema de determinação e controlo de atitude para orientação do satélite.',
    },
    {
      icon: Camera,
      name: 'Payload',
      fullName: 'Câmara',
      description: 'Câmara para captura de imagens da Terra e do espaço.',
    },
    {
      icon: Boxes,
      name: 'Estrutura',
      fullName: 'Structure',
      description: 'Estrutura mecânica 1U compatível com o padrão CubeSat.',
    },
    {
      icon: Thermometer,
      name: 'Térmica',
      fullName: 'Thermal Control',
      description: 'Sistema de controlo térmico para manter a temperatura operacional.',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Subsistemas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O TejoOne é composto por diversos subsistemas que trabalham em conjunto 
            para garantir o sucesso da missão
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