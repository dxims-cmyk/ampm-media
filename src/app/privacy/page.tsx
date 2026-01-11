import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AM:PM Media privacy policy. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://mediampm.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-[#0C1220] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-[#F5F5DC] text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-[#F5F5DC]/70">
            <p className="text-[#F5F5DC]/50 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                AM:PM Media (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website mediampm.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit our contact form.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, and device type for analytics purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Respond to your enquiries and provide our services</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant communications about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">4. Data Protection</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, 
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and analyse site traffic. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:{' '}
                <a href="mailto:hello@mediampm.com" className="text-[#F5F5DC] underline">hello@mediampm.com</a>
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-[#F5F5DC]/10">
              <p className="text-[#F5F5DC]/50">
                <Link href="/" className="underline hover:text-[#F5F5DC]">Return to AM:PM Media homepage</Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
