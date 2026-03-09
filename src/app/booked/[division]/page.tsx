'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { notFound, useSearchParams } from 'next/navigation'
import { divisions, divisionSlugs } from '../config'
import type { DivisionConfig } from '../config'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, Clock, Play, Circle, CheckCircle2, AlertCircle, ArrowRight, Calendar, MapPin } from 'lucide-react'

// — Fonts via CSS (Bebas Neue loaded in head) —
const bebasStyle: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
const dmStyle: React.CSSProperties = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }

const ACCENT = '#C8F04A'
const ACCENT_DIM = 'rgba(200, 240, 74, 0.15)'
const ACCENT_BORDER = 'rgba(200, 240, 74, 0.3)'

// ─── Progress Tracker ───
function ProgressTracker({ videoWatched, faqsRead }: { videoWatched: boolean; faqsRead: boolean }) {
  const steps = [
    { label: 'Booked', done: true },
    { label: 'Watch Video', done: videoWatched },
    { label: 'Read FAQs', done: faqsRead },
  ]

  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-md mx-auto">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500"
              style={{
                background: step.done ? ACCENT : 'rgba(255,255,255,0.06)',
                color: step.done ? '#0A0A0A' : 'rgba(255,255,255,0.4)',
                boxShadow: step.done ? `0 0 20px ${ACCENT_DIM}` : 'none',
              }}
            >
              {step.done ? <Check className="w-5 h-5" /> : i + 1}
            </div>
            <span
              className="text-xs font-medium whitespace-nowrap"
              style={{ color: step.done ? ACCENT : 'rgba(255,255,255,0.4)', ...dmStyle }}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="w-16 sm:w-24 h-[2px] mx-2 mb-6 transition-all duration-500"
              style={{ background: steps[i + 1].done ? ACCENT : 'rgba(255,255,255,0.1)' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── VSL Player ───
function VSLPlayer({ note, onComplete }: { note: string; onComplete: () => void }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startPlayback = useCallback(() => {
    setPlaying(true)
    // Simulate a 60-second video for demo (will be replaced with Wistia)
    const duration = 60
    const tick = 100
    let elapsed = 0
    intervalRef.current = setInterval(() => {
      elapsed += tick / 1000
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct >= 100) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        onComplete()
      }
    }, tick)
  }, [onComplete])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="w-full">
      <div
        className="relative w-full rounded-2xl overflow-hidden border"
        style={{ aspectRatio: '16/9', borderColor: 'rgba(255,255,255,0.08)', background: '#111' }}
      >
        {!playing ? (
          <button
            onClick={startPlayback}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 group cursor-pointer"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: ACCENT }}
            >
              <Play className="w-8 h-8 ml-1" style={{ color: '#0A0A0A' }} />
            </div>
            <span className="text-white/60 text-sm" style={dmStyle}>Click to play</span>
          </button>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin mx-auto mb-4" style={{ borderColor: `${ACCENT} transparent ${ACCENT} ${ACCENT}` }} />
              <p className="text-white/40 text-sm" style={dmStyle}>VSL playing — Wistia embed goes here</p>
            </div>
          </div>
        )}

        {/* Non-skippable progress bar */}
        {playing && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
            <div
              className="h-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%`, background: ACCENT }}
            />
          </div>
        )}
      </div>
      <p className="text-white/50 text-sm mt-4 text-center leading-relaxed" style={dmStyle}>{note}</p>
    </div>
  )
}

