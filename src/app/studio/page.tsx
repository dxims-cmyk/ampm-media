'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ScarcityBadge } from '@/components/ui'
import { IdlePopup } from '@/components/ui/IdlePopup'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

/* ─── Animation variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

/* ─── Data ─── */
const sessions = [
  { id: '1hr', duration: '1 Hour', price: '£40', saving: null, description: 'Quick & focused. Single track or vocal session.', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
  { id: '3hr', duration: '3 Hours', price: '£100', saving: 'Save £20', description: 'The sweet spot. Track, refine, polish.', calUrl: 'https://cal.com/ampmedia/studio-session-3hr' },
  { id: '5hr', duration: '5 Hours', price: '£150', saving: 'Save £50', description: 'Full session. Write, record, release-ready.', calUrl: 'https://cal.com/ampmedia/studio-session-5hr' },
]

const services = [
  { title: 'Recording', description: 'Vocals, instruments, and full tracks in a professional sound-treated environment.', features: ['Session options: 1hr / 3hr / 5hr', 'Vocal recording & comping', 'Live instrument tracking', 'Sound-treated isolation room', 'Multi-track session files'] },
  { title: 'Mixing', description: 'Transform raw recordings into polished, release-ready tracks.', features: ['Full mix from stems', 'EQ, compression & effects', 'Reference track matching', 'Unlimited revisions'] },
  { title: 'Mastering', description: 'Final polish for streaming, vinyl, or any format.', features: ['Loudness optimisation', 'Stereo enhancement', 'Format-specific masters', 'Distribution-ready files'] },
  { title: 'Studio Rental (Artists/Engineers)', description: 'Bring your own engineer and work independently in our professional space.', features: ['Full equipment access', 'Sound-treated room', 'Hourly booking available', 'Flexible scheduling'] },
  { title: 'Studio Rental (Photographers)', description: 'A professional photography space with everything you need.', features: ['100m white paper backdrop', 'Professional lighting setup', 'Hourly booking available', 'Clean, versatile space'] },
  { title: 'Photography', description: 'Professional photography services shot in-studio.', features: ['Headshots & portraits', 'Product photography', 'Content shoots', 'Quick turnaround'] },
]

const stats = [{ value: 'Pro', label: 'Sound Treated' }, { value: '48kHz', label: 'Recording Quality' }, { value: '24bit', label: 'Bit Depth' }, { value: '100%', label: 'Acoustically Treated' }]

const pricing = [
  { name: 'Recording 1hr', price: '£40', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
  { name: 'Recording 3hr', price: '£100', calUrl: 'https://cal.com/ampmedia/studio-session-3hr' },
  { name: 'Recording 5hr', price: '£150', calUrl: 'https://cal.com/ampmedia/studio-session-5hr' },
  { name: 'Photography Studio 1hr', price: '£40', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
  { name: 'Photography Studio Half Day', price: '£120', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
  { name: 'Studio Rental per hour', price: '£30', calUrl: 'https://cal.com/ampmedia/studio-1hr' },
]

const artists = [
  {
    name: 'RAH',
    spotify: 'https://open.spotify.com/artist/RAH',
    instagram: 'https://instagram.com/rah',
  },
  {
    name: 'Dxims',
    spotify: 'https://open.spotify.com/artist/Dxims',
    instagram: 'https://instagram.com/dxims',
    tiktok: 'https://tiktok.com/@dxims',
    website: 'https://dxims.co.uk',
  },
  {
    name: 'Jamalco',
    spotify: 'https://open.spotify.com/artist/Jamalco',
    instagram: 'https://instagram.com/jamalco',
  },
  {
    name: 'AI Markez',
    spotify: 'https://open.spotify.com/artist/AIMarkez',
    instagram: 'https://instagram.com/aimarkez',
  },
]

const faqs = [
  { question: 'What do I need to bring?', answer: 'Just yourself and your ideas. We provide all equipment, microphones, and software. If you play an instrument, bring that too.' },
  { question: 'Is there an engineer?', answer: 'Yes, all bookings include a studio engineer to handle recording, mixing, and technical setup so you can focus on performing.' },
  { question: 'Can I get my track mixed and mastered here?', answer: 'Absolutely. We offer recording, mixing, and mastering all under one roof. Most artists book a longer session to cover the full process.' },
  { question: 'What genres do you work with?', answer: 'Everything - rap, R&B, pop, rock, acoustic, voiceovers. The studio is versatile and the engineer adapts to your style.' },
  { question: 'Can I rent the studio without an engineer?', answer: 'Yes, we offer hourly studio rental for artists and engineers who want to work independently.' },
  { question: 'Do you do photography?', answer: 'Yes. Our studio has a 100m white paper backdrop and professional lighting for headshots, product shots, and content.' },
]

/* ─── Reusable check icon ─── */
const Check = () => (
  <svg className="w-4 h-4 text-camel flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

/* ─── Social icons ─── */
const SpotifyIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17v-3.44a4.85 4.85 0 01-2.42-.65 4.83 4.83 0 01-1.58-1.4V6.69z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-4.247m0 0A8.966 8.966 0 013 12c0-1.257.26-2.453.727-3.418" />
  </svg>
)

/* ─── Page ─── */
export default function StudioPage() {
  const [selectedSession, setSelectedSession] = useState<string | null>(null)
  const selected = sessions.find(s => s.id === selectedSession)

  return (
    <div className="bg-studio min-h-screen text-white selection:bg-white selection:text-studio font-body">

      {/* ════════════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════
          2. CHOOSE YOUR SPACE
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/10">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Choose Your Space</h2>
            <p className="text-lg text-white/60">Different vibes for different sessions. You choose.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Studio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-video bg-white/5 flex items-center justify-center border-b border-white/10">
                <span className="text-white/20 text-sm font-display font-bold uppercase tracking-widest">[IMAGE: Main Studio]</span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Main Studio</h3>
                <p className="text-camel text-sm font-medium mb-4">Namak Mandi Building</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Professional, acoustically treated, packed with pro equipment. Features a 100m white backdrop and full photography setup.
                </p>
                <ul className="space-y-3">
                  {['Professional acoustic treatment', 'Pro recording equipment', '100m white paper backdrop', 'Photography setup included'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm"><Check />{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* The OG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-video bg-white/5 flex items-center justify-center border-b border-white/10">
                <span className="text-white/20 text-sm font-display font-bold uppercase tracking-widest">[IMAGE: The OG - The Flat]</span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-1">The OG</h3>
                <p className="text-camel text-sm font-medium mb-4">The Flat</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Grassroots. Where it all started. An intimate setting with raw creative energy for artists who want that vibe.
                </p>
                <ul className="space-y-3">
                  {['Intimate recording environment', 'Where AM:PM started', 'Creative, relaxed energy', 'Perfect for focused sessions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm"><Check />{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-black/10 to-black/20">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">What We Do</h2>
          </motion.div>

          <StitchStats stats={stats} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-5 md:p-8 shadow-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="w-full h-px bg-white/10 mb-6" />
                <ul className="space-y-3">
                  {service.features.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80 text-sm"><Check />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. PRICING TABLE
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Pricing</h2>
            <p className="text-lg text-white/60">Simple, transparent pricing. No hidden fees.</p>
          </motion.div>

          <div className="grid gap-4">
            {pricing.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white font-display font-bold text-lg">{item.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-display font-bold text-camel">{item.price}</span>
                  <a
                    href={item.calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-studio font-bold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors text-sm uppercase tracking-wide"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          5. STUDIO POLICY
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-amber-500/40 bg-amber-500/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-7 h-7 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h2 className="text-2xl font-display font-bold text-white">Studio Policy</h2>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              AM:PM Studio is located within a Muslim-owned premises. Out of respect:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-amber-400 font-bold mt-0.5">-</span>
                No alcohol is permitted on the premises
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-amber-400 font-bold mt-0.5">-</span>
                Violation will result in immediate removal
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-amber-400 font-bold mt-0.5">-</span>
                No refunds will be issued
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-amber-400 font-bold mt-0.5">-</span>
                You will be banned from future bookings
              </li>
            </ul>
            <p className="text-white/50 text-sm italic">
              By booking, you agree to these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          6. PHOTOGRAPHY STUDIO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-black/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Photography Studio
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/60 mb-8 leading-relaxed">
                A clean, professional photography space inside AM:PM Studio with everything you need for a great shoot.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/80 text-lg"><Check />100m white paper backdrop</div>
                <div className="flex items-center gap-3 text-white/80 text-lg"><Check />Professional lighting</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-8">
                <p className="text-white/50 text-sm uppercase tracking-wider font-bold mb-3">Perfect for</p>
                <div className="flex flex-wrap gap-3">
                  {['Headshots', 'Product shots', 'Content'].map(tag => (
                    <span key={tag} className="bg-white/10 border border-white/10 text-white/80 text-sm px-4 py-2 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                <a
                  href="https://cal.com/ampmedia/studio-1hr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-studio font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
                >
                  Book a Shoot
                </a>
              </motion.div>
            </div>

            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-camel/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-white/20 text-sm font-display font-bold uppercase tracking-widest">[IMAGE: Photography studio setup]</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          7. FROM THE STUDIO - Spotify Embed
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/20">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">From the Studio</h2>
            <p className="text-lg text-white/60">Hear what&apos;s been created at AM:PM Studio</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            {/*
              TO ADD SPOTIFY PLAYLIST:
              Replace PLAYLIST_ID below with your actual Spotify playlist ID.
              You can find the playlist ID in the Spotify URL:
              https://open.spotify.com/playlist/PLAYLIST_ID
            */}
            <iframe
              src="https://open.spotify.com/embed/playlist/PLAYLIST_ID"
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          8. ARTISTS WE'VE WORKED WITH
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Artists We&apos;ve Worked With</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {artists.map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6 text-center"
              >
                {/* Artist image placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                  <span className="text-white/20 text-xs font-display font-bold uppercase tracking-wider">[Photo]</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{artist.name}</h3>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3">
                  <a href={artist.spotify} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#1DB954] transition-colors" aria-label={`${artist.name} on Spotify`}>
                    <SpotifyIcon />
                  </a>
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#E4405F] transition-colors" aria-label={`${artist.name} on Instagram`}>
                    <InstagramIcon />
                  </a>
                  {artist.tiktok && (
                    <a href={artist.tiktok} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label={`${artist.name} on TikTok`}>
                      <TikTokIcon />
                    </a>
                  )}
                  {artist.website && (
                    <a href={artist.website} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-camel transition-colors" aria-label={`${artist.name} website`}>
                      <GlobeIcon />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          9. BOOK YOUR SESSION - Apple-style Selector
      ════════════════════════════════════════════════════════════════ */}
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
                    <div className="w-full h-px bg-white/10 mb-4" />
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

      {/* ════════════════════════════════════════════════════════════════
          10. FAQ
      ════════════════════════════════════════════════════════════════ */}
      <StitchFAQ items={faqs} />

      {/* ════════════════════════════════════════════════════════════════
          11. CLIENT MARQUEE
      ════════════════════════════════════════════════════════════════ */}
      <ClientMarquee items={['RAH', 'Dxims', 'Jamalco', 'AI Markez']} />

      {/* ════════════════════════════════════════════════════════════════
          12. CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Ready to record?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Book your session or get in touch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="bg-white text-studio font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Book a Session</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Ask a Question</Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          13. IDLE POPUP
      ════════════════════════════════════════════════════════════════ */}
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
