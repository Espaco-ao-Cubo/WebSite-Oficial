'use client'

import LogoLoop from '../app/reactbits/LogoLoop'

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
    </section>
  )
}