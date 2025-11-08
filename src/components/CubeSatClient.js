// components/CubeSatClient.js
"use client"

import dynamic from "next/dynamic"

const CubeSatViewer = dynamic(() => import("./CubeSat"), {
  ssr: false,
})

export default function CubeSatClient() {
  return (
    <div className="w-300 h-300 md:w-300 md:h-300">
      <CubeSatViewer />
    </div>
  )
}
