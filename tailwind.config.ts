import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Navy Palette
        navy: {
          DEFAULT: '#0B1220',
          deep: '#070D17',
          light: '#132035',
        },
        // Warm Neutrals
        ivory: '#F5F5DC',
        camel: '#D4A574',
        chocolate: '#2A1E1A',
        'warm-white': '#FAF8F5',
        // Division Accent Colors
        impact: '#6E0F1A',
        vision: '#1E3A5F',
        studio: '#2D4A3E',
        creative: '#4A3728',
        // UI
        success: '#2D4A3E',
        warning: '#D4A574',
        error: '#6E0F1A',
      },
      fontFamily: {
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        signature: ['var(--font-signature)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
