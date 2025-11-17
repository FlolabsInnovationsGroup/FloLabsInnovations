# Developer Guide - Flo Labs R&D Website

## Project Overview

This is a Next.js 15 marketing website for Flo Labs R&D integrated with Strapi CMS for content management. The site showcases AI and robotics research initiatives with content managed through a headless CMS backend.

## Architecture

### Frontend (Next.js)
- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Live Site**: https://flolabsrd.com
- **Preview**: Vercel preview deployments for feature branches

### Backend (Strapi CMS)
- **Framework**: Strapi v5.31.0
- **Database**: PostgreSQL (Railway)
- **File Storage**: Cloudinary
- **Deployment**: Railway
- **API URL**: https://flomadlabsdotcom-strapi-production.up.railway.app

## Repository Structure

```
flomadlabsdotcom/                    # Next.js frontend
├── src/
│   ├── app/                         # App Router pages
│   │   ├── layout.tsx               # Root layout with Header/Footer
│   │   ├── page.tsx                 # Homepage with sections
│   │   ├── [topic]/                 # Dynamic detail pages
│   │   │   └── page.tsx             # Detail page template
│   ├── components/
│   │   ├── Header.tsx               # Fixed navigation
│   │   ├── Footer.tsx               # Site footer
│   │   ├── MainLayout.tsx           # Wrapper for detail pages
│   │   ├── BackButton.tsx           # Navigation component
│   │   ├── FocusSection/            # Focus areas section
│   │   ├── Technologies/            # Technologies section
│   │   ├── AboutSection/            # About projects section
│   │   └── Hero/                    # Homepage hero
│   └── styles/
│       └── globals.css              # Global styles
└── public/
    └── images/                      # Static assets (fallback)

flomadlabsdotcom-strapi/             # Strapi CMS backend
├── config/
│   ├── database.ts                  # PostgreSQL config
│   ├── plugins.ts                   # Cloudinary upload config
│   └── server.ts                    # Server config
├── src/api/
│   ├── focus-area/                  # Focus areas content type
│   ├── technology/                  # Technologies content type
│   └── about-project/               # About projects content type
├── scripts/
│   ├── seed-production.js           # Seed script for production
│   └── delete-all-content.js        # Clean database script
└── Dockerfile                       # Railway deployment config
```

## Getting Started

### Prerequisites
- Node.js 20.19.5
- pnpm 10.3.0 (required - do not use npm or yarn)
- Git

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/FlomadLabsRD/flomadlabsdotcom.git
cd flomadlabsdotcom

# Install dependencies
pnpm install

# Add environment variables
cp .env.example .env.local
# Edit .env.local with:
# NEXT_PUBLIC_STRAPI_URL=https://flomadlabsdotcom-strapi-production.up.railway.app
# STRAPI_API_TOKEN=[ask team for token]

# Run development server
pnpm dev
# Visit http://localhost:3000
```

### Backend Setup (Strapi)

```bash
# Clone the Strapi repository
git clone https://github.com/FlomadLabsRD/flomadlabsdotcom-strapi.git
cd flomadlabsdotcom-strapi

# Install dependencies
npm install

# Create .env file with:
cat > .env << EOF
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-admin-secret
TRANSFER_TOKEN_SALT=your-transfer-salt
JWT_SECRET=your-jwt-secret

# Database (local SQLite for development)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Cloudinary
CLOUDINARY_NAME=dgb6qsvev
CLOUDINARY_KEY=257847877337784
CLOUDINARY_SECRET=QWwJsMV-SViUOzZVeau90fwsJrQ
EOF

# Run development server
npm run develop
# Visit http://localhost:1337/admin
```

## Content Types

### Focus Area
**API Endpoint**: `/api/focus-areas`

Fields:
- `title` (String, required) - Focus area name
- `description` (Text, required) - Detailed description
- `link` (String, required) - Internal page link (e.g., `/education`)
- `coverImage` (Media, required) - Feature image
- `publishedAt` (DateTime) - Publication timestamp

### Technology
**API Endpoint**: `/api/technologies`

Fields:
- `name` (String, required) - Technology name
- `description` (Text, required) - Technology description
- `image` (Media, required) - Technology image
- `link` (String, required) - Detail page link
- `publishedAt` (DateTime) - Publication timestamp

### About Project
**API Endpoint**: `/api/about-projects`

Fields:
- `title` (String, required) - Project name
- `description` (Text, required) - Project description
- `image` (Media, required) - Project image
- `link` (String, required) - External website URL
- `buttonText` (String, required) - CTA button text (usually "Visit Site")
- `buttonLink` (String, required) - Same as link field
- `publishedAt` (DateTime) - Publication timestamp

## Data Flow

### Content Fetching Pattern

```typescript
// Example: FocusSection component
async function FocusSection() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/focus-areas?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
      }
    );

    if (!response.ok) throw new Error('Failed to fetch');
    
    const { data } = await response.json();
    
    // Transform Strapi data to component format
    const focuses = data.map((item: any) => ({
      title: item.title,
      description: item.description,
      image: item.coverImage.url, // Cloudinary URL
      link: item.link,
    }));

    return <FocusSectionUI focuses={focuses} />;
  } catch (error) {
    // Fallback to static content if Strapi unavailable
    return <FocusSectionUI focuses={fallbackContent} />;
  }
}
```

### Fallback Strategy

All sections have fallback content defined in the component that matches the production site. This ensures the site never breaks if Strapi is down.

## Development Workflow

### Working with Branches

```bash
# Feature branch workflow
git checkout -b feature/your-feature-name

