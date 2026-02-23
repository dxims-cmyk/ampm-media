'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, ProcessTimeline, ProofTile } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const stats = [{ value: '335K+', label: 'Views generated' }, { value: '+9%', label: 'Avg monthly growth' }, { value: '15%', label: 'New audience reach' }, { value: '100%', label: 'Client retention' }]
const processSteps = [{ number: '01', title: 'Discovery', description: 'We audit your presence and identify quick wins.' }, { number: '02', title: 'Strategy', description: 'Custom content + ads blueprint for your business.' }, { number: '03', title: 'Execution', description: 'We produce, post, and optimise. You focus on business.' }, { number: '04', title: 'Scale', description: 'Monthly reviews and continuous improvement.' }]
const forYouItems = ["You're doing £20K+/month and ready to invest", "You want content that converts, not just looks pretty", "You're tired of posting without seeing results", "You need a partner, not just another vendor"]
const notForYouItems = ["You're looking for the cheapest option", "You want to go viral overnight", "You expect results without any involvement", "You're not ready to commit to at least 3 months"]
const faqs = [{ question: 'How long until I see results?', answer: 'Most clients see increased engagement within the first month. Meaningful business results typically start around month 2-3.' }, { question: 'What do I need to provide?', answer: 'Access to your social accounts, 2-3 hours per month for content capture, and responsiveness on WhatsApp for approvals.' }, { question: 'Do you lock me into a long contract?', answer: "We require a 3-month minimum. After that, it's month-to-month. We keep clients because we deliver results." }]

export default function CreativePage() {
  return (
    <div className="bg-creative min-h-screen text-white selection:bg-white selection:text-creative font-body">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

        <div className="container-wide relative z-10 py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-6">
              <ScarcityBadge text="3 spots left for February" variant="light" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/60 text-xs uppercase tracking-wider mb-2 font-bold">AM:PM</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-6">
              :Creative
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-white/90 mb-2 font-medium">
              Branding & Design
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              We design brands that demand attention. From logos to full visual identities.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="bg-white text-creative font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">Start Project</Link>
              <Link href="#work" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">View Work</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof - Darker Overlay */}
      <section id="work" className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Selected Work</h2></div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* The instruction was: "Replace StatsBar and FAQAccordion with Stitch versions." */}
            {/* There was no StatsBar in the original code, but the instruction's code block introduced StitchStats. */}
            {/* The instruction's code block also replaced WorkCard with ProofTile. */}
            {/* I will follow the provided code block for the changes. */}
            {/* The original import was: `import { ProcessTimeline, FAQAccordion, WorkCard } from '@/components/ui'` */}
            {/* The new imports should be: `import { ProcessTimeline, ProofTile } from '@/components/ui'` and `import { StitchStats } from '@/components/stitch/StitchStats'` and `import { StitchFAQ } from '@/components/stitch/StitchFAQ'` */}
            {/* This means `FAQAccordion` and `WorkCard` are removed from the `components/ui` import. */}
            {/* `ProofTile` is added to `components/ui` import. */}
            {/* `StitchStats` and `StitchFAQ` are added as new imports. */}
            {/* The `ProcessTimeline` component usage remains unchanged. */}
            <ProcessTimeline steps={processSteps} variant="dark" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      < section className="relative py-24 px-6 bg-black/40" >
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">Questions</h2></div>
          <StitchFAQ items={faqs} /> {/* Replaced FAQAccordion with StitchFAQ */}
        </div>
      </section >

      {/* CTA */}
      < section className="relative py-32 px-6 overflow-hidden" >
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Ready to create?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Tell us about your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-creative font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Get Started</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Book a Call</Link>
          </div>
        </div>
      </section >
    </div >
  )
}
