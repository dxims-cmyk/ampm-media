'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, ProofTile, ForYouSection, ProcessTimeline } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const stats = [{ value: '335K+', label: 'Views generated' }, { value: '+9%', label: 'Avg monthly growth' }, { value: '15%', label: 'New audience reach' }, { value: '100%', label: 'Client retention' }]
const processSteps = [{ number: '01', title: 'Discovery', description: 'We audit your presence and identify quick wins.' }, { number: '02', title: 'Strategy', description: 'Custom content + ads blueprint for your business.' }, { number: '03', title: 'Execution', description: 'We produce, post, and optimise. You focus on business.' }, { number: '04', title: 'Scale', description: 'Monthly reviews and continuous improvement.' }]
const forYouItems = ["You're doing £20K+/month and ready to invest", "You want content that converts, not just looks pretty", "You're tired of posting without seeing results", "You need a partner, not just another vendor"]
const notForYouItems = ["You're looking for the cheapest option", "You want to go viral overnight", "You expect results without any involvement", "You're not ready to commit to at least 3 months"]
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
              <ScarcityBadge text="3 spots left for February" variant="light" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/60 text-xs uppercase tracking-wider mb-2 font-bold">AM:PM</motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-6">
              :Impact
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-white/90 mb-2 font-medium">
              Content + Meta ads that generate enquiries
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Stop posting into the void. We build and run your entire content machine — from strategy to execution to paid amplification.
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
              <div key={i} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                <svg className="w-6 h-6 text-white/40 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof - Darker Overlay */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Results that speak</h2></div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ProofTile metric="167K" label="views in 30 days" client="Namak Mandi" imagePlaceholder="" featured />
            <ProofTile metric="27.8K" label="views" client="Namak Mandi" imagePlaceholder="" />
            <ProofTile metric="195K+" label="total views" client="Combined Results" imagePlaceholder="" />
          </div>
          <StitchStats stats={stats} />
        </div>
      </section>

      {/* FAQ - Transparent to show deep red */}
      <StitchFAQ items={faqs} />

      {/* Final CTA - Carbon Fibre Pattern */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <ScarcityBadge text="3 spots left for February" variant="light" />
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
