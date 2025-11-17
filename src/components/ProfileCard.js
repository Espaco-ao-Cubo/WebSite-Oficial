'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Function to get first and last name
function getShortName(fullName) {
  const names = fullName.trim().split(' ')
  if (names.length === 1) return names[0]
  return `${names[0]} ${names[names.length - 1]}`
}

export default function ProfileCard({ member, index, positionInRow }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const shortName = getShortName(member.name)
  // Use placeholder as default if no image is provided
  const imageSrc = member.image || '/images/team/profile_placeholder.jpg'

  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${positionInRow * 100}ms` }}
    >
      {/* Card with self-contained glow */}
      <div className="group relative h-full">
        {/* Glow effect that follows card dimensions exactly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9cc5ad] to-[#7ba591] rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 -z-10"></div>
        
        <div className="relative h-full bg-gradient-to-br from-[#1a3a2e] to-[#0a1f1a] rounded-2xl overflow-hidden border border-[#9cc5ad]/20 group-hover:border-[#9cc5ad]/50 transition-all duration-300 flex flex-col">
          <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
            <Image 
              src={imageSrc} 
              alt={member.name} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={index < 4}
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="p-5 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#9cc5ad] transition-colors duration-300">
              {shortName}
            </h3>
            {member.university && (
              <p className="text-[#9cc5ad]/70 text-sm mb-4 font-medium">
                {member.university}
              </p>
            )}

            {member.linkedin && (
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/btn relative flex items-center justify-center w-full bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 overflow-hidden mt-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></span>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}