'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const caseStudies = [
  {
    client: 'Namak Mandi',
    industry: 'Restaurant, Glasgow',
    headline: '548% increase in video views',
    subheadline: '33K to 213K views in 15 days',
    description: 'Namak Mandi came to us with inconsistent social content and low engagement. We implemented a consistent content strategy focused on authentic moments - real kitchen footage, genuine staff interactions, and behind-the-scenes storytelling.',
    approach: 'Consistent content strategy focused on authentic moments',
    stats: [
      { value: '548%', label: 'View Growth' },
      { value: '213K', label: 'Monthly Views' },
      { value: '70%', label: 'Non-Followers Reached' },
      { value: '13', label: 'Reels Per Week' },
    ],
    services: [':Vision - Content Creation', ':Vision - Social Strategy', ':Impact - Lead Management'],
    color: 'vision',
    status: 'live',
  },
  {
    client: 'Palais Bar',
    industry: 'Hospitality, Glasgow',
    headline: 'Social media management & content creation',
    subheadline: 'Building a consistent brand presence',
    description: 'Ongoing social media management and content creation for one of Glasgow\'s premier bar venues. Focused on event promotion, atmosphere content, and driving footfall through strategic social campaigns.',
    approach: 'Weekly content shoots, event coverage, and strategic posting schedule',
    stats: [
      { value: '140K', label: 'Monthly Views' },
      { value: '+9%', label: 'MoM Growth' },
      { value: '3x', label: 'Event Bookings' },
      { value: '24/7', label: 'Content Coverage' },
    ],
    services: [':Vision - Content Creation', ':Vision - Social Management'],
    color: 'vision',
    status: 'live',
  },
  {
    client: 'Your Business',
    industry: 'Coming Soon',
    headline: 'This could be your story',
    subheadline: 'We\'re looking for our next success story',
    description: 'We work with ambitious businesses ready to take their content and marketing seriously. If you\'re tired of posting content that gets ignored, let\'s talk about what a proper strategy looks like.',
    approach: 'Book a discovery call and let\'s find out what\'s possible',
    stats: [],
    services: [],
    color: 'camel',
    status: 'placeholder',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#0C1220] min-h-screen text-white selection:bg-camel selection:text-navy font-body">
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-vision/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-wide relative z-10 py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.p variants={fadeUp} className="text-camel text-xs uppercase tracking-widest mb-4 font-bold">Case Studies</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-[#F5F5DC] mb-6">
              Results That Speak
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-[#F5F5DC]/60 mb-8 max-w-2xl leading-relaxed">
              Real businesses. Real growth. No fluff, no vanity metrics - just measurable results from real campaigns.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      {caseStudies.map((study, i) => (
        <section key={study.client} className={`relative py-24 px-6 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{study.industry}</span>
                    {study.status === 'live' && (
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">Active Client</span>
                    )}
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-2">{study.client}</h2>
                  <p className="text-xl text-white/80 font-medium">{study.headline}</p>
                  {study.subheadline && (
                    <p className="text-white/50 mt-1">{study.subheadline}</p>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              {study.stats.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                >
                  {study.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-white/60 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Description + Services */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-white/70 text-lg leading-relaxed mb-6">{study.description}</p>
                  {study.approach && study.status !== 'placeholder' && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Our Approach</p>
                      <p className="text-white/80">{study.approach}</p>
                    </div>
                  )}
                  {study.status === 'placeholder' && (
                    <Link
                      href="https://cal.com/ampmedia/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-camel text-navy font-bold px-8 py-4 rounded-full hover:bg-camel/90 transition-all hover:-translate-y-1 uppercase tracking-wide"
                    >
                      Book a Discovery Call
                    </Link>
                  )}
                </div>
                {study.services.length > 0 && (
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Services Used</p>
                    <div className="space-y-2">
                      {study.services.map((service) => (
                        <div key={service} className="flex items-center gap-3 text-white/70 text-sm">
                          <svg className="w-4 h-4 text-white/40 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          {i < caseStudies.length - 1 && (
            <div className="container-wide mt-24">
              <div className="w-full h-px bg-white/10" />
            </div>
          )}
        </section>
      ))}

      {/* ── CLIENT MARQUEE ── */}
      <ClientMarquee items={['Namak Mandi', 'Palais Bar', 'Wee Drop', 'Obera Beauty & Spa']} />

      {/* ── CTA ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Want results like these?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Book a free audit and see what&apos;s possible for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="bg-[#F5F5DC] text-[#0C1220] font-bold px-10 py-5 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Book Free Audit</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Send a Message</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
