import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/shadcn/toaster'
import { SmoothScroll } from '@/components/providers/SmoothScroll'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mediampm.com'),
  title: {
    default: 'AM:PM Media | Creative Agency Glasgow, Scotland',
    template: '%s | AM:PM Media',
  },
  description: 'AM:PM Media is a creative agency based in Glasgow, Scotland. We offer branding, web design, video production, music studio services, and digital marketing.',
  keywords: [
    'AM:PM Media',
    'ampm media',
    'creative agency Glasgow',
    'branding agency Scotland',
    'web design Glasgow',
    'video production Glasgow',
    'music studio Glasgow',
    'marketing agency Glasgow',
  ],
  authors: [{ name: 'AM:PM Media', url: 'https://mediampm.com' }],
  creator: 'AM:PM Media',
  publisher: 'AM:PM Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/images/logo-navy.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mediampm.com',
    siteName: 'AM:PM Media',
    title: 'AM:PM Media | Creative Agency Glasgow, Scotland',
    description: 'AM:PM Media is a creative agency based in Glasgow, Scotland offering branding, web design, video production, and marketing services.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AM:PM Media - Creative Agency Glasgow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AM:PM Media | Creative Agency Glasgow, Scotland',
    description: 'Creative agency based in Glasgow, Scotland offering branding, design, video production and marketing.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mediampm.com',
  },
}

// JSON-LD Structured Data - Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mediampm.com/#organization',
  name: 'AM:PM Media',
  alternateName: 'AMPM Media',
  url: 'https://mediampm.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mediampm.com/images/logo-navy.png',
    width: 512,
    height: 512,
  },
  description: 'AM:PM Media is a multi-disciplinary creative agency based in Glasgow, Scotland offering branding, web design, video production, music studio services, and digital marketing.',
  email: 'dxims@mediampm.com',
  telephone: '+447538330934',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Glasgow',
    addressRegion: 'Scotland',
    addressCountry: 'GB',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  ],
  sameAs: [
    'https://www.instagram.com/ampmverse',
    'https://www.tiktok.com/@ampmverse',
  ],
  foundingLocation: {
    '@type': 'Place',
    name: 'Glasgow, Scotland',
  },
  slogan: 'Creating around the clock',
  knowsAbout: [
    'Branding',
    'Web Design',
    'Video Production',
    'Music Production',
    'Digital Marketing',
  ],
}

// JSON-LD Structured Data - WebSite with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mediampm.com/#website',
  name: 'AM:PM Media',
  alternateName: 'AMPM Media',
  url: 'https://mediampm.com',
  description: 'AM:PM Media - Creative Agency Glasgow, Scotland',
  publisher: {
    '@id': 'https://mediampm.com/#organization',
  },
  inLanguage: 'en-GB',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mediampm.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9NG235YVT5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9NG235YVT5');
        `}
      </Script>
      
      <body className="bg-[#0C1220] text-white antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  )
}
