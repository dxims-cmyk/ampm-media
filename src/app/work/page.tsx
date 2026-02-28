'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { StitchStats } from '@/components/stitch/StitchStats'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const stats = [
  { value: '335K+', label: 'Views Generated' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '+9%', label: 'Avg Monthly Growth' },
  { value: '100%', label: 'Client Retention' },
]

const portfolioProjects = [
  {
    title: ': Impact',
    subtitle: 'Lead Management SaaS',
    description: 'Full-stack SaaS platform with AI lead scoring, unified inbox (WhatsApp, SMS, Email, Instagram, Messenger), speed-to-lead alerts, pipeline management, ROI tracking, and campaign analytics.',
    image: '/images/portfolio/driveimpact.png',
    href: 'https://www.driveimpact.io',
    category: 'impact' as const,
    tech: ['Next.js', 'Supabase', 'Trigger.dev', 'Claude AI', 'Resend', 'Meta API'],
    services: ['Full-Stack Development', 'UI/UX Design', 'AI Integration', 'API Architecture'],
  },
  {
    title: 'Wee Drop',
    subtitle: 'Delivery App & Website',
    description: 'Designed the current version of the Wee Drop delivery app and built their marketing website. Glasgow-based delivery platform connecting customers directly with local vendors at the lowest prices.',
    image: '/images/portfolio/weedrop-hero.png',
    href: 'https://wee-drop.co.uk',
    category: 'creative' as const,
    tech: ['App Design', 'Web Development', 'UI/UX'],
    services: ['App Design', 'Website Design & Build', 'Brand Identity'],
  },
  {
    title: 'Dxims',
    subtitle: 'Artist Website',
    description: 'Full artist website with music streaming integration, tour dates, video gallery, merch shop, and email subscription. Designed for fan engagement and music discovery.',
    image: '/images/portfolio/dxims-hero.png',
    href: 'https://dxims.co.uk',
    category: 'creative' as const,
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Spotify API'],
    services: ['Website Design & Build', 'Brand Identity'],
  },
  {
    title: 'AM:PM Media',
    subtitle: 'Agency Website',
    description: 'Multi-division creative agency site with dark luxury aesthetic, interactive division cards, ROI calculator, quiz flow, and integrated music player. Built to showcase the full AM:PM ecosystem.',
    image: '/images/portfolio/mediampm-hero.png',
    href: 'https://www.mediampm.com',
    category: 'creative' as const,
    tech: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'reCAPTCHA v3'],
    services: ['Website Design & Build', 'Brand System'],
  },
]

type Category = 'all' | 'impact' | 'creative' | 'vision'
const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'impact', label: ':Impact' },
  { value: 'creative', label: ':Creative' },
  { value: 'vision', label: ':Vision' },
]

const contentProjects = [
  { title: 'Social Media Management', client: 'Glasgow Bar & Nightlife', category: 'impact' as const, metric: '140K views/month' },
  { title: 'Content Strategy', client: 'Glasgow Bar & Nightlife', category: 'impact' as const, metric: '+9% MoM growth' },
  { title: 'Growth System', client: 'Namak Mandi', category: 'impact' as const, metric: '167K views' },
  { title: 'TikTok Content', client: 'Namak Mandi', category: 'vision' as const, metric: '27.8K views' },
  { title: 'Short-Form Content', client: 'Glasgow Bar & Nightlife', category: 'vision' as const, metric: '8 reels/month' },
  { title: 'Brand Content', client: 'Wee Drop', category: 'vision' as const },
  { title: 'Content Creation & Edits', client: 'Obera Beauty & Spa', category: 'creative' as const },
  { title: 'Sales & Growth Strategy', client: 'Obera Beauty & Spa', category: 'impact' as const },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredContent = activeCategory === 'all'
    ? contentProjects
    : contentProjects.filter(p => p.category === activeCategory)

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C1220] py-24 lg:py-32">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-[#D4A574] text-sm font-semibold uppercase tracking-wider mb-4">Portfolio</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5DC] mb-6">Our Work</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[#F5F5DC]/70">Real results for real businesses. From SaaS platforms to artist websites, delivery apps to social media growth systems.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Portfolio - Built Projects */}
      <section className="bg-[#0a0e18] py-20 lg:py-28">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#D4A574] text-sm font-semibold uppercase tracking-wider mb-4">Built by AM:PM</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5DC] mb-4">Live Projects</h2>
            <p className="text-[#F5F5DC]/50 max-w-xl mx-auto">Designed, developed, and deployed. Every project live and performing.</p>
          </motion.div>

          <div className="space-y-20">
            {portfolioProjects.map((project, i) => {
              const isReversed = i % 2 !== 0
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Image */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative block ${isReversed ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#D4A574]/30 transition-colors shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                    </div>
                  </a>

                  {/* Content */}
                  <div className={isReversed ? 'lg:col-start-1' : ''}>
                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4 ${
                      project.category === 'impact'
                        ? 'bg-[#6E0F1A]/20 text-[#e85d6f] border border-[#6E0F1A]/30'
                        : 'bg-[#4A3728]/20 text-[#D4A574] border border-[#4A3728]/30'
                    }`}>
                      :{project.category === 'impact' ? 'Impact' : 'Creative'}
                    </span>

                    <h3 className="text-3xl sm:text-4xl font-bold text-[#F5F5DC] mb-2">{project.title}</h3>
                    <p className="text-[#D4A574] font-medium mb-4">{project.subtitle}</p>
                    <p className="text-[#F5F5DC]/60 leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs text-[#F5F5DC]/50 bg-white/5 border border-white/5 rounded-full">{t}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                      {project.services.map(s => (
                        <span key={s} className="text-sm text-[#F5F5DC]/40 flex items-center gap-2">
                          <svg className="w-3 h-3 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4A574] font-bold uppercase tracking-wider hover:text-[#F5F5DC] transition-colors group/link"
                    >
                      Visit Live Site
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Study - Glasgow Bar */}
      <section className="bg-impact">
        <div className="container-wide py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6">Featured Case Study</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Glasgow Bar & Nightlife</h2>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 mb-2">140K</p>
              <p className="text-xl text-white/70 mb-6">views in January 2025</p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
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
              <Link href="/impact" className="bg-white text-impact font-semibold px-8 py-4 rounded-full hover:bg-[#F5F5DC] transition-colors inline-flex items-center gap-2">
                Learn About Our Growth System
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/5] bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                <span className="text-white/30 text-sm">[IMAGE: Content collage / Analytics]</span>
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

      {/* Content & Growth Projects Grid */}
      <section className="bg-[#0C1220] section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5DC] mb-2">Content & Growth</h2>
            <p className="text-[#F5F5DC]/50">Ongoing client work across content, ads, and social media.</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredContent.map((project, i) => (
                <motion.div
                  key={`${project.client}-${project.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                      project.category === 'impact'
                        ? 'bg-impact/20 text-red-300'
                        : project.category === 'vision'
                          ? 'bg-vision/20 text-blue-300'
                          : 'bg-creative/20 text-amber-300'
                    }`}>
                      :{project.category}
                    </span>
                    {project.metric && (
                      <span className="text-[#D4A574] text-sm font-bold">{project.metric}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5DC] mb-1">{project.title}</h3>
                  <p className="text-[#F5F5DC]/50 text-sm">{project.client}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredContent.length === 0 && filteredPortfolio.length === 0 && (
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
            <Link href="/quiz" className="btn-primary">See If We&apos;re a Fit &rarr;</Link>
            <Link href="/contact" className="btn-secondary">Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
