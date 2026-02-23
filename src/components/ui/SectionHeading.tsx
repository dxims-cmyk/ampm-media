'use client'

import { motion } from 'framer-motion'
import { fadeInUp, transitions } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      className={`max-w-3xl ${alignClasses[align]} ${className}`}
    >
      {label && (
        <motion.span
          variants={fadeInUp}
          transition={{ ...transitions.smooth, delay: 0 }}
          className="inline-block text-sm font-medium tracking-widest text-accent-gold uppercase mb-4"
        >
          {label}
        </motion.span>
      )}
      
      <motion.h2
        variants={fadeInUp}
        transition={{ ...transitions.smooth, delay: 0.1 }}
        className="text-display-md md:text-display-lg text-white mb-4"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          variants={fadeInUp}
          transition={{ ...transitions.smooth, delay: 0.2 }}
          className="text-lg text-white/60 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
