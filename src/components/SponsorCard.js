'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function SponsorCard({ sponsor, index, tier = 'apoio' }) {
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

  // Configurações por tier
  const tierConfig = {
    parceiro: {
      height: 'h-[180px]',
      logoHeight: 'h-28'
    },
    patrocinio: {
      height: 'h-[180px]',
      logoHeight: 'h-28'
    },
    apoio: {
      height: 'h-[140px]',
      logoHeight: 'h-20'
    }
  }

  const config = tierConfig[tier]

  return (
    <a
      ref={cardRef}
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white rounded-lg ${config.height} p-8 transition-all duration-300 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${(index % 6) * 60}ms`
      }}
    >
      <div className={`relative w-full h-full ${config.logoHeight} mx-auto flex items-center justify-center`}>
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </a>
  )
}