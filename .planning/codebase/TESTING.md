# TESTING.md — Test Structure & Practices

## Current Testing Status
**No tests exist in this codebase.**

- No test files found (no `*.test.ts`, `*.spec.ts`, `*.test.tsx`, `*.spec.tsx`)
- No test directory (`__tests__/`, `tests/`, `test/`, `e2e/`)
- No testing framework installed (no Jest, Vitest, Playwright, Cypress in `package.json`)
- No CI configuration (no `.github/workflows/`, `.gitlab-ci.yml`, etc.)

## What Exists
- **Linting only:** `next lint` via `eslint-config-next` and `eslint ^9`
  - TypeScript type-checking is the primary correctness guarantee
  - `tsconfig.json` strict mode catches type errors at build time

## Risk Assessment Without Tests
Given the codebase's nature as a **static portfolio template**, the testing gap is lower risk than for production applications:
- No business logic to break
- No API routes or data mutations
- No authentication flows
- Changes are primarily visual (layout, styles, colors)

However, the following scenarios could benefit from testing if this template is productized:
1. **Navbar scroll tracking** — `useEffect` + DOM query logic
2. **ProjectCard rendering** — both `deviceType` branches (mobile vs desktop screenshots)
3. **Projects filtering** — `filter(p => p.featured)` logic
4. **About tile image swapping** — hover state driving `AnimatePresence`

## Recommended Testing Setup (if needed)
```
# Unit/Component testing
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom

# E2E testing
npm install -D playwright
npx playwright install
```

### Suggested Test Coverage Priorities
| Priority | Area | What to Test |
|---|---|---|
| High | `ProjectCard` | Renders mobile/desktop mockups correctly |
| High | `Projects` | `featured` filter works, cards render |
| Medium | `Navbar` | Active state updates on scroll |
| Medium | `About` | Hover state drives correct image |
| Low | `Skills` | Marquee renders all icon items |
| Low | `Footer` | Social links render with correct hrefs |

## Build-Time Type Safety (Substitute for Tests)
TypeScript strict mode provides meaningful correctness guarantees:
- `Project` interface enforces required fields at data-entry time
- `Social` interface requires valid `LucideIcon` type
- `TileKey` type (`keyof typeof TILE_IMAGES`) prevents invalid tile keys
- `"desktop" | "mobile"` union type enforces valid `deviceType` values
