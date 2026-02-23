'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { WorkCard } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// Updated stats with both clients
const stats = [
  { value: '335K+', label: 'Views Generated' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '+9%', label: 'Avg Monthly Growth' },
  { value: '100%', label: 'Client Retention' },
]

type Category = 'all' | 'impact' | 'vision' | 'studio' | 'creative'
const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'impact', label: ':Impact' },
  { value: 'vision', label: ':Vision' },
  { value: 'creative', label: ':Creative' },
  { value: 'studio', label: ':Studio' },
]

const projects = [
  // Glasgow Bar & Nightlife (Palais - anonymous)
  { title: 'Social Media Management', client: 'Glasgow Bar & Nightlife', category: 'impact' as const, metric: '140K views/month', imagePlaceholder: '[IMAGE: Bar content]' },
  { title: 'Content Strategy', client: 'Glasgow Bar & Nightlife', category: 'impact' as const, metric: '+9% MoM growth', imagePlaceholder: '[IMAGE: Analytics dashboard]' },
  { title: 'Short-Form Content', client: 'Glasgow Bar & Nightlife', category: 'vision' as const, metric: '8 reels/month', imagePlaceholder: '[IMAGE: Reel screenshot]' },
  // Namak Mandi
  { title: 'Growth System', client: 'Namak Mandi', category: 'impact' as const, metric: '167K views', imagePlaceholder: '[IMAGE: Namak Mandi]' },
  { title: 'TikTok Content', client: 'Namak Mandi', category: 'vision' as const, metric: '27.8K views', imagePlaceholder: '[IMAGE: Namak Mandi video]' },
  // Wee Drop
  { title: 'Full App Design', client: 'Wee Drop', category: 'creative' as const, metric: 'Head Designer', imagePlaceholder: '[IMAGE: Wee Drop app]' },
  { title: 'Brand Identity', client: 'Wee Drop', category: 'creative' as const, imagePlaceholder: '[IMAGE: Wee Drop branding]' },
  { title: 'Website Design', client: 'Wee Drop', category: 'creative' as const, imagePlaceholder: '[IMAGE: Wee Drop website]' },
  { title: 'Brand Content', client: 'Wee Drop', category: 'vision' as const, imagePlaceholder: '[IMAGE: Wee Drop video]' },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C1220] py-24 lg:py-32">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-[#D4A574] text-sm font-semibold uppercase tracking-wider mb-4">Portfolio</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5DC] mb-6">Our Work</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[#F5F5DC]/70">Real results for real businesses. 335K+ views generated across hospitality, tech, and lifestyle brands.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study - Glasgow Bar */}
      <section className="bg-impact">
        <div className="container-wide py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6">Featured Case Study</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Glasgow Bar & Nightlife</h2>
              <p className="text-5xl sm:text-6xl font-bold text-white/90 mb-2">140K</p>
              <p className="text-xl text-white/70 mb-6">views in January 2025</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">+9%</p>
                  <p className="text-white/60 text-sm">MoM Growth</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">15%</p>
                  <p className="text-white/60 text-sm">New Audience</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">6.9K</p>
                  <p className="text-white/60 text-sm">Followers</p>
                </div>
              </div>
              <p className="text-white/70 mb-6">Ongoing social media management including content strategy, short-form video production, and posting schedule optimization. Consistent month-over-month growth through strategic content.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Content Strategy', 'Reels Production', 'Story Content', 'Analytics'].map((service, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">{service}</span>
                ))}
              </div>
              <Link href="/impact" className="bg-white text-impact font-semibold px-8 py-4 rounded-full hover:bg-[#F5F5DC] transition-colors inline-flex items-center gap-2">
                Learn About Our Growth System
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/5] bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                <span className="text-white/30 text-sm">[IMAGE: Bar content collage / Analytics screenshot]</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StitchStats stats={stats} />

      {/* Filter Tabs */}
      <section className="bg-[#132035] sticky top-0 z-20 py-4 border-b border-[#F5F5DC]/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.value
                  ? 'bg-impact text-white'
                  : 'bg-[#0C1220] text-[#F5F5DC]/60 hover:text-[#F5F5DC]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#0C1220] section-padding">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <WorkCard key={`${project.client}-${project.title}-${i}`} {...project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#F5F5DC]/50">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070D17] section-padding">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5DC] mb-6">Want results like these?</h2>
          <p className="text-lg text-[#F5F5DC]/70 mb-8">Take our 2-minute quiz to see which service fits your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="btn-primary">See If We&apos;re a Fit →</Link>
            <Link href="/contact" className="btn-secondary">Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
