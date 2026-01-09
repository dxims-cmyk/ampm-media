import { createClient } from '@supabase/supabase-js'

// These will be replaced with actual environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form submission type
export interface ContactFormData {
  name: string
  email: string
  company?: string
  service: string
  message: string
  created_at?: string
}

// Submit contact form to Supabase
export async function submitContactForm(data: ContactFormData) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        ...data,
        created_at: new Date().toISOString(),
      },
    ])

  if (error) {
    console.error('Supabase error:', error)
    throw new Error('Failed to submit form')
  }

  return { success: true }
}
