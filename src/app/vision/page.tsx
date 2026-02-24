'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScarcityBadge, ProofTile, WorkCard, MediaCard } from '@/components/ui'
import { StitchStats } from '@/components/stitch/StitchStats'
import { StitchFAQ } from '@/components/stitch/StitchFAQ'
import { ClientMarquee } from '@/components/ui/ClientMarquee'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const services = [
  { title: 'Social Video', description: 'Scroll-stopping content for TikTok, Reels, and Shorts', includes: ['Concept development', 'On-location filming', 'Professional editing', 'Platform optimisation'] },
  { title: 'Brand Films', description: 'Cinematic storytelling that captures your brand essence', includes: ['Script writing', 'Storyboarding', 'Full production', 'Colour grading'] },
  { title: 'Content Days', description: "Batch-produce a month's content in a single session", includes: ['Pre-production planning', 'Full day shoot', '10-15 deliverables', 'Same-week turnaround'] },
  { title: 'Studio Shoots', description: 'Headshots, product photography, and video content shot in our Glasgow studio', includes: ['Professional lighting setup', 'Green screen available', 'Autocue for presenting', 'Camera operator included'] },
]
const stats = [{ value: '1M+', label: 'Views Generated' }, { value: '80+', label: 'Videos Produced' }, { value: '15+', label: 'Clients' }, { value: '24h', label: 'Turnaround' }]
const mediaItems = [
  { title: 'Namak Mandi - Content Day', description: '167K views from one shoot' },
  { title: 'Brand Film Production', description: 'Cinematic storytelling for brands' },
  { title: 'Social Content Package', description: 'Scroll-stopping reels and shorts' },
]
const faqs = [{ question: 'Do you provide models?', answer: 'We can source talent, but we prefer to use real people / staff where possible for authenticity.' }, { question: 'How much does it cost?', answer: 'We have packages starting from £1,500/month for ongoing content.' }, { question: 'Do you travel?', answer: 'Yes, we cover the whole UK. Travel expenses apply outside Glasgow.' }]

export default function VisionPage() {
  return (
    <div className="bg-vision min-h-screen text-white selection:bg-white selection:text-vision font-body">
      {/* HERO */}
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
            <motion.p variants={fadeUp} className="text-xl text-white/90 mb-2 font-medium">
              Video that converts
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Social content, brand films, showreels - produced to perform. We don't just make pretty videos. We make videos that get results.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="bg-white text-vision font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide">Get a Quote</Link>
              <Link href="#work" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">See Our Work</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Showreel */}
      <section className="relative py-16 px-6">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Our Showreel</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-video bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-vision/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="text-white/40 text-sm font-display font-bold uppercase tracking-widest">[SHOWREEL VIDEO]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">What we create</h2></motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="w-full h-px bg-white/10 mb-6"></div>
                <ul className="space-y-3">{service.includes.map((item, j) => <li key={j} className="flex items-center gap-3 text-white/80 text-sm"><svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{item}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-24 px-6 bg-black/20">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Recent work</h2></motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <WorkCard title="Restaurant Content Day" client="Namak Mandi" category="vision" metric="167K views" imagePlaceholder="" />
            <WorkCard title="Product Launch" client="Wee Drop" category="vision" imagePlaceholder="" />
            <WorkCard title="Brand Film" client="[Client Name]" category="vision" imagePlaceholder="" />
          </div>
          {/* Adding StitchStats here based on the instruction's implied placement */}
          <StitchStats stats={stats} />
        </div>
      </section>

      {/* Recent Productions */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/20 to-black/40">
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Recent Productions</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <MediaCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 bg-black/40">
        <div className="container-wide max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">Questions</h2></div>
          <StitchFAQ items={faqs} />
        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee title="We've Worked With" />

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="container-wide max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Ready to create?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">Tell us about your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-vision font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest">Get Started</Link>
            <Link href="/contact" className="border border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest">Book a Call</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
