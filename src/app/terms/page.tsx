import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AM:PM Media terms of service. Read our terms and conditions for using our website and services.',
  alternates: {
    canonical: 'https://mediampm.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-[#0C1220] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-[#F5F5DC] text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-[#F5F5DC]/70">
            <p className="text-[#F5F5DC]/50 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the AM:PM Media website (mediampm.com), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">2. Services</h2>
              <p>
                AM:PM Media provides creative agency services including branding, web design, video production, 
                music studio services, and digital marketing. Specific terms for individual projects will be 
                outlined in separate service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of AM:PM Media or its content suppliers and is protected by UK and international copyright laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works from any content without 
                our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">4. User Conduct</h2>
              <p>When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>
                AM:PM Media shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages arising from your use of our website or services. Our total liability shall not exceed 
                the amount paid by you for our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">6. Disclaimer</h2>
              <p>
                Our website and services are provided &quot;as is&quot; without warranties of any kind, either express 
                or implied. We do not guarantee that our website will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Scotland 
                and the United Kingdom. Any disputes shall be subject to the exclusive jurisdiction of the Scottish courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to our website. Your continued use of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-[#F5F5DC] text-2xl font-semibold mb-4">9. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:dxims@mediampm.com" className="text-[#F5F5DC] underline">dxims@mediampm.com</a>
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
