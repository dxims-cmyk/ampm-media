'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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

        {/* SEO H1 - Visually hidden but accessible */}
        <h1 className="sr-only">
          AM:PM Media - Creative Agency in Glasgow for Branding, Design & Video Production
        </h1>

        {/* About Section with SEO content */}
        <section className="bg-[#0C1220] py-24" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                About Us
              </span>
              <h2 id="about-heading" className="text-[#F5F5DC] text-3xl md:text-4xl font-bold mt-4 mb-6">
                Glasgow&apos;s Creative Agency Ecosystem
              </h2>
              <p className="text-[#F5F5DC]/60 text-lg leading-relaxed mb-4">
                <strong><Link href="/about" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC]">AM:PM Media</Link></strong> is a multi-disciplinary <Link href="/creative" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">creative agency based in Glasgow, Scotland</Link>. 
                We specialize in branding, web design, video production, and marketing solutions that help businesses and artists stand out.
              </p>
              <p className="text-[#F5F5DC]/60 text-lg leading-relaxed mb-6">
                Our ecosystem of specialized divisions means you get expert-level service across every creative discipline. 
                From <Link href="/creative" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">brand identity design</Link> to 
                {' '}<Link href="/vision" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">video production</Link>, 
                {' '}<Link href="/studio" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">music studio services</Link>, and 
                {' '}<Link href="/impact" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">digital marketing</Link> — 
                we&apos;re creating around the clock.
              </p>
              <Link 
                href="/about" 
                className="inline-block text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors underline"
              >
                Learn more about AM:PM Media →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Active Divisions Showcase */}
        <section className="bg-[#0C1220] py-24 border-t border-[#F5F5DC]/10" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                Our Services
              </span>
              <h2 id="services-heading" className="text-[#F5F5DC] text-3xl md:text-4xl font-bold mt-4">
                Creative Services by AM:PM Media Glasgow
              </h2>
              <p className="text-[#F5F5DC]/50 mt-4 max-w-2xl">
                Explore our active divisions offering branding, design, video production, music services, and marketing solutions in Glasgow and across Scotland.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeDivisions.map((division, index) => (
                <motion.article
                  key={division.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={division.href}
                    className="group block p-8 border border-[#F5F5DC]/10 rounded-sm hover:border-[#F5F5DC]/30 transition-all duration-300"
                    aria-label={`Learn more about ${division.name} - ${division.tagline}`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span 
                        className="text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ color: division.textColor === '#000000' ? '#F5F5DC' : division.color }}
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-[#F5F5DC] text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
                      : {division.displayName}
                    </h3>
                    <p className="text-[#F5F5DC]/50 mb-4 font-medium">
                      {division.tagline}
                    </p>
                    <p className="text-[#F5F5DC]/30 text-sm leading-relaxed">
                      {division.description}
                    </p>
                    <span className="inline-block mt-4 text-[#F5F5DC]/50 text-sm group-hover:text-[#F5F5DC] transition-colors">
                      Learn more about {division.shortName} →
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="bg-[#0a0e18] py-24" aria-labelledby="ecosystem-heading">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                The AM:PM Media Ecosystem
              </span>
              <h2 id="ecosystem-heading" className="text-[#F5F5DC] text-3xl md:text-4xl font-bold mt-4">
                4 Pillars. {divisions.length} Divisions. One Vision.
              </h2>
              <p className="text-[#F5F5DC]/50 mt-4 max-w-2xl">
                AM:PM Media&apos;s comprehensive creative agency structure covers every aspect of brand building — from creation to growth.
              </p>
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
                    <div className="flex-1 h-px bg-[#F5F5DC]/10" aria-hidden="true" />
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
                        {division.status === 'active' ? (
                          <Link 
                            href={division.href}
                            className="text-[#F5F5DC] text-sm font-medium hover:underline"
                          >
                            {division.shortName}
                          </Link>
                        ) : (
                          <span className="text-[#F5F5DC] text-sm font-medium">
                            {division.shortName}
                          </span>
                        )}
                        {division.status === 'launching-soon' && (
                          <span className="block text-[#F5F5DC]/30 text-[10px] uppercase mt-1">
                            Coming Soon
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

        {/* Why Choose AM:PM Media - SEO Content Section */}
        <section className="bg-[#0C1220] py-24 border-t border-[#F5F5DC]/10" aria-labelledby="why-heading">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                Why Choose Us
              </span>
              <h2 id="why-heading" className="text-[#F5F5DC] text-3xl md:text-4xl font-bold mt-4 mb-8">
                Why Work With AM:PM Media?
              </h2>
              
              <div className="space-y-6 text-[#F5F5DC]/60 leading-relaxed">
                <p>
                  As a <strong className="text-[#F5F5DC]/80">creative agency in Glasgow</strong>, AM:PM Media brings together expertise in branding, 
                  web design, video production, and digital marketing under one roof. Our integrated approach means your brand 
                  gets consistent, high-quality creative work across every touchpoint.
                </p>
                <p>
                  Whether you&apos;re a startup looking for <Link href="/creative" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">brand identity design</Link>, 
                  an established business needing <Link href="/vision" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">professional video content</Link>, 
                  or an artist seeking <Link href="/studio" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">music production services in Glasgow</Link> — 
                  AM:PM Media delivers results that exceed expectations.
                </p>
                <p>
                  Our <Link href="/impact" className="text-[#F5F5DC]/80 underline hover:text-[#F5F5DC]">marketing and advertising services</Link> are 
                  data-driven and results-focused, helping Scottish businesses grow their online presence and convert more customers.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-[#0C1220] py-24 border-t border-[#F5F5DC]/10" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="contact-heading" className="text-[#F5F5DC] text-3xl md:text-5xl font-bold mb-6">
                Start Your Project With AM:PM Media
              </h2>
              <p className="text-[#F5F5DC]/50 text-lg mb-10 max-w-xl mx-auto">
                Ready to elevate your brand? Get in touch with Glasgow&apos;s creative agency and let&apos;s create something extraordinary together.
              </p>
              <a
                href="mailto:dxims@mediampm.com"
                className="inline-block px-8 py-4 border border-[#F5F5DC]/30 text-[#F5F5DC] text-sm uppercase tracking-wider hover:bg-[#F5F5DC] hover:text-[#0C1220] transition-all duration-300"
                aria-label="Email AM:PM Media at dxims@mediampm.com"
              >
                dxims@mediampm.com
              </a>
              <p className="text-[#F5F5DC]/30 text-sm mt-6">
                Based in Glasgow, Scotland • Serving clients worldwide
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
