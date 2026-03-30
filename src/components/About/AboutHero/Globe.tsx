'use client'
import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      scale: 0.90,
      offset: [0, -300],
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.43, 0.02, 0.95],
      glowColor: [0.7, 0.7, 0.7],
      markerElevation: 0.01,
      markers: [
        { location: [50.4501, 30.5234], size: 0.05 }
      ]
    })

    let phi = -2.2
    function animate() {
      phi += 0.005
      globe.update({ phi })
      requestAnimationFrame(animate)
    }
    animate()

    return () => globe.destroy()
  }, [])

  return (
    <div>
      <h2 className='text-[22px] font-bold mb-4'>
        My Special Place<span className='text-text-accent'>.</span>
      </h2>
      <div className='h-70 overflow-hidden bg-[#B8B8B8] rounded-[20px]'>
        <canvas
          ref={canvasRef}
          style={{ width: 800, height: 800, maxWidth: '100%', aspectRatio: 1 }}
        />
      </div>
    </div>
  )
}
