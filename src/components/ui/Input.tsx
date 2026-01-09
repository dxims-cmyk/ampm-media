'use client'

import { motion } from 'framer-motion'
import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const [focused, setFocused] = useState(false)

    return (
      <div className="relative">
        {label && (
          <motion.label
            className={cn(
              'block text-sm font-medium mb-2 transition-colors duration-300',
              focused ? 'text-white' : 'text-white/60'
            )}
            animate={{ color: focused ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
          >
            {label}
          </motion.label>
        )}
        <div className="relative">
          <input
            ref={ref}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg',
              'text-white placeholder:text-white/30',
              'focus:outline-none focus:border-navy-500 focus:bg-white/[0.07]',
              'transition-all duration-300',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-navy-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: focused ? '100%' : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const [focused, setFocused] = useState(false)

    return (
      <div className="relative">
        {label && (
          <motion.label
            className={cn(
              'block text-sm font-medium mb-2 transition-colors duration-300',
              focused ? 'text-white' : 'text-white/60'
            )}
          >
            {label}
          </motion.label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg',
              'text-white placeholder:text-white/30',
              'focus:outline-none focus:border-navy-500 focus:bg-white/[0.07]',
              'transition-all duration-300 resize-none min-h-[120px]',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-navy-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: focused ? '100%' : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    const [focused, setFocused] = useState(false)

    return (
      <div className="relative">
        {label && (
          <motion.label
            className={cn(
              'block text-sm font-medium mb-2 transition-colors duration-300',
              focused ? 'text-white' : 'text-white/60'
            )}
          >
            {label}
          </motion.label>
        )}
        <div className="relative">
          <select
            ref={ref}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg',
              'text-white appearance-none cursor-pointer',
              'focus:outline-none focus:border-navy-500 focus:bg-white/[0.07]',
              'transition-all duration-300',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-navy-900">
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-white/50"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-navy-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: focused ? '100%' : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
