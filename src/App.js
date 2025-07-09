import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll, Html, OrbitControls } from '@react-three/drei'
import { ModelItem } from './ModelItem' // Import it
import GoawkCaseStudy from './GoawkCaseStudy';
 import { Suspense } from 'react'

import {   useProgress } from '@react-three/drei'

function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div style={styles.wrapper}>
        <div style={styles.barContainer}>
          <div style={{ ...styles.bar, width: `${progress}%` }} />
        </div>
        <p style={styles.text}>{Math.floor(progress)}%</p>
      </div>
    </Html>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    color: '#fff',
  },
  barContainer: {
    width: '200px',
    height: '10px',
    background: '#444',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '1em',
  },
  bar: {
    height: '100%',
    background: '#61dafb',
    transition: 'width 0.3s ease',
  },
  text: {
    fontSize: '1em',
  },
}




function Item({ url, scale, position, onClick, title, description }) {
  const visible = useRef(false)
  const [hovered, setHovered] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height: viewportHeight } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -viewportHeight / 2 + 1,
      4,
      delta
    )
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    )
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 1 : 0,
      4,
      delta
    )
  })

  const [w, h] = scale // width and height from image scale

  return (
    <group position={position}>
      <Image
        ref={ref}
        url={url}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(url)}
      />
      <Html
        position={[0, 0, 0.1]} // Auto-position tooltip above image
        center
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '2em',
           textAlign: 'justify',
          width: '650px',
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


function Items({ openModal }) {
  const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <Scroll>
     
      <Item url="/1.jpg" scale={[w / 2.5, w / 4.4, 1]} position={[-w / 5, 0, 0]} onClick={openModal} title="Sustainability Dashboard
"
  description="This project focuses on designing and developing a futuristic-style sustainability dashboard that visualizes key environmental KPIs. I handled the entire UX/UI process from scratch, creating an immersive and visually engaging experience using WebGL and React. The interface is crafted to present complex data in an intuitive, interactive format that aligns with modern design and performance standards.

"    />
      <Item url="/2.jpg" scale={[w / 2.8, w / 5.8, 1]} position={[w / 5, -h / 10, 0]} onClick={openModal} title="Digital Twin Demo"
  description="Built a small demo on Digital Twin technology using Unreal Engine 5.5 to explore smart city innovations."/>
      <Item url="/3.jpg" scale={[w / 2.5, w / 4.5, 1]} position={[-w / 4, -h * 0.87, 0]} onClick={openModal} title="Smart City Digital twin Project"
  description="Another Smart city visualization using realtime data from sensors installed on the smart buildings forour client in Abu Dhabi."/>
      
      {/* <Item url="/4.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} onClick={openModal} title="Project Alpha"
  description="A futuristic UX/UI design built with WebGL and React."/> */}

{/* Replace image 4 with your 3D model */}
      <ModelItem
        position={[w / 4, -h * 1.2, 0]}
        scale={[0.5, 0.5, 0.5]}
        title="3D Interactive Model"
        description="An interactive 3D model demonstrating a product concept using React Three Fiber and GLB format."
      />


      <Item url="/5.jpg" scale={[w / 4, w / 3, 1]} position={[w / 10, -h * 1.75, 0]} onClick={openModal} title="Project Nav - Navigation App"
  description="Mobility app for Dubai Commuters - POC"/>
      <Item url="/6.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} onClick={openModal} title="IOT Collection - ZainTech Gitex Display"
  description="A webpage presented at our Gitex booth '24 showcasing Zaintech's IOT capabilities in 3D model."/>
      <Item url="/7.jpg" scale={[w / 3, w / 5.6, 1]} position={[-w / 4, -h * 2.6, 0]} onClick={openModal} title="Digital Twin demo "
  description="Showcasing sustainability and other environmental KPI for a building."/>
      <Item url="/8.jpg" scale={[w / 2.09, w / 3.85, 1]} position={[w / 4, -h * 3.1, 0]} onClick={openModal} title="Smart City for Abu Dhabi Clientel"
  description="Smart city project monitoring the city's sustainability progress."/>
  
  
      <Html position={[-w / 2.5, -h * 3.5, 0]} style={{width: '74vw'}} >
        <GoawkCaseStudy/>
      </Html>

{/* position={[-w / 6, -h * 4.1, 0]}
position={[-w / 2.5, -h * 5, 0]} */}

      <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 3, -h * 5.8, 0]} onClick={openModal} title="Felipe Olguera Jr." description="UX UI 3D Designer Extra Ordinaire - 23 years of expertise"/>
      
    

    </Scroll>
  )
}

