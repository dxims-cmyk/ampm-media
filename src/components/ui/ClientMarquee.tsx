'use client'
import { motion } from 'framer-motion'

const clients = [
  'RAH', 'AI Markez', 'Dxims', 'Namak Mandi', 'Palais Bar', 'Wee Drop', 'Jamalco',
  'RAH', 'AI Markez', 'Dxims', 'Namak Mandi', 'Palais Bar', 'Wee Drop', 'Jamalco',
]

interface ClientMarqueeProps {
  title?: string
}

export function ClientMarquee({ title = 'Trusted By' }: ClientMarqueeProps) {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="container-wide overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-xs font-bold uppercase tracking-[0.1em] mb-4"
        >
          {title}
        </motion.p>
        <div
          className="relative group"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)',
          }}
        >
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {clients.map((name, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-lg sm:text-xl md:text-2xl font-display font-bold text-white/70 whitespace-nowrap"
                style={{ paddingLeft: 28, paddingRight: 28 }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
