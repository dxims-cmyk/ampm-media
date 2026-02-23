import { createClient } from '@supabase/supabase-js'

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form input type (from user)
export interface ContactFormData {
  name: string
  email: string
  company?: string
  service: string
  message: string
}

// Contact form database type (with server-generated fields)
interface ContactFormRecord extends ContactFormData {
  created_at: string
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
