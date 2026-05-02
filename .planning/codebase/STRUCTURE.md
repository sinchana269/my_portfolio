# STRUCTURE.md — Directory Layout & Organization

## Root Layout
```
portfolio-template/
├── src/
│   ├── components/           # Shared/reusable UI components
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Section.tsx
│   ├── data/                 # Static data / site configuration
│   │   ├── config.ts         # siteConfig, socials
│   │   └── projects.ts       # Project[] data + interface
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # cn() (clsx + tailwind-merge)
│   ├── pages/                # Next.js Pages Router
│   │   ├── _app.tsx          # App wrapper + global CSS import
│   │   └── index.tsx         # Single page entry point
│   ├── sections/             # Full-width page section components
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Other.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── styles/
│       └── globals.css       # Tailwind import + design tokens
├── next-env.d.ts             # Next.js type declarations
├── next.config.ts            # Next.js config (Turbopack, images)
├── package.json
├── package-lock.json
├── postcss.config.mjs        # PostCSS with @tailwindcss/postcss
├── tsconfig.json             # TypeScript config (strict, @/* alias)
└── README.md
```

## Key Conventions
- **All source code** lives under `src/`
- **Path alias** `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- **No `src/app/` directory** — strictly Pages Router; no App Router usage
- **No `src/pages/api/`** — no backend routes

## Directory Purposes
| Directory | What Goes Here |
|---|---|
| `src/pages/` | Next.js page files only (`_app`, `index`, future pages) |
| `src/sections/` | Large, full-width page blocks (one file per section) |
| `src/components/` | Smaller, reusable atoms/molecules; may be nested by domain |
| `src/components/projects/` | Project-specific components (`ProjectCard`) |
| `src/data/` | All static typed data (projects, site config, socials) |
| `src/lib/` | Pure utility functions (no React, no side effects) |
| `src/styles/` | Global CSS only (component styles live inline as Tailwind classes) |

## File Naming
- PascalCase for all React components: `ProjectCard.tsx`, `Hero.tsx`
- camelCase for utilities and data: `utils.ts`, `config.ts`, `projects.ts`
- kebab-case for config files: `next.config.ts`, `postcss.config.mjs`
- All component files use named exports (no default component exports)

## Import Patterns
```ts
// Data imports
import { projects } from "@/data/projects";
import { siteConfig, socials } from "@/data/config";

// Utility import
import { cn } from "@/lib/utils";

// Type import from data
import type { Project } from "@/data/projects";

// External packages
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
```

## Section Page Order (index.tsx)
1. `<Navbar />` — fixed header
2. `<Hero />` — hero section with tagline + quick-replace card
3. `<About />` — bento grid personal info
4. `<Projects />` — featured projects grid
5. `<Skills />` — skill groups + icon marquee
6. `<Other />` — placeholder section cards
7. `<Footer />` — copyright + socials

## Where to Add New Content
- **New project:** Add entry to `src/data/projects.ts`
- **New section:** Create `src/sections/NewSection.tsx`, import in `src/pages/index.tsx`
- **Site meta (name, title):** Edit `src/data/config.ts` → `siteConfig`
- **Social links:** Edit `src/data/config.ts` → `socials`
- **Design tokens:** Edit `:root` variables in `src/styles/globals.css`
- **Nav items:** Edit `navItems` array in `src/components/Navbar.tsx`
