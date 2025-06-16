import { useGLTF, Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export function ModelItem({ position, scale, title, description }) {
  const { scene } = useGLTF('binghatti_bldg8_final.glb')
  const modelRef = useRef()
  const [hovered, setHovered] = useState(false)
  const { height: viewportHeight } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  // Enable shadows for each mesh inside the model
  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true
      obj.receiveShadow = true
    }
  })

  return (
    <group position={position} scale={0.05}>
      <primitive
        ref={modelRef}
        object={scene}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>

      {/* Tooltip */}
      <Html
        position={[0, 0.5, 1]}
        center
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '2em',
          textAlign: 'justify',
          width: '750px',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 0.5em', fontSize: '1.2em' }}>{title}</h3>
          <p style={{ margin: 0, fontSize: '1em' }}>{description}</p>
        </div>
      </Html>
    </group>
  )
}
