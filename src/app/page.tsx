"use client"

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ScarcityBadge } from '@/components/ui'
import { Marquee } from '@/components/stitch/Marquee'
import { OperatingPrinciples } from '@/components/stitch/OperatingPrinciples'
import { StitchDivisions } from '@/components/stitch/StitchDivisions'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchWork } from '@/components/stitch/StitchWork'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'

const stats = [
  { value: '335K+', label: 'Views Generated' },
  { value: '£50K+', label: 'Revenue Tracked' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '3', label: 'Spots Left' },
]

const faqs = [
  { question: 'How is AM:PM different from other agencies?', answer: "We're not just creatives — we're operators. We think like business owners because we are one. Every decision is driven by ROI, not just aesthetics." },
  { question: 'What kind of results can I expect?', answer: "Our Growth System clients typically see 3-5x increase in engagement within 30 days, with measurable enquiry growth by month 2-3. We track everything." },
  { question: 'Do you work with businesses outside Glasgow?', answer: 'Yes. We work across the UK and internationally. Most communication happens via video calls and WhatsApp.' },
]

export default function HomePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <>
      {/* ============================================
          HERO - Stitch Layout (Manrope + Centered)
          ============================================ */}
      <header ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0C1220]">
        {/* Background Video */}
        {/* USER: Add your video file to public/videos/hero-background.mp4 */}
        <motion.video
          style={{ scale }}
          src="/videos/hero-background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none mix-blend-overlay"
        />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-camel/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-vision/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-camel uppercase tracking-[0.2em] mb-6"
          >
            Glasgow Based. Global Reach.
          </motion.p>

          <motion.h1
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-extrabold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-[#F5F5DC]"
          >
            CREATING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">AROUND</span><br />
            THE CLOCK.
          </motion.h1>

          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <p className="text-lg md:text-xl text-[#F5F5DC]/60 font-light leading-relaxed">
              We are a growth-obsessed creative agency born in Glasgow. We don't just follow trends; we set the pace, operating 24/7 to ensure your brand never sleeps.
            </p>
          </motion.div>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/quiz" className="bg-[#F5F5DC] text-[#0C1220] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-transform hover:-translate-y-1">
              Start Project
            </Link>
            <Link href="#divisions" className="border border-[#F5F5DC]/30 text-[#F5F5DC] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#F5F5DC]/10 transition-transform hover:-translate-y-1">
              Explore Divisions
            </Link>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg className="w-6 h-6 text-camel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ============================================
          MARQUEE - Stitch Component
          ============================================ */}
      <Marquee />

      {/* ============================================
          GROWTH SYSTEM - Replaces "Problem/Solution"
          ============================================ */}
      <section className="py-24 md:py-32 px-6 bg-[#0C1220]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-8 text-[#F5F5DC]">
              WE BUILD <span className="text-camel italic font-serif">growth systems</span> THAT WORK WHILE YOU SLEEP.
            </h2>
            <div className="w-24 h-1 bg-[#F5F5DC]/20 mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-[#F5F5DC]/70 leading-relaxed">
              Founded in Glasgow, AM:PM Media bridges the gap between creative excellence and hard data. We don't believe in vanity metrics. We believe in revenue, retention, and results.
            </p>
            <p className="text-xl text-[#F5F5DC]/70 leading-relaxed">
              Our "around the clock" philosophy isn't just a tagline—it's how we approach campaign optimisation. While the world slows down, our systems are learning, adapting, and scaling your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          STITCH COMPONENTS (Visual Upgrade)
          ============================================ */}

      {/* 1. Interactive Divisions Grid */}
      <StitchDivisions />

      {/* 2. Bold Stats */}
      <StitchStats stats={stats} />

      {/* 3. Operating Principles (Existing Stitch-styled) */}
      <OperatingPrinciples />

      {/* 4. Selected Work */}
      <StitchWork />

      {/* 5. FAQ */}
      <StitchFAQ items={faqs} />

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-impact to-[#4a0a11]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScarcityBadge text="Only 3 Spots Left for February" variant="light" />

          <h2 className="font-display font-black text-white text-5xl md:text-7xl mb-6 tracking-tighter mt-8">
            STOP GUESSING.
          </h2>
          <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Your growth shouldn't be a gamble. Let's build a predictable revenue engine for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-[#0C1220] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-impact transition-all shadow-xl">
              Start Project
            </Link>
            <Link href="/contact" className="border border-white text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Book Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
