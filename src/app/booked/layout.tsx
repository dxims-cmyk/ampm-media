import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })

export const metadata: Metadata = {
  title: 'Booking Confirmed | AM:PM Media',
  description: 'Your booking with AM:PM Media is almost confirmed. Complete the steps below.',
  robots: { index: false, follow: false },
}

export default function BookedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${dmSans.variable} min-h-screen bg-[#0A0A0A]`}>
      {children}
    </div>
  )
}
