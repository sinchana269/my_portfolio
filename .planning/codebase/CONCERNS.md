# CONCERNS.md — Technical Debt, Issues & Areas of Concern

## 1. Template Placeholder Content (Must Replace Before Use)
**Severity: High (UX)**

All data is placeholder — the template ships with another developer's personal info:
- `src/data/config.ts`: `name: "Paweł Szostak"`, GitHub/LinkedIn/email are hardcoded to the original author
- `src/data/projects.ts`: All projects are placeholder (`Project Alpha`, `Project Beta`, etc.) pointing to `Szostak21` GitHub repos
- `src/sections/About.tsx`: `YOUR NAME` placeholder hardcoded in JSX (not sourced from `siteConfig`)
- `src/sections/About.tsx`: `Krakow` / `GMT+1` location hardcoded in JSX
- `src/sections/Skills.tsx`: Skill groups have hardcoded items, not driven by data
- All Unsplash placeholder images are generic, not personal

**Resolution:** Edit `src/data/config.ts`, `src/data/projects.ts`, and section JSX directly.

## 2. About Section Uses Hardcoded Strings Instead of Config
**Severity: Medium (Maintainability)**

`src/sections/About.tsx` has the name (`YOUR NAME`), role (`Full Stack Developer`), and location (`Krakow`, `GMT+1`) hardcoded in JSX rather than sourced from `src/data/config.ts`.

```tsx
// Current (fragile):
<h3 className="...">YOUR NAME</h3>
<p>Full Stack Developer</p>
<p>Krakow</p>

// Better:
import { siteConfig } from "@/data/config";
<h3>{siteConfig.name}</h3>
<p>{siteConfig.title}</p>
```

## 3. Skills Data Hardcoded in Component
**Severity: Low (Maintainability)**

`src/sections/Skills.tsx` defines `skillGroups` and `beltChunk` inline rather than extracting to `src/data/`. Makes the data layer inconsistent:
- Projects → `src/data/projects.ts` ✅
- Site config → `src/data/config.ts` ✅
- Skills → inline in `Skills.tsx` ❌
- About tiles → inline in `About.tsx` ❌

## 4. `Section.tsx` Component Is Unused
**Severity: Low (Dead Code)**

`src/components/Section.tsx` exists and exports a generic `Section` wrapper but is **never imported** anywhere. All sections implement their own layout directly.

```ts
// src/components/Section.tsx — exists but no imports found in the codebase
export function Section({ id, title, subtitle, children }) { ... }
```

**Resolution:** Either use it consistently across sections, or delete it.

## 5. No Font Preloading / Google Fonts Integration
**Severity: Low (Performance)**

`globals.css` declares `--font-sans: "Inter", system-ui, ...` but Inter is not loaded:
- No `<link rel="preconnect">` to Google Fonts
- No `next/font/google` integration (the modern Next.js approach)
- Falls back to system fonts silently; visual inconsistency across OSes

**Resolution:** Add `next/font/google` to `_app.tsx` or `index.tsx`:
```ts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
```

## 6. No Testing Infrastructure
**Severity: Low (Quality)**

No unit or e2e tests exist. See `TESTING.md` for full details and recommendations.

## 7. `Other.tsx` Section Is Purely Placeholder
**Severity: Low (Content)**

`src/sections/Other.tsx` renders 3 cards (Guestbook, Achievements, Useful Links) that all link to `href="#other"` (self-referential). These are template placeholders for sections that don't yet exist:
- No actual guestbook page
- No achievements data
- No useful links list

## 8. Hero Section Stats Are Hardcoded
**Severity: Low (Maintainability)**

The Hero's quick stats (`5 Sections`, `0 Backend`, `Fast Setup`) are hardcoded values. If sections are added, this won't auto-update.

## 9. Potential `"use client"` Overuse
**Severity: Low (Performance)**

Several section files (`Projects.tsx`, `Other.tsx`) use `"use client"` primarily for Framer Motion. With Next.js 16 / React 19, some of these animations could be achieved with CSS animations, reducing client JS bundle size.

## 10. No `robots.txt`, `sitemap.xml`, or SEO Metadata
**Severity: Low (SEO)**

- `src/pages/index.tsx` has a basic `<title>` and `<meta description>` but they still say "Portfolio Template" (not personalized)
- No `robots.txt`, `sitemap.xml`, or structured data
- No Open Graph / Twitter Card meta tags for social sharing previews
- No favicon configured

## Summary Table
| # | Concern | Severity | Effort to Fix |
|---|---|---|---|
| 1 | Placeholder content (name, projects, images) | High | Medium |
| 2 | About hardcodes name/location (not from config) | Medium | Low |
| 3 | Skills data not in `src/data/` | Low | Low |
| 4 | `Section.tsx` is unused dead code | Low | Low |
| 5 | Inter font not loaded | Low | Low |
| 6 | No tests | Low | High |
| 7 | Other section is all placeholders | Low | Medium |
| 8 | Hero stats are hardcoded | Low | Low |
| 9 | Unnecessary `"use client"` | Low | Medium |
| 10 | No SEO meta, OG tags, favicon | Low | Low |
