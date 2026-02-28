'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, MediaCard, TestimonialVideoCard } from '@/components/ui'
import { ClientMarquee } from '@/components/ui/ClientMarquee'
import { IdlePopup } from '@/components/ui/IdlePopup'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ROICalculator } from '@/components/impact/ROICalculator'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const features = [
  { icon: '🎯', title: 'AI Lead Scoring', description: 'Every enquiry scored and prioritised automatically based on intent signals and engagement data.' },
  { icon: '📞', title: 'AI Receptionist', description: '24/7 phone answering that qualifies callers, answers FAQs, and books appointments - even at 3am.' },
  { icon: '💬', title: 'AI SMS/WhatsApp Responder', description: 'Instant auto-replies that feel human. Qualifies leads and keeps conversations warm while you focus.' },
  { icon: '⚡', title: '5-Second Alerts', description: 'WhatsApp, SMS, and email notifications the moment a lead comes in. Never miss another enquiry.' },
  { icon: '📅', title: 'Smart Booking', description: 'Cal.com and Calendly integration. Leads book directly into your calendar with zero friction.' },
  { icon: '📊', title: 'Dashboard & CRM', description: 'Pipeline management, lead notes, history, and tags. Plus HubSpot sync for enterprise teams.' },
  { icon: '💳', title: 'Payments & Deposits', description: 'Stripe integration for booking deposits and upfront payments. Get paid before you show up.' },
  { icon: '🧾', title: 'Accounting Sync', description: 'Xero and QuickBooks auto-invoicing. Every payment tracked, every invoice sent automatically.' },
]

const integrationGroups = [
  { label: 'Lead Sources', items: [
    { name: 'Meta', status: 'connected' },
    { name: 'TikTok', status: 'connected' },
    { name: 'Google', status: 'connected' },
    { name: 'WhatsApp', status: 'connected' },
  ]},
  { label: 'AI & Automation', items: [
    { name: 'Claude', status: 'connected' },
    { name: 'Zapier', status: 'connected' },
  ]},
  { label: 'Booking & Calendar', items: [
    { name: 'Cal.com', status: 'connected' },
    { name: 'Calendly', status: 'connected' },
  ]},
  { label: 'Messaging', items: [
    { name: 'Email', status: 'connected' },
    { name: 'Instagram DM', status: 'connected' },
    { name: 'Messenger', status: 'connected' },
  ]},
  { label: 'Business Tools', items: [
    { name: 'Xero', status: 'coming' },
    { name: 'Stripe', status: 'coming' },
    { name: 'HubSpot', status: 'coming' },
  ]},
]

const faqs = [
  { question: 'How long until I see results?', answer: 'Most clients see increased engagement within the first month. Meaningful business results typically start around month 2-3.' },
  { question: 'What do I need to provide?', answer: 'Access to your social accounts, 2-3 hours per month for content capture, and responsiveness on WhatsApp for approvals.' },
  { question: 'Do you lock me into a long contract?', answer: "We require a 3-month minimum. After that, it's month-to-month. We keep clients because we deliver results." },
  { question: 'What platforms do you manage?', answer: 'Instagram, TikTok, Facebook, and Google Ads. We focus on where your audience is most active and where ROI is highest.' },
  { question: 'Can I just use the SaaS without the content team?', answer: 'Yes. Our SaaS-only tier at £1,500/month gives you the full lead management system, dashboard, and automations without the content production.' },
  { question: 'How is this different from a CRM?', answer: "A CRM stores data. Impact generates leads, scores them, notifies you instantly, and automates follow-up. It's a growth engine, not a database." },
]

