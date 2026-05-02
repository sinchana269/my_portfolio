# REQUIREMENTS.md — Sinchana KJ Portfolio v1

## v1 Requirements

### CORE — Site Identity & Config
- [ ] **CORE-01:** Site config exports Sinchana's real name, title, and social links (GitHub, LinkedIn, email)
- [ ] **CORE-02:** Footer displays correct name, initials, and social icon links
- [ ] **CORE-03:** Page `<title>` and `<meta description>` reflect Sinchana's identity (not "Portfolio Template")
- [ ] **CORE-04:** Open Graph meta tags present (og:title, og:description, og:url)
- [ ] **CORE-05:** Inter font loaded via `next/font/google` (not just CSS fallback)
- [ ] **CORE-06:** Favicon configured

### HERO — Section Content & Avatar
- [ ] **HERO-01:** Headline reads "Building Intelligent Products from the Ground Up."
- [ ] **HERO-02:** Subtitle reads "CS student & developer at the intersection of full-stack engineering and AI/ML — turning ideas into production-ready systems."
- [ ] **HERO-03:** CTA buttons link to `#projects` and `#about`
- [ ] **HERO-04:** SVG illustrated avatar renders in the right column of the Hero grid
- [ ] **HERO-05:** Avatar pupils track the mouse cursor position in real time using `mousemove` math
- [ ] **HERO-06:** Avatar visual style matches dark violet aesthetic (no cartoonish colors)
- [ ] **HERO-07:** Avatar is responsive (hides or scales gracefully on mobile)

### ABOUT — Bento Grid Personalization
- [ ] **ABOUT-01:** Profile name displays "Sinchana K J" (sourced from `siteConfig`, not hardcoded)
- [ ] **ABOUT-02:** Profile subtitle displays "Aspiring Software Engineer | AI/ML Enthusiast"
- [ ] **ABOUT-03:** Education tile displays VCE, B.E. CSE (AI & ML), 2023–2027, CGPA 9.08
- [ ] **ABOUT-04:** Location tile displays "Mysore, India · GMT+5:30"
- [ ] **ABOUT-05:** Mindset tile displays real mindset text about consistency, curiosity, and craft
- [ ] **ABOUT-06:** Craft tile displays relevant tags: Spring Boot, Next.js, Python, Docker, AWS, MySQL
- [ ] **ABOUT-07:** Center image tile retains hover-swap behavior (placeholder images used until real photos provided)

### PROJECTS — Real Project Data
- [ ] **PROJ-01:** FoodWaste Relief project card: real title, description (live app bullets), tags, GitHub/demo links
- [ ] **PROJ-02:** GitHub Portfolio project card: real title, description, tags, GitHub/demo links
- [ ] **PROJ-03:** Smart Order Management System project card: real title, description, tags (no live link — GitHub optional)
- [ ] **PROJ-04:** All 3 projects have `deviceType: "desktop"` and appropriate gradient `bgColor`
- [ ] **PROJ-05:** Placeholder Unsplash screenshots used for all 3 cards (real screenshots deferred)
- [ ] **PROJ-06:** "See all projects on GitHub" link points to `https://github.com/sinchana269`

### SKILLS — Full Tech Stack
- [ ] **SKILL-01:** Skills belt (marquee) shows: Python, Java, JavaScript, C++, React, Next.js, Node.js, Spring Boot, Docker, AWS, MySQL, MongoDB, Firebase, Git
- [ ] **SKILL-02:** Skill groups updated with 4 categories: Languages, Frontend, Backend & Cloud, AI/ML & Tools
- [ ] **SKILL-03:** Each group has 3–4 concise bullet items reflecting actual resume skills
- [ ] **SKILL-04:** Skill group summary lines are accurate and specific to Sinchana's profile

### OTHER — Replaced Section Cards
- [ ] **OTHER-01:** First card is "Download CV" with an appropriate icon, gradient, and `href` pointing to the resume PDF (static file or placeholder `#` for now)
- [ ] **OTHER-02:** Second card is "Achievements" — certifications, hackathons, NSS
- [ ] **OTHER-03:** Third card is "Useful Links" — GitHub, LinkedIn, live project links
- [ ] **OTHER-04:** All cards have hover animations consistent with template style

### CODE — Housekeeping
- [ ] **CODE-01:** Unused `src/components/Section.tsx` deleted
- [ ] **CODE-02:** `About.tsx` sources name from `siteConfig` (not hardcoded "YOUR NAME")
- [ ] **CODE-03:** Skills data extracted to `src/data/skills.ts` for consistency with data layer

## v2 Requirements (Deferred)
- Real project screenshots (user to provide)
- CV PDF hosted URL (to replace `#` placeholder)
- Actual personal photo with tilt effect (if user wants to add later)
- Spline 3D avatar upgrade (if desired)
- Contact form (requires backend/email service)
- Blog section

## Out of Scope (v1)
- Guestbook — no backend, replaced by CV card
- Dark/light mode toggle — dark-only per user preference
- Multi-language (i18n) — not requested
- CMS integration — content is static TypeScript data
- User authentication — no backend

## Traceability (Phases)
| Phase | Requirements |
|-------|-------------|
| Phase 1 | CORE-01 → 06, HERO-01 → 03, CODE-01 → 03 |
| Phase 2 | HERO-04 → 07 |
| Phase 3 | ABOUT-01 → 07 |
| Phase 4 | PROJ-01 → 06, SKILL-01 → 04 |
| Phase 5 | OTHER-01 → 04 |
