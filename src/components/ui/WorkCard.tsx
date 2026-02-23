'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface WorkCardProps { title: string; client: string; category: 'impact' | 'vision' | 'studio' | 'creative'; metric?: string; image?: string; imagePlaceholder?: string; href?: string }

const categoryColors = { impact: 'bg-impact/10 text-impact border-impact/20', vision: 'bg-vision/10 text-vision border-vision/20', studio: 'bg-studio/10 text-studio border-studio/20', creative: 'bg-creative/10 text-creative border-creative/20' }
const categoryLabels = { impact: 'Impact', vision: 'Vision', studio: 'Studio', creative: 'Creative' }

export function WorkCard({ title, client, category, metric, image, imagePlaceholder, href }: WorkCardProps) {
  const Card = (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-2xl bg-navy-light border border-ivory/10 hover:border-ivory/20 transition-all duration-300">
      <div className="aspect-[4/3] relative overflow-hidden">
        {image ? <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="absolute inset-0 flex items-center justify-center text-ivory/20 text-sm p-4 text-center bg-navy">{imagePlaceholder || `[IMAGE: ${title}]`}</div>}
        <div className="absolute top-4 left-4"><span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${categoryColors[category]}`}>{categoryLabels[category]}</span></div>
        {metric && <div className="absolute bottom-4 right-4"><span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-chocolate text-sm font-semibold">{metric}</span></div>}
      </div>
      <div className="p-5"><h3 className="text-lg font-semibold text-ivory group-hover:text-camel transition-colors mb-1">{title}</h3><p className="text-sm text-ivory/60">{client}</p></div>
      {href && <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity"><svg className="w-5 h-5 text-camel" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>}
    </motion.div>
  )
  return href ? <Link href={href}>{Card}</Link> : Card
}
