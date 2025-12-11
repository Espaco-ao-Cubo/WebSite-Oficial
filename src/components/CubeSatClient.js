"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import Image from "next/image"

const CubeSatViewer = dynamic(() => import("./CubeSat"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#9cc5ad] border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function CubeSatClient() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div 
      className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
      style={{
        position: 'relative',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'auto'
      }}
    >
      {true ? ( //isMobile ? ( -> For now always show gif on all devices
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/cubesat-render/cubesat.gif"
            alt="CubeSat rotating animation"
            width={1920}
            height={1080}
            className="w-full h-full object-contain"
            priority
            unoptimized
          />
        </div>
      ) : (
        <CubeSatViewer />
      )}
    </div>
  )
}