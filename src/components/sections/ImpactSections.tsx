'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Check, Loader2, Zap, Phone, BarChart3, MessageSquare, Users, Bot } from 'lucide-react'

const bgColor = '#1a0a06'
const textColor = '#F5F5DC'
const accentColor = '#E44F2A'

const features = [
  {
    icon: Zap,
    title: 'Leads contacted in under 30 seconds',
    description: 'The moment a lead comes in from your ads, Impact fires off a WhatsApp alert to you and an email to the prospect. Speed wins deals.',
  },
  {
    icon: Bot,
    title: 'AI calls and qualifies every lead',
    description: 'Our AI receptionist phones each lead within 30 seconds, asks qualifying questions, and routes hot prospects straight to your phone.',
  },
  {
    icon: Phone,
    title: 'Hot leads transferred live to your phone',
    description: 'When the AI identifies a ready buyer, it transfers the call to you in real time. Warm leads get booked into your calendar automatically.',
  },
  {
    icon: MessageSquare,
    title: 'Every conversation in one inbox',
    description: 'WhatsApp, SMS, email, Instagram DMs, and Messenger. All in one place. Reply from any channel without switching tabs.',
  },
  {
    icon: BarChart3,
    title: 'See exactly which ads make you money',
    description: 'Track every lead from first click to closed deal. Know your cost per lead, your best campaigns, and your real return on ad spend.',
  },
  {
    icon: Users,
    title: 'Find new customers before competitors do',
    description: 'Search for businesses in your area, scrape their details, and reach out before anyone else. Up to 200 leads per day, ready to contact.',
  },
]

