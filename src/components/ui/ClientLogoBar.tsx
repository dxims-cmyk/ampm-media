'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Client { name: string; logo?: string }
interface ClientLogoBarProps { clients: Client[]; title?: string }

export function ClientLogoBar({ clients, title = 'Trusted by ambitious brands' }: ClientLogoBarProps) {
  return (
    <div className="py-8 border-y border-ivory/10">
      <p className="text-center text-sm text-ivory/40 mb-6 uppercase tracking-wider">{title}</p>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%] transition-all duration-500">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-center">
            {client.logo ? <Image src={client.logo} alt={client.name} width={120} height={40} className="h-8 w-auto object-contain" /> : <span className="text-ivory/50 text-sm font-medium px-4">{client.name}</span>}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
