'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ScarcityBadge, ProofTile } from '@/components/ui'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const services = [
  { title: 'Logo & Brand Identity', description: 'Full brand system from scratch — logo, colours, typography, and guidelines that make you unmistakable.' },
  { title: 'Website Design & Build', description: 'Next.js or Webflow, conversion-focused. Fast, beautiful, and built to capture leads.' },
  { title: 'SEO & Landing Pages', description: 'Rank higher, convert more. Pages engineered for search engines and real humans.' },
  { title: 'App Design', description: 'UI/UX for mobile and web apps. Intuitive interfaces that users actually enjoy.' },
  { title: 'Animation', description: 'Logo animations, motion graphics, and micro-interactions that bring your brand to life.' },
]

const processSteps = [
  { number: 1, title: 'Discovery', details: 'We dig into your business, audience, competitors, and goals. No assumptions — just research and real conversations.' },
  { number: 2, title: 'Strategy', details: 'Positioning, messaging, and competitive analysis. We define exactly how your brand should feel and where it fits in the market.' },
  { number: 3, title: 'Logo & Identity', details: 'Logo design, colour palette, typography selection. Multiple concepts refined until it feels unmistakably yours.' },
  { number: 4, title: 'Brand System', details: 'Full brand guidelines, templates, social assets, and everything your team needs to stay consistent.' },
  { number: 5, title: 'Deliverables', details: 'Final files in every format you need — SVG, PNG, PDF. Full handover, launch support, and ongoing tweaks.' },
]

const weDropJourney = [
  { step: 1, title: 'Logo design + animation', division: ':Creative', color: 'bg-creative' },
  { step: 2, title: 'App v2 design', division: ':Creative', color: 'bg-creative' },
  { step: 3, title: 'First website', division: ':Creative', color: 'bg-creative' },
  { step: 4, title: 'Content creation', division: ':Vision', color: 'bg-vision' },
  { step: 5, title: 'Marketing & leads', division: ':Impact', color: 'bg-impact', comingSoon: true },
]

const faqs = [
  { question: 'How long does a brand project take?', answer: 'Typically 4-6 weeks from discovery to delivery. Rush timelines available for an additional fee.' },
  { question: 'What do I get at the end?', answer: 'Full brand guidelines, all logo files (SVG, PNG, PDF), colour palette, typography system, and templates for social, print, and web.' },
  { question: 'Do you build websites too?', answer: 'Yes. We design and build in Next.js or Webflow depending on your needs. Every site integrates with :Impact for lead capture.' },
]

export default function CreativePage() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <div className="bg-creative min-h-screen text-white selection:bg-white selection:text-creative font-body">

      {/* ───────────── HERO ───────────── */}
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
              We design brands that demand attention. From logos to full visual identities, websites to app interfaces — everything crafted to convert.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="bg-white text-creative font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide text-center">Start Project</Link>
              <Link href="#work" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide text-center">View Work</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── SERVICES GRID ───────────── */}
      <section className="relative py-24 px-6 bg-black/10">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">What We Do</h2>
            <p className="text-white/60 max-w-xl mx-auto">End-to-end creative services. One team, no hand-offs.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 transition-colors hover:bg-white/[0.08]"
              >
                <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────── OUR PROCESS ───────────── */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/60 max-w-xl mx-auto">Five steps from brief to brand. No fluff.</p>
          </motion.div>

          <div className="space-y-3">
            {processSteps.map((step) => {
              const isActive = activeStep === step.number
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white text-creative border-white'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                  }`}
                  onClick={() => setActiveStep(isActive ? null : step.number)}
                >
                  <div className="flex items-center gap-4 p-6">
                    <span className={`text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-creative text-white' : 'bg-white/10 text-white/60'
                    }`}>
                      {step.number}
                    </span>
                    <h3 className={`text-lg font-display font-bold ${isActive ? 'text-creative' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <span className={`ml-auto text-xl transition-transform ${isActive ? 'rotate-45 text-creative' : 'text-white/40'}`}>+</span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-18 text-creative/70 leading-relaxed">
                          {step.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────── WEBSITES THAT CONVERT ───────────── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Websites That Convert</h2>
            <p className="text-white/60 max-w-2xl mx-auto">We build sites that look stunning AND drive results. Every site integrates with :Impact for lead capture.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="https://dxims.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 group transition-colors hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-white/40 font-bold">Live Showcase</span>
                <span className="text-white/40 group-hover:text-white/70 transition-colors">&rarr;</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">dxims.co.uk</h3>
              <p className="text-white/60 leading-relaxed">Full design and build. Fast, responsive, conversion-ready.</p>
            </motion.a>

            <motion.div
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center"
            >
              <span className="text-white/20 text-4xl mb-3">+</span>
              <p className="text-white/40 font-medium">Your site could be here</p>
              <p className="text-white/30 text-sm mt-1">More client sites launching soon</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link href="/impact" className="text-white/60 hover:text-white transition-colors text-sm underline underline-offset-4 decoration-white/20 hover:decoration-white/60">
              See how :Impact powers lead capture &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────────── CASE STUDY: WEE DROP ───────────── */}
      <section className="relative py-24 px-6 bg-black/30">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <span className="text-xs uppercase tracking-wider text-white/40 font-bold">Case Study</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Wee Drop</h2>
            <p className="text-white/60 max-w-xl mx-auto">From zero to launch. One client, full AM:PM ecosystem.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              {weDropJourney.map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="flex items-start gap-6">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">{item.step}</span>
                  </div>
                  <div className="pt-2.5 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-display font-bold text-white">{item.title}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color} text-white`}>
                        {item.division}
                        {item.comingSoon && <span className="ml-1 opacity-70">(coming soon)</span>}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section id="work" className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/40">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Selected Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProofTile metric="Full Brand" label="Identity & App Design" client="Wee Drop" imagePlaceholder="" featured />
            <ProofTile metric="Website" label="Design & Development" client="Wee Drop" imagePlaceholder="" />
            <ProofTile metric="Visual ID" label="Logo & Brand Guidelines" client="AM:PM Media" imagePlaceholder="" />
          </div>
        </div>
      </section>

      {/* ───────────── BUILT TO CONVERT ───────────── */}
      <section className="relative py-24 px-6 bg-black/40">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-10 sm:p-14 text-center relative overflow-hidden"
          >
            {/* Accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-impact" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Built to Convert</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Every :Creative website integrates with :Impact — AI lead capture, 5-second response, booking automation. Design meets performance.
            </p>
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 bg-impact text-white font-bold px-8 py-4 rounded-full hover:bg-impact/90 transition-colors uppercase tracking-wide"
            >
              See :Impact &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/40 to-black/50">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">Questions</h2>
          </div>
          <StitchFAQ items={faqs} />
        </div>
      </section>

      {/* ───────────── CLIENT MARQUEE ───────────── */}
      <ClientMarquee items={['Namak Mandi', 'Wee Drop']} />

      {/* ───────────── CTA ───────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to create?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-white/80 mb-10 font-light">
            Tell us about your project.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-creative font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Get Started</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Book a Call</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
