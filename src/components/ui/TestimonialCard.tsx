'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TestimonialCardProps { quote: string; name: string; role: string; image?: string }

export function TestimonialCard({ quote, name, role, image }: TestimonialCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 shadow-premium">
      <svg className="w-8 h-8 text-impact/20 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
      <p className="text-chocolate/80 mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3">
        {image ? <Image src={image} alt={name} width={40} height={40} className="rounded-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-camel flex items-center justify-center text-chocolate font-semibold">{name.charAt(0)}</div>}
        <div><p className="font-semibold text-chocolate">{name}</p><p className="text-sm text-chocolate/60">{role}</p></div>
      </div>
    </motion.div>
  )
}
