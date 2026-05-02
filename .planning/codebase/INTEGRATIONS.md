# INTEGRATIONS.md — External Services & APIs

## External Image Hosting
- **Unsplash** (`images.unsplash.com`)
  - Whitelisted in `next.config.ts` under `images.remotePatterns`
  - Used for all placeholder screenshots in `src/data/projects.ts` and tile images in `src/sections/About.tsx`
  - No API key required — public CDN URLs only
  - Image URLs use query params: `?q=80&w=<size>&auto=format&fit=crop`

## Social / External Links (Static, No API)
- **GitHub** (`https://github.com/Szostak21`) — socials array in `src/data/config.ts`, project links in `src/data/projects.ts`
- **LinkedIn** (`https://www.linkedin.com/in/paweł-szostak-...`) — socials array
- **Email** (`mailto:pszostak.contact@gmail.com`) — socials array

## No Backend / No Database
- This is a **fully static, frontend-only** portfolio template
- No API routes, no `src/pages/api/` directory
- No database connections (no Supabase, Prisma, Drizzle, etc.)
- No authentication layer
- No environment variables required at runtime

## Deployment Target (Implied)
- **Vercel** — implied by the Footer's "Built with Next.js & Tailwind" copy and standard Next.js project structure
- No deployment config files present (no `vercel.json`, `Dockerfile`, etc.)
- The `next start` script and Next.js Pages Router suggest Vercel/Node hosting (not pure static export)

## Fonts (No External Fetch)
- `Inter` is referenced in `globals.css` as the primary font (`--font-sans`) but is **not imported** from Google Fonts
  - Falls back to `system-ui`, `-apple-system`, etc.
  - No `next/font` integration present yet

## Analytics / Monitoring
- **None** — no analytics (no GA, PostHog, Plausible, Sentry, etc.)

## Summary
| Service | Type | Auth Required | Notes |
|---|---|---|---|
| Unsplash | Image CDN | No | Public URLs only |
| GitHub | External link | No | Profile + repo links |
| LinkedIn | External link | No | Social link |
| Email | mailto: | No | Contact link |
| Vercel (implied) | Hosting | N/A | Deployment target |
