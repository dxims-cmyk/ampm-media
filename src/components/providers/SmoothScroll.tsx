'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with optimized settings for better performance
    lenisRef.current = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smoother cubic easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 1.5,
    })

    // RAF loop
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}
