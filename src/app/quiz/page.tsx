import { Metadata } from 'next'
import { QuizFlow } from '@/components/quiz'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Find Your Growth Path', description: 'Take our 2-minute quiz to discover which AM:PM service is right for you.' }

export default function QuizPage() {
  return (
    <section className="min-h-screen bg-navy py-24 lg:py-32">
      <div className="container-wide">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-ivory/50 hover:text-ivory transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to home
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory mb-4">Find Your Growth Path</h1>
          <p className="text-lg text-ivory/60 max-w-xl mx-auto">Answer a few questions and we&apos;ll tell you exactly what you need.</p>
        </div>
        <QuizFlow />
      </div>
    </section>
  )
}
