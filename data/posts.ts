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

export const posts: Post[] = [
  {
    id: 1,
    slug: "nextjs-app-router-switch",
    title: "Why I Switched Every Project to Next.js App Router (And Never Looked Back)",
    excerpt: "Pages Router was fine. App Router is a different game entirely — layouts, server components, streaming. Here's what changed in my workflow.",
    category: "NEXT.JS",
    date: "MAR 2025",
    readTime: "6 MIN READ",
    content: [
      { type: "h2", text: "What Changed When I Moved to App Router" },
      { type: "p", text: "I resisted the App Router for months. The Pages Router worked. My clients were happy. Why introduce complexity? Then I took on a project that genuinely needed streaming, nested layouts, and per-segment loading states — and everything clicked." },
      { type: "p", text: "After migrating six projects to the App Router, I've landed on a set of patterns I now use from day one. Here's an honest breakdown of what's better, what's genuinely confusing, and what I wish someone had told me earlier." },
      { type: "h2", text: "Server Components Change How You Think About Data" },
      { type: "p", text: "The biggest mental shift is that components are server-rendered by default. You don't reach for useEffect to fetch data on mount anymore. You just make the component async and await directly inside it." },
      { type: "blockquote", text: "The most powerful thing about React Server Components isn't performance — it's that data fetching becomes obvious again." },
      { type: "code", code: `// app/projects/page.tsx
async function ProjectsPage() {
  const projects = await fetch('https://api.example.com/projects', {
    next: { revalidate: 3600 }
  }).then(res => res.json())

  return (
    <main>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </main>
  )
}` },
      { type: "h2", text: "Layouts Are the Feature I Didn't Know I Needed" },
      { type: "p", text: "Nested layouts are genuinely one of the best things to happen to React routing. Define a layout once at a folder level and every page inside that folder shares it — without any prop threading or wrapper components." },
      { type: "h3", text: "My standard layout structure:" },
      { type: "list", items: [
        "app/layout.tsx — root layout with fonts, providers, nav, footer",
        "app/(marketing)/layout.tsx — marketing pages with full-width hero support",
        "app/(app)/layout.tsx — authenticated app shell with sidebar",
        "app/blog/layout.tsx — blog-specific max-width and typography styles",
      ] },
      { type: "h2", text: "The One Thing That Still Trips People Up" },
      { type: "p", text: "Client components. The rule is simple — if it uses useState, useEffect, event handlers, or browser APIs, it needs the \"use client\" directive at the top. But deciding where that boundary sits in your component tree is a skill that takes a few projects to develop." },
      { type: "p", text: "My rule: push the \"use client\" boundary as far down the tree as possible. Keep data fetching and layout in server components. Only the interactive leaf nodes need to be client components." },
      { type: "h2", text: "Should You Use App Router on Your Next Project?" },
      { type: "p", text: "Yes — if you're starting fresh. The ecosystem has caught up, the documentation is solid, and the developer experience is genuinely better once the patterns click. If you're migrating an existing Pages Router app, do it incrementally. The two routers coexist cleanly." },
    ],
  },
  {
    id: 2,
    slug: "tailwind-patterns-every-project",
    title: "The Tailwind Patterns I Use on Every Single Project",
    excerpt: "After 50+ projects in Tailwind, these are the utility patterns, custom config tricks, and component structures I reach for every time.",
    category: "TAILWIND CSS",
    date: "FEB 2025",
    readTime: "5 MIN READ",
    content: [
      { type: "h2", text: "Why Tailwind Keeps Winning" },
      { type: "p", text: "After shipping over 50 projects with Tailwind CSS, I've developed a set of patterns that I copy into every new project on day one. These aren't clever hacks — they're boring, reliable foundations." },
      { type: "h2", text: "The Config File Is Your Design System" },
      { type: "p", text: "The first thing I do on any project is extend the Tailwind config with semantic color tokens, custom spacing, and font families. This turns Tailwind from a utility library into a design system." },
      { type: "h2", text: "Component Patterns That Scale" },
      { type: "p", text: "I use class-variance-authority (CVA) for every component that has variants. Buttons, cards, badges — if it has more than one visual state, it gets a CVA definition." },
    ],
  },
  {
    id: 3,
    slug: "stop-prop-drilling-state-management",
    title: "Stop Prop Drilling: When to Use Context vs Zustand vs Jotai",
    excerpt: "State management is the most argued topic in React. Here's the framework I use to pick the right tool for each situation.",
    category: "REACT",
    date: "JAN 2025",
    readTime: "4 MIN READ",
    content: [
      { type: "h2", text: "The Decision Framework" },
      { type: "p", text: "Every state management discussion starts with \"it depends.\" I'll give you something better — a concrete decision tree I use on every project." },
      { type: "h2", text: "When Context Is Enough" },
      { type: "p", text: "React Context is perfect for low-frequency updates shared across many components. Theme, auth status, locale — these rarely change and affect the whole app." },
      { type: "h2", text: "When to Reach for Zustand" },
      { type: "p", text: "Zustand shines when you have frequently updating state that multiple components subscribe to. It's tiny, fast, and the API is dead simple." },
    ],
  },
  {
    id: 4,
    slug: "98-pagespeed-score-nextjs",
    title: "How I Get a 98 PageSpeed Score on Every Next.js Project",
    excerpt: "Core Web Vitals, image optimization, font loading, lazy loading — my exact checklist from first commit to production.",
    category: "PERFORMANCE",
    date: "DEC 2024",
    readTime: "7 MIN READ",
    content: [
      { type: "h2", text: "The Checklist" },
      { type: "p", text: "Performance isn't magic — it's a checklist. Here's the exact list I run through before every production deploy." },
      { type: "h2", text: "Images Are 90% of the Problem" },
      { type: "p", text: "Next.js Image component handles most of the heavy lifting, but you need to configure it correctly. Always set explicit width and height, use the priority prop for above-the-fold images, and lazy load everything else." },
    ],
  },
  {
    id: 5,
    slug: "typescript-tricks-save-time",
    title: "TypeScript Tricks That Actually Save Time (Not Just Add Complexity)",
    excerpt: "Generic types, discriminated unions, utility types — the patterns that make TypeScript worth the setup cost.",
    category: "TYPESCRIPT",
    date: "NOV 2024",
    readTime: "5 MIN READ",
    content: [
      { type: "h2", text: "TypeScript Should Remove Bugs, Not Add Boilerplate" },
      { type: "p", text: "The goal of TypeScript isn't to annotate everything — it's to catch bugs before they reach production. Here are the patterns that actually deliver on that promise." },
      { type: "h2", text: "Discriminated Unions Are the Best Feature" },
      { type: "p", text: "If you learn one advanced TypeScript pattern, make it discriminated unions. They model real-world states perfectly and the compiler checks every case." },
    ],
  },
  {
    id: 6,
    slug: "page-transitions-nextjs-framer-motion",
    title: "The Complete Guide to Page Transitions in Next.js with Framer Motion",
    excerpt: "Smooth route transitions, shared layout animations, and scroll-triggered reveals — the exact implementation I use on client projects. Full code included.",
    category: "FRAMER MOTION",
    date: "OCT 2024",
    readTime: "9 MIN READ",
    content: [
      { type: "h2", text: "Why Page Transitions Matter" },
      { type: "p", text: "A smooth page transition turns a collection of pages into an experience. It's the difference between a website and a web app." },
      { type: "h2", text: "The AnimatePresence Pattern" },
      { type: "p", text: "Framer Motion's AnimatePresence component is the key. It detects when a child component is removed from the React tree and animates it out before unmounting." },
    ],
  },
  {
    id: 7,
    slug: "css-grid-vs-flexbox-mental-model",
    title: "CSS Grid vs Flexbox: The Mental Model That Finally Made It Click",
    excerpt: "You don't need to memorize every property. You need one clear rule for when to use which. Here it is.",
    category: "CSS",
    date: "SEP 2024",
    readTime: "4 MIN READ",
    content: [
      { type: "h2", text: "One Rule to Rule Them All" },
      { type: "p", text: "Grid is for two-dimensional layouts. Flexbox is for one-dimensional layouts. That's it. That's the rule." },
      { type: "h2", text: "When Grid Wins" },
      { type: "p", text: "Any time you're placing items in rows AND columns simultaneously — dashboards, galleries, complex cards — reach for Grid." },
    ],
  },
  {
    id: 8,
    slug: "reusable-component-library-tailwind-storybook",
    title: "Building a Reusable Component Library With Tailwind and Storybook",
    excerpt: "The architecture, the naming conventions, and the workflow for building UI components that scale with your team.",
    category: "REACT",
    date: "AUG 2024",
    readTime: "6 MIN READ",
    content: [
      { type: "h2", text: "Why Build a Component Library?" },
      { type: "p", text: "Consistency. Speed. Every project I start gets faster because the last one taught me which components I'll need again." },
      { type: "h2", text: "The Folder Structure" },
      { type: "p", text: "I organize components by atomic design principles — atoms, molecules, organisms. Each component gets its own folder with the component file, stories file, and optional test file." },
    ],
  },
  {
    id: 9,
    slug: "figma-to-code-workflow",
    title: "Figma to Code: My Exact Workflow for Converting Designs to React",
    excerpt: "Variables, auto-layout, component properties — how I read a Figma file and translate it into clean, maintainable React components.",
    category: "TIPS",
    date: "JUL 2024",
    readTime: "5 MIN READ",
    content: [
      { type: "h2", text: "Reading the Design File" },
      { type: "p", text: "Before writing a single line of code, I spend 30 minutes studying the Figma file. I look at spacing patterns, color usage, component repetition, and responsive behavior." },
      { type: "h2", text: "The Translation Process" },
      { type: "p", text: "I work top-down: layout first, then sections, then individual components. Each Figma frame becomes a React component. Auto-layout translates directly to flexbox." },
    ],
  },
];

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const getPostsByCategory = (category: string): Post[] =>
  category === "ALL" ? posts : posts.filter((p) => p.category === category);

export const getRelatedPosts = (currentSlug: string, count = 3): Post[] =>
  posts.filter((p) => p.slug !== currentSlug).slice(0, count);
