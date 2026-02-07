# Her Divine Hustle Co. - AI Coding Guidelines

## Project Overview
This is a Next.js 15 landing page for "Her Divine Hustle Co.", a brand selling digital blueprints for women entrepreneurs transitioning from corporate to aligned entrepreneurship. Features a luxury aesthetic with dark theme, gold accents, and smooth animations.

## Architecture
- **Framework**: Next.js 15 with App Router (`app/` directory)
- **Styling**: Tailwind CSS 4 with custom brand colors and utility classes
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Fonts**: Playfair Display (serif) for headings, Montserrat (sans) for body text
- **Structure**: Single-page application with scrollable sections (hero, about, shop, footer)

## Editor & Tech Stack
- **IDE**: VS Code
- **AI Assistant**: Z.ai (GLM-4.7) - Codename: Clarice
- **OS**: Linux (Zsh)
- **Package Manager**: npm

## Key Conventions
- **Color Palette**: Use `obsidian` (dark backgrounds), `gold` (accents), `off-white` (text), `amber` (highlights)
- **CSS Classes**:
  - `text-gradient-gold` for gold gradient text effects
  - `card-glass` for frosted glass card backgrounds with blur
  - `btn-luxury` for styled buttons with hover effects
- **Typography**: Headers use `font-serif` (Playfair), body uses `font-sans` (Montserrat)
- **Layout**: Max-width containers with `max-w-7xl mx-auto px-8` pattern
- **Images**: Always use Next.js `<Image>` with `priority`, `sizes`, and blur placeholders for performance

## Component Patterns
- **Animations**: Wrap elements in `<motion.div>` with `initial={{opacity:0}} animate={{opacity:1}}` for fade-ins
- **Links**: Use Next.js `<Link>` for internal navigation with `href="#section"` for smooth scrolling
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints for larger screens
- **Cards**: Use `rounded-[2.5rem]` for luxury rounded corners, `border border-white/10` for subtle borders

## Development Workflow
- **Start**: `npm run dev` (runs on localhost:3000)
- **Build**: `npm run build` (optimizes for production)
- **Lint**: `npm run lint` (ESLint checks) - Run only on files changed in session before committing
- **Fonts**: Loaded via `next/font/google` with `display: "swap"` for performance
- **Deployment**: Vercel

## Git & Commit Guidelines
- **No "Co-Authored-By Anthropic"** in commits
- If AI credit is needed, use "Clarice" instead
- Pre-push checklist: Lint only changed files from the session

## Brand Voice
- **Tone**: Luxury, ambitious, empowering
- **Audience**: High-achieving women transitioning from corporate to entrepreneurship
- **Style**: Elegant, confident, purpose-driven

## Communication Style
- Keep explanations concise and direct
- Always explain the "why" behind changes
- Teach concepts as we work - don't just do, explain

## File Structure
- `app/layout.tsx`: Root layout with fonts, metadata, and SEO
- `app/page.tsx`: Main landing page with inline sections
- `components/`: Reusable UI components (Hero, Navbar, etc.)
- `app/globals.css`: Custom CSS with Tailwind theme and component classes

## Examples
- Hero text: `<h1 className="text-6xl font-serif text-gradient-gold">HER DIVINE HUSTLE</h1>`
- Glass card: `<div className="card-glass p-12 rounded-[2.5rem] border border-white/5">`
- Animated button: `<motion.div whileHover={{scale:1.05}} className="btn-luxury">`

Maintain the luxury, ambitious tone in all copy and design elements.