function Modal({ activeUrl, onClose }) {
  const [visible, setVisible] = useState(false)

  // Trigger fade-in on mount
  useEffect(() => {
    if (activeUrl) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [activeUrl])

  if (!activeUrl) return null

  return (
    <div
      className={`modal-backdrop ${visible ? 'fade-in' : 'fade-out'}`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: 'min(90vw, 1280px)',
          aspectRatio: '16 / 9',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <iframe
          src={activeUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: '100%', height: '100%' }}
        />
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: -40,
            right: -40,
            fontSize: '2rem',
            color: 'white',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .modal-backdrop.fade-in {
          opacity: 1;
        }

        .modal-backdrop.fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  )
}


export const App = () => {
  const [activeUrl, setActiveUrl] = useState(null)

  const openModal = (url) => {
    const externalLinks = {
      '/1.jpg': 'https://visitordashboard.masdarcityccc.com/',
      '/2.jpg': '/unreal_vid.mp4',
      '/3.jpg': '/raydata_vid.mp4',
      '/4.jpg': '#',
      '/5.jpg': '#',
      '/6.jpg': 'https://gitexiot.masdarcityccc.com/',
      '/7.jpg': 'h#',
      '/8.jpg': '#',
      '/12.jpg': '#',
    }
    setActiveUrl(externalLinks[url])
  }

  return (
    <>
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: true }}
        dpr={[1, 1.5]}
      >

        <Suspense fallback={<Loader />}>

        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}/>
         <color attach="background" args={['#f0f0f0']} />
        <ScrollControls damping={6} pages={6.9}>
          <Items openModal={openModal} />
          <Scroll html style={{ width: '100%' }}>
 
            <h1 style={{ position: 'absolute', top: `75vh`, right: '20vw'}}>ux ui</h1>
            <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>3d</h1>
            <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>frontend</h1>
            <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>design</h1>
            <h1 style={{ position: 'absolute', top: '590vh', right: '12vw' }}>
              felipe
              <br />
              olguera
              <br />
              jr
            </h1>
            <h3 style={{ position: 'absolute', top: '630vh', right: '22vw' }}>
              +971 525329744
            </h3>

 
          </Scroll>
        </ScrollControls>
        </Suspense>
      </Canvas>

      <Modal activeUrl={activeUrl} onClose={() => setActiveUrl(null)} />

 {/* CV Button with animation on load and hover
  <div
    style={{
      position: 'fixed',
      top: '2rem',
      right: '13rem',
      zIndex: 1001,
      animation: 'slideUpFade 1.2s ease-out forwards',
      opacity: 0,
    }}
  >
    <a
      href="/product-design"
      download
      className="cv-button"
    >
      Product Design
    </a>
  </div> */}


  {/* CV Button with animation on load and hover */}
  <div
    style={{
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      zIndex: 1001,
      animation: 'slideUpFade 1.2s ease-out forwards',
      opacity: 0,
    }}
  >
    <a
      href="/Felipe_Olguera_Resume_2025_FULL.pdf"
      download
      className="cv-button"
    >
      Get my CV
    </a>
  </div>

  {/* Styles for animation and hover effect */}
  <style jsx>{`
    @keyframes slideUpFade {
      0% {
        opacity: 0;
        transform: translateY(40px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cv-button {
      padding: 1em 2em;
      background: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: inline-block;
    }

    .cv-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    }
  `}</style>
     </>
  )
}
