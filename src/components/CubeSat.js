"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

useGLTF.preload("/cubesat.glb")

function CubeSatMesh() {
  const { scene } = useGLTF("/cubesat.glb")
  return <primitive object={scene} scale={1} />
}

export default function CubeSatViewer() {
  return (
    <div className="w-full h-full" style={{ transform: 'translateZ(0)' }}>
      <Canvas
        style={{ 
          width: "100%", 
          height: "100%",
          position: 'relative'
        }}
        camera={{ position: [2.5, 1.6, 2.5], fov: 40 }}
        shadows
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          // Prevenir re-renders desnecessários
          preserveDrawingBuffer: false
        }}
        // Desativar eventos que possam causar re-renders
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
          // Importante: desabilitar damping que pode causar jitter
          enableDamping={false}
        />
      </Canvas>
    </div>
  )
}