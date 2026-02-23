"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const divisions = [
    { name: 'Impact', tagline: 'Content + Ads that Convert', color: 'bg-impact', textColor: 'text-impact', href: '/impact', videoSrc: '/videos/impact.mp4' },
    { name: 'Vision', tagline: 'Video Production', color: 'bg-vision', textColor: 'text-vision', href: '/vision', videoSrc: '/videos/vision.mp4' },
    { name: 'Creative', tagline: 'Branding & Design', color: 'bg-creative', textColor: 'text-creative', href: '/creative', videoSrc: '/videos/creative.mp4' },
    { name: 'Studio', tagline: 'Recording Services', color: 'bg-studio', textColor: 'text-studio', href: '/studio', videoSrc: '/videos/studio.mp4' },
]

export const StitchDivisions = () => {
    return (
        <section id="divisions" className="bg-[#070D17] py-24 relative overflow-hidden border-t border-white/5">
            <div className="container-wide px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F5F5DC] mb-4">Our Divisions</h2>
                    <p className="text-[#F5F5DC]/60 max-w-2xl mx-auto">Specialized units working in harmony to deliver complete brand domination.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {divisions.map((div, i) => {
                        const isLeftColumn = i % 2 === 0
                        return (
                            <motion.div
                                key={div.name}
                                initial={{ opacity: 0, x: isLeftColumn ? -120 : 120 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
                                className="group relative h-[400px] overflow-hidden rounded-2xl"
                            >
                                <Link href={div.href} className="block h-full w-full relative">
                                    {/* Video Layer (Default View) */}
                                    {/* USER: Add your video files to public/videos/ folder matching the names below */}
                                    <video
                                        src={div.videoSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-0 transition-opacity duration-500"
                                    />

                                    {/* Background Color Layer (Reveals on Hover) */}
                                    <div className={`absolute inset-0 ${div.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />

                                    {/* Default Background (Dark Navy - Fallback behind video) */}
                                    <div className="absolute inset-0 bg-[#0C1220] -z-10" />

                                    {/* Content Container */}
                                    <div className="relative h-full p-8 flex flex-col justify-between z-10 pointer-events-none">
                                        {/* Top: Tag & Number */}
                                        <div className="flex justify-between items-start">
                                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 group-hover:text-white transition-colors">
                                                Division 0{i + 1}
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                                <svg className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Middle: Big Text */}
                                        <div>
                                            <h3 className="text-white font-display text-5xl md:text-7xl font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                                                :{div.name}
                                            </h3>
                                            <p className="text-white/80 text-lg font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                                {div.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative Giant Letter */}
                                    <div className="absolute -bottom-10 -right-10 text-[15rem] font-display font-black text-white/5 leading-none pointer-events-none group-hover:text-white/10 transition-colors duration-500 group-hover:scale-110">
                                        {div.name.charAt(0)}
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
