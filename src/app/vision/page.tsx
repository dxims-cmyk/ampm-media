'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, WorkCard } from '@/components/ui'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const services = [
  {
    title: 'Social Media Content',
    description: 'Reels, TikToks, Stories - platform-native content shot and edited for maximum engagement.',
    includes: ['Instagram Reels', 'TikTok content', 'Stories & behind-the-scenes', 'Platform optimisation'],
  },
  {
    title: 'Video Production',
    description: 'Brand films, ad creatives, and testimonial videos that tell your story and sell your product.',
    includes: ['Brand films', 'Ad creatives', 'Testimonial videos', 'Colour grading'],
  },
  {
    title: 'Photography',
    description: 'Product shots, lifestyle imagery, and professional headshots for your brand.',
    includes: ['Product photography', 'Lifestyle shoots', 'Professional headshots', 'Multiple setups'],
  },
  {
    title: 'Content Strategy & Scheduling',
    description: 'We plan your content calendar, post at optimal times, and track what converts.',
    includes: ['Content calendars', 'Posting schedules', 'Performance tracking', 'Monthly optimisation'],
  },
]

const processSteps = [
  { step: '01', title: 'Discovery Call', description: 'We learn your brand, your audience, and your goals. No fluff, just clarity on what needs to happen.' },
  { step: '02', title: 'Shoot Day', description: 'We come to your location and batch-produce content. One day of filming = weeks of posts.' },
  { step: '03', title: 'Edit & Deliver', description: 'Professional editing, colour grading, and captions. Ready-to-post content packs delivered to your inbox.' },
  { step: '04', title: 'Results', description: 'We track what\'s working, cut what isn\'t, and optimise every month. Content that compounds.' },
]

const packages = [
  {
    name: 'Starter',
    price: '500',
    description: 'Get consistent content flowing.',
    includes: ['Weekly shoot session', '8-12 posts per month', 'Basic editing & captions', 'Content calendar'],
  },
  {
    name: 'Growth',
    price: '1,000',
    popular: true,
    description: 'Scale your presence and engagement.',
    includes: ['Weekly shoot session', '15-20 posts per month', 'Stories & behind-the-scenes', 'Strategy calls', 'Performance tracking'],
  },
  {
    name: 'Premium',
    price: '2,000',
    description: 'Full content team + ads creative.',
    includes: ['Full content production', 'Ads creative (Meta, TikTok)', 'Photography included', 'Monthly strategy', 'Priority turnaround'],
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
  { question: 'How much does it cost?', answer: 'Packages start from \u00a3500/month for ongoing content. One-off projects are quoted individually based on scope.' },
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
            <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-white/90 mb-2 font-medium">
              Content That Converts
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Video, photography, and social content that gets results - not just views. We don&apos;t make pretty videos. We make videos that grow your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-vision font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide text-center">Book a Discovery Call</Link>
              <Link href="#packages" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide text-center">See Packages</Link>
            </motion.div>
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

      {/* ── SERVICES ── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">What we create</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Everything your brand needs to show up, stand out, and convert.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="w-full h-px bg-white/10 mb-6" />
                <ul className="space-y-3">
                  {service.includes.map((item, j) => (
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

      {/* ── PROCESS ── */}
      <section className="relative py-24 px-6 bg-black/30">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">How it works</h2>
            <p className="text-white/60 max-w-xl mx-auto">From first call to first post in under two weeks.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/40">
        <div className="container-wide max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Packages</h2>
            <p className="text-white/60 max-w-xl mx-auto">Consistent content, predictable pricing. No surprises.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 backdrop-blur-sm relative ${pkg.popular ? 'bg-white/10 border-2 border-white/20' : 'bg-white/5 border border-white/10'}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-1 bg-white text-vision text-xs font-bold uppercase tracking-wider rounded-full">Most Popular</span>
                )}
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">{pkg.name}</p>
                <h3 className="text-4xl font-display font-bold text-white mb-1">
                  &pound;{pkg.price}<span className="text-lg text-white/50">/month</span>
                </h3>
                <p className="text-white/50 text-sm mb-8">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80 text-sm">
                      <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://cal.com/ampmedia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full font-bold px-8 py-4 rounded-full uppercase tracking-wide text-center transition-all hover:-translate-y-1 ${pkg.popular ? 'bg-white text-vision hover:bg-white/90' : 'border border-white/30 text-white hover:bg-white/10'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE WORK ── */}
      <section id="work" className="relative py-24 px-6 bg-black/40">
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

      {/* ── CONTENT TO LEADS ── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/40 to-black/50">
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
      <section className="relative py-24 px-6 bg-black/50">
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
          <p className="text-xl text-white/80 mb-10 font-light">Book a discovery call and let&apos;s plan your content.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-vision font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Book a Discovery Call</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Send a Message</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
