'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowUpRight, 
  Palette, 
  Film, 
  Music, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  PenTool, 
  Crown,
  Compass,
  Trophy,
  Heart
} from 'lucide-react'
import { Division } from '@/lib/config'
import { fadeInUp, transitions } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Film,
  Music,
  TrendingUp,
  Briefcase,
  GraduationCap,
  PenTool,
  Crown,
  Compass,
  Trophy,
  Heart,
}

interface DivisionCardProps {
  division: Division
  index?: number
  variant?: 'full' | 'compact' | 'grid'
}

export function DivisionCard({ division, index = 0, variant = 'full' }: DivisionCardProps) {
  const Icon = iconMap[division.icon] || Palette
  const isActive = division.status === 'active'

  if (variant === 'grid') {
    return (
      <motion.div
        variants={fadeInUp}
        transition={{ ...transitions.smooth, delay: index * 0.05 }}
        className={`group relative p-4 rounded border transition-all duration-300 ${
          isActive
            ? 'bg-surface-light/50 border-white/10 hover:border-accent-gold/30 cursor-pointer'
            : 'bg-surface-dark/50 border-white/5 opacity-60'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-8 h-8 rounded"
            style={{ backgroundColor: `${division.color}20` }}
          >
            <Icon className="w-4 h-4" style={{ color: division.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-white truncate">
              {division.shortName}
            </h4>
            {!isActive && (
              <span className="text-[10px] text-white/40 uppercase tracking-wider">
                Launching Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'compact') {
    return (
      <Link href={isActive ? division.href : '#'}>
        <motion.div
          variants={fadeInUp}
          transition={{ ...transitions.smooth, delay: index * 0.1 }}
          className={`group relative p-5 rounded-lg border transition-all duration-300 ${
            isActive
              ? 'bg-surface-light border-white/10 hover:border-accent-gold/30 hover:-translate-y-1'
              : 'bg-surface-dark border-white/5 cursor-not-allowed opacity-60'
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: `${division.color}15` }}
            >
              <Icon className="w-5 h-5" style={{ color: division.color }} />
            </div>
            {isActive && (
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent-gold transition-colors" />
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-1">{division.shortName}</h3>
          <p className="text-sm text-white/50">{division.tagline}</p>
          
          {!isActive && (
            <span className="absolute top-3 right-3 text-[10px] text-white/40 uppercase tracking-wider">
              Launching Soon
            </span>
          )}
        </motion.div>
      </Link>
    )
  }

  // Full variant
  return (
    <Link href={isActive ? division.href : '#'}>
      <motion.div
        variants={fadeInUp}
        transition={{ ...transitions.smooth, delay: index * 0.1 }}
        className={`group relative h-full p-8 rounded-lg border overflow-hidden transition-all duration-500 ${
          isActive
            ? 'bg-surface-light border-white/10 hover:border-accent-gold/40'
            : 'bg-surface-dark border-white/5 cursor-not-allowed opacity-60'
        }`}
        whileHover={isActive ? { y: -8 } : {}}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${division.color}, transparent)` }}
        />

        {/* Background glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
          style={{ backgroundColor: division.color }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${division.color}15` }}
          >
            <Icon className="w-7 h-7" style={{ color: division.color }} />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent-gold transition-colors">
            {division.name}
          </h3>
          
          <p className="text-white/40 text-sm uppercase tracking-wider mb-4">
            {division.tagline}
          </p>
          
          <p className="text-white/60 leading-relaxed mb-6">
            {division.description}
          </p>

          {/* Services */}
          {isActive && division.services.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {division.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 text-xs text-white/50 bg-white/5 rounded-full border border-white/5"
                >
                  {service}
                </span>
              ))}
              {division.services.length > 3 && (
                <span className="px-3 py-1 text-xs text-white/30">
                  +{division.services.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Arrow indicator */}
          {isActive && (
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <ArrowUpRight className="w-6 h-6 text-accent-gold" />
            </div>
          )}
        </div>

        {/* Launching soon badge */}
        {!isActive && (
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 text-[10px] text-white/40 bg-white/5 rounded-full uppercase tracking-wider">
              Launching Soon
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  )
}
