'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/config'
import { cn } from '@/lib/utils'

interface HeaderProps {
  variant?: 'light' | 'dark'
  currentDivision?: string
}

export function Header({ variant = 'dark', currentDivision }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isDark = variant === 'dark'
  const textColor = isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
  const logoColor = isDark ? 'text-white' : 'text-black'

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Determine the logo text based on current page
  const getLogoText = () => {
    if (pathname === '/') return 'AM:PM Media'
    if (pathname === '/creative') return 'AM:PM Creative'
    if (pathname === '/studio') return 'AM:PM Studio'
    if (pathname === '/vision') return 'AM:PM Vision'
    if (pathname === '/impact') return 'AM:PM Impact'
    return currentDivision || 'AM:PM Media'
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      >
        <nav className="flex items-center justify-between">
          {/* Logo - Dynamic based on page */}
          <Link 
            href="/" 
            className={cn('text-sm font-normal tracking-tight', logoColor)}
          >
            {getLogoText()}
          </Link>

          {/* Desktop Navigation - Minimal links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-normal transition-colors duration-200',
                  textColor,
                  pathname === link.href && (isDark ? 'text-white' : 'text-black')
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn('md:hidden p-2', logoColor)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                'absolute inset-0 z-0',
                isDark ? 'bg-black/95' : 'bg-white/95'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative z-10 flex flex-col items-center justify-center gap-8 h-full"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-2xl font-medium',
                      isDark ? 'text-white' : 'text-black'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