export default function ImpactPage() {
  return (
    <div className="bg-impact min-h-screen text-white selection:bg-white selection:text-impact font-body">
      {/* 1. HERO */}
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
              The growth system that turns content into customers
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Content strategy, Meta ads, lead management, and instant notifications - all in one platform. Stop losing leads to slow response times.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-impact font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide text-center">Book a Demo</Link>
              <Link href="#roi-calculator" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide text-center">Calculate Your ROI</Link>
            </motion.div>

            {/* Social Proof Stats Bar */}
            <motion.div variants={fadeUp} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                <span className="text-2xl font-display font-bold text-white">5s</span>
                <div className="text-left">
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Response Time</p>
                  <p className="text-white/50 text-[10px]">Industry avg: 47 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                <span className="text-2xl font-display font-bold text-white">78%</span>
                <div className="text-left">
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Higher Close Rate</p>
                  <p className="text-white/50 text-[10px]">vs manual follow-up</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                <span className="text-2xl font-display font-bold text-white">3x</span>
                <div className="text-left">
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">More Qualified Leads</p>
                  <p className="text-white/50 text-[10px]">AI-scored & prioritised</p>
                </div>
              </div>
            </motion.div>

            {/* REVIEW BADGES - Uncomment when ready:
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <img src="/images/google-reviews-badge.svg" alt="Google Reviews" className="h-10" />
              <img src="/images/trustpilot-badge.svg" alt="Trustpilot" className="h-10" />
            </motion.div>
            */}
          </motion.div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Sound familiar?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-12">You're posting content, but it's not converting</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["You spend hours creating content that gets 12 likes", "You've tried boosting posts with zero results", "Leads come in but you respond hours later", "Your competitors are everywhere and you're invisible"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                <svg className="w-6 h-6 text-white/40 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-white/90 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT THAT PERFORMS */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Content that performs</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Namak Mandi went from 33K views in January to 213K in February. That&apos;s what happens when we take over.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: '548%', label: 'Growth', sub: 'Namak Mandi in 15 days' },
              { value: '213K', label: 'Views', sub: 'February (up from 33K)' },
              { value: '70%', label: 'Non-Followers', sub: 'New audience reached' },
              { value: '13', label: 'Reels/Week', sub: 'Consistency wins' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/90 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="relative py-24 px-6 bg-black/20">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Three steps to growth</h2>
            <p className="text-white/60 max-w-xl mx-auto">From setup to results in under 30 days.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Connect', description: 'We plug into your socials, set up tracking, and build your lead capture system.' },
              { step: '02', title: 'Qualify', description: 'AI scores every lead. Hot prospects trigger instant WhatsApp alerts to your phone.' },
              { step: '03', title: 'Convert', description: 'Auto-responses keep leads warm. You close the deal. Dashboard tracks everything.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Everything you need to grow</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-display font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ROI CALCULATOR */}
      <ROICalculator />

      {/* 6. CASE STUDIES */}
      <section id="case-studies" className="relative py-24 px-6 bg-black/30">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Real results. Real businesses.</h2>
            <p className="text-white/60 max-w-xl mx-auto">See what :Impact has done for businesses like yours.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <MediaCard title="Namak Mandi - 167K Views" description="Restaurant went viral with our content system. 167K views in 30 days." />
            <MediaCard title="Palais Bar - 140K/month" description="Ongoing growth system delivering 140K views monthly with +9% MoM growth." />
            <MediaCard title="Your Business?" description="This spot could be yours. Book an audit to see what's possible." />
          </div>
        </div>
      </section>

      {/* 6b. VIDEO TESTIMONIALS */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/35">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Hear from our clients</h2>
            <p className="text-white/60 max-w-xl mx-auto">Real business owners sharing real results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialVideoCard
              quote="The speed-to-lead system changed everything. We went from losing enquiries to booking 3x more clients in the first month."
              name="Restaurant Owner"
              business="Namak Mandi, Glasgow"
            />
            <TestimonialVideoCard
              quote="We were posting content but getting nothing back. AM:PM built us a system that actually converts followers into customers."
              name="Bar Manager"
              business="Glasgow Nightlife Venue"
            />
            <TestimonialVideoCard
              quote="The dashboard alone is worth it. I can see exactly where every lead comes from and what's converting."
              name="Business Owner"
              business="Glasgow Business"
            />
          </div>
        </div>
      </section>

      {/* AI RECEPTIONIST HIGHLIGHT */}
      <section className="relative py-24 px-6 bg-black/35">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">New Feature</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Never miss another call</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">Your AI receptionist answers 24/7, qualifies leads, and books appointments - even at 3am.</p>
              <div className="space-y-4 mb-8">
                {[
                  { point: 'Answers in a natural voice', desc: 'Callers won\'t know it\'s AI' },
                  { point: 'Asks qualifying questions', desc: 'Filters tyre-kickers from real leads' },
                  { point: 'Books directly to your calendar', desc: 'Zero friction, zero admin' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <div>
                      <p className="text-white font-medium">{item.point}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-impact font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">
                Hear It In Action
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <p className="text-white/40 text-sm font-display font-bold uppercase tracking-widest">[DEMO AUDIO / VIDEO]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/40">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Connects with your stack</h2>
          </motion.div>
          <div className="space-y-8">
            {integrationGroups.map((group, gi) => (
              <div key={gi}>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">{group.label}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.items.map((int, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-white font-display font-bold text-sm mb-2">{int.name}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${int.status === 'connected' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/40'}`}>
                        {int.status === 'connected' ? 'Connected' : 'Coming Soon'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Marquee */}
        <div className="mt-16">
          <ClientMarquee items={['Meta', 'TikTok', 'Google', 'WhatsApp', 'Claude', 'Cal.com', 'Calendly', 'Zapier', 'Xero', 'QuickBooks', 'Stripe', 'GoCardless', 'HubSpot', 'Mailchimp']} label="Integrates With" />
        </div>
      </section>

      {/* 8. PRICING */}
      <section className="relative py-24 px-6 bg-black/40">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Simple pricing. Serious results.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SaaS Only */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">SaaS Only</p>
              <h3 className="text-4xl font-display font-bold text-white mb-1">£1,500<span className="text-lg text-white/50">/month</span></h3>
              <p className="text-white/50 text-sm mb-8">The system. You handle content.</p>
              <ul className="space-y-3 mb-8">
                {[':Impact Dashboard & CRM', 'AI Lead Scoring', 'AI Receptionist (24/7 calls)', 'AI SMS/WhatsApp Responder', '5-Second Lead Alerts', 'Cal.com/Calendly Booking', 'Meta, TikTok, Google Integration', 'Zapier Connection', 'Xero/Stripe Integration'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="block w-full border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide text-center">Get Started</Link>
            </motion.div>

            {/* Full Service */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/10 border-2 border-white/20 rounded-2xl p-8 backdrop-blur-sm relative">
              <span className="absolute -top-3 right-6 px-3 py-1 bg-white text-impact text-xs font-bold uppercase tracking-wider rounded-full">Recommended</span>
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Full Service</p>
              <h3 className="text-4xl font-display font-bold text-white mb-1">£2,500<span className="text-lg text-white/50">/month</span></h3>
              <p className="text-white/50 text-sm mb-8">System + AM:PM content team.</p>
              <ul className="space-y-3 mb-8">
                {['Everything in SaaS Only', 'AM:PM Content Team', 'Monthly Content Creation', 'Strategy Calls', 'Priority Support', 'HubSpot/CRM Migration Help'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-impact font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 uppercase tracking-wide text-center">Book a Demo</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. LOOM DEMO */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/40 to-black/50">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">See it in action</h2>
            <p className="text-white/60 max-w-xl mx-auto">Watch a 2-minute walkthrough of the Impact dashboard.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            {/*
              TO ADD LOOM VIDEO: Replace the placeholder below with:
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe src="https://www.loom.com/embed/YOUR_LOOM_ID" frameBorder="0" allowFullScreen className="w-full aspect-video" />
              </div>
            */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <p className="text-white/40 text-sm font-display font-bold uppercase tracking-widest">Dashboard Walkthrough</p>
                  <p className="text-white/25 text-xs mt-2">[LOOM EMBED - Replace with your Loom ID]</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-impact/20 rounded-3xl blur-3xl -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </section>

      {/* Client Marquee - Lead Gen Clients */}
      <ClientMarquee items={['Namak Mandi', 'Palais Bar', 'Wee Drop']} />

      {/* 10. FAQ */}
      <section className="relative py-24 px-6 bg-black/50">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">Questions</h2>
          </motion.div>
          <StitchFAQ items={faqs} />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <ScarcityBadge text="Doors closing soon" variant="light" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-8 mb-6">Ready to grow?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Book a free audit and see how many leads you're leaving on the table.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cal.com/ampmedia/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-impact font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Book Your Audit</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Send a Message</Link>
          </div>
        </div>
      </section>

      {/* Idle Popup - 30s trigger */}
      <IdlePopup
        idleTimeout={30000}
        heading="Still thinking?"
        subheading="Book a free audit and we'll show you exactly where your growth is hiding."
        ctaText="Book Free Audit"
        ctaHref="https://cal.com/ampmedia/30min"
        storageKey="ampm-idle-impact"
      />
    </div>
  )
}
