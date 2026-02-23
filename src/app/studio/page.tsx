'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ScarcityBadge, ProofTile } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const sessions = [
  { id: '1hr', duration: '1 Hour', price: '£40', saving: null, description: 'Quick & focused. Single track or vocal session.', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
  { id: '3hr', duration: '3 Hours', price: '£100', saving: 'Save £20', description: 'The sweet spot. Track, refine, polish.', calUrl: 'https://cal.com/ampmedia/studio-session-3hr' },
  { id: '5hr', duration: '5 Hours', price: '£150', saving: 'Save £50', description: 'Full session. Write, record, release-ready.', calUrl: 'https://cal.com/ampmedia/studio-session-5hr' },
]

const services = [{ title: 'Podcast Recording', price: '£80/hr', features: ['4x Shure SM7B Microphones', 'Rodecaster Pro II Console', '4K Multi-Cam Setup', 'Sound Treated Room'] }, { title: 'Content Production', price: '£100/hr', features: ['Professional Lighting', 'Green Screen Available', 'Autocue System', 'Camera Operator Included'] }]
const stats = [{ value: '4K', label: 'Video Quality' }, { value: '4', label: 'Cam Setup' }, { value: '24/7', label: 'Access' }, { value: '100%', label: 'Sound Proof' }]
const equipment = ['Neumann TLM 103', 'Shure SM7B', 'Apollo Twin Interface', 'Ableton Live / Logic Pro', 'Professional acoustic treatment', 'Comfortable lounge area']
const faqs = [{ question: 'Do I need to bring SD cards?', answer: 'No, we handle all data transfer. You get a link to download files within 24 hours.' }, { question: 'Is there an engineer?', answer: 'Yes, all bookings include a studio engineer to handle technical setup.' }, { question: 'Can I livestream?', answer: 'Yes, we have high-speed fibre internet and dedicated streaming hardware.' }]

export default function StudioPage() {
  const [selectedSession, setSelectedSession] = useState<string | null>(null)
  const selected = sessions.find(s => s.id === selectedSession)

  return (
    <div className="bg-studio min-h-screen text-white selection:bg-white selection:text-studio font-body">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

        <div className="container-wide relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6">
                <ScarcityBadge text="Limited studio slots left for March" variant="light" />
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/60 text-xs uppercase tracking-wider mb-2 font-bold">AM:PM</motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-white mb-6">
                :Studio
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                Professional recording in Glasgow. Podcasts, music, voiceovers — a comfortable space with professional equipment and engineering support.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#book" className="bg-white text-studio font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">Book a Session</Link>
                <Link href="#services" className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">See Pricing</Link>
              </motion.div>
            </motion.div>
            <div className="relative aspect-[4/3] bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm p-4 text-center font-display font-bold uppercase tracking-widest">[IMAGE: Studio interior photo]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container-wide">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Services & Pricing</h2></div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ProofTile metric="Pro" label="Audio" client="Recording" imagePlaceholder="" featured />
            <ProofTile metric="4K" label="Video" client="Production" imagePlaceholder="" />
            <ProofTile metric="Live" label="Streaming" client="Setup" imagePlaceholder="" />
          </div>
          <StitchStats stats={stats} />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 rounded-2xl p-5 md:p-8 shadow-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-display font-bold text-white">{service.title}</h3>
                  <div className="text-right">
                    <p className="text-3xl font-display font-bold text-camel">{service.price}</p>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10 mb-6"></div>
                <ul className="space-y-3">{service.features.map((item, j) => <li key={j} className="flex items-center gap-3 text-white/80 text-sm"><svg className="w-4 h-4 text-camel" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{item}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Professional setup</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {equipment.map((item, i) => <div key={i} className="flex items-center gap-3 text-white/80 text-lg"><svg className="w-5 h-5 text-camel" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{item}</div>)}
              </div>
            </div>
            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-camel/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-white/20 text-sm font-display font-bold uppercase tracking-widest">[IMAGE: Studio equipment]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Session - Apple-style Selector */}
      <section id="book" className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/40">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Book Your Session</h2>
            <p className="text-lg text-white/60">Choose your session length, then pick a time.</p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedSession ? (
              <motion.div
                key="selector"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              >
                {sessions.map((session, i) => (
                  <motion.button
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedSession(session.id)}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-left hover:bg-white/10 hover:border-white/25 transition-all hover:-translate-y-1 cursor-pointer"
                  >
                    {session.saving && (
                      <span className="absolute -top-3 right-4 px-3 py-1 bg-camel text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {session.saving}
                      </span>
                    )}
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">{session.duration}</p>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-camel mb-4">{session.price}</p>
                    <div className="w-full h-px bg-white/10 mb-4"></div>
                    <p className="text-white/60 text-sm leading-relaxed">{session.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors text-sm font-medium">
                      <span>Select</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Selected session summary */}
                <div className="flex items-center justify-between mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-camel/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-camel" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-display font-bold text-lg">{selected?.duration}</p>
                      <p className="text-white/60 text-sm">{selected?.price} — {selected?.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSession(null)}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Change
                  </button>
                </div>

                {/* Cal.com embed */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white shadow-2xl">
                  <iframe
                    src={`${selected?.calUrl}?embed=true&theme=light`}
                    className="w-full border-0"
                    style={{ height: '650px', minHeight: '500px' }}
                    title={`Book ${selected?.duration} studio session`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <StitchFAQ items={faqs} />

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Ready to record?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Book your session or get in touch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="bg-white text-studio font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Book a Session</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Ask a Question</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
