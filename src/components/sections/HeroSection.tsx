'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  bgColor?: string
  textColor?: string
}

export function HeroSection({ 
  title = 'MEDIA', 
  bgColor = '#0C1220',
  textColor = '#F5F5DC'
}: HeroSectionProps) {
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Left scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute left-8 top-1/2 -translate-y-1/2"
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          style={{ color: textColor }}
        >
          <span 
            className="text-[11px] font-normal tracking-[0.15em] uppercase opacity-40 group-hover:opacity-70 transition-opacity"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            SCROLL DOWN
          </span>
        </button>
      </motion.div>

      {/* Right scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute right-8 top-1/2 -translate-y-1/2"
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          style={{ color: textColor }}
        >
          <span 
            className="text-[11px] font-normal tracking-[0.15em] uppercase opacity-40 group-hover:opacity-70 transition-opacity"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
            SCROLL DOWN
          </span>
        </button>
      </motion.div>

      {/* Main content - Big centered title */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-bold tracking-tight leading-none"
          style={{ 
            color: textColor,
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
          }}
        >
          <span className="opacity-50">:</span> {title}
        </motion.h1>

        {/* Horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 mx-auto origin-center"
          style={{ 
            backgroundColor: textColor,
            opacity: 0.2,
            height: '1px',
            width: 'min(400px, 50vw)'
          }}
        />
      </div>
    </section>
  )
}
