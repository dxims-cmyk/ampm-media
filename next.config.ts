import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
    // Enable optimization in production, disable in development for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

export default nextConfig
