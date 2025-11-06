'use client'

import ProfileCard from '@/app/reactbits/ProfileCard'

export default function TeamStructure() {
  const leadership = [
    {
      name: 'João Silva',
      role: 'Project Manager',
      bio: 'Responsável pela coordenação geral do projeto',
      image: '/images/team/joao.jpg',
      email: 'joao@espacoaocubo.pt',
      linkedin: 'https://linkedin.com/in/joaosilva',
    },
    {
      name: 'Maria Santos',
      role: 'Technical Lead',
      bio: 'Liderança técnica e arquitetura do sistema',
      image: '/images/team/maria.jpg',
      email: 'maria@espacoaocubo.pt',
      linkedin: 'https://linkedin.com/in/mariasantos',
    },
  ]

  const teamBySubsystem = {
    'OBDH': [
      { name: 'Pedro Costa', role: 'OBDH Lead', image: '/images/team/pedro.jpg' },
      { name: 'Ana Ferreira', role: 'Software Engineer', image: '/images/team/ana.jpg' },
    ],
    'Communications': [
      { name: 'Tiago Alves', role: 'COMMS Lead', image: '/images/team/tiago.jpg' },
    ],
    'Power': [
      { name: 'Rita Sousa', role: 'EPS Lead', image: '/images/team/rita.jpg' },
    ],
    'ADCS': [
      { name: 'Miguel Oliveira', role: 'ADCS Lead', image: '/images/team/miguel.jpg' },
    ],
  }

  return (
    <section className="py-20 lg:py-32 bg-[#1a3a2e]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A Nossa Equipa
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os estudantes que estão a tornar o TejoOne uma realidade
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#9cc5ad] text-center mb-8">Liderança</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leadership.map((member, index) => (
              <ProfileCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Subsystems */}
        {Object.entries(teamBySubsystem).map(([subsystem, members]) => (
          <div key={subsystem} className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-6">{subsystem}</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
