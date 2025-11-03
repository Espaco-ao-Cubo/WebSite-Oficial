'use client'

import ProfileCard from '../../reactbits/ProfileCard'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'João Silva',
      role: 'Project Lead',
      bio: 'Engenheiro Aeroespacial com paixão por satélites',
      image: '/images/team/sherek.png', // Add your image
      email: 'joao@espacoaocubo.pt',
      linkedin: 'https://linkedin.com/in/joaosilva',
      github: 'https://github.com/joaosilva',
    },
    {
      name: 'Maria Santos',
      role: 'Communications Subsystem',
      bio: 'Especialista em sistemas de comunicação espacial',
      image: '/images/team/sherek.png',
      email: 'maria@espacoaocubo.pt',
      linkedin: 'https://linkedin.com/in/mariasantos',
    },
    {
      name: 'Pedro Costa',
      role: 'Power Systems',
      bio: 'Responsável pelos sistemas de energia e baterias',
      image: '/images/team/sherek.png',
      email: 'pedro@espacoaocubo.pt',
      linkedin: 'https://linkedin.com/in/pedrocosta',
      github: 'https://github.com/pedrocosta',
    },
    {
      name: 'Ana Rodrigues',
      role: 'ADCS Engineer',
      bio: 'Engenheira de controlo de atitude e órbita',
      image: '/images/team/sherek.png',
      email: 'ana@espacoaocubo.pt',
      linkedin: 'https://linkedin.com/in/anarodrigues',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1a3a2e] to-[#0a1f1a]">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A Nossa Equipa
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça os estudantes e investigadores que estão a tornar o TejoOne uma realidade
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/images/team/sherek.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
        </div>
      </div>
    </section>
  )
}