# Make changes
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name

# Vercel automatically creates preview deployment
# Check preview URL in Vercel dashboard or GitHub PR
```

### Testing Changes

1. **Local Testing**: Run `pnpm dev` and test at `http://localhost:3000`
2. **Preview Deployment**: Push to feature branch, Vercel auto-deploys
3. **Production**: Merge to `flomadlabsdotcom` branch

### Content Updates

**No code changes needed for content!** Content editors can update everything through the Strapi admin panel. Changes appear on the website within 60 seconds (ISR revalidation period).

## Deployment

### Frontend (Vercel)

**Automatic deployment on:**
- Push to `flomadlabsdotcom` branch → Production
- Push to feature branches → Preview deployments

**Environment Variables (Vercel):**
```
NEXT_PUBLIC_STRAPI_URL=https://flomadlabsdotcom-strapi-production.up.railway.app
STRAPI_API_TOKEN=[production API token]
```

### Backend (Railway)

**Automatic deployment on:**
- Push to `main` branch in flomadlabsdotcom-strapi repo

**Environment Variables (Railway):**
```
# Core Strapi
HOST=0.0.0.0
PORT=1337
APP_KEYS=[generated]
API_TOKEN_SALT=[generated]
ADMIN_JWT_SECRET=[generated]
TRANSFER_TOKEN_SALT=[generated]
JWT_SECRET=[generated]
NODE_ENV=production

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=[Railway internal]
DATABASE_PORT=5432
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=[Railway generated]
DATABASE_SSL=false

# Cloudinary
CLOUDINARY_NAME=dgb6qsvev
CLOUDINARY_KEY=257847877337784
CLOUDINARY_SECRET=QWwJsMV-SViUOzZVeau90fwsJrQ
```

## Common Tasks

### Adding a New Content Type

1. **In Strapi Admin:**
   - Go to Content-Type Builder
   - Create new collection type
   - Add fields
   - Save and restart Strapi

2. **In Next.js:**
   ```typescript
   // Create component in src/components/NewSection/
   async function NewSection() {
     const response = await fetch(
       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/new-content?populate=*`,
       {
         headers: {
           Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
         },
         next: { revalidate: 60 },
       }
     );
     // ... handle response
   }
   ```

3. **Add to homepage:**
   ```typescript
   // In src/app/page.tsx
   <NewSection />
   ```

### Updating Styles

**Global styles:** Edit `src/styles/globals.css`

**Component styles:** Use Tailwind classes inline:
```tsx
<div className="bg-black text-white py-16 px-6">
  <h2 className="text-4xl md:text-5xl font-bold">Title</h2>
</div>
```

**Responsive breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

### Updating Images

Images are now stored in Cloudinary. Upload through:
1. Strapi admin panel → Media Library → Upload
2. Automatically uploaded to Cloudinary
3. URL automatically included in API responses

## Troubleshooting

### Content Not Updating
- Check ISR revalidation: Wait 60 seconds or force refresh
- Verify Strapi API is responding: `curl https://flomadlabsdotcom-strapi-production.up.railway.app/api/focus-areas`
- Check environment variables in Vercel

### Images Not Loading
- Images are on Cloudinary, not local filesystem
- Check Cloudinary credentials in Railway
- Verify image URLs start with `https://res.cloudinary.com/`

### Build Failures
- **Next.js**: Check TypeScript errors with `pnpm build`
- **Strapi**: Check Railway logs for native binding errors
- Ensure all env vars are set correctly

### Hash Navigation Not Working
- Scroll offset is set to 120px in `globals.css`
- Adjust `scroll-padding-top` if header height changes

## Performance Considerations

### Next.js
- **ISR (Incremental Static Regeneration)**: Content revalidates every 60 seconds
- **Image Optimization**: Use Next.js `Image` component with Cloudinary URLs
- **Server Components**: Most components are Server Components (no client JS)

### Strapi
- **Database**: PostgreSQL on Railway (persistent)
- **File Storage**: Cloudinary (CDN, persistent)
- **API Token**: Used for authenticated requests

## Security

### API Token
- Stored in environment variables
- Required for all Strapi API requests
- Never commit to git

### CORS
- Configured in Strapi to allow requests from flolabsrd.com and Vercel preview domains

### HTTPS
- Enforced on both frontend and backend
- Configured in `vercel.json` and Railway

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Strapi Docs**: https://docs.strapi.io/
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Cloudinary Docs**: https://cloudinary.com/documentation

## Support

- **Repository Issues**: https://github.com/FlomadLabsRD/flomadlabsdotcom/issues
- **Strapi Repo Issues**: https://github.com/FlomadLabsRD/flomadlabsdotcom-strapi/issues
- **Team Contact**: Contact project maintainers for access credentials

## Quick Reference

### Commands
```bash
# Frontend
pnpm dev          # Development server
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint

# Backend
npm run develop   # Development (admin panel accessible)
npm run build     # Build admin panel
npm run start     # Production server
```

### Important URLs
- **Production Site**: https://flolabsrd.com
- **Strapi API**: https://flomadlabsdotcom-strapi-production.up.railway.app/api
- **Strapi Admin**: https://flomadlabsdotcom-strapi-production.up.railway.app/admin
- **Vercel Dashboard**: https://vercel.com/flomad-dev/flomadlabsdotcom
- **Railway Dashboard**: https://railway.app/project/reliable-nature

### API Endpoints
```
GET /api/focus-areas?populate=*
GET /api/technologies?populate=*
GET /api/about-projects?populate=*
```
