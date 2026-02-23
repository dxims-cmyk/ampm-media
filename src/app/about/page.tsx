'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const values = [
  { title: 'Results over aesthetics', description: "Pretty content that doesn't convert is useless. We optimize for outcomes." },
  { title: 'Operator mindset', description: "We think like business owners because we are one." },
  { title: 'Radical honesty', description: "We'll tell you what you need to hear, not what you want to hear." },
  { title: 'Long-term partnerships', description: "We build relationships that compound." },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory mb-6">Built by an operator, not a committee</motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-ivory/70 mb-8">AM:PM Media started from a simple belief: most agencies create content, but few create customers. We exist to bridge that gap.</motion.p>
            </motion.div>
            <div className="relative aspect-square bg-navy-light rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-ivory/20 text-sm p-4 text-center">[IMAGE: Your photo]</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-chocolate mb-8">The story</h2>
          <div className="space-y-6 text-chocolate/80">
            <p>I started AM:PM because I was tired of seeing businesses waste money on agencies that prioritized awards over outcomes.</p>
            <p>Before AM:PM, I was designing apps, building brands, and creating content - often all for the same client. I&apos;d start with a logo project and end up as Head Designer on a full product build.</p>
            <p>That&apos;s what AM:PM is. Four divisions - Impact, Vision, Studio, Creative - under one roof. Based in Glasgow, working with ambitious brands everywhere.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-chocolate/10">
            <p className="text-chocolate font-semibold">Colm</p>
            <p className="text-chocolate/60 text-sm">Founder, AM:PM Media</p>
          </div>
        </div>
      </section>

      <section className="bg-navy section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] bg-navy-light rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-ivory/20 text-sm">[IMAGE: Professional headshot]</div>
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-ivory mb-4">Colm</h2>
              <p className="text-camel text-lg mb-6">Founder & Creative Director</p>
              <div className="space-y-4 text-ivory/70">
                <p>Designer, producer, and strategist at the intersection of creativity and commerce.</p>
                <p>When I&apos;m not building growth systems for clients, I&apos;m producing music as Dxims.</p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Brand Strategy', 'UI/UX Design', 'Video Production', 'Meta Ads', 'Music Production', 'Web Development'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-ivory/60 text-sm">
                    <svg className="w-4 h-4 text-impact" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-camel section-padding">
        <div className="container-wide">
          <div className="text-center mb-12"><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate">What we believe</h2></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-premium">
                <h3 className="text-lg font-semibold text-chocolate mb-2">{value.title}</h3>
                <p className="text-chocolate/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-padding">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-6">Let&apos;s work together</h2>
          <p className="text-lg text-ivory/70 mb-8">If you&apos;re looking for a partner - not just a vendor - let&apos;s talk.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="btn-primary">See If We&apos;re a Fit</Link>
            <Link href="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
