'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, WorkCard } from '@/components/ui'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const contentTiers = [
  {
    title: 'Organic Content',
    description: 'Social-first content for TikTok, Instagram, YouTube. Shot and edited for engagement.',
    includes: ['Concept development', 'On-location filming', 'Professional editing', 'Platform optimisation'],
  },
  {
    title: 'Content for Ads',
    description: 'Higher production value. Designed for paid campaigns. Integrates with :Impact.',
    includes: ['Script writing', 'Storyboarding', 'Full production', 'Colour grading'],
  },
  {
    title: 'Music Videos',
    description: 'Artist visuals. Performance and narrative.',
    includes: ['Pre-production planning', 'Full day shoot', 'Professional editing', 'Colour grading'],
  },
  {
    title: 'Photography',
    badge: 'Coming Soon',
    description: 'Headshots, product photography, 100m white backdrop studio.',
    includes: ['Professional lighting', 'White backdrop', 'Same-day delivery', 'Multiple setups'],
  },
]

const viralStats = [
  { value: '548%', label: 'Growth', detail: 'Namak Mandi in 15 days' },
  { value: '213K', label: 'Views', detail: 'February (up from 33K)' },
  { value: '70%', label: 'Non-Followers', detail: 'New audience reached' },
  { value: '13', label: 'Reels/Week', detail: 'Consistency wins' },
]

const faqs = [
  { question: 'Do you provide models?', answer: 'We can source talent, but we prefer to use real people / staff where possible for authenticity.' },
  { question: 'How much does it cost?', answer: 'We have packages starting from \u00a31,500/month for ongoing content. One-off projects quoted individually.' },
  { question: 'Do you travel?', answer: 'Yes, we cover the whole UK. Travel expenses apply outside Glasgow.' },
  { question: "What's the turnaround?", answer: 'Social content: 48-72 hours. Brand films: 1-2 weeks. Content day deliverables: same week.' },
]

export default function VisionPage() {
  return (
    <div className="bg-vision min-h-screen text-white selection:bg-white selection:text-vision font-body">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

        <div className="container-wide relative z-10 py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-6">
              <ScarcityBadge text="5 spots left for March" variant="light" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/60 text-xs uppercase tracking-wider mb-2 font-bold">AM:PM</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-6">
              :Vision
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 mb-2 font-medium">
              Video that converts
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Social content, brand films, showreels - produced to perform. We don&apos;t just make pretty videos. We make videos that get results.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="bg-white text-vision font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">Get a Quote</Link>
              <Link href="#work" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">See Our Work</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SHOWREEL ── */}
      <section className="relative py-16 px-6">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Our Showreel</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-video bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-vision/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="text-white/40 text-sm font-display font-bold uppercase tracking-widest">[SHOWREEL VIDEO]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT THAT PERFORMS ── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Content that performs</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {viralStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} whileHover={{ y: -4 }} className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 text-center">
                <p className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/90 font-bold text-sm uppercase tracking-wide mb-1">{stat.label}</p>
                <p className="text-white/50 text-sm">{stat.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Namak Mandi went from 33K views in January to 213K in February. That&apos;s what happens when we take over.
          </motion.p>
        </div>
      </section>

      {/* ── WHAT WE CREATE ── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">What we create</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTiers.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm relative"
              >
                {tier.badge && (
                  <span className="absolute top-4 right-4 bg-white/15 text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-4">{tier.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{tier.description}</p>
                <div className="w-full h-px bg-white/10 mb-6" />
                <ul className="space-y-3">
                  {tier.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80 text-sm">
                      <svg className="w-4 h-4 text-white/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE WORK ── */}
      <section id="work" className="relative py-24 px-6 bg-black/30">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">The work</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <WorkCard title="Namak Mandi - Top Reel" client="Namak Mandi" category="vision" metric="7.5K views" imagePlaceholder="" />
            <WorkCard title="Namak Mandi - Behind the Scenes" client="Namak Mandi" category="vision" metric="3K views" imagePlaceholder="" />
            <WorkCard title="Namak Mandi - Food Content" client="Namak Mandi" category="vision" metric="2.8K views" imagePlaceholder="" />
          </div>
        </div>
      </section>

      {/* ── PHOTOGRAPHY COMING SOON ── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/40">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-white/5 border-2 border-white/15 rounded-2xl backdrop-blur-sm p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <span className="inline-block bg-white/15 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 mb-6">
              Coming Soon
            </span>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">Photography Studio</h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-white/90 font-bold mb-1">White Backdrop</p>
                <p className="text-white/50 text-sm">100m roll studio</p>
              </div>
              <div className="text-center">
                <p className="text-white/90 font-bold mb-1">Professional Lighting</p>
                <p className="text-white/50 text-sm">Full setup included</p>
              </div>
              <div className="text-center">
                <p className="text-white/90 font-bold mb-1">All Formats</p>
                <p className="text-white/50 text-sm">Headshots, product, content</p>
              </div>
            </div>

            <Link href="/contact" className="inline-block border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">
              Get Notified
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT TO LEADS ── */}
      <section className="relative py-24 px-6 bg-black/40">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest">:Vision + :Impact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Content to leads</h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Great content is just the start. We feed your best performers into :Impact for retargeting and lead capture.
            </p>

            <div className="flex items-center justify-center gap-4 mb-10 text-white/40">
              <span className="font-display font-bold text-white/60">:Vision</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="font-display font-bold text-[#FF6B35]/80">:Impact</span>
            </div>

            <Link href="/impact" className="inline-block bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] font-bold px-8 py-4 rounded-full hover:bg-[#FF6B35]/20 transition-colors uppercase tracking-wide">
              See the full system
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/40 to-black/50">
        <div className="container-wide max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">Questions</h2>
          </div>
          <StitchFAQ items={faqs} />
        </div>
      </section>

      {/* ── CLIENT MARQUEE ── */}
      <ClientMarquee items={['Namak Mandi', 'Palais Bar']} />

      {/* ── CTA ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Ready to create?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Tell us about your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-vision font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Get Started</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Book a Call</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
