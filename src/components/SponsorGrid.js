'use client'

import LogoLoop from '../reactbits/LogoLoop'

export default function SponsorGrid() {
  // Add your sponsor logos here
  const sponsors = [
    { src: '/images/logo.png', alt: 'Sponsor 1' },
    { src: '/images/logo.png', alt: 'Sponsor 2' },
    { src: '/images/logo.png', alt: 'Sponsor 3' },
    { src: '/images/logo.png', alt: 'Sponsor 4' },
    { src: '/images/logo.png', alt: 'Sponsor 5' },
    { src: '/images/logo.png', alt: 'Sponsor 6' },
  ]

  return (
    <section className="py-20 lg:py-5 bg-[#1a3a2e]">
        
        {/* Logo Loop Animation */}
        <LogoLoop logos={sponsors} speed={40} logoHeight={48} gap={40} pauseOnHover scaleOnHover className="py-8" />

        {/* Optional: Manual grid for smaller screens */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:hidden">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
    </section>
  )
}