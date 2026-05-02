# ROADMAP.md — Sinchana KJ Portfolio v1

**Milestone:** v1 — Fully personalized prototype
**Total phases:** 5
**Requirements mapped:** 34 / 34 ✓

---

## Phase 1 — Foundation & Site Identity

**Goal:** Replace all placeholder identity data with Sinchana's real info, fix font loading, add SEO meta, delete dead code, and align data layer.

**Requirements:** CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06, HERO-01, HERO-02, HERO-03, CODE-01, CODE-02, CODE-03

**Plans:**
1. Update `src/data/config.ts` — real name, title, socials, siteConfig
2. Update `src/pages/index.tsx` — title, description, Open Graph meta, Inter font via `next/font/google`, favicon
3. Delete `src/components/Section.tsx`; refactor `About.tsx` to source name from `siteConfig`; extract skills data to `src/data/skills.ts`

**Success Criteria:**
1. `siteConfig.name` === "Sinchana K J" and renders correctly in Footer and Navbar
2. `<title>` and `og:title` show Sinchana's name (not "Portfolio Template")
3. Inter font loads from Google Fonts (no FOUT on first load)
4. `Section.tsx` no longer exists in the codebase
5. `About.tsx` does not contain the string "YOUR NAME" hardcoded — sources from config
6. Hero CTA buttons link to `#projects` and `#about`

**UI hint:** no

---

## Phase 2 — Dynamic SVG Avatar in Hero

**Goal:** Build and embed an SVG illustrated avatar in the Hero section whose pupils follow the user's cursor in real time.

**Requirements:** HERO-04, HERO-05, HERO-06, HERO-07

**Plans:**
1. Design and implement `src/components/Avatar.tsx` — a styled SVG face/avatar with separate pupil elements
2. Implement `useCursorTracking` hook — maps window mouse position to pupil offset (bounded within iris)
3. Integrate avatar into `Hero.tsx` right column, replacing the "Quick replace" card; handle mobile responsiveness

**Success Criteria:**
1. Avatar renders in Hero right column on desktop (replaces the info card)
2. Moving the mouse anywhere on the page causes both pupils to rotate/shift toward cursor
3. Pupil movement is smooth (no jitter) and bounded within the iris circle
4. Avatar is hidden or gracefully scaled on screens < 768px
5. Avatar has dark violet color palette matching the site's design system
6. No console errors related to the avatar on any viewport

**UI hint:** yes

---

## Phase 3 — About Section Personalization

**Goal:** Replace all placeholder content in the About bento grid with Sinchana's real education, location, mindset, and craft data.

**Requirements:** ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, ABOUT-05, ABOUT-06, ABOUT-07

**Plans:**
1. Update About bento grid — education tile (VCE, 2023–2027, 9.08 CGPA), location tile (Mysore / GMT+5:30), mindset tile (real text)
2. Update craft tile — real tech tags (Spring Boot, Next.js, Python, Docker, AWS, MySQL), real craft summary text
3. Maintain hover-swap image behavior (placeholder Unsplash images retained for prototype; note for follow-up)

**Success Criteria:**
1. Profile name shows "Sinchana K J" sourced from config (not hardcoded)
2. Education tile shows VCE, B.E. CSE (AI & ML), 2023–2027, CGPA 9.08
3. Location tile shows "Mysore, India · GMT+5:30"
4. Mindset tile has real content (not template placeholder text)
5. Craft tile has at least 5 relevant tech tags from Sinchana's real stack
6. Hover-swap behavior on center image still works

**UI hint:** yes

---

## Phase 4 — Projects & Skills with Real Data

**Goal:** Populate all 3 real projects with actual descriptions, links, and tags; update the Skills section with Sinchana's full, research-expanded tech stack.

**Requirements:** PROJ-01, PROJ-02, PROJ-03, PROJ-04, PROJ-05, PROJ-06, SKILL-01, SKILL-02, SKILL-03, SKILL-04

**Plans:**
1. Update `src/data/projects.ts` — 3 real projects (FoodWaste Relief, GitHub Portfolio, Smart Order System) with real descriptions, tags, links, `bgColor`, placeholder screenshots
2. Update `src/sections/Skills.tsx` (or extract to `src/data/skills.ts`) — 4 skill groups (Languages, Frontend, Backend & Cloud, AI/ML & Tools) with concise items; update marquee belt with 14 real tech icons

**Success Criteria:**
1. Projects section shows exactly 3 cards with real project names and descriptions
2. FoodWaste Relief card links to `https://food-waste-donation-system.vercel.app`
3. GitHub Portfolio card links to `http://githubportfolio.duckdns.org/`
4. All 3 cards have distinct gradient `bgColor` values
5. Skills marquee shows at least 10 real tech icons (Python, Java, React, Next.js, Spring Boot, Docker, AWS, MySQL, MongoDB, Git)
6. Skill groups accurately reflect Sinchana's resume (no placeholder items like "PostgreSQL / Supabase")
7. "See all projects" link points to `https://github.com/sinchana269`

**UI hint:** no

---

## Phase 5 — Other Section & Final Polish

**Goal:** Replace the 3 placeholder "Other" cards with CV Download, Achievements, and Useful Links; verify the full site end-to-end.

**Requirements:** OTHER-01, OTHER-02, OTHER-03, OTHER-04

**Plans:**
1. Update `src/sections/Other.tsx` — replace Guestbook card with CV Download (BookMarked icon → FileDown, href to `/sinchana_resume (6).pdf` or `#`); update Achievements card content (certifications, hackathons, NSS); update Useful Links card (GitHub, LinkedIn, live project links)
2. Copy resume PDF to `public/` directory so it's served as a static asset; update CV card href to `/sinchana_resume.pdf`

**Success Criteria:**
1. First "Other" card is "Download CV" with FileDown icon and correct href
2. Clicking CV card opens or downloads the resume PDF
3. Achievements card content matches real certifications and achievements
4. Useful Links card has working external links to GitHub, LinkedIn, and live projects
5. All hover animations on Other cards still work
6. Full page scroll from top to footer has no visual regressions

**UI hint:** yes

---

## Phase Dependency Order

```
Phase 1 (Foundation)
    ↓
Phase 2 (Avatar) ──────┐
Phase 3 (About)  ──────┤  (can run independently after Phase 1)
Phase 4 (Projects/Skills)─┘
    ↓
Phase 5 (Other + Polish)
```

Phases 2, 3, and 4 can be worked on in any order after Phase 1 completes. Phase 5 should be last (it's the polish pass).

---

## Post-v1 (Reminder List)
- [ ] Add real project screenshots (user to provide)
- [ ] Host CV PDF at a permanent URL and update the link
- [ ] Add personal photo or upgrade avatar
- [ ] Verify on mobile devices end-to-end
