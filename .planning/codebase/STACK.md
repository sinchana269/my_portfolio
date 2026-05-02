# STACK.md — Technology Stack

## Language & Runtime
- **Language:** TypeScript 5 (strict mode, `allowJs: false`)
- **Runtime:** Node.js (Next.js server / Vercel Edge)
- **JSX transform:** `react-jsx` (React 19)
- **Target:** ES2017, module resolution: bundler

## Framework
- **Next.js ^16.0.10** — Pages Router (not App Router)
  - Entry: `src/pages/_app.tsx`, `src/pages/index.tsx`
  - Turbopack enabled via `next.config.ts` (`turbopack: { root: __dirname }`)
  - `reactStrictMode: true`

## UI & Styling
- **Tailwind CSS v4** (`tailwindcss: ^4`, `@tailwindcss/postcss: ^4.1.18`)
  - Imported via `@import "tailwindcss"` in `src/styles/globals.css`
  - CSS-variable-driven design tokens defined in `:root` (no `tailwind.config.js`)
  - PostCSS config: `postcss.config.mjs`
- **Custom CSS utilities:** `.section`, `.glass`, `.glass-strong`, `.gradient-text`, `.text-gradient-shimmer`
- **clsx ^2.1.1** — conditional class composition
- **tailwind-merge ^3.4.0** — merged via `cn()` helper in `src/lib/utils.ts`

## Animation
- **framer-motion ^12.23.26** — used in `About`, `Skills`, `Projects`, `Other`, `Navbar`, `ProjectCard`
  - Patterns: `motion.div`, `AnimatePresence`, `whileInView`, `whileHover`, `layoutId`

## Icons
- **lucide-react ^0.559.0** — used in `Navbar`, `ProjectCard`, `Footer`, `Other`, `config.ts`
- **react-icons ^5.5.0** (`react-icons/si`) — brand/tech icons in `Skills.tsx`

## Image Handling
- **next/image** — used in `About.tsx` and `ProjectCard.tsx`
  - Remote patterns allowed: `images.unsplash.com` (configured in `next.config.ts`)
  - `priority` prop used on above-the-fold images

## Build & Dev Tools
- **TypeScript compiler:** strict, incremental, with Next.js plugin
- **Path alias:** `@/*` → `./src/*`
- **ESLint:** `eslint ^9`, `eslint-config-next 16.0.8`
- **autoprefixer ^10.4.23**
- **Scripts:** `dev`, `build`, `start`, `lint` (standard Next.js)

## Dependency Summary
| Package | Version | Purpose |
|---|---|---|
| `next` | ^16.0.10 | Framework |
| `react` / `react-dom` | 19.2.1 | UI runtime |
| `framer-motion` | ^12.23.26 | Animations |
| `lucide-react` | ^0.559.0 | UI icons |
| `react-icons` | ^5.5.0 | Brand/tech icons |
| `clsx` | ^2.1.1 | Class composition |
| `tailwind-merge` | ^3.4.0 | Class deduplication |
| `tailwindcss` | ^4 | Styling |
| `typescript` | ^5 | Type safety |
