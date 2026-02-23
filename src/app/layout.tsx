import type { Metadata } from 'next'
import { Inter, Manrope, Mr_Dafoe } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/shadcn/toaster'
import { FloatingNav } from '@/components/layout/FloatingNav'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/providers/ScrollToTop'
import { MusicPlayer } from '@/components/ui/MusicPlayer'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const mrDafoe = Mr_Dafoe({ weight: '400', subsets: ['latin'], variable: '--font-signature', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://mediampm.com'),
  title: { default: 'AM:PM Media (@ampmverse) | Creative Agency Glasgow', template: '%s | AM:PM Media' },
  description: 'AM:PM Media (@ampmverse) — Glasgow creative agency delivering content that converts. Branding, video production, marketing strategy, and recording studio services. Follow us on Instagram @ampmverse.',
  keywords: ['AM:PM Media', 'ampmverse', '@ampmverse', 'Glasgow creative agency', 'content agency Glasgow', 'video production Glasgow', 'branding Glasgow', 'recording studio Glasgow', 'social media management Glasgow'],
  authors: [{ name: 'AM:PM Media', url: 'https://mediampm.com' }],
  creator: 'AM:PM Media',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mediampm.com',
    siteName: 'AM:PM Media',
    title: 'AM:PM Media (@ampmverse) | Creative Agency Glasgow',
    description: 'Glasgow creative agency delivering content that converts. Follow @ampmverse on Instagram.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'AM:PM Media - Creative Agency Glasgow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AM:PM Media (@ampmverse) | Creative Agency Glasgow',
    description: 'Glasgow creative agency delivering content that converts. Follow @ampmverse on Instagram.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  alternates: {
    canonical: 'https://mediampm.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable} ${mrDafoe.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeAgency',
        name: 'AM:PM Media',
        alternateName: ['ampmverse', '@ampmverse', 'AMPM Media'],
        url: 'https://mediampm.com',
        logo: 'https://mediampm.com/images/logo-white.png',
        description: 'Glasgow creative agency delivering content that converts. Branding, video production, marketing strategy, and recording studio services.',
        address: { '@type': 'PostalAddress', addressLocality: 'Glasgow', addressRegion: 'Scotland', addressCountry: 'GB' },
        areaServed: [{ '@type': 'Country', name: 'United Kingdom' }],
        sameAs: [
          'https://www.instagram.com/ampmverse',
          'https://www.tiktok.com/@ampmverse',
        ],
        contactPoint: { '@type': 'ContactPoint', email: 'dxims@mediampm.com', contactType: 'sales', url: 'https://mediampm.com/contact' },
        founder: { '@type': 'Person', name: 'Colm', jobTitle: 'Founder & Creative Director' },
        knowsAbout: ['Content Marketing', 'Video Production', 'Branding', 'Social Media Management', 'Meta Ads', 'Recording Studio'],
      }) }} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9NG235YVT5" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-9NG235YVT5');`}</Script>
      <body className="font-body bg-navy text-white antialiased overflow-x-hidden selection:bg-camel selection:text-white">
        <ScrollToTop />
        <FloatingNav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
        <MusicPlayer />
      </body>
    </html>
  )
}
