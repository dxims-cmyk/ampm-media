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
  title: { default: 'AM:PM Media | Creative Agency Glasgow', template: '%s | AM:PM Media' },
  description: 'Glasgow creative agency delivering content that converts. Branding, video production, marketing strategy, and recording studio services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable} ${mrDafoe.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
