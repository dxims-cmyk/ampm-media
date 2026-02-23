'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, ProofTile, MediaCard } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const stats = [{ value: '335K+', label: 'Views generated' }, { value: '+9%', label: 'Avg monthly growth' }, { value: '15%', label: 'New audience reach' }, { value: '100%', label: 'Client retention' }]
const faqs = [{ question: 'How long until I see results?', answer: 'Most clients see increased engagement within the first month. Meaningful business results typically start around month 2-3.' }, { question: 'What do I need to provide?', answer: 'Access to your social accounts, 2-3 hours per month for content capture, and responsiveness on WhatsApp for approvals.' }, { question: 'Do you lock me into a long contract?', answer: "We require a 3-month minimum. After that, it's month-to-month. We keep clients because we deliver results." }]

export default function ImpactPage() {
  return (
    <div className="bg-impact min-h-screen text-white selection:bg-white selection:text-impact font-body">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

        <div className="container-wide relative z-10 py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-6">
              <ScarcityBadge text="Going private - limited access" variant="light" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/60 text-xs uppercase tracking-wider mb-2 font-bold">AM:PM</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-6">
              :Impact
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-white/90 mb-2 font-medium">
              Content + Meta ads that generate enquiries
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Stop posting into the void. We build and run your entire content machine - from strategy to execution to paid amplification.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="bg-white text-impact font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">See If We're a Fit</Link>
              <Link href="#how-it-works" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">How It Works</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain points - Gradient Overlay */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Sound familiar?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-12">You're posting content, but it's not converting</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["You spend hours creating content that gets 12 likes", "You've tried boosting posts with zero results", "You know you should be on TikTok but have no time", "Your competitors are everywhere and you're invisible"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                <svg className="w-6 h-6 text-white/40 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-white/90 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof - Darker Overlay */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Results that speak</h2></motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ProofTile metric="167K" label="views in 30 days" client="Namak Mandi" imagePlaceholder="" featured />
            <ProofTile metric="27.8K" label="views" client="Namak Mandi" imagePlaceholder="" />
            <ProofTile metric="195K+" label="total views" client="Combined Results" imagePlaceholder="" />
          </div>
          <StitchStats stats={stats} />
        </div>
      </section>

      {/* Client Dashboard / SaaS Showcase */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/40">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-white/20">Client Portal</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Your growth. <br className="hidden sm:block" /><span className="text-white/60">One dashboard.</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Every Impact client gets access to their own dashboard - track leads, view campaign performance, manage content approvals, and see exactly where your money is going. Full transparency, zero guesswork.
              </p>
              <ul className="space-y-4 mb-10">
                {['Real-time lead tracking & notifications', 'Campaign performance analytics', 'Content calendar & approval workflow', 'Monthly reporting & ROI breakdown'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://impact-full.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-impact font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">
                Client Login
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              {/* VIDEO/SCREENSHOT PLACEHOLDER - Replace with Loom embed or screenshots */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm">
                <div className="aspect-video flex items-center justify-center" id="dashboard-demo">
                  {/*
                    TO ADD LOOM VIDEO: Replace this div's contents with:
                    <iframe src="https://www.loom.com/embed/YOUR_LOOM_ID" frameBorder="0" allowFullScreen className="w-full h-full absolute inset-0" />

                    TO ADD SCREENSHOT: Replace with:
                    <img src="/images/dashboard-screenshot.png" alt="Impact Dashboard" className="w-full h-full object-cover" />
                  */}
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white/60 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <p className="text-white/40 text-sm font-display font-bold uppercase tracking-widest">Dashboard Walkthrough</p>
                    <p className="text-white/25 text-xs mt-2">Coming soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-impact/20 rounded-3xl blur-3xl -z-10 opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* See The Results - Media Section */}
      <section className="relative py-24 px-6 bg-black/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">See The Results</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/60 max-w-xl mx-auto">Real campaigns. Real numbers. Real growth.</motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <MediaCard title="Namak Mandi - 167K Views" description="Content day to viral results" />
            <MediaCard title="Growth System Walkthrough" description="How we generate enquiries" />
            <MediaCard title="Client Dashboard Demo" description="Full transparency on performance" />
          </div>
        </div>
      </section>

      {/* FAQ - Transparent to show deep red */}
      <StitchFAQ items={faqs} />

      {/* Final CTA - Carbon Fibre Pattern */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <ScarcityBadge text="Doors closing soon" variant="light" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-8 mb-6">Ready to grow?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Take the quiz to see if we're a fit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-impact font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">See If We're a Fit</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Book a Call Instead</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
