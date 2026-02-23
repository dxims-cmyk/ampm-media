"use client"

import { motion } from "framer-motion"

const principles = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Speed & Precision",
        desc: "In the digital landscape, speed is currency. We execute campaigns with agility without sacrificing the precision needed for performance."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
        ),
        title: "Data Over Ego",
        desc: "Creative is subjective. Results are not. We let the data guide our decisions, ensuring every pound spent contributes to ROI."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Around The Clock",
        desc: "Our systems monitor your growth 24/7. When opportunities arise at 3 AM, our automated rulesets are there to capture them."
    }
]

export const OperatingPrinciples = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center md:text-left text-[#F5F5DC]">Our Operating Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {principles.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-5 md:p-8 border border-white/10 rounded-xl hover:border-camel/50 transition-colors bg-[#132035] group"
                        >
                            <div className="w-12 h-12 bg-camel/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-camel group-hover:text-white transition-colors text-camel">
                                {p.icon}
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-white">{p.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
