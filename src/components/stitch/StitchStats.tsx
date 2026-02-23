"use client"

import { motion } from "framer-motion"

interface StatItem {
    value: string
    label: string
}

interface StitchStatsProps {
    stats: StatItem[]
}

export const StitchStats = ({ stats }: StitchStatsProps) => {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="container-wide px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 divide-y-0 sm:divide-y-0 lg:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center px-2 md:px-4 py-4 lg:py-0"
                        >
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-camel font-bold uppercase tracking-widest text-xs sm:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
