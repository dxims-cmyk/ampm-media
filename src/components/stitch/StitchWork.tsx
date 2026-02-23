"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const works = [
    { title: "Social Campaign", client: "Namak Mandi", category: "Impact", image: "" },
    { title: "Mobile App UX", client: "Wee Drop", category: "Creative", image: "" },
    { title: "Brand Film", client: "Wee Drop", category: "Vision", image: "" },
]

export const StitchWork = () => {
    return (
        <section className="bg-[#0C1220] py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F5F5DC] mb-4">Selected Work</h2>
                        <p className="text-white/60">Recent highlights from our ecosystem.</p>
                    </div>
                    <Link href="/work" className="text-camel font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-camel hover:border-white pb-1">
                        View Full Portfolio
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {works.map((work, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6 relative border border-white/10 group-hover:border-white/30 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 font-display font-bold uppercase tracking-widest text-sm">[Image Placeholder]</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-camel transition-colors">{work.title}</h3>
                                    <p className="text-white/50 text-sm">{work.client}</p>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1 rounded-md">{work.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
