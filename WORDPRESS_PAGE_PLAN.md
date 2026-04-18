# WordPress Services Page Architecture Plan

## Architecture

- **Props-driven shared sections** + **data files per page** + **each page composes its own sections**
- **No shared layout wrapper** — each page imports Navbar, Footer, CustomCursor individually (current pattern)
- **WP page navigation** — hash links scroll to its own sections (`#services`, `#projects`, etc.)

## Section Composition

```
Homepage: Hero → About → QuoteBanner → Services → Projects → Blog → Reviews → Contact
WP Page:  Hero → About → QuoteBanner → Services → Projects → Reviews → Contact
```

## Phase 1 — Data Layer

1. **Create `data/pages/types.ts`** — shared TypeScript interfaces for all section data (hero, about, services, projects, reviews, contact, quoteBanner)
2. **Create `data/pages/homepage.ts`** — extract all hardcoded copy from current components
3. **Create `data/pages/wordpress-development.ts`** — WP-specific content (different hero text, different quote banner text, same projects, WP-focused services)

## Phase 2 — Refactor Shared Components (can be parallel)

4. **`HeroSection`** → accept props for heading, subtitle, stats, CTAs, image
5. **`AboutSection`** → accept props for bio, skills, quote
6. **`ServicesSection`** → accept props for service cards array
7. **`ProjectsSection`** + **`ProjectSidebar`** → accept props for projects data (same projects passed from data file)
8. **`ReviewsSection`** → accept props for reviews data
9. **`ContactSection`** → accept props for heading, description (form stays the same)

Already props-driven: `QuoteBanner`, `Marquee` (no changes needed)

## Phase 3 — Create WP Page

10. **Create `app/wordpress-development/page.tsx`** — composes sections with WP data, imports Navbar/Footer/Cursor, adds WP-specific metadata
11. **`Navbar`** — detect WP page route, use on-page hash links (`#services`, `#projects`) instead of homepage links, add "WordPress" nav item
12. **`Footer`** — add WordPress link

## Phase 4 — Wire Homepage

13. **Refactor `app/page.tsx`** — import homepage data, pass to refactored components

## Phase 5 — Verification

- `/` renders exactly as before
- `/wordpress-development` renders with WP content, own navigation, brand-consistent
- `/blog` unchanged
- Zero TypeScript errors

## Key Decisions

- WP nav links scroll to **own page sections**
- **Drop Blog only** from WP page (keep About)
- **Same projects** displayed on WP page
- **Different QuoteBanner text** for WP page (WP-specific quote)
- **No shared layout** — keep current manual import pattern
- **No page-specific WP components yet** (can add `components/wordpress/` later as needed)
