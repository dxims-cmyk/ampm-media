import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { activeDivisions } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About AM:PM Media | Creative Agency Glasgow, Scotland',
  description: 'AM:PM Media is a multi-disciplinary creative agency based in Glasgow, Scotland. We offer branding, web design, video production, music studio services, and digital marketing.',
  alternates: {
    canonical: 'https://mediampm.com/about',
  },
  openGraph: {
    title: 'About AM:PM Media | Creative Agency Glasgow, Scotland',
    description: 'AM:PM Media is a multi-disciplinary creative agency based in Glasgow, Scotland offering branding, design, video, and marketing services.',
    url: 'https://mediampm.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-[#0C1220] pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <header className="mb-16">
            <p className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em] mb-4">About Us</p>
            <h1 className="text-[#F5F5DC] text-4xl md:text-5xl font-bold mb-6">
              About AM:PM Media
            </h1>
            <p className="text-[#F5F5DC]/60 text-xl leading-relaxed">
              A multi-disciplinary creative agency ecosystem based in Glasgow, Scotland. 
              Creating around the clock.
            </p>
          </header>

          {/* Entity Description - Key SEO content */}
          <section className="mb-16">
            <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-6">Who We Are</h2>
            <div className="space-y-4 text-[#F5F5DC]/70 text-lg leading-relaxed">
              <p>
                <strong className="text-[#F5F5DC]">AM:PM Media</strong> is a creative agency and production studio 
                headquartered in Glasgow, Scotland. We serve clients across the United Kingdom and internationally, 
                delivering premium creative services that help brands stand out and grow.
              </p>
              <p>
                Founded on the principle of &quot;creating around the clock,&quot; AM:PM Media operates as an integrated 
                ecosystem of specialised divisions. Each division focuses on a specific creative discipline, 
                ensuring expert-level service across branding, video production, music, and marketing.
              </p>
              <p>
                Our name reflects our commitment to our clients — we&apos;re dedicated to bringing creative visions 
                to life, whether it&apos;s AM or PM.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-6">What We Do</h2>
            <div className="space-y-4 text-[#F5F5DC]/70 text-lg leading-relaxed mb-8">
              <p>
                AM:PM Media offers a comprehensive range of creative services through our active divisions:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {activeDivisions.map((division) => (
                <Link
                  key={division.id}
                  href={division.href}
                  className="p-6 border border-[#F5F5DC]/10 rounded hover:border-[#F5F5DC]/30 transition-colors group"
                >
                  <h3 className="text-[#F5F5DC] font-semibold mb-2 group-hover:text-white transition-colors">
                    {division.name}
                  </h3>
                  <p className="text-[#F5F5DC]/50 text-sm">{division.tagline}</p>
                  <p className="text-[#F5F5DC]/40 text-sm mt-2">
                    {division.services.slice(0, 3).join(' • ')}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Where We Operate */}
          <section className="mb-16">
            <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-6">Where We Operate</h2>
            <div className="space-y-4 text-[#F5F5DC]/70 text-lg leading-relaxed">
              <p>
                AM:PM Media is based in <strong className="text-[#F5F5DC]">Glasgow, Scotland</strong>. 
                While our roots are in Scotland, we work with clients throughout the United Kingdom and internationally.
              </p>
              <p>
                Our studio facilities are located in Glasgow, where we offer recording, production, and creative services. 
                For clients outside Scotland, we provide remote collaboration and can travel for larger projects.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mb-16 p-8 border border-[#F5F5DC]/10 rounded-lg">
            <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-[#F5F5DC]/70 text-lg mb-6">
              Ready to start a project with AM:PM Media? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#F5F5DC] text-[#0C1220] text-sm font-medium uppercase tracking-wider hover:bg-[#F5F5DC]/90 transition-colors text-center"
              >
                Contact Us
              </Link>
              <a
                href="mailto:dxims@mediampm.com"
                className="inline-block px-6 py-3 border border-[#F5F5DC]/30 text-[#F5F5DC] text-sm font-medium uppercase tracking-wider hover:bg-[#F5F5DC]/10 transition-colors text-center"
              >
                dxims@mediampm.com
              </a>
            </div>
          </section>

          {/* Navigation */}
          <nav className="pt-8 border-t border-[#F5F5DC]/10">
            <p className="text-[#F5F5DC]/40 text-sm mb-4">Explore AM:PM Media</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="text-[#F5F5DC]/60 hover:text-[#F5F5DC] transition-colors">
                Home
              </Link>
              <span className="text-[#F5F5DC]/20">•</span>
              <Link href="/creative" className="text-[#F5F5DC]/60 hover:text-[#F5F5DC] transition-colors">
                Creative
              </Link>
              <span className="text-[#F5F5DC]/20">•</span>
              <Link href="/vision" className="text-[#F5F5DC]/60 hover:text-[#F5F5DC] transition-colors">
                Vision
              </Link>
              <span className="text-[#F5F5DC]/20">•</span>
              <Link href="/studio" className="text-[#F5F5DC]/60 hover:text-[#F5F5DC] transition-colors">
                Studio
              </Link>
              <span className="text-[#F5F5DC]/20">•</span>
              <Link href="/impact" className="text-[#F5F5DC]/60 hover:text-[#F5F5DC] transition-colors">
                Impact
              </Link>
              <span className="text-[#F5F5DC]/20">•</span>
              <Link href="/contact" className="text-[#F5F5DC]/60 hover:text-[#F5F5DC] transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  )
}
