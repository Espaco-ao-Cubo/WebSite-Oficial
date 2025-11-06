'use client'

import { useState, useEffect } from 'react'
import ProfileCard from '@/app/[locale]/components/ProfileCard'
import teamData from '@/data/teamMembers.json'

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Contador global para o index dos cards
  let globalCardIndex = 0

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-[#0a1f1a] via-[#1a3a2e] to-[#2d5a4a]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-[#9cc5ad] text-sm font-semibold tracking-wider uppercase bg-[#9cc5ad]/10 px-4 py-2 rounded-full border border-[#9cc5ad]/30">
              A Nossa Equipa
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white via-[#9cc5ad] to-white bg-clip-text text-transparent">
            Conhece a Equipa
          </h2>
        </div>

        {/* Teams */}
        {teamData.teams.map((team, teamIndex) => (
          <div key={team.id}>
            <div 
              className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${teamIndex * 200}ms` }}
            >
              {/* Team Header */}
              <div className="mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {team.name}
                </h3>
                <p className="text-[#9cc5ad]/70 text-lg">
                  {team.description}
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-[#9cc5ad] to-transparent mt-4"></div>
              </div>

              {/* Departments */}
              {team.departments.map((department) => (
                <div key={department.id} className="mb-16">
                  {/* Department Header */}
                  <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-[#9cc5ad] mb-2">
                      {department.name}
                    </h4>
                  </div>

                  {/* Members Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {department.members.map((member, memberIndex) => {
                      const currentIndex = globalCardIndex++
                      return (
                        <ProfileCard 
                          key={currentIndex} 
                          member={member} 
                          index={currentIndex}
                          positionInRow={memberIndex}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Divisor entre equipas (exceto na última) */}
            {teamIndex < teamData.teams.length - 1 && (
              <div className="mb-32 flex items-center justify-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9cc5ad]/30 to-transparent"></div>
                <div className="mx-8">
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}