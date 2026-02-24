'use client'
import { motion } from 'framer-motion'

const clients = [
  'Namak Mandi',
  'Palais Bar',
  'Wee Drop',
  '[Artist 1]',
  '[Artist 2]',
  '[Client Name]',
  '[Client Name]',
  '[Client Name]',
]

interface ClientMarqueeProps {
  title?: string
}

export function ClientMarquee({ title = 'Trusted By' }: ClientMarqueeProps) {
  const duplicated = [...clients, ...clients]

  return (
    <section className="py-16 border-t border-white/5 overflow-hidden">
      <div className="container-wide mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-xs font-bold uppercase tracking-[0.2em]"
        >
          {title}
        </motion.p>
      </div>
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C1220] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C1220] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {duplicated.map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-8 sm:px-12 text-lg sm:text-xl md:text-2xl font-display font-bold text-white/20 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
