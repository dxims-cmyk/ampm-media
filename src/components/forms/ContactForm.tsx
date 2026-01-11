'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/button'
import { Input } from '@/components/ui/shadcn/input'
import { Textarea } from '@/components/ui/shadcn/textarea'
import { Label } from '@/components/ui/shadcn/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/select'
import { useToast } from '@/hooks/use-toast'
import { activeDivisions } from '@/lib/config'
import { submitContactForm } from '@/lib/supabase'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
          variant: "success",
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        })
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      toast({
        title: "Failed to send message",
        description: errorMessage.includes('Missing Supabase')
          ? 'Service temporarily unavailable. Please email us directly at dxims@mediampm.com'
          : `${errorMessage}. Please try again or email us directly at dxims@mediampm.com`,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {activeDivisions.map((division) => (
                <SelectItem key={division.id} value={division.shortName}>
                  {division.shortName} — {division.tagline}
                </SelectItem>
              ))}
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  )
}
