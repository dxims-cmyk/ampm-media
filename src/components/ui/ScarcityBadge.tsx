interface ScarcityBadgeProps {
  text: string
  variant?: 'dark' | 'light'
}

export function ScarcityBadge({ text, variant = 'dark' }: ScarcityBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider ${variant === 'dark' ? 'bg-impact/10 border border-impact/30 text-impact' : 'bg-white/10 border border-white/30 text-white'}`}>
      <span className="w-2 h-2 bg-current rounded-full animate-pulse" />
      {text}
    </span>
  )
}
