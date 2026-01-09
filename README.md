# AM:PM Media Website

A multi-disciplinary creative agency ecosystem website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion powered scroll animations, hover effects, and transitions
- **Dark Mode Design**: Sophisticated dark theme with navy (#2C3E50) primary color
- **Responsive Navigation**: Mega menu with pillar-based dropdowns
- **13 Division Showcase**: Full ecosystem grid with 4 active and 9 coming soon divisions
- **Contact Form**: Supabase integration ready for form submissions
- **Individual Division Pages**: Dynamic routes for each active division

## 📁 Project Structure

```
ampm-media/
├── src/
│   ├── app/
│   │   ├── [division]/      # Dynamic division pages
│   │   ├── globals.css      # Global styles & design system
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Homepage sections
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   └── lib/
│       ├── config.ts        # Site & divisions configuration
│       ├── supabase.ts      # Supabase client
│       └── utils.ts         # Utilities & animation variants
├── public/
│   └── images/              # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download and extract the project files

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Supabase credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄 Supabase Setup

To enable the contact form, create a table in Supabase:

```sql
CREATE TABLE contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

## 🎨 Design System

### Colors
- **Primary Navy**: #2C3E50
- **Accent Gold**: #D4AF37
- **Surface Dark**: #0a0d10
- **Surface**: #0f1318
- **Surface Light**: #1a1f26
- **Surface Elevated**: #242b35

### Typography
- **Display Font**: Instrument Sans
- **Body Font**: Inter

### Key CSS Classes
- `.container-wide` - Max-width 1440px container
- `.section-padding` - Responsive section padding
- `.glass` - Glassmorphism effect
- `.btn-primary` / `.btn-secondary` - Button styles
- `.card-division` - Division card styling

## 📝 Division Configuration

Divisions are configured in `src/lib/config.ts`. Each division includes:
- ID, name, short name
- Tagline and description
- Services array
- Status (active/coming-soon)
- Pillar category (CREATE/GROW/GUIDE/STYLE)
- Brand color
- Icon name
- URL href

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📦 Dependencies

- `next` - React framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `@supabase/supabase-js` - Supabase client
- `tailwindcss` - Utility CSS framework

## 🔜 Next Steps / Roadmap

- [ ] Add your logo assets to `/public/images/`
- [ ] Replace video background placeholder with actual showreel
- [ ] Add portfolio/case studies section
- [ ] Connect Supabase for contact form
- [ ] Add blog integration
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] SEO optimization with actual meta content
- [ ] Performance optimization (image optimization, lazy loading)
- [ ] Accessibility audit and improvements

## 📄 License

Proprietary - AM:PM Media © 2024
