'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const questions = [
  { id: 'goal', question: "What's your primary goal?", options: [{ value: 'enquiries', label: 'Get more customers/enquiries' }, { value: 'awareness', label: 'Build brand awareness' }, { value: 'content', label: 'Create content at scale' }, { value: 'brand', label: 'Launch or rebrand my business' }, { value: 'record', label: 'Record music/podcasts' }] },
  { id: 'revenue', question: "What's your current monthly revenue?", options: [{ value: 'under-5k', label: 'Under £5K' }, { value: '5k-20k', label: '£5K - £20K' }, { value: '20k-50k', label: '£20K - £50K' }, { value: '50k-100k', label: '£50K - £100K' }, { value: '100k-plus', label: '£100K+' }] },
  { id: 'budget', question: "What's your monthly marketing budget?", options: [{ value: 'under-1k', label: 'Under £1K' }, { value: '1k-3k', label: '£1K - £3K' }, { value: '3k-5k', label: '£3K - £5K' }, { value: '5k-10k', label: '£5K - £10K' }, { value: '10k-plus', label: '£10K+' }] },
  { id: 'timeline', question: "What's your timeline?", options: [{ value: 'asap', label: 'I need results yesterday' }, { value: '1-3-months', label: 'Next 1-3 months' }, { value: '3-6-months', label: 'Next 3-6 months' }, { value: 'exploring', label: 'Just exploring' }] },
]

interface QuizResult { type: string; title: string; description: string; recommendation: string; investment: string; cta: string; ctaLink: string }

function calculateResult(answers: Record<string, string>): QuizResult {
  const { goal, budget, revenue, timeline } = answers
  const hasGoodBudget = !['under-1k'].includes(budget)
  const hasGoodRevenue = !['under-5k'].includes(revenue)
  const isSerious = timeline !== 'exploring'
  const isQualified = hasGoodBudget && hasGoodRevenue && isSerious

  if ((goal === 'enquiries' || goal === 'awareness') && isQualified) {
    return { type: 'growth-system', title: 'Growth System', description: "You're ready for our done-for-you content + Meta ads retainer that generates enquiries on autopilot.", recommendation: 'Growth System', investment: 'From £2,500/month', cta: 'Apply for Growth System', ctaLink: '/contact?service=growth-system' }
  }
  if (goal === 'content' && isQualified) {
    return { type: 'content-sprint', title: 'Content Sprint', description: "Our Vision team can batch-produce a month's worth of scroll-stopping video in a single session.", recommendation: 'Content Day', investment: 'From £1,500', cta: 'Book a Content Day', ctaLink: '/contact?service=content-day' }
  }
  if (goal === 'brand') {
    return { type: 'brand-build', title: 'Brand Build', description: 'Before you market, you need a brand worth marketing. Our Creative team builds identities that command attention.', recommendation: 'Brand Identity', investment: 'From £3,000', cta: 'Start Your Brand', ctaLink: '/contact?service=brand-identity' }
  }
  if (goal === 'record') {
    return { type: 'studio-session', title: 'Studio Session', description: "Our Studio is equipped for podcasts, music, and voiceovers.", recommendation: 'Studio Booking', investment: 'From £150/session', cta: 'Book Studio Time', ctaLink: '/contact?service=studio' }
  }
  return { type: 'not-ready', title: 'Not Quite Ready', description: "You might not be ready for us yet — and that's okay. Build your foundation first.", recommendation: 'Build your foundation', investment: 'Free resources', cta: 'Follow @ampmverse', ctaLink: 'https://instagram.com/ampmverse' }
}

export function QuizFlow() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<QuizResult | null>(null)
  const current = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [current.id]: value }
    setAnswers(newAnswers)
    setTimeout(() => {
      if (step < questions.length - 1) setStep(step + 1)
      else setResult(calculateResult(newAnswers))
    }, 300)
  }

  if (result) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-impact/10 border border-impact/30 text-impact text-sm font-semibold uppercase tracking-wider mb-6">Your Recommendation</div>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-4">{result.title}</h2>
        <p className="text-lg text-ivory/70 mb-8">{result.description}</p>
        <div className="bg-navy-light border border-ivory/10 rounded-2xl p-8 mb-8">
          <p className="text-sm text-ivory/50 uppercase tracking-wider mb-2">Recommended</p>
          <p className="text-2xl font-display text-ivory mb-2">{result.recommendation}</p>
          <p className="text-3xl font-display text-camel">{result.investment}</p>
        </div>
        <Link href={result.ctaLink} className="btn-primary inline-flex" target={result.ctaLink.startsWith('http') ? '_blank' : undefined}>{result.cta}</Link>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-ivory/50 mb-2"><span>Question {step + 1} of {questions.length}</span><span>{Math.round(progress)}%</span></div>
        <div className="h-1 bg-ivory/10 rounded-full overflow-hidden"><motion.div className="h-full bg-impact" initial={{ width: 0 }} animate={{ width: `${progress}%` }} /></div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-8">{current.question}</h2>
          <div className="space-y-3">
            {current.options.map((opt) => (
              <button key={opt.value} onClick={() => handleSelect(opt.value)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${answers[current.id] === opt.value ? 'border-impact bg-impact/10' : 'border-ivory/10 hover:border-ivory/30'}`}>
                <span className="text-ivory">{opt.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-8 pt-6 border-t border-ivory/10">
        <button onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0} className="text-ivory/50 hover:text-ivory disabled:opacity-30">Back</button>
        <Link href="/" className="text-ivory/50 hover:text-ivory">Exit quiz</Link>
      </div>
    </div>
  )
}
