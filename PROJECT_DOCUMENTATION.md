# Razu Dev Portfolio - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack & Dependencies](#tech-stack--dependencies)
3. [Project Structure](#project-structure)
4. [Key Components & Architecture](#key-components--architecture)
5. [Design System & Styling](#design-system--styling)
6. [Data Management](#data-management)
7. [Custom Hooks](#custom-hooks)
8. [Code Patterns & Best Practices](#code-patterns--best-practices)
9. [Type Safety & TypeScript Usage](#type-safety--typescript-usage)
10. [Performance Considerations](#performance-considerations)
11. [Sample Code Sections](#sample-code-sections)
12. [Code Quality Assessment](#code-quality-assessment)

---

## Project Overview

**Project Name:** Razu Dev Portfolio  
**Type:** Personal Portfolio Website  
**Framework:** Next.js 16 (App Router)  
**Language:** TypeScript  
**Primary Purpose:** Showcase development work, blog content, and contact information

### Key Features
- Single-page scrolling homepage with sections
- Separate blog pages with static generation
- Custom cursor with smooth animations
- 3D tilt effects on interactive elements
- Text scramble animations
- Page transitions with framer-motion
- Responsive design (mobile-first)
- Dark theme with green accent (#80ff00)
- Noise texture overlay
- Scroll progress indicator

---

## Tech Stack & Dependencies

### Core Framework
- **Next.js 16.1.6** - React framework with App Router, Turbo mode
- **React 19.2.4** - Latest React version
- **TypeScript 5.x** - Type safety

### UI & Styling
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion 12.35.1** - Animation library
- **Radix UI** - Headless UI components (30+ packages)
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Utility class management
- **lucide-react 0.462.0** - Icon library
- **embla-carousel-react 8.6.0** - Carousel component

### Data & State
- **@tanstack/react-query 5.83.0** - Data fetching (available but minimal usage)
- **date-fns 3.6.0** - Date manipulation

### Forms & Validation
- **@hookform/resolvers 3.10.0** - Form validation
- **react-hook-form** - Form management

### Development Tools
- **ESLint** - Linting with TypeScript support
- **TypeScript ESLint** - TS linting rules
- **Bun** - Package manager & runtime

### Fonts
- **Syne** - Display font
- **Space Grotesk** - Heading font
- **DM Sans** - Body font
- **JetBrains Mono** - Monospace/label font

---

## Project Structure

```
razu-dev-portfolio/
├── app/
│   ├── globals.css                    # Global styles & CSS variables
│   ├── layout.tsx                     # Root layout with fonts & providers
│   ├── not-found.tsx                  # 404 page
│   ├── page.tsx                       # Home page (main landing)
│   ├── blog/
│   │   ├── page.tsx                   # Blog listing page
│   │   └── [slug]/
│   │       ├── BlogPostClient.tsx     # Client-side blog post component
│   │       └── page.tsx               # Dynamic blog post page (SSG)
│
├── components/
│   ├── about/
│   │   └── AboutSection.tsx           # About section component
│   ├── blog/
│   │   └── BlogPreviewSection.tsx     # Blog preview cards
│   ├── contact/
│   │   └── ContactSection.tsx         # Contact form section
│   ├── hero/
│   │   └── HeroSection.tsx            # Hero section with text scramble
│   ├── projects/
│   │   ├── ProjectsSection.tsx        # Projects showcase
│   │   └── BrutalistScrollCard.tsx    # Brutalist-style card
│   ├── reviews/
│   │   └── ReviewsSection.tsx         # Testimonials/reviews
│   ├── services/
│   │   └── ServicesSection.tsx        # Services offered
│   ├── shared/                        # Reusable components
│   │   ├── CustomCursor.tsx           # Custom cursor implementation
│   │   ├── DiagonalDivider.tsx        # Decorative diagonal divider
│   │   ├── Footer.tsx                 # Site footer
│   │   ├── Marquee.tsx                # Infinite scrolling text
│   │   ├── Navbar.tsx                 # Navigation bar with mobile menu
│   │   ├── NavLink.tsx                # Styled navigation link
│   │   ├── NoiseTexture.tsx           # Background noise texture
│   │   ├── PageTransition.tsx         # Page transition animations
│   │   ├── providers.tsx              # React context providers
│   │   ├── QuoteBanner.tsx            # Quote banner component
│   │   ├── ScrollProgress.tsx         # Scroll progress indicator
│   │   └── TypographicBreak.tsx       # Text-only section break
│   └── ui/                            # shadcn/ui components (50+ files)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       └── ... (50+ UI components)
│
├── data/
│   └── posts.ts                       # Blog post data & content types
│
├── hooks/
│   ├── use-mobile.tsx                 # Mobile detection hook
│   ├── use-text-stroke-observer.tsx  # Text stroke animation observer
│   ├── use-toast.ts                   # Toast notifications
│   └── useTilt.tsx                    # 3D tilt effect hook
│
├── lib/
│   └── utils.ts                       # Utility functions (cn, etc.)
│
├── public/
│   └── robots.txt                     # SEO robots file
│
├── Configuration Files:
│   ├── components.json                # shadcn/ui configuration
│   ├── eslint.config.js               # ESLint configuration
│   ├── next.config.mjs                # Next.js configuration
│   ├── package.json                   # Dependencies & scripts
│   ├── postcss.config.js              # PostCSS configuration
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   └── tsconfig.json                  # TypeScript configuration
│
└── Documentation:
    ├── README.md                      # Project readme
    └── IMPLEMENTATION_SUMMARY.md      # Implementation notes
```

---

## Key Components & Architecture

### 1. Root Layout ([app/layout.tsx](app/layout.tsx))

**Responsibilities:**
- Font configuration (4 custom fonts)
- Global providers (PageTransition, ScrollProgress, NoiseTexture)
- HTML structure with lang attribute
- Metadata configuration

**Key Implementation:**
```tsx
const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Razu — Portfolio",
  description: "A modern portfolio website...",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
```

### 2. Home Page ([app/page.tsx](app/page.tsx))

**Pattern:** Composition-based architecture
- Each section is an independent component
- Linear composition for maintainability
- Clear separation of concerns

```tsx
export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteBanner text="..." highlight="..." />
      <ServicesSection />
      <ProjectsSection />
      <ProjectSidebar />
      <BlogPreviewSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
```

### 3. Hero Section ([components/hero/HeroSection.tsx](components/hero/HeroSection.tsx))

**Features:**
- Text scramble animation effect
- Magnetic button with physics-based movement
- Ghost text overlay
- Responsive layout (60/40 split)

**Key Patterns:**
```tsx
// Text Scramble Effect
const TextScramble = ({ text, className, style }: { ... }) => {
  const [displayedText, setDisplayedText] = useState(text);
  
  useEffect(() => {
    let iterations = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iterations / 3) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );
      iterations += 1 / 3;
      if (iterations >= text.length * 3) {
        clearInterval(interval);
        setDisplayedText(text);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  
  return <span className={className} style={style}>{displayedText}</span>;
};
```

### 4. Projects Section ([components/projects/ProjectsSection.tsx](components/projects/ProjectsSection.tsx))

**Features:**
- 3D tilt effect on hover
- Parallax zoom on scroll
- Brutalist card design
- Responsive width allocation
- Mobile horizontal scroll with snap

**Architecture:**
```tsx
const ProjectCard = ({ project, variants, index, isMobile }) => {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ ...style, maxWidth: isMobile ? undefined : project.width }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      // ...
    />
  );
};
```

### 5. Navbar ([components/shared/Navbar.tsx](components/shared/Navbar.tsx))

**Features:**
- Fixed positioning with blur backdrop
- Responsive desktop/mobile views
- Staggered mobile menu animations
- Router-aware link handling

**Mobile Menu Pattern:**
```tsx
const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      duration: 0.3
    }
  }
};

const itemVariants = {
  closed: { x: 50, opacity: 0 },
  open: { x: 0, opacity: 1 }
};
```

### 6. Custom Cursor ([components/shared/CustomCursor.tsx](components/shared/CustomCursor.tsx))

**Features:**
- Two-part cursor (dot + ring)
- Smooth following with interpolation
- Hover state detection
- Pointer device detection (disabled on touch)
- Performance-optimized (minimal re-renders)

**Key Implementation:**
```tsx
const animate = () => {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.left = `${ringX}px`;
  ring.style.top = `${ringY}px`;
  requestAnimationFrame(animate);
};
```

### 7. Page Transition ([components/shared/PageTransition.tsx](components/shared/PageTransition.tsx))

**Features:**
- Route-aware transitions
- Progress indicator
- Staggered animations
- Layout preservation

```tsx
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
} as const;
```

### 8. Blog System ([app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx))

**Architecture:**
- Server-side static generation (SSG)
- Dynamic routes with `generateStaticParams`
- Data fetching from local data files
- Client-side hydration for interactivity

```tsx
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug || "");
  const related = getRelatedPosts(slug || "", 3);
  
  return <BlogPostClient post={post} related={related} />;
}
```

---

## Design System & Styling

### Color Palette (CSS Variables)

```css
:root {
  --background: 0 0% 3.1%;        /* #080808 */
  --foreground: 0 0% 94.1%;       /* #f0f0f0 */
  --card: 0 0% 6.7%;              /* #111111 */
  --primary: 128 100% 46%;        /* #80ff00 - Neon Green */
  --primary-foreground: 0 0% 0%;  /* #000000 */
  --secondary: 0 0% 8.6%;         /* #161616 */
  --muted: 0 0% 8.6%;
  --muted-foreground: 0 0% 40%;  /* #666666 */
  --accent: 128 100% 46%;
  --border: 0 0% 10%;            /* #1a1a1a */
  --ring: 128 100% 46%;
  --surface: 0 0% 6.7%;
  --surface-alt: 0 0% 8.6%;
  --radius: 0px;                  /* Brutalist design - no rounded corners */
}
```

### Typography System

| Usage | Font Family | Variable |
|-------|-------------|----------|
| Display | Syne | `--font-display` |
| Headings | Space Grotesk | `--font-heading` |
| Body | DM Sans | `--font-body` |
| Labels/Mono | JetBrains Mono | `--font-mono-label` |

### Custom Utilities

```css
/* Stroke/Outline Text */
.text-stroke {
  -webkit-text-stroke: 1px hsl(0 0% 20%);
  color: transparent;
  transition: color 0.2s ease, -webkit-text-stroke-color 0.2s ease;
}

.text-stroke-accent {
  -webkit-text-stroke: 1px hsl(128 100% 46%);
  color: transparent;
}

/* Hide Scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Brutalist Card */
.brutalist-card {
  border: 1px solid hsl(var(--border));
  box-shadow: 4px 4px 0px hsl(var(--border));
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.brutalist-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px hsl(var(--border));
}
```

### Design Tokens

- **Border Radius:** 0px (brutalist aesthetic)
- **Border Width:** 1px (standard), 3px (emphasized)
- **Spacing:** Tailwind scale (4px = 0.25rem base)
- **Transitions:** 0.2s (hover), 0.3s (interactive), 0.4s (page)
- **Easing:** Custom bezier `[0.22, 1, 0.36, 1]` for smooth animations

---

## Data Management

### Blog Post Structure ([data/posts.ts](data/posts.ts))

**Type Definition:**
```typescript
export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "code"; code: string }
  | { type: "list"; items: string[] }
  | { type: "hr" };
```

**Data Pattern:**
- Content stored as typed arrays (not MDX)
- Flexible content block system
- Easy to extend with new block types
- Type-safe content rendering

**Sample Post:**
```typescript
{
  id: 1,
  slug: "nextjs-app-router-switch",
  title: "Why I Switched Every Project to Next.js App Router",
  excerpt: "Pages Router was fine. App Router is a different game...",
  category: "NEXT.JS",
  date: "MAR 2025",
  readTime: "6 MIN READ",
  content: [
    { type: "h2", text: "What Changed When I Moved to App Router" },
    { type: "p", text: "I resisted the App Router for months..." },
    { type: "blockquote", text: "The most powerful thing..." },
    { type: "code", code: `async function ProjectsPage() { ... }` },
  ]
}
```

---

## Custom Hooks

### 1. useTilt ([hooks/useTilt.tsx](hooks/useTilt.tsx))

**Purpose:** Create 3D tilt effect on mouse movement

**Implementation:**
```typescript
export const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    rotateX.set(-yPct * 10); // Limit rotation to 10 degrees
    rotateY.set(xPct * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    ref,
    style: {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d" as const,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};
```

**Usage:**
```typescript
const { ref, style, onMouseMove, onMouseLeave } = useTilt();

<motion.div
  ref={ref}
  style={style}
  onMouseMove={onMouseMove}
  onMouseLeave={onMouseLeave}
>
  {/* Content */}
</motion.div>
```

### 2. use-mobile ([hooks/use-mobile.tsx](hooks/use-mobile.tsx))

**Purpose:** Detect mobile device screen size

**Pattern:** Uses Tailwind's `md` breakpoint (768px)

### 3. use-text-stroke-observer ([hooks/use-text-stroke-observer.tsx](hooks/use-text-stroke-observer.tsx))

**Purpose:** Animate text stroke on scroll intersection

### 4. use-toast ([hooks/use-toast.ts](hooks/use-toast.ts))

**Purpose:** Toast notification management (from shadcn/ui)

---

## Code Patterns & Best Practices

### 1. Client Component Marking

**Pattern:** All interactive components are marked `"use client"` at the top

```typescript
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Component implementation
```

### 2. Animation Variants Pattern

**Standardized animation objects reused across components:**

```typescript
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.6 } 
  }),
};
```

**Usage:**
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={fadeUp}
>
  {/* Content */}
</motion.div>
```

### 3. Composition Pattern

**Components are composed together in parent components:**

```typescript
// Hero section composes TextScramble and MagneticButton
const HeroSection = () => {
  return (
    <section>
      <TextScramble text="RAZU" />
      <MagneticButton href="#contact">HIRE ME →</MagneticButton>
    </section>
  );
};
```

### 4. Conditional Rendering for Responsiveness

**Mobile vs Desktop variations:**

```typescript
const ProjectCard = ({ isMobile, ...props }) => {
  return (
    <motion.div
      className={isMobile ? "snap-center shrink-0 w-[85vw]" : ""}
      // Mobile-specific behavior
      style={{ maxWidth: isMobile ? undefined : project.width }}
    />
  );
};
```

### 5. Viewport-based Animations

**Trigger animations when elements enter viewport:**

```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={fadeUp}
>
```

### 6. Path Alias Usage

**Consistent use of `@/` alias for imports:**

```typescript
import CustomCursor from "@/components/shared/CustomCursor";
import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/useTilt";
```

### 7. TypeScript Strict Types

**Proper typing for props:**

```typescript
interface Project {
  name: string;
  tags: string[];
  desc: string;
  align: "left" | "right";
  width: string;
}

const ProjectCard = ({ project, variants, index, isMobile }: {
  project: typeof legacyProjects[0];
  variants: typeof fadeUp;
  index: number;
  isMobile?: boolean;
}): JSX.Element => {
  // Implementation
};
```

### 8. Performance Optimization in Custom Cursor

**Minimal re-renders using refs:**

```typescript
const isHoveringRef = useRef(false);

// Update DOM directly instead of triggering re-renders
if (wasHovering !== isHoveringRef.current) {
  if (isHoveringRef.current) {
    ring.classList.add('cursor-ring-hover');
    dot.classList.add('cursor-dot-hover');
  } else {
    ring.classList.remove('cursor-ring-hover');
    dot.classList.remove('cursor-dot-hover');
  }
}
```

---

## Type Safety & TypeScript Usage

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,  // ⚠️ Could be enabled for better type safety
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Type Safety Strengths

1. **Typed Interfaces:** All data structures are properly typed
   - `Post` interface with `ContentBlock` union type
   - Component props interfaces
   - Hook return types

2. **Union Types for Content:**
   ```typescript
   export type ContentBlock =
     | { type: "h2"; text: string }
     | { type: "h3"; text: string }
     | { type: "p"; text: string }
     | { type: "blockquote"; text: string }
     | { type: "code"; code: string }
     | { type: "list"; items: string[] }
     | { type: "hr" };
   ```

3. **Literal Types:**
   ```typescript
   type AnimationState = "initial" | "animate" | "exit";
   type Align = "left" | "right" | "center";
   ```

### Areas for Improvement

1. **Strict Mode Disabled:** `strict: false` in tsconfig.json
   - Recommendation: Enable strict mode for better type safety
   - Start with incremental enabling: `strictNullChecks: true`

2. **Type Assertions:** Some uses of `as const` which is good, but could use more
   ```typescript
   const pageVariants = {
     initial: { opacity: 0, y: 20 },
     animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
     exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } },
   } as const;
   ```

---

## Performance Considerations

### Current Optimizations

1. **Static Site Generation (SSG):**
   - Blog posts generated at build time with `generateStaticParams`
   - No dynamic data fetching at runtime

2. **Image Optimization:**
   - Next.js Image component used (likely, based on project structure)

3. **Code Splitting:**
   - Automatic by Next.js App Router
   - Dynamic imports available but not extensively used

4. **Font Optimization:**
   - `display: "swap"` for all fonts
   - Only loads font subsets needed

5. **Custom Cursor Optimization:**
   - Direct DOM manipulation to avoid re-renders
   - `requestAnimationFrame` for smooth animation
   - Pointer device detection to disable on mobile

6. **Animation Performance:**
   - Uses CSS transforms and opacity (GPU-accelerated)
   - `will-change` could be added for better performance

### Potential Improvements

1. **Dynamic Imports for Heavy Components:**
   ```typescript
   const ProjectsSection = dynamic(() => import('@/components/projects/ProjectsSection'), {
     loading: () => <div>Loading...</div>
   });
   ```

2. **Image Lazy Loading:**
   - Add `loading="lazy"` to offscreen images

3. **Animation Throttling:**
   - Reduce animation complexity on lower-end devices
   - Use `prefers-reduced-motion` media query

4. **Bundle Analysis:**
   - Run `npx @next/bundle-analyzer` to identify large dependencies

5. **Tree Shaking:**
   - Ensure Radix UI imports are tree-shakeable (using named imports)

---

## Sample Code Sections

### Example 1: Button Component with Variants ([components/ui/button.tsx](components/ui/button.tsx))

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

**Analysis:**
- ✅ Uses `cva` for variant management (best practice)
- ✅ Proper TypeScript typing with `VariantProps`
- ✅ Forward ref support
- ✅ `asChild` pattern for Radix UI composition
- ✅ Semantic HTML with `Slot` component

### Example 2: Utility Function ([lib/utils.ts](lib/utils.ts))

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Analysis:**
- ✅ Standard utility pattern used by shadcn/ui
- ✅ Combines clsx (conditional classes) with tailwind-merge (conflict resolution)
- ✅ Properly typed with `ClassValue`

### Example 3: About Section with Staggered Animations ([components/about/AboutSection.tsx](components/about/AboutSection.tsx))

```typescript
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Vertical label */}
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        [ 01 — ABOUT ]
      </div>

      {/* Ghost text */}
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        ABOUT
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left 30% */}
        <div className="lg:w-[30%]">
          <span className="font-display font-extrabold text-primary/15 select-none" style={{ fontSize: "8rem", lineHeight: 1 }}>01</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mt-4">
              THE<br />DEVELOPER<br />BEHIND<br />THE CODE.
            </h2>
          </motion.div>
        </div>

        {/* Right 70% */}
        <motion.div className="lg:w-[70%]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}>
          <motion.p variants={fadeUp} className="font-display font-medium text-lg md:text-xl text-foreground mb-6">
            4 Years. 19 Countries. 50+ Projects Shipped.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            I'm Razu — a frontend developer based in Noakhali, Bangladesh, with 4 years of experience building modern web interfaces.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
            {["React / Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map(skill => (
              <span key={skill} className="font-mono-label text-xs px-4 py-2 bg-surface-alt border border-primary/25 text-foreground tracking-wider">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating quote */}
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="relative z-10 max-w-lg ml-auto mr-6 md:mr-20 -mt-4 lg:-mt-8 bg-surface-alt border-l-[3px] border-l-primary p-6 md:p-8">
        <p className="font-body text-sm text-foreground/90 italic leading-relaxed mb-4">
          "I highly recommend Razu! Extremely patient, professional, and a great teacher. He exceeds every expectation!"
        </p>
        <p className="font-mono-label text-xs text-muted-foreground">
          — Imola · Manager, Commerce Machine · Romania · <span className="text-primary">★★★★★</span>
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
```

**Analysis:**
- ✅ Clear "use client" directive
- ✅ Reusable animation variant (`fadeUp`)
- ✅ Responsive design with Tailwind breakpoints
- ✅ Semantic HTML structure
- ✅ Proper use of `motion` components
- ✅ Viewport-based animation triggers
- ✅ Staggered children animations
- ✅ Ghost text for visual depth
- ⚠️ Inline styles for non-Tailwind values (acceptable for design tokens)
- ⚠️ Hardcoded color values (`#0a0a0a`) - could use CSS variables

### Example 4: ESLint Configuration ([eslint.config.js](eslint.config.js))

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
```

**Analysis:**
- ✅ Modern flat config format
- ✅ TypeScript ESLint integration
- ✅ React Hooks plugin
- ✅ React Refresh for HMR
- ✅ Proper ignore patterns
- ⚠️ `@typescript-eslint/no-unused-vars: "off"` - might hide issues

---

## Code Quality Assessment

### Strengths

#### 1. **Architecture & Organization**
- ✅ Clear separation of concerns (components, hooks, data, utils)
- ✅ Logical folder structure
- ✅ Consistent naming conventions
- ✅ Component composition pattern
- ✅ Reusable UI component library (shadcn/ui)

#### 2. **TypeScript Usage**
- ✅ All components properly typed
- ✅ Union types for flexible data structures
- ✅ Proper interface definitions
- ✅ Path aliases configured

#### 3. **Styling & Design System**
- ✅ Consistent design tokens (CSS variables)
- ✅ Tailwind utility classes
- ✅ Custom utilities for common patterns
- ✅ Responsive design implementation
- ✅ Dark theme with clear color palette

#### 4. **Performance**
- ✅ Static Site Generation for blog
- ✅ Optimized font loading
- ✅ Efficient custom cursor implementation
- ✅ GPU-accelerated animations

#### 5. **Code Patterns**
- ✅ Consistent "use client" marking
- ✅ Reusable animation variants
- ✅ Custom hooks for complex logic
- ✅ Proper forwardRef usage
- ✅ Controlled vs uncontrolled components

#### 6. **Accessibility**
- ✅ Semantic HTML elements
- ✅ Aria labels on interactive elements
- ✅ Focus management in modals/dialogs
- ✅ Keyboard navigation support
- ⚠️ Custom cursor could be a accessibility concern (pointer device check present)

### Areas for Improvement

#### 1. **TypeScript Strict Mode**
```json
// Current
"strict": false

// Recommended
"strict": true
// Or incremental approach:
"strictNullChecks": true,
"noImplicitAny": true
```

#### 2. **Error Handling**
- ⚠️ No error boundaries visible
- ⚠️ Limited error handling in data fetching
- **Recommendation:** Add error boundaries and proper error handling

#### 3. **Testing**
- ⚠️ No test files visible in structure
- **Recommendation:** Add unit tests for hooks and components
- **Recommendation:** Add E2E tests with Playwright or Cypress

#### 4. **Constants & Magic Values**
```typescript
// Current
style={{ background: "#0a0a0a" }}
style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}

// Recommended
const styles = {
  backgroundSection: "hsl(var(--background))",
  ghostTextSize: "clamp(5rem, 18vw, 18rem)",
} as const;

style={{ background: styles.backgroundSection }}
```

#### 5. **Prop Drilling**
- ⚠️ Some components pass many props through
- **Recommendation:** Consider React Context for theme or user preferences

#### 6. **Bundle Size**
- ⚠️ 50+ Radix UI packages imported (potential unused code)
- ⚠️ Large dependency list
- **Recommendation:** Run bundle analyzer
- **Recommendation:** Use tree-shakeable imports

#### 7. **SEO Optimization**
- ⚠️ Limited metadata in pages
- ⚠️ No structured data (JSON-LD)
- **Recommendation:** Add comprehensive metadata
- **Recommendation:** Add Open Graph and Twitter Card tags
- **Recommendation:** Add schema.org markup

#### 8. **Code Documentation**
- ⚠️ Limited JSDoc comments
- ⚠️ No README for individual components
- **Recommendation:** Add JSDoc for complex functions
- **Recommendation:** Document component APIs

#### 9. **Environment Configuration**
- ⚠️ No environment variables visible
- ⚠️ No .env.example file
- **Recommendation:** Add environment configuration for deployment

#### 10. **Internationalization (i18n)**
- ⚠️ Hardcoded text strings
- **Recommendation:** Consider i18n if supporting multiple languages

### Code Quality Metrics

| Aspect | Score | Notes |
|--------|-------|-------|
| Architecture | 8.5/10 | Good structure, minor prop drilling |
| TypeScript Usage | 7/10 | Types exist but strict mode disabled |
| Styling | 9/10 | Consistent design system |
| Performance | 8/10 | Good optimizations, potential bundle size issues |
| Accessibility | 7.5/10 | Semantic HTML, custom cursor concern |
| Testing | 2/10 | No tests visible |
| Documentation | 6/10 | Good component structure, limited comments |
| Error Handling | 5/10 | Limited error boundaries |
| SEO | 5/10 | Basic metadata, could be improved |
| Maintainability | 8.5/10 | Good patterns, reusable components |

### Recommendations Priority

#### High Priority
1. **Enable TypeScript strict mode** - Catch type errors early
2. **Add error boundaries** - Graceful error handling
3. **Run bundle analyzer** - Optimize dependencies
4. **Add basic tests** - Prevent regressions

#### Medium Priority
5. **Improve metadata** - Better SEO
6. **Add JSDoc comments** - Better code documentation
7. **Extract constants** - Reduce magic values
8. **Add structured data** - Rich search results

#### Low Priority
9. **Consider Context API** - Reduce prop drilling
10. **Add i18n** - If international audience

---

## Summary

This is a well-structured, modern Next.js portfolio showcasing strong frontend development skills. The codebase demonstrates:

- **Modern React patterns** with hooks, composition, and proper TypeScript usage
- **Excellent design system** with consistent styling and thoughtful typography
- **Smooth animations** using Framer Motion with performance considerations
- **Component reusability** through shadcn/ui and custom components
- **Good responsive design** with mobile-first approach

**Key Highlights:**
- Custom cursor implementation with performance optimization
- 3D tilt effects and parallax scrolling
- Static site generation for blog posts
- Comprehensive UI component library
- Brutalist design aesthetic executed well

**Main Areas for Growth:**
- Enable TypeScript strict mode for better type safety
- Add testing to ensure code quality
- Optimize bundle size by auditing dependencies
- Improve SEO with comprehensive metadata and structured data
- Add error boundaries for graceful error handling

**Overall Assessment:** This is production-ready code with room for optimization in type safety, testing, and performance. The architecture is solid, the design system is consistent, and the code follows modern best practices.
