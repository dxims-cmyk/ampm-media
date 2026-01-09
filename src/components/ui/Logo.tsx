'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  showTagline?: boolean
  variant?: 'default' | 'white' | 'icon-only'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ 
  className = '', 
  showTagline = false, 
  variant = 'default',
  size = 'md' 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-base' },
    md: { icon: 40, text: 'text-lg' },
    lg: { icon: 56, text: 'text-2xl' },
  }

  const currentSize = sizes[size]

  // Use navy logo on dark backgrounds (it has white circles that show up)
  const logoSrc = '/images/logo-navy.png'

  if (variant === 'icon-only') {
    return (
      <Link href="/" className={`block ${className}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="relative"
          style={{ width: currentSize.icon, height: currentSize.icon }}
        >
          <Image
            src={logoSrc}
            alt="AM:PM Media"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </Link>
    )
  }

  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <motion.div 
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <Image
          src={logoSrc}
          alt="AM:PM Media"
          fill
          className="object-contain"
          priority
        />
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 blur-md transition-all duration-300" />
      </motion.div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`${currentSize.text} font-semibold tracking-tight leading-none`}>
          <span className="text-white">AM</span>
          <span className="text-accent-gold">:</span>
          <span className="text-white">PM</span>
          <span className="text-white/70 font-normal ml-1.5">Media</span>
        </span>
        {showTagline && (
          <span className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">
            Creating around the clock
          </span>
        )}
      </div>
    </Link>
  )
}

// Simplified logo for footer/smaller contexts - text only with icon
export function LogoSimple({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image
          src="/images/logo-navy.png"
          alt="AM:PM Media"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xl font-semibold tracking-tight">
        AM<span className="text-accent-gold">:</span>PM
      </span>
    </Link>
  )
}

// Icon-only version for mobile/compact uses
export function LogoIcon({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <Link href="/" className={`block ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo-navy.png"
          alt="AM:PM Media"
          fill
          className="object-contain"
        />
      </motion.div>
    </Link>
  )
}
