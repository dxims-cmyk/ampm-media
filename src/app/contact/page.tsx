'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }
const faqs = [{ question: 'How quickly do you respond?', answer: 'Within 24 hours on business days.' }, { question: "What happens on a discovery call?", answer: "30-minute video call to discuss your goals. No obligation." }, { question: 'Do you work outside Glasgow?', answer: 'Yes. We work across UK and internationally.' }]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-[#0C1220] py-24 lg:py-32">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5DC] mb-6">Let&apos;s talk</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[#F5F5DC]/70">Book a call or send us a message. We respond within 24 hours.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F5F5DC] section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Book a Call - Primary CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-premium">
              <span className="inline-block px-3 py-1 bg-impact/10 text-impact text-xs font-semibold uppercase tracking-wider rounded-full mb-4">Recommended</span>
              <h2 className="text-2xl font-bold text-[#2A1E1A] mb-2">Book a Growth Call</h2>
              <p className="text-[#2A1E1A]/60 mb-6">30-minute video call to discuss your goals.</p>

              {/* Trust indicator */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-[#F5F5DC]/50 rounded-lg">
                <svg className="w-5 h-5 text-impact" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium text-[#2A1E1A]">195K+ views generated for clients</span>
              </div>

              <ul className="space-y-3 mb-8">
                {['Understand your business', 'Quick audit of presence', 'Honest next steps', 'No obligation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#2A1E1A]/70 text-sm">
                    <svg className="w-4 h-4 text-impact" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="aspect-[4/3] bg-[#D4A574]/20 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-[#2A1E1A]/40"><p className="text-sm">[CALENDLY EMBED]</p></div>
              </div>
              <a href="https://calendly.com/YOUR_LINK" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">Book a Call →</a>
            </div>

            {/* Send a Message - 4 fields only */}
            <div className="bg-white rounded-2xl p-8 shadow-premium">
              <h2 className="text-2xl font-bold text-[#2A1E1A] mb-2">Send a Message</h2>
              <p className="text-[#2A1E1A]/60 mb-4">Quick questions or project enquiries.</p>

              {/* Trust indicator */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-[#F5F5DC]/50 rounded-lg">
                <svg className="w-5 h-5 text-studio" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium text-[#2A1E1A]">We respond within 24 hours</span>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-studio mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-xl font-semibold text-[#2A1E1A] mb-2">Message sent!</h3>
                  <p className="text-[#2A1E1A]/60">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#2A1E1A] mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#2A1E1A]/20 focus:border-impact focus:ring-2 focus:ring-impact/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Field 2: Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#2A1E1A] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#2A1E1A]/20 focus:border-impact focus:ring-2 focus:ring-impact/20 outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Field 3: Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[#2A1E1A] mb-1">Phone *</label>
                    <div className="flex gap-2">
                      <select className="px-3 py-3 rounded-lg border border-[#2A1E1A]/20 focus:border-impact outline-none bg-white text-sm">
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+353">🇮🇪 +353</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 px-4 py-3 rounded-lg border border-[#2A1E1A]/20 focus:border-impact focus:ring-2 focus:ring-impact/20 outline-none transition-all"
                        placeholder="7123 456789"
                      />
                    </div>
                  </div>

                  {/* Field 4: Service Interest */}
                  <div>
                    <label className="block text-sm font-medium text-[#2A1E1A] mb-1">What can we help with? *</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#2A1E1A]/20 focus:border-impact focus:ring-2 focus:ring-impact/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="growth-system">Growth System (Content + Ads)</option>
                      <option value="video">Video Production</option>
                      <option value="studio">Recording Session</option>
                      <option value="branding">Branding / Design</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50 mt-6">
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p className="text-xs text-[#2A1E1A]/40 text-center mt-4">
                    By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0C1220] section-padding">
        <StitchFAQ items={faqs} />
      </section>

      <section className="bg-[#070D17] py-12">
        <div className="container-wide text-center">
          <p className="text-[#F5F5DC]/60">Based in <span className="text-[#F5F5DC]">Glasgow, Scotland</span></p>
          <p className="text-[#F5F5DC]/40 text-sm mt-1">Working with brands worldwide</p>
        </div>
      </section>
    </>
  )
}
