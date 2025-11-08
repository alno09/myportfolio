import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import React, { useRef, useEffect } from 'react'
import { DeskSetup } from './Gaming_setup'
import * as THREE from 'three'

const CameraAnimation = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const controlsRef = useRef()
  const hasAnimated = useRef(false)

  useFrame((state) => {
    if (!hasAnimated.current && controlsRef.current) {
      const camera = state.camera
      const targetPosition = new THREE.Vector3(0, 0, 15)
      const startPosition = new THREE.Vector3(0, 0, 30) // Mulai dari jauh
      
      // Lerp camera position untuk smooth zoom in
      camera.position.lerp(targetPosition, 0.03)
      
      // Stop animation ketika sudah dekat dengan target
      if (camera.position.distanceTo(targetPosition) < 0.1) {
        camera.position.copy(targetPosition)
        hasAnimated.current = true
      }
      
      controlsRef.current.update()
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      enableDamping
      dampingFactor={0.05}
    />
  )
}

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />

      <CameraAnimation />
      <DeskSetup />
    </Canvas>
  )
}

export default HeroExperience