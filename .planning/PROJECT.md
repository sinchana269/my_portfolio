# PROJECT.md — Sinchana KJ Personal Portfolio

## What This Is

A personal developer portfolio website for **Sinchana K J**, a CS (AI & ML) undergraduate at Vidyavardhaka College of Engineering, Mysuru. The site is built on an existing Next.js 16 / Tailwind v4 / Framer Motion template and is being personalized with real content, real projects, a dynamic SVG avatar, and Sinchana's brand.

**This is a prototype first** — the goal is to ship a fully-personalized, content-complete portfolio. Real screenshots and a CV PDF will be added in a follow-up pass once the prototype is finished.

## Core Value

**One thing that must work:** A visitor opens the portfolio, immediately understands who Sinchana is, what she builds, and can contact her — all within a single scroll.

## Owner
- **Name:** Sinchana K J
- **Role:** Aspiring Software Engineer | AI/ML Enthusiast
- **Email:** sinchanakj26@gmail.com
- **GitHub:** https://github.com/sinchana269
- **LinkedIn:** https://www.linkedin.com/in/sinchana-k-j-b73860271/
- **Location:** Mysore, Karnataka, India — 12°18'N / 76°39'E (GMT+5:30)

## Hero

**Headline:** *"Building Intelligent Products from the Ground Up."*

**Subtitle:** *"CS student & developer at the intersection of full-stack engineering and AI/ML — turning ideas into production-ready systems."*

## About (Bento Grid)
- **Profile name:** Sinchana K J
- **Role:** Aspiring Software Engineer | AI/ML Enthusiast
- **Education:** B.E. in Computer Science and Engineering (AI & ML), Vidyavardhaka College of Engineering, Mysuru | 2023–2027 | CGPA: 9.08/10
  - Senior Secondary (PUC): Vijaya Vittala Composite PU College, Mysuru | 91.16% | 2021–2023
  - Secondary (SSLC): St. Joseph's School, Mysuru | 88.8% | 2020–2021
- **Location tile:** Mysore, India · GMT+5:30
- **Mindset tile:** *"Consistency, curiosity, and craft — I believe in shipping real things, not just studying them. My projects are my proof."*
- **Craft tile:** Backend-heavy full-stack, REST APIs, ML integrations, cloud deployments. Approach: modular, tested, production-minded.

## Projects

### 1. FoodWaste Relief — AI Surplus Distribution Platform
- **Stack:** Python, Next.js, MySQL, Vercel
- **Highlights:**
  - Multi-tier marketplace connecting donors with 20+ NGOs, tracking 500+ meals with live telemetry
  - ML spoilage prediction engine optimizing surplus routing
  - Secure QR handoff verification for end-to-end accountability
- **Live:** https://food-waste-donation-system.vercel.app
- **deviceType:** desktop

### 2. Developer Portfolio with GitHub Sync
- **Stack:** Next.js, Java Spring Boot, Docker, AWS EC2, GraphQL, AI
- **Highlights:**
  - Fetches live GitHub repository data via GraphQL API with multi-tag filtering
  - AI-powered repo summarization + conversational chat interface
  - Containerized with Docker, deployed on AWS EC2 via CI/CD, handles 1,000+ daily searches
- **Live:** http://githubportfolio.duckdns.org/
- **deviceType:** desktop

### 3. Smart Order Management System (E-commerce Backend)
- **Stack:** Java, Spring Boot, MySQL, Redis
- **Highlights:**
  - 10,000+ end-to-end workflows (order, inventory, payment)
  - 80% code coverage via unit tests
  - Redis caching reduces DB load by 40%
- **deviceType:** desktop

## Skills (from resume — research-expanded)

### Languages
Python, Java, JavaScript, C/C++

### Frontend
React, Next.js, Angular (basic), Tailwind CSS, HTML/CSS

### Backend & Architecture
Node.js, Spring Boot, REST APIs, Distributed Systems, Event-Driven Architecture, Kafka

### Cloud & DevOps
AWS (EC2, Cloud Foundations, Generative AI Foundations), Docker, CI/CD Pipelines

### Databases
MySQL, MongoDB, Redis, Firebase

