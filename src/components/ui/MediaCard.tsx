'use client'
import { motion } from 'framer-motion'

interface MediaCardProps {
  title: string
  description?: string
  type?: 'video' | 'loom' | 'showreel'
  loomId?: string
  videoSrc?: string
  thumbnailSrc?: string
}

export function MediaCard({ title, description, type = 'video', loomId, videoSrc, thumbnailSrc }: MediaCardProps) {
  const hasLoom = type === 'loom' && loomId
  const hasVideo = type === 'video' && videoSrc

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-xl"
    >
      <div className="aspect-video relative overflow-hidden">
        {hasLoom ? (
          <iframe
            src={`https://www.loom.com/embed/${loomId}`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full absolute inset-0"
            title={title}
          />
        ) : hasVideo ? (
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster={thumbnailSrc}
          />
        ) : (
          <>
            {thumbnailSrc ? (
              <img src={thumbnailSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]" />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-display font-bold text-white mb-1">{title}</h3>
        {description && <p className="text-sm text-white/60">{description}</p>}
      </div>
    </motion.div>
  )
}
