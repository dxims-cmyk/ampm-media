import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/forms/ContactForm'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: 'Contact AM:PM Media | Creative Agency Glasgow',
  description: 'Get in touch with AM:PM Media. Contact our Glasgow creative agency for branding, web design, video production, and marketing enquiries.',
  alternates: {
    canonical: 'https://mediampm.com/contact',
  },
  openGraph: {
    title: 'Contact AM:PM Media | Creative Agency Glasgow',
    description: 'Get in touch with AM:PM Media for your next creative project.',
    url: 'https://mediampm.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-[#0C1220] pt-32 pb-24">
        <h1 className="sr-only">Contact AM:PM Media - Creative Agency Glasgow</h1>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Info */}
            <div>
              <span className="text-[#F5F5DC]/40 text-sm uppercase tracking-[0.2em]">
                Get in Touch
              </span>
              <h2 className="text-[#F5F5DC] text-4xl md:text-5xl font-bold mt-4 mb-6">
                Contact AM:PM Media
              </h2>
              <p className="text-[#F5F5DC]/60 text-lg leading-relaxed mb-12">
                Ready to start your project? Fill out the form and our Glasgow team will get back to you within 24 hours.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <a 
                  href="mailto:dxims@mediampm.com"
                  className="flex items-center gap-4 text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-[#F5F5DC]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#F5F5DC]/40 text-xs uppercase tracking-wider">Email</div>
                    <div className="text-[#F5F5DC]">dxims@mediampm.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+447538330934"
                  className="flex items-center gap-4 text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-[#F5F5DC]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#F5F5DC]/40 text-xs uppercase tracking-wider">Phone</div>
                    <div className="text-[#F5F5DC]">07538 330934</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-[#F5F5DC]/70">
                  <div className="w-12 h-12 rounded-full border border-[#F5F5DC]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#F5F5DC]/40 text-xs uppercase tracking-wider">Location</div>
                    <div className="text-[#F5F5DC]">Glasgow, Scotland</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-12 pt-8 border-t border-[#F5F5DC]/10">
                <div className="text-[#F5F5DC]/40 text-xs uppercase tracking-wider mb-4">Follow AM:PM Media</div>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/ampmverse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F5F5DC]/50 hover:text-[#F5F5DC] transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.tiktok.com/@ampmverse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F5F5DC]/50 hover:text-[#F5F5DC] transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:pl-8">
              <div className="p-8 border border-[#F5F5DC]/10 rounded-lg">
                <h3 className="text-[#F5F5DC] text-xl font-semibold mb-6">
                  Send us a message
                </h3>
                <ErrorBoundary>
                  <ContactForm />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
