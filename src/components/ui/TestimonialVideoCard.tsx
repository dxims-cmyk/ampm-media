'use client'
import { motion } from 'framer-motion'

interface TestimonialVideoCardProps {
  quote: string
  name: string
  business: string
  videoSrc?: string
  thumbnailSrc?: string
}

export function TestimonialVideoCard({
  quote,
  name,
  business,
  thumbnailSrc,
}: TestimonialVideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors group"
    >
      {/* Video thumbnail area */}
      <div className="relative aspect-video bg-black/40 flex items-center justify-center overflow-hidden">
        {thumbnailSrc ? (
          <img src={thumbnailSrc} alt={`${name} testimonial`} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <span className="text-white/20 text-xs font-display font-bold uppercase tracking-widest">
            [VIDEO TESTIMONIAL]
          </span>
        )}
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6 text-white/80 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quote & attribution */}
      <div className="p-6">
        <p className="text-white/80 text-sm leading-relaxed mb-4 italic">&ldquo;{quote}&rdquo;</p>
        <div>
          <p className="text-white font-display font-bold text-sm">{name}</p>
          <p className="text-white/50 text-xs">{business}</p>
        </div>
      </div>
    </motion.div>
  )
}
