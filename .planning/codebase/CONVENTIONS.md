# CONVENTIONS.md — Code Style & Patterns

## TypeScript Patterns
- **Strict mode** enabled: `strict: true` in `tsconfig.json`
- **No `allowJs`**: all files must be TypeScript
- **Type imports** use `import type` where the value is only used as a type:
  ```ts
  import type { AppProps } from "next/app";
  import type { Project } from "@/data/projects";
  import type { ReactNode } from "react";
  ```
- **Interfaces over types** for object shapes (data models):
  ```ts
  // src/data/projects.ts
  export interface Project { id: string; title: string; ... }
  // src/data/config.ts
  export interface Social { name: string; url: string; icon: LucideIcon; }
  ```
- **`as const` assertions** for lookup objects:
  ```ts
  const TILE_IMAGES = { education: "...", ... } as const;
  type TileKey = keyof typeof TILE_IMAGES;
  ```

## Component Patterns
- **Named exports only** — no default component exports:
  ```ts
  export function Hero() { ... }     // ✅
  export default function Hero() {}  // ❌ not used
  ```
- **`"use client"` directive** placed at the top of files that use React hooks or browser APIs:
  - `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Other.tsx`, `Navbar.tsx`, `ProjectCard.tsx`
  - `Hero.tsx` and `Footer.tsx` are implicitly server-compatible (no hooks)
- **Props interfaces** defined locally in component files (not a shared types file):
  ```ts
  interface ProjectCardProps { project: Project; index: number; }
  ```
- **Inline static data** within sections (Skills groups, Other items, nav items) rather than importing from `src/data/`

## Styling Patterns
- **Tailwind CSS v4** utility classes inline via JSX `className`
- **Design tokens via CSS variables** — no hardcoded colors in Tailwind classes:
  ```tsx
  className="text-(--muted)"        // var(--muted)
  className="bg-(--card)"           // var(--card)
  className="border-(--card-border)" // var(--card-border)
  ```
- **`cn()` helper** from `src/lib/utils.ts` for conditional classes:
  ```ts
  import { cn } from "@/lib/utils";
  cn("absolute inset-0 bg-linear-to-br", project.bgColor || "from-neutral-800 to-neutral-900")
  ```
- **Global utility classes** (`.section`, `.glass`, `.glass-strong`, `.gradient-text`, `.text-gradient-shimmer`) used directly in JSX for repeated patterns
- **Gradient backgrounds** use Tailwind v4 syntax: `bg-linear-to-br from-violet-500/90 to-fuchsia-500/90`

## Animation Patterns (Framer Motion)
- **`whileInView` for scroll animations** (not `useInView` hook):
  ```tsx
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
  ```
- **`viewport={{ once: true }}`** — animations trigger only once on first enter
- **`viewport={{ margin: "-100px" }}`** — trigger earlier than full visibility
- **`AnimatePresence mode="wait"`** for exclusive exit/enter transitions
- **`layoutId`** for smooth shared element transitions (Navbar indicator):
  ```tsx
  <motion.span layoutId="template-nav-indicator" />
  ```
- **Infinite animations** use array keyframes on `animate`:
  ```ts
  animate={{ x: ["0%", "-50%"] }}
  transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
  ```

## Naming Conventions
| Item | Convention | Example |
|---|---|---|
| Component files | PascalCase | `ProjectCard.tsx` |
| Component functions | PascalCase | `function ProjectCard()` |
| Data files | camelCase | `projects.ts`, `config.ts` |
| Exported data | camelCase | `projects`, `siteConfig`, `socials` |
| CSS custom props | kebab-case in `--name` | `--card-border`, `--gradient-start` |
| Local state variables | camelCase | `activeTile`, `active` |

## Event Handling
- Inline arrow functions for simple handlers (no separate named handlers):
  ```tsx
  onMouseEnter={() => setActiveTile("education")}
  onMouseLeave={() => setActiveTile(null)}
  ```
- Scroll handlers use passive listeners:
  ```ts
  window.addEventListener("scroll", onScroll, { passive: true });
  ```

## Image Handling
- Always use `next/image` (never `<img>`) for project screenshots and bento tiles
- `fill` prop + relative parent for responsive images: `sizes` prop always provided
- `priority` prop on above-the-fold / first visible images

## Error Handling
- No explicit error boundaries or try/catch patterns (static data, no async)
- Optional chaining used on optional fields: `project.screenshots || []`, `project.github ?`
- Null checks via ternary: `{activeTile ? TILE_IMAGES[activeTile] : TILE_IMAGES.default}`