const tiers = [
  {
    name: 'Core',
    price: '1,500',
    description: 'Everything you need to capture and manage leads from your ad campaigns.',
    features: [
      'Speed-to-lead notifications (WhatsApp + email)',
      'Unified inbox (5 channels)',
      'Lead management and pipeline',
      'Ad campaign tracking (Meta, Google)',
      'Automated email follow-ups',
      'Basic reporting and analytics',
      'Lead capture forms',
      'Cal.com booking integration',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '2,000',
    description: 'AI-powered calling and qualification. Let the system close for you.',
    features: [
      'Everything in Core, plus:',
      'AI Receptionist (auto-calls every lead)',
      'Hot lead live transfer to your phone',
      'Warm lead auto-booking',
      'Call recordings and transcripts',
      'Advanced automations',
      'Priority email support',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '2,500',
    description: 'Full suite with content, reputation management, and strategic support.',
    features: [
      'Everything in Growth, plus:',
      'Content gallery and creation tools',
      'Reputation management',
      'Advanced reports and insights',
      'Monthly strategy calls',
      'Priority support',
    ],
    cta: 'Go Pro',
    highlighted: false,
  },
]

const addons = [
  {
    name: 'AI Receptionist',
    price: '400',
    description: 'Add AI calling to your Core plan. Every lead gets a phone call within 30 seconds.',
    availability: 'Core plan only',
  },
  {
    name: 'Outbound Leads',
    price: '300',
    description: 'Search and scrape up to 200 local businesses per day. Build your prospect list fast.',
    availability: 'Core + Growth plans',
  },
]

const integrations = {
  live: ['Meta Lead Ads', 'WhatsApp', 'SMS', 'Email', 'Instagram DM', 'Facebook Messenger', 'Cal.com', 'Stripe', 'Vapi', 'Apify'],
  coming: ['Google Ads', 'TikTok Ads'],
}

const borderColor = 'rgba(245,245,220,0.1)'

export function ImpactAbout() {
  return (
    <section className="py-24" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-[0.2em]" style={{ color: textColor, opacity: 0.4 }}>
            About Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ color: textColor }}>
            Your leads are worth nothing if nobody calls them back
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.6 }}>
            Impact is a lead management platform built by AM:PM Media. It captures leads from your ad campaigns, contacts them in under 30 seconds, qualifies them with AI phone calls, and sends the hot ones straight to your phone. No more missed leads. No more slow follow-ups. Just conversations that close.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function ImpactFeatures() {
  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm uppercase tracking-[0.2em]" style={{ color: textColor, opacity: 0.4 }}>
            What Impact Does
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4" style={{ color: textColor }}>
            From ad click to closed deal. Automatically.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border"
              style={{ borderColor }}
            >
              <feature.icon className="w-6 h-6 mb-4" style={{ color: accentColor }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: textColor }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: textColor, opacity: 0.5 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ImpactPricing() {
  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em]" style={{ color: textColor, opacity: 0.4 }}>
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4" style={{ color: textColor }}>
            Simple pricing. No surprises.
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: textColor, opacity: 0.5 }}>
            All plans include full platform access, unlimited users, and dedicated onboarding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 border relative ${tier.highlighted ? 'border-2' : ''}`}
              style={{
                borderColor: tier.highlighted ? accentColor : borderColor,
                backgroundColor: tier.highlighted ? 'rgba(228,79,42,0.05)' : 'transparent',
              }}
            >
              {tier.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs uppercase tracking-wider font-semibold"
                  style={{ backgroundColor: accentColor, color: '#fff' }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold" style={{ color: textColor }}>
                {tier.name}
              </h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold" style={{ color: textColor }}>
                  &#163;{tier.price}
                </span>
                <span className="text-sm" style={{ color: textColor, opacity: 0.4 }}>/mo</span>
              </div>
              <p className="text-sm mb-6" style={{ color: textColor, opacity: 0.5 }}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: textColor, opacity: 0.7 }}>
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.driveimpact.io"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? 'hover:opacity-90'
                    : 'border hover:bg-[#F5F5DC] hover:text-[#1a0a06]'
                }`}
                style={{
                  backgroundColor: tier.highlighted ? accentColor : 'transparent',
                  color: tier.highlighted ? '#fff' : textColor,
                  borderColor: tier.highlighted ? 'transparent' : 'rgba(245,245,220,0.2)',
                }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Addons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: textColor }}>
            Add-ons
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="p-6 border flex items-start justify-between"
                style={{ borderColor }}
              >
                <div>
                  <h4 className="font-semibold" style={{ color: textColor }}>{addon.name}</h4>
                  <p className="text-sm mt-1" style={{ color: textColor, opacity: 0.5 }}>{addon.description}</p>
                  <span className="text-xs mt-2 inline-block uppercase tracking-wider" style={{ color: textColor, opacity: 0.3 }}>
                    {addon.availability}
                  </span>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <span className="text-2xl font-bold" style={{ color: textColor }}>&#163;{addon.price}</span>
                  <span className="text-xs" style={{ color: textColor, opacity: 0.4 }}>/mo</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ImpactIntegrations() {
  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-[0.2em]" style={{ color: textColor, opacity: 0.4 }}>
            Integrations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8" style={{ color: textColor }}>
            Connects to the tools you already use
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {integrations.live.map((name) => (
              <span
                key={name}
                className="px-4 py-2 text-sm border"
                style={{ borderColor: 'rgba(245,245,220,0.15)', color: textColor, opacity: 0.7 }}
              >
                {name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.coming.map((name) => (
              <span
                key={name}
                className="px-4 py-2 text-sm border opacity-40"
                style={{ borderColor, color: textColor }}
              >
                {name} (coming soon)
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ImpactCTA() {
  const [formData, setFormData] = React.useState({
    first_name: '',
    company: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_IMPACT_WEBHOOK_URL
        || 'https://www.driveimpact.io/api/webhooks/lead-form?org_slug=ampm-media'

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.first_name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          source: 'mediampm.com/impact',
          notes: 'Enquiry from AM:PM Media website Impact page',
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ first_name: '', company: '', email: '', phone: '' })
      } else {
        throw new Error('Failed to submit')
      }
    } catch {
      window.location.href = `mailto:dxims@mediampm.com?subject=Impact Enquiry&body=Name: ${formData.first_name}%0ABusiness: ${formData.company}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    borderColor: 'rgba(245,245,220,0.15)',
    color: textColor,
  }

  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: textColor }}>
              See Impact in action
            </h2>
            <p className="text-lg mb-8" style={{ color: textColor, opacity: 0.6 }}>
              Watch how leads get captured, contacted, and qualified in real time. No sales pitch. Just the platform doing its job.
            </p>
            <a
              href="https://www.driveimpact.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: accentColor, color: '#fff' }}
            >
              See Impact in Action
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-sm mt-6" style={{ color: textColor, opacity: 0.4 }}>
              Part of <Link href="/" className="underline">AM:PM Media</Link> · Glasgow, Scotland
            </p>
          </motion.div>

          {/* Secondary Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 border"
            style={{ borderColor }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(228,79,42,0.15)' }}
                >
                  <Check className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: textColor }}>Thanks for your interest</h3>
                <p className="text-sm" style={{ color: textColor, opacity: 0.5 }}>
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-2" style={{ color: textColor }}>
                  Want to know more?
                </h3>
                <p className="text-sm mb-6" style={{ color: textColor, opacity: 0.5 }}>
                  Leave your details and we will walk you through Impact.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="impact-name" className="block text-xs uppercase tracking-wider mb-2" style={{ color: textColor, opacity: 0.5 }}>
                        Name *
                      </label>
                      <input
                        id="impact-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors focus:border-[#E44F2A]/50 placeholder:text-[#F5F5DC]/20"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="impact-company" className="block text-xs uppercase tracking-wider mb-2" style={{ color: textColor, opacity: 0.5 }}>
                        Business Name
                      </label>
                      <input
                        id="impact-company"
                        type="text"
                        placeholder="Your business"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors focus:border-[#E44F2A]/50 placeholder:text-[#F5F5DC]/20"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="impact-email" className="block text-xs uppercase tracking-wider mb-2" style={{ color: textColor, opacity: 0.5 }}>
                      Email *
                    </label>
                    <input
                      id="impact-email"
                      type="email"
                      required
                      placeholder="you@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors focus:border-[#E44F2A]/50 placeholder:text-[#F5F5DC]/20"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="impact-phone" className="block text-xs uppercase tracking-wider mb-2" style={{ color: textColor, opacity: 0.5 }}>
                      Phone
                    </label>
                    <input
                      id="impact-phone"
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors focus:border-[#E44F2A]/50 placeholder:text-[#F5F5DC]/20"
                      style={inputStyle}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: accentColor, color: '#fff' }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Get in Touch'
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
