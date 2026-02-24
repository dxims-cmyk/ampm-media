'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, ProofTile, MediaCard } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const stats = [{ value: '335K+', label: 'Views generated' }, { value: '+9%', label: 'Avg monthly growth' }, { value: '15%', label: 'New audience reach' }, { value: '100%', label: 'Client retention' }]
const mediaItems = [
  { title: 'Wee Drop - Brand Identity', description: 'Full visual identity from concept to delivery' },
  { title: 'AM:PM Media - Rebrand', description: 'Our own brand refresh in action' },
  { title: 'Client Showcase', description: 'Design systems that scale' },
]
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
              <ScarcityBadge text="1 spot left for March" variant="light" />
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

      {/* Selected Work */}
      <section id="work" className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Selected Work</h2></motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ProofTile metric="Full Brand" label="Identity & App Design" client="Wee Drop" imagePlaceholder="" featured />
            <ProofTile metric="Website" label="Design & Development" client="Wee Drop" imagePlaceholder="" />
            <ProofTile metric="Visual ID" label="Logo & Brand Guidelines" client="AM:PM Media" imagePlaceholder="" />
          </div>
          <StitchStats stats={stats} />
        </div>
      </section>

      {/* Design in Motion - Showreel */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/40">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Design in Motion</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/60 max-w-xl mx-auto">See how our design process comes to life.</motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <MediaCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 bg-black/40">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">Questions</h2></div>
          <StitchFAQ items={faqs} />
        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee title="We've Worked With" />

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
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
      </section>
    </div>
  )
}
