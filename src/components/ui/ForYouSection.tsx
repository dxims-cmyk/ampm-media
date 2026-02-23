'use client'
import { motion } from 'framer-motion'

interface ForYouSectionProps { forYou: string[]; notForYou: string[] }

export function ForYouSection({ forYou, notForYou }: ForYouSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-studio/5 border border-studio/20 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-display text-studio mb-4">This is for you if...</h3>
        <ul className="space-y-3">
          {forYou.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-chocolate/80">
              <svg className="w-5 h-5 text-studio flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-impact/5 border border-impact/20 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-display text-impact mb-4">This isn&apos;t for you if...</h3>
        <ul className="space-y-3">
          {notForYou.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-chocolate/80">
              <svg className="w-5 h-5 text-impact flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
