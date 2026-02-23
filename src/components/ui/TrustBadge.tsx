'use client'

interface TrustBadgeProps {
  text: string
  variant?: 'dark' | 'light'
}

export function TrustBadge({ text, variant = 'dark' }: TrustBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
      variant === 'dark' 
        ? 'bg-[#F5F5DC]/10 text-[#F5F5DC]' 
        : 'bg-[#0C1220]/10 text-[#2A1E1A]'
    }`}>
      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      {text}
    </div>
  )
}
