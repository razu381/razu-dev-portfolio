# RAZU.DEV — Brand Guidelines

> For graphic designers, collaborators, and anyone creating visual assets for the razu.dev brand.

---

## 1. Brand Identity

**Aesthetic**: Dark, brutalist, developer-focused. Neon green on near-black. Sharp edges. Monospace labels. Industrial precision.

**Mood**: Technical, confident, minimal, underground. Think terminal meets art gallery.

**Do NOT**:
- Use rounded corners (the brand is intentionally sharp/brutalist)
- Introduce warm colors (reds, oranges, yellows, purples)
- Add drop shadows (use green glow instead)
- Use decorative or script fonts

---

## 2. Color Palette

### Primary Colors

| Role | Color | Hex | HSL |
|---|---|---|---|
| **Accent / Brand Green** | ![#00eb1c](https://via.placeholder.com/15/00eb1c/00eb1c.png) | `#00EB1C` | `hsl(128, 100%, 46%)` |
| **Primary Text** | ![#f0f0f0](https://via.placeholder.com/15/f0f0f0/f0f0f0.png) | `#F0F0F0` | `hsl(0, 0%, 94%)` |
| **Page Background** | ![#080808](https://via.placeholder.com/15/080808/080808.png) | `#080808` | `hsl(0, 0%, 3%)` |

### Surface Colors (Dark Tones)

| Role | Color | Hex |
|---|---|---|
| **Surface / Card** | ![#111111](https://via.placeholder.com/15/111111/111111.png) | `#111111` |
| **Secondary / Muted BG** | ![#161616](https://via.placeholder.com/15/161616/161616.png) | `#161616` |
| **Alternate Section BG** | ![#0a0a0a](https://via.placeholder.com/15/0a0a0a/0a0a0a.png) | `#0A0A0A` |
| **Footer Background** | ![#050505](https://via.placeholder.com/15/050505/050505.png) | `#050505` |
| **Border** | ![#1a1a1a](https://via.placeholder.com/15/1a1a1a/1a1a1a.png) | `#1A1A1A` |

### Text Colors

| Role | Color | Hex |
|---|---|---|
| **Primary Text** | `#F0F0F0` | White-ish |
| **Muted Text** | `#666666` | Mid gray |
| **Alt Muted Text** | `#444444` | Darker gray |
| **Text on Green** | `#000000` | Pure black |

### Green Opacity Variants

The brand green is used at various opacities for subtle effects:

| Opacity | Use Case |
|---|---|
| `#00eb1c` at 3% | Tinted overlays, quote banner backgrounds |
| `#00eb1c` at 7% | Card hover shadows |
| `#00eb1c` at 10% | Button hover backgrounds |
| `#00eb1c` at 20% | Progress bars, submit button glow |
| `#00eb1c` at 25% | Skill tag borders, tech pill borders |
| `#00eb1c` at 30% | Badge borders, card borders |
| `#00eb1c` at 50% | Text stroke hover fills |
| `#00eb1c` at 100% | Buttons, links, icons, accents |

### Secondary Accent (Brutalist Card Green)

A slightly lighter green used on brutalist scroll cards:

| Role | Color | Hex |
|---|---|---|
| **Brutalist Green** | ![#1aff6b](https://via.placeholder.com/15/1aff6b/1aff6b.png) | `#1AFF6B` |

Use sparingly — only for the left-border accent, CTA arrows, and tags on scroll cards.

---

## 3. Typography

### Font Stack (4 Tiers)

| Tier | Font | Weight | Purpose |
|---|---|---|---|
| **Display** | **Syne** | 700 (Bold), 800 (ExtraBold) | Hero headings, section titles, ghost watermarks, quote banners |
| **Heading** | **Space Grotesk** | 700 (Bold) | Subheadings, card titles, button text, nav items |
| **Body** | **DM Sans** | 400 (Regular) | Paragraphs, descriptions, form text, review quotes |
| **Mono Label** | **JetBrains Mono** | 400 (Regular), 700 (Bold) | Tags, badges, metadata, section numbers, nav links, tech pills |

All fonts are loaded from Google Fonts with `display: swap`.

### Display Font — Syne (Headings & Hero)

| Element | Size | Weight | Line Height |
|---|---|---|---|
| Hero Name "RAZU" | `clamp(3rem, 8vw, 8rem)` | ExtraBold | 0.95 |
| Hero Name "SHOHIDUL" | `clamp(3rem, 8vw, 6rem)` | ExtraBold | 0.95 |
| Hero "HI, I AM" | `clamp(1.875rem, 3vw, 2.25rem)` | ExtraBold | — |
| Section Headings | `clamp(1.875rem, 3vw, 3rem)` | Bold | — |
| Quote Banner | `clamp(2.5rem, 6vw, 5rem)` | ExtraBold | 1.1 |
| Contact Heading | `clamp(2.5rem, 5vw, 4rem)` | ExtraBold | 0.9 |
| Ghost Watermarks | `clamp(5rem, 18vw, 18rem)` | ExtraBold | 1.0 |
| Footer Giant Name | `clamp(4rem, 10vw, 12rem)` | ExtraBold | — |

### Heading Font — Space Grotesk (Subheadings & Cards)

| Element | Size | Weight |
|---|---|---|
| Project Panel Title | `clamp(1.875rem, 3vw, 2.25rem)` | Bold |
| Project Card Title | `1.125rem` (18px) | Bold |
| Service Card Title | `clamp(0.875rem, 1vw, 1rem)` | Bold |
| Blog Featured Title | `clamp(1.125rem, 1.5vw, 1.25rem)` | Bold |
| Blog Card Title | `clamp(0.875rem, 1vw, 1rem)` | Bold |

### Body Font — DM Sans (Paragraphs)

| Element | Size | Line Height |
|---|---|---|
| Body Text / Descriptions | `0.875rem` (14px) | Relaxed (~1.625) |
| About Intro Text | `clamp(1.125rem, 1.5vw, 1.25rem)` | — |

### Mono Font — JetBrains Mono (Labels & Tags)

| Element | Size | Letter Spacing |
|---|---|---|
| Nav Links | `0.75rem` (12px) | `0.1em` (widest) |
| Section Labels "[ 02 ]" | `0.875rem` (14px) | `0.05em` |
| Hero Badge | `0.75rem` (12px) | `0.05em` |
| Tech Stack Pills | `0.625rem` (10px) | `0.05em` |
| Blog Categories | `0.625rem` (10px) | `0.05em` |
| Blog Filter Categories | `0.6875rem` (11px) | `0.1em` |
| Footer Location | `0.625rem` (10px) | `0.3em` |
| Section Vertical Spine | `0.75rem` (12px) | `0.2em` |
| Form Input Fields | `0.875rem` (14px) | — |
| Footer Copyright | `0.75rem` (12px) | — |

### Text Effects

**Outlined Text (Text Stroke)**:
- Stroke: `1px hsl(0, 0%, 20%)` (dark gray outline)
- Fill: transparent by default, fills green (`#00EB1C`) on hover
- Used for decorative elements, not primary headings

**Faint Stroke**:
- Stroke: `1px rgba(255, 255, 255, 0.2)`
- Fills green on hover or scroll-into-view

---

## 4. Buttons

The brand uses two primary button styles:

### Style A — Filled (Primary Action)

```
Background:   #00EB1C (brand green)
Text:         #000000 (black)
Font:         Space Grotesk, Bold
Size:         14px (text-sm)
Padding:      32px horizontal, 14px vertical
Border:       None
Corners:      Sharp (0px border-radius)
Hover:        brightness(110%), subtle green glow shadow
```

### Style B — Outline (Secondary Action)

```
Background:   Transparent
Text:         #00EB1C (brand green)
Font:         Space Grotesk, Bold
Size:         14px (text-sm)
Padding:      32px horizontal, 14px vertical
Border:       2px solid #00EB1C
Corners:      Sharp (0px border-radius)
Hover:        Background fills to #00EB1C at 10% opacity
```

### Style C — Compact Filled (Navbar)

```
Background:   #00EB1C
Text:         #000000
Font:         Space Grotesk, Bold
Size:         12px (text-xs)
Padding:      20px horizontal, 10px vertical
```

### Style D — View Project (Border)

```
Background:   Transparent
Text:         #00EB1C (brand green)
Font:         Space Grotesk, Bold
Size:         14px (text-sm)
Letter-spacing: 0.05em, UPPERCASE
Padding:      24px horizontal, 12px vertical
Border:       2px solid #00EB1C
Hover:        Background fills to #00EB1C, text turns black
```

### Full-Width Submit (Contact Form)

```
Width:        100%
Background:   #00EB1C
Text:         #000000
Font:         Space Grotesk, Bold
Size:         14px
Padding:      16px vertical
Hover:        brightness(110%), translateY(-2px), green glow shadow
              shadow: 0 8px 24px rgba(0, 234, 28, 0.2)
```

---

## 5. Cards & Surfaces

### Card Style

```
Background:   #111111
Border:       1px solid #1A1A1A
Corners:      Sharp (0px)
Padding:      24px (mobile) / 32px (desktop)
Shadow:       None (no traditional drop shadow)
Hover:        Subtle green glow shadow (0.07 opacity), slight transform
```

### Brutalist Scroll Card

```
Background:   #0A0A0A
Left Border:  3px solid #1AFF6B
Corners:      Sharp (0px)
Hover:        Green glow shadow, slight translate-y lift
```

---

## 6. Border & Corner Rules

- **All corners are sharp (0px border-radius)** — this is a core brand rule
- **Exception**: Status indicators and the custom cursor use `border-radius: 50%` (circles)
- **Border color**: Always `#1A1A1A` on dark surfaces
- **Green borders**: Used sparingly for emphasis (`#00EB1C` at 25-30% opacity)

---

## 7. Spacing

### Page Layout

| Element | Value |
|---|---|
| Section vertical padding | `96px` (mobile) / `128px` (desktop) |
| Horizontal padding | `24px` (mobile) / `40px` (tablet) / `80px` (desktop) |
| Max content width | `1152px` (72rem) |
| Content offset below ghost text | `64px` top margin |

### Grid Gaps

| Context | Value |
|---|---|
| Card grids | `16px` |
| Two-column layouts | `48px` (mobile) / `80px` (desktop) |
| Tag/pill groups | `8px` |
| Button groups | `16px` |

---

## 8. Background Pattern

Sections alternate between two backgrounds:

1. **Transparent** (inherits `#080808`) — Services, Blog
2. **`#0A0A0A`** (slightly darker) — About, Projects, Reviews, Contact
3. **`#050505`** (darkest) — Footer

A noise/grain texture overlay is applied globally across the page.

---

## 9. Icons

- **Library**: Lucide Icons (line style, consistent 1.5px stroke)
- **Size**: 16px for inline/info, 24px for navigation, 28px for service features
- **Color**: Inherits from parent text color (usually `#F0F0F0` or `#00EB1C`)
- **Style**: Outlined (not filled), minimal

---

## 10. Logo / Wordmark

The brand uses a text-based wordmark:

```
[ RAZU.DEV ]
```

- Font: JetBrains Mono (monospace)
- Size: 14px
- Color: Brand green (`#00EB1C`)
- Letter spacing: slightly wider
- Always includes the bracket notation `[ ... ]`

---

## 11. Animations & Motion

| Context | Animation | Duration | Easing |
|---|---|---|---|
| Elements entering view | Fade up (opacity 0→1, translateY 30→0) | 600ms | ease-out |
| Staggered children | Sequential delay | 100-120ms per item | — |
| Page transitions | Fade + slight Y shift | 400ms in, 300ms out | `[0.22, 1, 0.36, 1]` |
| Button hover | Brightness + glow | 150ms | default |
| Card hover | Transform + green glow | 300ms | ease |
| Text stroke fill | Color transition | 200ms | ease |
| Marquee scroll | Continuous horizontal | 40s | linear, infinite |
| Custom cursor | Smooth follow with lerp | — | 0.15 lerp factor |

**Key easing curve** (used throughout): `[0.22, 1, 0.36, 1]` — a fast-attack, slow-decay cubic bezier.

---

## 12. Effects & Textures

### Green Glow

Replace traditional shadows with a subtle green glow:

```
Subtle:  box-shadow: 0 8px 30px rgba(0, 235, 28, 0.07);
Medium:  box-shadow: 0 8px 24px rgba(0, 234, 28, 0.2);
Strong:  text-shadow: 0 0 20px rgba(0, 235, 28, 0.3);
```

### Noise Texture

A grain/noise texture is overlaid on the entire page for a raw, analog feel.

### Glassmorphism (Minimal)

- Navbar: `rgba(8, 8, 8, 0.85)` with `backdrop-filter: blur(12px)`
- Blog filter bar: `rgba(8, 8, 8, 0.95)` with `backdrop-filter: blur(12px)`

Keep it subtle — the brand is brutalist, not frosted glass.

---

## 13. Quick Reference Card

```
┌─────────────────────────────────────────────────┐
│  RAZU.DEV BRAND AT A GLANCE                     │
│                                                  │
│  Colors:                                         │
│  ■ #00EB1C  — Brand Green (accent)               │
│  ■ #F0F0F0  — Primary Text                      │
│  ■ #080808  — Background                        │
│  ■ #111111  — Surface / Card                    │
│  ■ #161616  — Secondary Surface                 │
│  ■ #1A1A1A  — Border                            │
│  ■ #666666  — Muted Text                        │
│  ■ #000000  — Text on Green                     │
│                                                  │
│  Fonts:                                          │
│  Syne          — Display headings                │
│  Space Grotesk — Subheadings, buttons            │
│  DM Sans       — Body text                       │
│  JetBrains Mono — Labels, tags, metadata         │
│                                                  │
│  Corners:   Sharp (0px) — always                │
│  Shadows:   None — use green glow instead       │
│  Buttons:   Green fill or green outline          │
│  Logo:      [ RAZU.DEV ] in mono, green          │
│  Mood:      Dark, brutalist, technical           │
└─────────────────────────────────────────────────┘
```

---

*Last updated: April 2026*
