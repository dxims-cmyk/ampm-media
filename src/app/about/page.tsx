'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const values = [
  { title: 'Results over aesthetics', description: "Pretty content that doesn't convert is useless. We optimize for outcomes." },
  { title: 'Operator mindset', description: "We think like business owners because we are one." },
  { title: 'Radical honesty', description: "We'll tell you what you need to hear, not what you want to hear." },
  { title: 'Long-term partnerships', description: "We build relationships that compound." },
]

const divisions = [
  { name: ':Impact', tagline: 'Content + ads that generate enquiries', href: '/impact', color: 'bg-impact' },
  { name: ':Vision', tagline: 'Video that converts', href: '/vision', color: 'bg-vision' },
  { name: ':Studio', tagline: 'Music recording, mixing & mastering', href: '/studio', color: 'bg-studio' },
  { name: ':Creative', tagline: 'Branding & design', href: '/creative', color: 'bg-creative' },
]

const skills = [
  { name: 'Strategy', color: 'bg-impact/20 text-red-300 border-impact/30' },
  { name: 'Video Production', color: 'bg-vision/20 text-blue-300 border-vision/30' },
  { name: 'Music Production', color: 'bg-studio/20 text-emerald-300 border-studio/30' },
  { name: 'AI Systems', color: 'bg-white/10 text-white/80 border-white/20' },
]

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-camel text-sm font-bold uppercase tracking-[0.2em] mb-6">About AM:PM Media</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-7xl text-ivory mb-6">The Team Behind The Clock</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-ivory/60 max-w-2xl mx-auto">A growth-obsessed creative agency built by an operator, not a committee. Based in Glasgow, working with ambitious brands everywhere.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. FOUNDER SECTION */}
      <section className="bg-navy-deep section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-navy-light overflow-hidden border-2 border-ivory/10">
                {/* PLACEHOLDER: Replace with actual photo */}
                <div className="absolute inset-0 flex items-center justify-center text-ivory/20 text-sm text-center p-4">
                  [PHOTO: Colm Pegley-Moran]
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-2">Colm Pegley-Moran</h2>
              <p className="text-camel text-lg font-medium mb-6">Founder & Creative Director</p>

              {/* Bio placeholder */}
              <div className="space-y-4 text-ivory/70 mb-8">
                {/* PLACEHOLDER: Replace with Colm's actual bio */}
                <p>Designer, producer, and strategist at the intersection of creativity and commerce. I started AM:PM because I was tired of seeing businesses waste money on agencies that prioritised awards over outcomes.</p>
                <p>Before AM:PM, I was designing apps, building brands, and creating content - often all for the same client. I'd start with a logo project and end up as Head Designer on a full product build.</p>
                <p>When I'm not building growth systems for clients, I'm producing music as Dxims.</p>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span key={skill.name} className={`px-4 py-2 rounded-full text-sm font-medium border ${skill.color}`}>
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <a href="https://www.instagram.com/dxims" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ivory/50 hover:text-ivory transition-colors text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  @dxims
                </a>
                <a href="https://www.tiktok.com/@dxims" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ivory/50 hover:text-ivory transition-colors text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V12.3a8.2 8.2 0 005.58 2.17V11a4.83 4.83 0 01-3.77-1.86V6.69h3.77z" /></svg>
                  TikTok
                </a>
                <a href="https://www.linkedin.com/in/colmpegley" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ivory/50 hover:text-ivory transition-colors text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee items={['RAH', 'AI Markez', 'Dxims', 'Namak Mandi', 'Palais Bar', 'Wee Drop', 'Jamalco']} />

      {/* 3. COMPANY STORY */}
      <section className="bg-ivory section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl text-chocolate mb-8">Why AM:PM Exists</h2>
            <div className="space-y-6 text-chocolate/80">
              {/* PLACEHOLDER: Replace with actual company story */}
              <p>AM:PM was born from frustration. Too many agencies sell pretty deliverables with no accountability for results. We built something different - a creative agency that operates like a growth partner.</p>
              <p>The name says it all. AM to PM. Around the clock. We don't clock off because your audience doesn't clock off. While you sleep, our systems are working - optimising campaigns, scoring leads, and making sure no opportunity slips through the cracks.</p>
              <p>Four divisions - Impact, Vision, Studio, Creative - under one roof. Based in Glasgow, working with ambitious brands everywhere.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. VALUES */}
      <section className="bg-camel section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate">What we believe</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-premium">
                <h3 className="text-lg font-semibold text-chocolate mb-2">{value.title}</h3>
                <p className="text-chocolate/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE DIVISIONS */}
      <section className="bg-navy section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-4">The Divisions</h2>
            <p className="text-ivory/60 max-w-xl mx-auto">Four specialisms. One ecosystem. Everything your brand needs to grow.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {divisions.map((div, i) => (
              <motion.div key={div.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={div.href} className={`block ${div.color} rounded-2xl p-6 h-full hover:opacity-90 transition-opacity`}>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{div.name}</h3>
                  <p className="text-white/70 text-sm">{div.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-navy-deep section-padding">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-6">Let&apos;s Create Together</h2>
            <p className="text-lg text-ivory/70 mb-8">If you&apos;re looking for a partner - not just a vendor - let&apos;s talk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
              <Link href="/quiz" className="btn-secondary">See If We&apos;re a Fit</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
