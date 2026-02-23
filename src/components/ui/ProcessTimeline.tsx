'use client'
import { motion } from 'framer-motion'

interface Step { number: string; title: string; description: string }
interface ProcessTimelineProps { steps: Step[]; variant?: 'dark' | 'light' }

export function ProcessTimeline({ steps, variant = 'dark' }: ProcessTimelineProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8 relative">
      {steps.map((step, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: i * 0.1 }} 
          className="relative"
        >
          <div className="text-center md:text-left">
            {/* Circle with number - z-index to stay above line */}
            <div className={`relative z-10 w-12 h-12 rounded-full text-impact font-bold text-lg flex items-center justify-center mx-auto md:mx-0 mb-4 ${
              variant === 'dark' ? 'bg-[#1a0a0c]' : 'bg-[#f0e6e8]'
            }`}>
              {step.number}
            </div>
            
            {/* Connector line - positioned between circles, not through them */}
            {i < steps.length - 1 && (
              <div 
                className={`hidden md:block absolute top-6 h-0.5 ${
                  variant === 'dark' ? 'bg-[#F5F5DC]/10' : 'bg-[#2A1E1A]/10'
                }`}
                style={{
                  left: 'calc(50% + 24px + 8px)', // Start after circle (24px radius + 8px gap)
                  right: 'calc(-50% + 24px + 8px)', // End before next circle
                }}
              />
            )}
            
            <h4 className={`text-lg font-semibold mb-2 ${variant === 'dark' ? 'text-[#F5F5DC]' : 'text-[#2A1E1A]'}`}>
              {step.title}
            </h4>
            <p className={`text-sm ${variant === 'dark' ? 'text-[#F5F5DC]/60' : 'text-[#2A1E1A]/60'}`}>
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