// ─── Checklist ───
function Checklist({ items }: { items: DivisionConfig['checklist'] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false))

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const completed = checked.filter(Boolean).length

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl sm:text-4xl uppercase tracking-wide" style={{ ...bebasStyle, color: '#fff' }}>
          Preparation Checklist
        </h3>
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full"
          style={{
            background: completed === items.length ? ACCENT : ACCENT_DIM,
            color: completed === items.length ? '#0A0A0A' : ACCENT,
            ...dmStyle,
          }}
        >
          {completed}/{items.length}
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="w-full text-left rounded-xl p-4 sm:p-5 transition-all duration-300 flex items-start gap-4 group"
            style={{
              background: checked[i] ? ACCENT_DIM : 'rgba(255,255,255,0.03)',
              border: `1px solid ${checked[i] ? ACCENT_BORDER : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="mt-0.5 flex-shrink-0">
              {checked[i] ? (
                <CheckCircle2 className="w-6 h-6" style={{ color: ACCENT }} />
              ) : (
                <Circle className="w-6 h-6 text-white/20 group-hover:text-white/40 transition-colors" />
              )}
            </div>
            <div>
              <p
                className="font-semibold text-[15px] leading-snug"
                style={{ color: checked[i] ? ACCENT : '#fff', ...dmStyle }}
              >
                {item.label}
              </p>
              <p className="text-white/40 text-sm mt-1 leading-relaxed" style={dmStyle}>{item.detail}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── FAQ Accordion ───
function FAQAccordion({ faqs, onAllRead }: { faqs: DivisionConfig['faqs']; onAllRead: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [readSet, setReadSet] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    const newOpen = openIndex === i ? null : i
    setOpenIndex(newOpen)
    if (newOpen !== null) {
      setReadSet(prev => {
        const next = new Set(prev)
        next.add(newOpen)
        if (next.size >= Math.min(faqs.length, 5)) onAllRead()
        return next
      })
    }
  }

  return (
    <div className="w-full">
      <h3 className="text-3xl sm:text-4xl uppercase tracking-wide mb-2" style={{ ...bebasStyle, color: '#fff' }}>
        Frequently Asked Questions
      </h3>
      <p className="text-white/40 text-sm mb-6" style={dmStyle}>
        Read at least 5 to complete this step — they cover the objections everyone has.
      </p>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: openIndex === i ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${openIndex === i ? ACCENT_BORDER : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {readSet.has(i) && (
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                )}
                <span className="font-semibold text-[15px]" style={{ color: '#fff', ...dmStyle }}>
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300 text-white/30"
                style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)' }}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <p className="text-white/60 text-sm leading-relaxed pl-7" style={dmStyle}>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── What To Expect ───
function WhatToExpect({ items }: { items: DivisionConfig['whatToExpect'] }) {
  return (
    <div className="w-full">
      <h3 className="text-3xl sm:text-4xl uppercase tracking-wide mb-8" style={{ ...bebasStyle, color: '#fff' }}>
        What To Expect
      </h3>
      <div className="space-y-0">
        {items.map((item, i) => (
          <div key={i} className="flex gap-5">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                style={{ background: ACCENT, boxShadow: `0 0 12px ${ACCENT_DIM}` }}
              />
              {i < items.length - 1 && (
                <div className="w-[2px] flex-1 min-h-[40px]" style={{ background: 'rgba(255,255,255,0.08)' }} />
              )}
            </div>
            <div className="pb-8">
              <h4 className="font-bold text-white text-[15px] mb-1.5" style={dmStyle}>{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed" style={dmStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Booking Card ───
function BookingCard({ division, time }: { division: DivisionConfig; time: string | null }) {
  const formattedTime = time ? decodeURIComponent(time) : null

  return (
    <div
      className="w-full rounded-2xl p-6 sm:p-8"
      style={{
        background: 'linear-gradient(135deg, rgba(200, 240, 74, 0.08), rgba(200, 240, 74, 0.02))',
        border: `1px solid ${ACCENT_BORDER}`,
      }}
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_DIM }}>
          <Calendar className="w-6 h-6" style={{ color: ACCENT }} />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl uppercase tracking-wide" style={{ ...bebasStyle, color: '#fff' }}>
            Your Booking
          </h3>
          <p className="text-white/40 text-sm mt-0.5" style={dmStyle}>{division.name}</p>
        </div>
      </div>

      {formattedTime ? (
        <div className="flex items-center gap-3 p-4 rounded-xl mb-5" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <Clock className="w-5 h-5 text-white/40 flex-shrink-0" />
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider font-semibold" style={dmStyle}>Scheduled For</p>
            <p className="text-white font-semibold text-[15px] mt-0.5" style={dmStyle}>{formattedTime}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-xl mb-5" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <AlertCircle className="w-5 h-5 text-white/30 flex-shrink-0" />
          <p className="text-white/40 text-sm" style={dmStyle}>Check your email for your booking confirmation and time.</p>
        </div>
      )}

      <div className="flex items-center gap-2 text-xs text-white/30" style={dmStyle}>
        <MapPin className="w-3.5 h-3.5" />
        <span>AM:PM Media — Glasgow, Scotland</span>
      </div>
    </div>
  )
}

// ─── Page ───
export default function BookedPage({ params }: { params: Promise<{ division: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ division: string } | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  const [videoWatched, setVideoWatched] = useState(false)
  const [faqsRead, setFaqsRead] = useState(false)

  if (!resolvedParams) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: `${ACCENT} transparent ${ACCENT} ${ACCENT}` }} />
      </div>
    )
  }

  const division = divisions[resolvedParams.division]
  if (!division) return notFound()

  const time = searchParams.get('time')

  return (
    <>
      {/* Bebas Neue font */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#0A0A0A] text-white" style={dmStyle}>
        {/* ─── Top Bar ─── */}
        <div className="w-full py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="max-w-3xl mx-auto px-5 flex items-center justify-between">
            <span className="text-lg font-bold tracking-tight" style={bebasStyle}>AM:PM</span>
            <span className="text-xs text-white/30">Booking Confirmation</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 py-12 sm:py-16 space-y-16">
          {/* ─── Hero ─── */}
          <section className="text-center space-y-6">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ background: 'rgba(251, 191, 36, 0.12)', color: '#FCD34D', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Your booking is not confirmed yet
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.9] tracking-tight" style={bebasStyle}>
              {division.name}
            </h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
              {division.heroSubtitle}
            </p>
          </section>

          {/* ─── Progress Tracker ─── */}
          <section>
            <ProgressTracker videoWatched={videoWatched} faqsRead={faqsRead} />
          </section>

          {/* ─── VSL ─── */}
          <section>
            <VSLPlayer note={division.vslNote} onComplete={() => setVideoWatched(true)} />
          </section>

          {/* ─── Checklist ─── */}
          <section>
            <Checklist items={division.checklist} />
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <FAQAccordion faqs={division.faqs} onAllRead={() => setFaqsRead(true)} />
          </section>

          {/* ─── What To Expect ─── */}
          <section>
            <WhatToExpect items={division.whatToExpect} />
          </section>

          {/* ─── Booking Card ─── */}
          <section>
            <BookingCard division={division} time={time} />
          </section>

          {/* ─── Footer ─── */}
          <footer className="text-center pb-8">
            <p className="text-white/20 text-xs" style={dmStyle}>
              &copy; {new Date().getFullYear()} AM:PM Media. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
