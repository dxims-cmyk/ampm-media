'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { activeDivisions } from '@/lib/config'

// Map URL slugs to division IDs
const slugToDivision: Record<string, string> = {
  creative: 'creative',
  vision: 'vision',
  studio: 'studio',
  impact: 'impact',
}

export default function DivisionPage() {
  const params = useParams()
  const slug = params.division as string
  const divisionId = slugToDivision[slug]
  
  const division = activeDivisions.find((d) => d.id === divisionId)
  
  if (!division) {
    return (
      <>
        <Header variant="dark" />
        <main className="min-h-screen flex items-center justify-center bg-[#0C1220]">
          <div className="text-center px-6">
            <h1 className="text-4xl font-bold text-[#F5F5DC] mb-4">Division Not Found</h1>
            <p className="text-[#F5F5DC]/60 mb-8">This division doesn&apos;t exist or isn&apos;t available yet.</p>
            <Link 
              href="/"
              className="inline-block px-6 py-3 border border-[#F5F5DC]/30 text-[#F5F5DC] text-sm uppercase tracking-wider hover:bg-[#F5F5DC] hover:text-[#0C1220] transition-all"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const currentIndex = activeDivisions.findIndex((d) => d.id === division.id)
  const prevDivision = activeDivisions[currentIndex - 1]
  const nextDivision = activeDivisions[currentIndex + 1]
  
  // Determine header variant based on background
  const headerVariant = division.bgColor === '#F8F8F8' || division.bgColor === '#C8CDD3' ? 'light' : 'dark'

  return (
    <>
      <Header variant={headerVariant} currentDivision={division.name} />
      <main>
        {/* Hero Section with big title */}
        <HeroSection 
          title={division.displayName}
          bgColor={division.bgColor}
          textColor={division.textColor}
        />

        {/* About Section */}
        <section 
          className="py-24"
          style={{ backgroundColor: division.bgColor }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span 
                className="text-sm uppercase tracking-[0.2em] opacity-40"
                style={{ color: division.textColor }}
              >
                About
              </span>
              <h2 
                className="text-3xl md:text-4xl font-bold mt-4 mb-6"
                style={{ color: division.textColor }}
              >
                {division.tagline}
              </h2>
              <p 
                className="text-lg leading-relaxed opacity-60"
                style={{ color: division.textColor }}
              >
                {division.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          className="py-24 border-t"
          style={{ 
            backgroundColor: division.bgColor,
            borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span 
                className="text-sm uppercase tracking-[0.2em] opacity-40"
                style={{ color: division.textColor }}
              >
                Services
              </span>
              <h2 
                className="text-3xl md:text-4xl font-bold mt-4"
                style={{ color: division.textColor }}
              >
                What we offer
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {division.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border"
                  style={{ 
                    borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
                  }}
                >
                  <span 
                    className="text-4xl font-bold opacity-20"
                    style={{ color: division.textColor }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 
                    className="text-lg font-semibold mt-4"
                    style={{ color: division.textColor }}
                  >
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section 
          id="contact-section" 
          className="py-24 border-t"
          style={{ 
            backgroundColor: division.bgColor,
            borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
          }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl md:text-5xl font-bold mb-6"
                style={{ color: division.textColor }}
              >
                Ready to get started?
              </h2>
              <p 
                className="text-lg mb-10 opacity-60"
                style={{ color: division.textColor }}
              >
                Let&apos;s discuss how {division.name} can help bring your vision to life.
              </p>
              <a
                href="mailto:hello@mediampm.com"
                className="inline-block px-8 py-4 border text-sm uppercase tracking-wider transition-all duration-300"
                style={{ 
                  borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
                  color: division.textColor
                }}
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Navigation to other divisions */}
        <section 
          className="py-8 border-t"
          style={{ 
            backgroundColor: division.bgColor,
            borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              {prevDivision ? (
                <Link
                  href={prevDivision.href}
                  className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
                  style={{ color: division.textColor }}
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider opacity-50">Previous</div>
                    <div className="font-medium">: {prevDivision.displayName}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextDivision ? (
                <Link
                  href={nextDivision.href}
                  className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
                  style={{ color: division.textColor }}
                >
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wider opacity-50">Next</div>
                    <div className="font-medium">: {nextDivision.displayName}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
