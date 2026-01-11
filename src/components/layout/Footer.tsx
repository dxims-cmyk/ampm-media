'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks, siteConfig } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0C1220] border-t border-[#F5F5DC]/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-navy.png"
                  alt="AM:PM Media - Creative Agency Glasgow Scotland"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-[#F5F5DC] text-lg font-medium">
                AM:PM Media
              </span>
            </Link>
            <p className="text-[#F5F5DC]/40 text-sm leading-relaxed max-w-xs">
              A multi-disciplinary creative agency ecosystem. Creating around the clock from Glasgow, Scotland.
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
                  href="mailto:hello@mediampm.com"
                  className="text-[#F5F5DC]/60 text-sm hover:text-[#F5F5DC] transition-colors"
                >
                  hello@mediampm.com
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
