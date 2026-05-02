# ARCHITECTURE.md — System Design & Patterns

## Architectural Pattern
**Single-Page Application (SPA) with SSR shell** using Next.js Pages Router.
- One page: `src/pages/index.tsx` (renders all sections vertically)
- No client-side routing between pages
- No API layer — purely presentational

## Layer Model
```
┌────────────────────────────────────────────────────┐
│ Pages Layer                                        │
│  src/pages/index.tsx  ← single entry point        │
│  src/pages/_app.tsx   ← global styles injection   │
├────────────────────────────────────────────────────┤
│ Section Components (page-level UI blocks)          │
│  Hero | About | Projects | Skills | Other          │
├────────────────────────────────────────────────────┤
│ Shared UI Components                               │
│  Navbar | Footer | Section | ProjectCard           │
├────────────────────────────────────────────────────┤
│ Data Layer (static TypeScript files)               │
│  src/data/config.ts  — site meta, socials          │
│  src/data/projects.ts — project list + interface   │
├────────────────────────────────────────────────────┤
│ Utilities                                          │
│  src/lib/utils.ts — cn() helper                   │
├────────────────────────────────────────────────────┤
│ Styles                                             │
│  src/styles/globals.css — design tokens, utilities │
└────────────────────────────────────────────────────┘
```

## Data Flow
- Data is **statically defined** in `src/data/` — no runtime fetching
- `projects.ts` exports the `Project[]` array and the `Project` interface
- `config.ts` exports `siteConfig` (name, title, description) and `socials[]`
- Components import data directly; no state management library needed
- Local component state via `useState` only in `About.tsx` (hover image swap) and `Navbar.tsx` (active section tracking)

## Client-Side Interactivity
Two patterns are used:
1. **Scroll-driven state** (`Navbar.tsx`): `useEffect` + `getBoundingClientRect()` drives active nav item
2. **Hover-driven state** (`About.tsx`): `useState<TileKey | null>` drives the center image via `AnimatePresence`

## Animation Strategy
- **Framer Motion** is the sole animation system
- `whileInView` used for scroll-triggered entrance animations (Projects, Other)
- `layoutId="template-nav-indicator"` for shared layout Navbar indicator
- `AnimatePresence mode="wait"` for cross-fade image transitions in About
- `motion.div animate={{ x: [...]}}` for the infinite marquee in Skills

## Component Boundaries
| Component | State | Props | Purpose |
|---|---|---|---|
| `Navbar` | `active: string` | — | Sticky nav, scroll tracking |
| `Footer` | — | — | Social links, copyright |
| `Section` | — | `id, title, subtitle, children` | Generic reusable section wrapper |
| `ProjectCard` | — | `project, index` | Single project display card |
| `Hero` | — | — | Hero section (static) |
| `About` | `activeTile: TileKey\|null` | — | Bento grid about section |
| `Projects` | — | — | Filtered featured projects grid |
| `Skills` | — | — | Skill groups + icon marquee |
| `Other` | — | — | Placeholder section cards |

## Entry Points
- `src/pages/_app.tsx` — mounts global CSS, wraps all pages
- `src/pages/index.tsx` — assembles page: Navbar → Hero → About → Projects → Skills → Other → Footer

## No-Backend Design Decision
The Hero section explicitly communicates this: "0 Backend". The template is designed to be:
- Deployed as a static/SSR Next.js app
- Easily customized by editing `src/data/` files
- No environment variables required for basic functionality
