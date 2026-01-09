'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { activeDivisions, divisions, navigationPillars } from '@/lib/config'

export default function HomePage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        {/* Hero - : MEDIA */}
        <HeroSection 
          title="MEDIA" 
          bgColor="#0C1220"
          textColor="#F5F5DC"
        />

        {/* Active Divisions Showcase */}
        <section className="bg-[#0C1220] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                Active Divisions
              </span>
              <h2 className="text-[#F5F5DC] text-4xl md:text-5xl font-bold mt-4">
                What we do
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeDivisions.map((division, index) => (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={division.href}
                    className="group block p-8 border border-[#F5F5DC]/10 rounded-sm hover:border-[#F5F5DC]/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span 
                        className="text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ color: division.textColor === '#000000' ? '#F5F5DC' : division.color }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-[#F5F5DC] text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
                      : {division.displayName}
                    </h3>
                    <p className="text-[#F5F5DC]/50 mb-4">
                      {division.tagline}
                    </p>
                    <p className="text-[#F5F5DC]/30 text-sm leading-relaxed">
                      {division.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="bg-[#0a0e18] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                The Ecosystem
              </span>
              <h2 className="text-[#F5F5DC] text-4xl md:text-5xl font-bold mt-4">
                4 Pillars. {divisions.length} Divisions.
              </h2>
            </motion.div>

            <div className="space-y-12">
              {navigationPillars.map((pillar, pillarIndex) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: pillarIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-[#F5F5DC] text-lg font-semibold">
                      {pillar.name}
                    </h3>
                    <div className="flex-1 h-px bg-[#F5F5DC]/10" />
                    <span className="text-[#F5F5DC]/30 text-sm">
                      {pillar.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {pillar.divisions.map((division) => (
                      <div
                        key={division.id}
                        className={`p-3 border rounded-sm ${
                          division.status === 'active'
                            ? 'border-[#F5F5DC]/20 bg-[#F5F5DC]/5'
                            : 'border-[#F5F5DC]/5 opacity-50'
                        }`}
                      >
                        <span className="text-[#F5F5DC] text-sm font-medium">
                          {division.shortName}
                        </span>
                        {division.status === 'launching-soon' && (
                          <span className="block text-[#F5F5DC]/30 text-[10px] uppercase mt-1">
                            Soon
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-[#0C1220] py-24 border-t border-[#F5F5DC]/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#F5F5DC] text-4xl md:text-6xl font-bold mb-6">
                Let&apos;s create something
              </h2>
              <p className="text-[#F5F5DC]/50 text-lg mb-10 max-w-xl mx-auto">
                Ready to elevate your brand? Get in touch and let&apos;s start a conversation.
              </p>
              <a
                href="mailto:hello@mediampm.com"
                className="inline-block px-8 py-4 border border-[#F5F5DC]/30 text-[#F5F5DC] text-sm uppercase tracking-wider hover:bg-[#F5F5DC] hover:text-[#0C1220] transition-all duration-300"
              >
                hello@mediampm.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
