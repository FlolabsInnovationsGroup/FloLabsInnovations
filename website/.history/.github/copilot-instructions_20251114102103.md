# Copilot Instructions for Flo Labs R&D Website

## Project Overview

This is a Next.js 15 marketing website for Flo Labs R&D, showcasing AI and robotics research initiatives. The site uses **App Router** (not Pages Router), TypeScript, Tailwind CSS, and is deployed on Vercel.

## Architecture & Structure

### Page Structure Pattern
- **Homepage** (`src/app/page.tsx`): Composed of section components (Hero, FocusSection, AboutSection, Technologies)
- **Detail pages** (`src/app/[topic]/page.tsx`): All use `MainLayout` wrapper for consistent navigation/footer
- Each detail page is a "use client" component with its own content layout

### Component Organization
```
src/components/
├── Global: Header, Footer, ErrorBoundary (used in layout.tsx)
├── Shared: Card, BackButton, MainLayout (reusable utilities)
└── Section-specific: Hero/, FocusSection/, AboutSection/, Technologies/
    └── Each has its own Card.tsx variant if needed
```

### Layout Hierarchy
1. `src/app/layout.tsx` - Root layout with Header/Footer, global metadata, fonts (Inter, Roboto Mono)
2. `src/components/MainLayout.tsx` - Wrapper for detail pages (adds BackButton, scroll-to-top)
3. Page components - Either homepage sections OR detail pages wrapped in MainLayout

## Key Development Patterns

### Client-Side Rendering
All interactive components use `"use client"` directive and follow this hydration safety pattern:
```tsx
const [isMounted, setIsMounted] = useState(false);
useEffect(() => setIsMounted(true), []);

// Conditional rendering to prevent hydration mismatch
{isMounted && <ClientOnlyComponent />}
```
**Apply this pattern** when using: browser APIs, event handlers, Next Image, navigation hooks, or conditional UI.

### Image Handling
- **Next Image component**: Always use with `isMounted` check
- **Static assets**: In `/public/images/` directory
- **Pattern for covers**: Use `fill` prop with `objectFit: 'cover'` inside positioned container
- **Error handling**: Provide fallback via `onError` callback (see `Card.tsx`)

### Navigation & Routing
- **Internal links**: Use Next.js `<Link>` component, not `<a>` tags
- **Hash navigation**: Supported via `href="/#section-id"` for smooth scroll (enabled in `globals.css`)
- **Path detection**: Use `usePathname()` from `next/navigation` for conditional rendering

### Styling Conventions
- **Dark theme only**: All pages use black background (`bg-black`) with white text
- **Gradients**: Consistent pattern `from-black via-[#121212] to-[#1e1e1e]`
- **Hover effects**: `hover:scale-105 transition-transform duration-300` for cards
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints
- **Typography**: Headers use `text-4xl md:text-5xl`, body uses `text-lg`

### Icon Libraries
- **React Icons**: `react-icons/fa` for UI elements (FaChevronDown, FaChevronUp, etc.)
- **Lucide React**: `lucide-react` for specific icons like Home in BackButton
- Import only what you need

## Development Workflow

### Package Manager
**Always use `pnpm`** - locked to version 10.3.0 in packageManager field. Never use npm or yarn.

### Commands
```bash
pnpm dev          # Development server on localhost:3000
pnpm build        # Production build (runs type checking + build)
pnpm start        # Production server
pnpm lint         # ESLint via Next.js config
```

### Path Aliases
Use `@/*` to import from `src/` directory:
```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
```

### Adding New Pages
1. Create `src/app/[topic]/page.tsx` as "use client" component
2. Wrap content in `<MainLayout>`
3. Follow existing page structure (header with image, sections with spacing)
4. Add card to FocusSection or appropriate section on homepage
5. Ensure metadata includes title and description

## Configuration & Deployment

### Security Headers
Both `next.config.js` and `vercel.json` define security headers (HSTS, X-Frame-Options, etc.). HTTPS redirect is configured for production.

### Domain Redirects
`vercel.json` redirects `flomadlabs.com` → `flolabsrd.com` (permanent). Update both configs if changing domain behavior.

### TypeScript
- Strict mode enabled
- Module resolution: `bundler` (Next.js 15+)
- No implicit any
- Path aliases configured

### Tailwind
- Content paths include all `src/**` directories
- Custom background image: `bg-header-bg` (points to `/images/headerbackground2.png`)
- Plugin: `@tailwindcss/aspect-ratio` for responsive media

## Common Tasks

### Adding a New Focus Area
1. Add entry to `focuses` array in `src/components/FocusSection/FocusSection.tsx`
2. Create corresponding page in `src/app/[topic]/page.tsx`
3. Add image to `/public/images/`
4. Follow existing detail page pattern

### Updating Metadata
- Global: Edit `metadata` object in `src/app/layout.tsx`
- Per-page: Export `metadata` object in page.tsx (see homepage example)
- Social images: Update OG/Twitter image paths if needed

### Modifying Navigation
- Desktop nav: `src/components/Header.tsx` - nav links, mobile menu
- Footer nav: `src/components/Footer.tsx`
- Ensure hash links match section IDs on homepage

## Gotchas & Best Practices

- **Don't** use `<a>` tags for internal navigation - use Next.js `<Link>`
- **Don't** access `window` or browser APIs without `isMounted` check
- **Don't** mix static and fill props on Next Image - use one approach
- **Do** use semantic HTML (`<header>`, `<section>`, `<main>`) with ARIA labels
- **Do** check for existing Card variants before creating new ones
- **Do** maintain consistent spacing: `py-16` for sections, `space-y-20` for subsections
- **Do** test mobile responsiveness - site is mobile-first

## Error Handling

- Global error boundary wraps entire app in `layout.tsx`
- Provides fallback UI with refresh option
- Logs errors to console for debugging
- Can accept custom fallback via props if needed
