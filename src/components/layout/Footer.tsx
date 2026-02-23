'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks, siteConfig } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const getFooterBranding = () => {
    if (pathname === '/impact') return { text: 'AM:PM Impact', color: 'text-impact' }
    if (pathname === '/vision') return { text: 'AM:PM Vision', color: 'text-vision' }
    if (pathname === '/creative') return { text: 'AM:PM Creative', color: 'text-creative' }
    if (pathname === '/studio') return { text: 'AM:PM Studio', color: 'text-studio' }
    return { text: 'AM:PM Media', color: 'text-[#F5F5DC]' }
  }

  const branding = getFooterBranding()

  return (
    <footer className="bg-[#0C1220] border-t border-[#F5F5DC]/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col gap-2 mb-4 group">
              <span className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold ${branding.color} transition-colors duration-300`}>
                {branding.text}
              </span>
              <span className="font-signature text-lg sm:text-2xl md:text-3xl text-[#F5F5DC] group-hover:text-white transition-colors">
                Creating Around The Clock
              </span>
            </Link>
            <p className="text-[#F5F5DC]/40 text-sm leading-relaxed max-w-xs mt-4">
              A multi-disciplinary creative agency ecosystem. Glasgow, Scotland.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-[#F5F5DC]/40 text-xs uppercase tracking-[0.2em] mb-4">
              Divisions
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#F5F5DC]/40 text-xs uppercase tracking-[0.2em] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                >
                  About AM:PM Media
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:dxims@mediampm.com"
                  className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                >
                  dxims@mediampm.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-[#F5F5DC]/40 text-xs uppercase tracking-[0.2em] mb-3">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ampmverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                  aria-label="AM:PM Media on Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@ampmverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                  aria-label="AM:PM Media on TikTok"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#F5F5DC]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F5DC]/30 text-xs">
            © {currentYear} AM:PM Media. All rights reserved. Glasgow, Scotland.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#F5F5DC]/30 text-xs hover:text-[#F5F5DC]/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#F5F5DC]/30 text-xs hover:text-[#F5F5DC]/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
