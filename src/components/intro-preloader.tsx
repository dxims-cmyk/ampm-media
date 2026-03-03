'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const TOTAL_DURATION = 2400 // ms before preloader unmounts

export function IntroPreloader({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true)
  const [phase, setPhase] = useState<'logo-in' | 'hold' | 'dissolve'>('logo-in')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    timers.current.push(setTimeout(() => setPhase('hold'), 500))
    timers.current.push(setTimeout(() => setPhase('dissolve'), 1300))
    timers.current.push(setTimeout(() => setShowPreloader(false), TOTAL_DURATION))

    return () => timers.current.forEach(clearTimeout)
  }, [])

  return (
    <>
      {children}

      {/* Preloader overlay */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: '#272F43' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={
                phase === 'dissolve'
                  ? { opacity: 0, scale: 1.15, filter: 'blur(20px)' }
                  : { opacity: 1, scale: 1, filter: 'blur(0px)' }
              }
              transition={
                phase === 'dissolve'
                  ? { duration: 0.6, ease: [0.4, 0, 1, 1] }
                  : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Image
                src="/images/logo-navy.png"
                alt="AM:PM Media"
                width={280}
                height={280}
                priority
                className="w-52 h-52 md:w-64 md:h-64 object-contain"
              />
            </motion.div>

            {/* Ambient glow behind logo */}
            <motion.div
              className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                phase === 'dissolve'
                  ? { opacity: 0, scale: 2 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
