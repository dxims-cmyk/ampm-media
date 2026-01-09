import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mediampm.com'),
  title: 'AM:PM Media | Creating Around the Clock',
  description:
    'A multi-disciplinary creative agency ecosystem based in Glasgow, Scotland. Premium branding, visual, sound, and growth solutions.',
  keywords: [
    'creative agency',
    'branding',
    'web design',
    'video production',
    'marketing',
    'Glasgow',
    'Scotland',
  ],
  authors: [{ name: 'AM:PM Media' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/images/logo-navy.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mediampm.com',
    siteName: 'AM:PM Media',
    title: 'AM:PM Media | Creating Around the Clock',
    description: 'A multi-disciplinary creative agency ecosystem based in Glasgow, Scotland.',
    images: [
      {
        url: '/images/logo-navy.png',
        width: 1200,
        height: 630,
        alt: 'AM:PM Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AM:PM Media | Creating Around the Clock',
    description: 'A multi-disciplinary creative agency ecosystem based in Glasgow, Scotland.',
    images: ['/images/logo-navy.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts for additional fonts if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Instrument Sans for display headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-white antialiased">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {children}
      </body>
    </html>
  )
}
