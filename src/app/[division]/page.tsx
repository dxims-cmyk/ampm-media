'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
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

// SEO metadata for each division
const divisionSEO: Record<string, { title: string; description: string; h1: string }> = {
  creative: {
    title: 'AM:PM Creative | Branding & Web Design Agency Glasgow',
    description: 'AM:PM Creative offers premium branding, web design, and design systems in Glasgow, Scotland. Transform your brand identity with our creative agency services.',
    h1: 'AM:PM Creative - Branding & Web Design Agency in Glasgow',
  },
  vision: {
    title: 'AM:PM Vision | Video Production Company Glasgow',
    description: 'AM:PM Vision is a video production company in Glasgow offering professional video editing, short-form content, documentaries, and campaign videos for businesses.',
    h1: 'AM:PM Vision - Video Production & Editing Services Glasgow',
  },
  studio: {
    title: 'AM:PM Studio | Recording & Music Production Glasgow',
    description: 'AM:PM Studio offers professional recording, mixing, mastering, and music production services in Glasgow, Scotland. Book your studio session today.',
    h1: 'AM:PM Studio - Recording & Music Production Glasgow',
  },
  impact: {
    title: 'AM:PM Impact | Digital Marketing Agency Glasgow',
    description: 'AM:PM Impact delivers data-driven marketing, paid social ads, and conversion optimization for businesses in Glasgow. Grow your brand with our marketing experts.',
    h1: 'AM:PM Impact - Digital Marketing & Advertising Agency Glasgow',
  },
}

export default function DivisionPage() {
  const params = useParams()
  const slug = params.division as string
  const divisionId = slugToDivision[slug]
  
  const division = activeDivisions.find((d) => d.id === divisionId)
  const seo = divisionSEO[slug]
  
  if (!division || !seo) {
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
              Return to AM:PM Media Home
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

  // JSON-LD Schema for this service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: division.name,
    description: division.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'AM:PM Media',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Glasgow',
        addressRegion: 'Scotland',
        addressCountry: 'GB',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Glasgow',
    },
    serviceType: division.services,
  }

  return (
    <>
      {/* Dynamic SEO meta tags */}
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://mediampm.com${division.href}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </Head>

      <Header variant={headerVariant} currentDivision={division.name} />
      <main>
        {/* Hero Section with big title */}
        <HeroSection 
          title={division.displayName}
          bgColor={division.bgColor}
          textColor={division.textColor}
        />

        {/* SEO H1 - Visually hidden but accessible */}
        <h1 className="sr-only">{seo.h1}</h1>

        {/* About Section */}
        <section 
          className="py-24"
          style={{ backgroundColor: division.bgColor }}
          aria-labelledby="about-division"
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
                About {division.shortName}
              </span>
              <h2 
                id="about-division"
                className="text-3xl md:text-4xl font-bold mt-4 mb-6"
                style={{ color: division.textColor }}
              >
                {division.tagline} — {division.name} Glasgow
              </h2>
              <p 
                className="text-lg leading-relaxed opacity-60"
                style={{ color: division.textColor }}
              >
                {division.description}
              </p>
              <p 
                className="text-lg leading-relaxed opacity-60 mt-4"
                style={{ color: division.textColor }}
              >
                Based in Glasgow, Scotland, {division.name} is part of the <Link href="/" className="underline opacity-80 hover:opacity-100">AM:PM Media</Link> creative 
                agency ecosystem, delivering professional {division.services.slice(0, 3).join(', ').toLowerCase()} services to businesses and artists across Scotland and beyond.
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
          aria-labelledby="services-section"
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
                Our Services
              </span>
              <h2 
                id="services-section"
                className="text-3xl md:text-4xl font-bold mt-4"
                style={{ color: division.textColor }}
              >
                {division.shortName} Services by AM:PM Media
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {division.services.map((service, index) => (
                <motion.article
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
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 
                    className="text-lg font-semibold mt-4"
                    style={{ color: division.textColor }}
                  >
                    {service}
                  </h3>
                  <p 
                    className="text-sm mt-2 opacity-50"
                    style={{ color: division.textColor }}
                  >
                    Professional {service.toLowerCase()} services in Glasgow by AM:PM Media.
                  </p>
                </motion.article>
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
          aria-labelledby="contact-cta"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                id="contact-cta"
                className="text-3xl md:text-5xl font-bold mb-6"
                style={{ color: division.textColor }}
              >
                Start Your {division.shortName} Project
              </h2>
              <p 
                className="text-lg mb-10 opacity-60"
                style={{ color: division.textColor }}
              >
                Ready to work with {division.name}? Contact our Glasgow team and let&apos;s bring your vision to life.
              </p>
              <a
                href="mailto:dxims@mediampm.com"
                className="inline-block px-8 py-4 border text-sm uppercase tracking-wider transition-all duration-300"
                style={{ 
                  borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
                  color: division.textColor
                }}
                aria-label={`Contact ${division.name} at dxims@mediampm.com`}
              >
                Get in touch
              </a>
              <p 
                className="text-sm mt-6 opacity-40"
                style={{ color: division.textColor }}
              >
                Part of <Link href="/" className="underline">AM:PM Media</Link> • Glasgow, Scotland
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation to other divisions */}
        <nav 
          className="py-8 border-t"
          style={{ 
            backgroundColor: division.bgColor,
            borderColor: division.textColor === '#000000' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
          }}
          aria-label="Other AM:PM Media divisions"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              {prevDivision ? (
                <Link
                  href={prevDivision.href}
                  className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
                  style={{ color: division.textColor }}
                  aria-label={`Previous division: ${prevDivision.name}`}
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
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
                  aria-label={`Next division: ${nextDivision.name}`}
                >
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wider opacity-50">Next</div>
                    <div className="font-medium">: {nextDivision.displayName}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  )
}
