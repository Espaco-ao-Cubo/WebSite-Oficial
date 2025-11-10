"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

useGLTF.preload("/cubesat-render/cubesat.glb")

function CubeSatMesh() {
  const { scene } = useGLTF("/cubesat-render/cubesat.glb")
  return <primitive object={scene} scale={1} />
}

export default function CubeSatViewer() {
  return (
    <div 
      className="w-full h-full" 
      style={{ 
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        position: 'relative'
      }}
    >
      <Canvas
        style={{ 
          width: "100%", 
          height: "100%",
          position: 'absolute',
          top: 0,
          left: 0
        }}
        camera={{ position: [2, 1.2, 2], fov: 35 }}
        shadows
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false
        }}
        frameloop="always"
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
        
        <Suspense fallback={null}>
          <CubeSatMesh />
        </Suspense>
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          enableDamping={false}
          makeDefault
        />
      </Canvas>
    </div>
  )
}