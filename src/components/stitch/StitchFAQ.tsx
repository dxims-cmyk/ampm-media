"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
    question: string
    answer: string
}

interface StitchFAQProps {
    items: FAQItem[]
}

export const StitchFAQ = ({ items }: StitchFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="bg-[#070D17] py-24 px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-center text-[#F5F5DC] mb-16">Common Questions</h2>

                <div className="space-y-4">
                    {items.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-display font-bold text-xl text-white">{faq.question}</span>
                                <span className={`text-camel text-2xl font-light transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
