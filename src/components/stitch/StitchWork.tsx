"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const works = [
    {
        title: ": Impact",
        client: "Lead Management SaaS",
        category: "Impact",
        image: "/images/portfolio/driveimpact.png",
        href: "https://www.driveimpact.io",
        description: "AI-powered lead management dashboard with pipeline tracking, speed-to-lead alerts, and unified inbox.",
    },
    {
        title: "Dxims",
        client: "Artist Website",
        category: "Creative",
        image: "/images/portfolio/dxims-hero.png",
        href: "https://dxims.co.uk",
        description: "Full artist website with music streaming, tour dates, video gallery, and merch shop.",
    },
    {
        title: "AM:PM Media",
        client: "Agency Website",
        category: "Creative",
        image: "/images/portfolio/mediampm-hero.png",
        href: "https://www.mediampm.com",
        description: "Multi-division creative agency site with dark luxury aesthetic and interactive divisions.",
    },
]

export const StitchWork = () => {
    return (
        <section className="bg-[#0C1220] py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F5F5DC] mb-4">Selected Work</h2>
                        <p className="text-white/60">Live projects from our ecosystem.</p>
                    </div>
                    <Link href="/work" className="text-camel font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-camel hover:border-white pb-1 mt-4 md:mt-0">
                        View Full Portfolio
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {works.map((work, i) => (
                        <motion.a
                            key={i}
                            href={work.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group block"
                        >
                            <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6 relative border border-white/10 group-hover:border-camel/40 transition-colors">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-camel transition-colors">{work.title}</h3>
                                    <p className="text-white/50 text-sm">{work.client}</p>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1 rounded-md group-hover:border-camel/30 group-hover:text-camel/60 transition-colors">{work.category}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
