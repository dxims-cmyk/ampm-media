'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProofTileProps {
  metric: string; label: string; client: string; image?: string; imagePlaceholder?: string; featured?: boolean
}

export function ProofTile({ metric, label, client, image, imagePlaceholder, featured }: ProofTileProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`group relative overflow-hidden rounded-2xl bg-white ${featured ? 'shadow-premium-lg' : 'shadow-premium'} transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg`}>
      <div className="aspect-video bg-navy-light relative overflow-hidden">
        {image ? <Image src={image} alt={client} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="absolute inset-0 flex items-center justify-center text-ivory/30 text-sm p-4 text-center">{imagePlaceholder || `[IMAGE: ${client}]`}</div>}
      </div>
      <div className="p-5">
        <p className="text-3xl font-display text-chocolate mb-1">{metric}</p>
        <p className="text-sm text-chocolate/60">{label} • {client}</p>
      </div>
    </motion.div>
  )
}
