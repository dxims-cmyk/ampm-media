'use client'
import { motion } from 'framer-motion'

interface Stat { value: string; label: string }
interface StatsBarProps { stats: Stat[]; variant?: 'dark' | 'light' }

export function StatsBar({ stats, variant = 'dark' }: StatsBarProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 rounded-2xl ${variant === 'dark' ? 'bg-navy-light' : 'bg-white shadow-premium'}`}>
      {stats.map((stat, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
          <p className={`text-3xl md:text-4xl font-display ${variant === 'dark' ? 'text-ivory' : 'text-chocolate'}`}>{stat.value}</p>
          <p className={`text-sm ${variant === 'dark' ? 'text-ivory/60' : 'text-chocolate/60'}`}>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
