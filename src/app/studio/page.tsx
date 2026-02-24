'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ScarcityBadge, MediaCard } from '@/components/ui'
import { IdlePopup } from '@/components/ui/IdlePopup'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const sessions = [
  { id: '1hr', duration: '1 Hour', price: '£40', saving: null, description: 'Quick & focused. Single track or vocal session.', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
  { id: '3hr', duration: '3 Hours', price: '£100', saving: 'Save £20', description: 'The sweet spot. Track, refine, polish.', calUrl: 'https://cal.com/ampmedia/studio-session-3hr' },
  { id: '5hr', duration: '5 Hours', price: '£150', saving: 'Save £50', description: 'Full session. Write, record, release-ready.', calUrl: 'https://cal.com/ampmedia/studio-session-5hr' },
]

const services = [
  { title: 'Recording', description: 'Vocals, instruments, and full tracks in a professional sound-treated environment.', features: ['Vocal recording & comping', 'Live instrument tracking', 'Sound-treated isolation room', 'Multi-track session files'] },
  { title: 'Mixing', description: 'Transform raw recordings into polished, release-ready tracks.', features: ['Full mix from stems', 'EQ, compression & effects', 'Reference track matching', 'Unlimited revisions'] },
  { title: 'Mastering', description: 'Final polish for streaming, vinyl, or any format.', features: ['Loudness optimisation', 'Stereo enhancement', 'Format-specific masters', 'Distribution-ready files'] },
]
const stats = [{ value: 'Pro', label: 'Sound Treated' }, { value: '48kHz', label: 'Recording Quality' }, { value: '24bit', label: 'Bit Depth' }, { value: '100%', label: 'Acoustically Treated' }]
const equipment = ['Neumann TLM 103', 'Shure SM7B', 'Apollo Twin Interface', 'Ableton Live / Logic Pro', 'Professional acoustic treatment', 'Comfortable lounge area']
const faqs = [
  { question: 'What do I need to bring?', answer: 'Just yourself and your ideas. We provide all equipment, microphones, and software. If you play an instrument, bring that too.' },
  { question: 'Is there an engineer?', answer: 'Yes, all bookings include a studio engineer to handle recording, mixing, and technical setup so you can focus on performing.' },
  { question: 'Can I get my track mixed and mastered here?', answer: 'Absolutely. We offer recording, mixing, and mastering all under one roof. Most artists book a longer session to cover the full process.' },
  { question: 'What genres do you work with?', answer: 'Everything - rap, R&B, pop, rock, acoustic, voiceovers. The studio is versatile and the engineer adapts to your style.' },
]

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
              <motion.p variants={fadeUp} className="text-xl text-white/90 mb-2 font-medium">
                Music Recording Studio
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                Professional recording, mixing, and mastering in Glasgow. A sound-treated space with premium equipment and engineering support to bring your music to life.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#book" className="bg-white text-studio font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">Book a Session</Link>
                <Link href="#services" className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">See Services</Link>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">What We Do</h2></motion.div>
          <StitchStats stats={stats} />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 rounded-2xl p-5 md:p-8 shadow-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md">
                <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{service.description}</p>
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
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Professional setup</motion.h2>
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
                <div className="flex items-center justify-between mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-camel/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-camel" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-display font-bold text-lg">{selected?.duration}</p>
                      <p className="text-white/60 text-sm">{selected?.price} - {selected?.description}</p>
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

      {/* Studio Tour - Loom Embed Slot */}
      <section className="relative py-24 px-6 bg-black/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Studio Tour</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/60 max-w-xl mx-auto">Take a look around our Glasgow recording space.</motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/*
              TO ADD LOOM VIDEO: Replace the MediaCard below with:
              <MediaCard title="Studio Tour" type="loom" loomId="YOUR_LOOM_ID" />
            */}
            <MediaCard title="Studio Tour" description="Full walkthrough of our sound-treated recording space" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <StitchFAQ items={faqs} />

      {/* Client Marquee */}
      <ClientMarquee items={['RAH', 'Dxims', 'Jamalco', 'AI Markez']} />

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

      {/* Idle Popup - 45s trigger */}
      <IdlePopup
        idleTimeout={45000}
        heading="Ready to record?"
        subheading="Book your studio session now - limited slots available each week."
        ctaText="Book a Session"
        ctaHref="#book"
        dismissText="Just browsing"
        storageKey="ampm-idle-studio"
      />
    </div>
  )
}
