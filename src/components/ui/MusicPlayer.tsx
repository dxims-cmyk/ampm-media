'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Try autoplay immediately on mount, fall back to first interaction
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = 0.3

    // Attempt immediate autoplay
    audioRef.current.play().then(() => {
      setIsPlaying(true)
      setHasInteracted(true)
    }).catch(() => {
      // Browser blocked autoplay - listen for first interaction
      const handleFirstInteraction = () => {
        if (audioRef.current && !hasInteracted) {
          setHasInteracted(true)
          audioRef.current.volume = 0.3
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
        }
        document.removeEventListener('click', handleFirstInteraction)
        document.removeEventListener('scroll', handleFirstInteraction)
        document.removeEventListener('touchstart', handleFirstInteraction)
        document.removeEventListener('keydown', handleFirstInteraction)
        document.removeEventListener('mousemove', handleFirstInteraction)
      }

      document.addEventListener('click', handleFirstInteraction)
      document.addEventListener('scroll', handleFirstInteraction)
      document.addEventListener('touchstart', handleFirstInteraction)
      document.addEventListener('keydown', handleFirstInteraction)
      document.addEventListener('mousemove', handleFirstInteraction, { once: true })
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.volume = 0.3
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/everlast.mp3" loop preload="auto" />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0C1220]/80 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#0C1220] hover:border-white/20 transition-all group"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-[3px]"
            >
              {[1, 2, 3].map((bar) => (
                <motion.div
                  key={bar}
                  className="w-[3px] bg-white/80 rounded-full"
                  animate={{
                    height: ['8px', '16px', '8px'],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: bar * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.svg
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-5 h-5 text-white/80 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