### AI/ML
ML model integration, Predictive Modeling, Machine Learning Specialization (Coursera), Generative AI Foundations (AWS)

### Tools & Practices
Git, Agile, Unit Testing, System Design

## Achievements & Certifications
- AWS Academy Graduate — Cloud Foundations
- AWS Academy Graduate — Generative AI Foundations
- Machine Learning Specialization (Coursera)
- University hackathon participant

## Interests
Dancing, Creative Arts, Artificial Intelligence & Machine Learning, Distributed Architecture, NSS Volunteer

## The "Other" Section
1. **CV Download** — Button to download/view resume PDF (PDF path: `sinchana_resume (6).pdf`, will be linked once hosted)
2. **Achievements** — Visual timeline of milestones, certifications, hackathons
3. **Useful Links** — GitHub, LinkedIn, Email, Live Project Links

## Dynamic Hero Avatar
- **Type:** SVG illustrated avatar with cursor-tracking eye movement (Option 3)
- **Implementation:** Custom SVG with pupils that follow mouse position using JS `mousemove` math
- **Style:** Matches dark violet aesthetic — stylized, not cartoonish
- *(No photo required — no external service needed)*

## Design System (unchanged)
- **Theme:** Dark, violet/purple/fuchsia gradients
- **Font:** Inter (system fallback)
- **Tokens:** `--background: #0a0a0f`, `--accent: #8b5cf6`, `--gradient-start: #6366f1`, `--gradient-end: #ec4899`

## Constraints & Decisions
- **No backend added** — this stays a static/SSR Next.js app (no API routes)
- **Prototype first** — real screenshots deferred; placeholder images used initially
- **CV PDF** — will be hosted/linked once Sinchana provides a hosted URL or we host the uploaded PDF statically
- **Education card** — shows VCE + CGPA only (most recent/relevant); full history available on request
- **`Section.tsx`** — unused component, will delete
- **Spline** — not used; SVG avatar chosen for simplicity and no external dependency

## Requirements

### Validated (existing template capabilities)
- ✓ Single-page Next.js portfolio with Navbar scroll tracking
- ✓ Hero, About, Projects, Skills, Other, Footer sections
- ✓ Dark glassmorphism design system with CSS variables
- ✓ Framer Motion animations (whileInView, AnimatePresence)
- ✓ ProjectCard with mobile/desktop mockup layouts
- ✓ Responsive layout (mobile-first)

### Active (to implement)
- [ ] Personalize site config (name, title, social links, email)
- [ ] Implement SVG cursor-tracking avatar in Hero
- [ ] Update Hero headline, subtitle, and CTA links
- [ ] Populate real projects in `src/data/projects.ts`
- [ ] Expand and restructure Skills section with full tech stack
- [ ] Update About section with real name, education, location, mindset, craft
- [ ] Replace "Other" placeholder cards (CV download, Achievements, Useful Links)
- [ ] Add Google Fonts Inter loading via `next/font`
- [ ] Add Open Graph / Twitter meta tags for SEO
- [ ] Add favicon
- [ ] Delete unused `Section.tsx`
- [ ] Fix hardcoded strings in About (source from config)
- [ ] Link CV PDF (once hosted)
- [ ] Add Achievements section content

### Out of Scope (v1)
- Real project screenshots — deferred until prototype is complete
- Guestbook / contact form — no backend
- Blog — not requested
- Dark/light mode toggle — design is dark-only
- Animations overhaul — existing Framer Motion animations kept

## Key Decisions

| Decision | Rationale | Outcome |
|---|---|---|
| SVG avatar with cursor-tracking eyes | No Spline account needed, no external dep, lightweight | ✅ Chosen |
| Keep existing dark violet aesthetic | User confirmed preference | ✅ Confirmed |
| Prototype without real screenshots | Ship content first, images second | ✅ Confirmed |
| CV card replaces Guestbook | No backend for guestbook; CV is more useful | ✅ Confirmed |
| 3 projects (not 4) in v1 | 3 real projects with real descriptions vs 4 placeholder | ✅ Confirmed |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition:**
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions

---
*Last updated: 2026-05-02 after initialization*
