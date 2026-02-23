'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ { question: string; answer: string }
interface FAQAccordionProps { items: FAQ[]; variant?: 'dark' | 'light' }

export function FAQAccordion({ items, variant = 'dark' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className={`border-b ${variant === 'dark' ? 'border-ivory/10' : 'border-chocolate/10'}`}>
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className={`flex items-center justify-between w-full py-5 text-left text-lg font-medium transition-colors ${variant === 'dark' ? 'text-ivory hover:text-camel' : 'text-chocolate hover:text-impact'}`}>
            {item.question}
            <svg className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <p className={`pb-5 leading-relaxed ${variant === 'dark' ? 'text-ivory/70' : 'text-chocolate/70'}`}>{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
