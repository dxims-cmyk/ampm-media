'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface IdlePopupProps {
  idleTimeout?: number // ms
  heading?: string
  subheading?: string
  ctaText?: string
  ctaHref?: string
  dismissText?: string
  storageKey?: string
}

export function IdlePopup({
  idleTimeout = 30000,
  heading = "Still thinking?",
  subheading = "Book a free audit and we'll show you exactly where your growth is hiding.",
  ctaText = "Book Free Audit",
  ctaHref = "https://cal.com/ampmedia/30min",
  dismissText = "Maybe later",
  storageKey = "ampm-idle-popup-shown",
}: IdlePopupProps) {
  const [show, setShow] = useState(false)

  const dismiss = useCallback(() => {
    setShow(false)
    try { sessionStorage.setItem(storageKey, 'true') } catch {}
  }, [storageKey])

  useEffect(() => {
    // Once per session
    try {
      if (sessionStorage.getItem(storageKey) === 'true') return
    } catch {}

    let idleTimer: ReturnType<typeof setTimeout>

    const resetTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => setShow(true), idleTimeout)
    }

    // Idle detection
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart']
    events.forEach(e => window.addEventListener(e, resetTimer, { passive: true }))
    resetTimer()

    // Exit intent (desktop) - mouse leaves viewport from top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)

    // Mobile scroll-up detection (fast upward scroll)
    let lastScrollY = window.scrollY
    let lastScrollTime = Date.now()
    const handleScroll = () => {
      const now = Date.now()
      const dy = window.scrollY - lastScrollY
      const dt = now - lastScrollTime
      // Fast upward scroll (> 200px in < 300ms) and not at the very top
      if (dy < -200 && dt < 300 && lastScrollY > 300) {
        setShow(true)
      }
      lastScrollY = window.scrollY
      lastScrollTime = now
    }

    // Only add mobile scroll detection on touch devices
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      clearTimeout(idleTimer)
      events.forEach(e => window.removeEventListener(e, resetTimer))
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (isTouchDevice) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [idleTimeout, storageKey])

  // Mark as shown once popup appears
  useEffect(() => {
    if (show) {
      try { sessionStorage.setItem(storageKey, 'true') } catch {}
    }
  }, [show, storageKey])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={dismiss}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0C1220] border border-white/10 rounded-2xl p-8 sm:p-10 max-w-md w-full text-center shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5DC] mb-3">
              {heading}
            </h3>
            <p className="text-[#F5F5DC]/60 mb-8 leading-relaxed">
              {subheading}
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href={ctaHref}
                target={ctaHref.startsWith('http') ? '_blank' : undefined}
                rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={dismiss}
                className="bg-impact text-white font-bold px-8 py-4 rounded-full hover:bg-impact/90 transition-all hover:-translate-y-0.5 uppercase tracking-wide text-sm"
              >
                {ctaText}
              </Link>
              <button
                onClick={dismiss}
                className="text-[#F5F5DC]/40 hover:text-[#F5F5DC]/70 text-sm font-medium transition-colors py-2"
              >
                {dismissText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
