import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ':Impact — AI-Powered Lead Management | AM:PM Media',
  description:
    'WhatsApp lead alerts in 5 seconds. AI scoring. Unified inbox. The lead management platform by AM:PM Media that turns ad spend into booked appointments. Try it at driveimpact.io.',
  openGraph: {
    title: ':Impact — AI-Powered Lead Management Platform',
    description:
      'Stop losing leads you paid for. WhatsApp alerts in 5 seconds, AI scoring, unified inbox. Built by AM:PM Media.',
    url: 'https://www.mediampm.com/impact',
  },
}

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
