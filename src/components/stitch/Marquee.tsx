"use client"

import { motion } from "framer-motion"

export const Marquee = () => {
    return (
        <div className="border-y border-white/5 bg-[#132035] py-6 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Doubled content for seamless loop */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex">
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}>Strategy + Fit</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-camel">•</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-white">Creative Vision</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-camel">•</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}>Meta Ads</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-camel">•</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-white">Conversion Focused</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-camel">•</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}>Growth Systems</span>
                        <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase mx-4 md:mx-8 text-camel">•</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
