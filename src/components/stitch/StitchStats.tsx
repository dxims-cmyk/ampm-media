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
        <section className="py-24 bg-[#0C1220] border-t border-white/5">
            <div className="container-wide px-6">
                <div className={`grid lg:grid-cols-${stats.length} gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10`}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center px-4 py-8 lg:py-0"
                        >
                            <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-camel font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
