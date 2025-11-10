"use client"

import dynamic from "next/dynamic"

const CubeSatViewer = dynamic(() => import("./CubeSat"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#9cc5ad] border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function CubeSatClient() {
  return (
    <div 
      className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
      style={{
        position: 'relative',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'auto'
      }}
    >
      <CubeSatViewer />
    </div>
  )
}