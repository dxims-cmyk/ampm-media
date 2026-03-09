import Link from 'next/link'

export default function BookedNotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Division Not Found
        </h1>
        <p className="text-white/50 text-sm">
          This booking page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 rounded-full text-sm font-semibold"
          style={{ background: '#C8F04A', color: '#0A0A0A' }}
        >
          Back to AM:PM
        </Link>
      </div>
    </div>
  )
}
