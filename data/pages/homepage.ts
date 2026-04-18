import { PageData } from "./types";

export const homepageData: PageData = {
  hero: {
    badge: "[ AVAILABLE · $30/HR ]",
    greeting: "HI, I AM",
    nameHighlight: "SHOHIDUL",
    scrambleText: "RAZU",
    scrambleStyle: { fontSize: "clamp(3rem, 8vw, 8rem)" },
    roleTags:
      "React Dev  ·  Next.js  ·  Tailwind CSS  ·  TypeScript  ·  UI/UX",
    spineLabel: "Frontend Developer · React · Next.js · Tailwind",
    spineNum: "01/06",
    stats: [
      { num: "50+", label: "Projects Shipped" },
      { num: "19", label: "Countries" },
      { num: "4+", label: "Years Exp" },
    ],
    primaryCta: { label: "VIEW MY WORK", href: "#projects" },
    secondaryCta: { label: "BOOK A ZOOM →", href: "#contact" },
    image: {
      src: "/shohidul-i-razu.png",
      srcSet:
        "/shohidul-i-razu.png?w=600&h=750 600w, /shohidul-i-razu.png?w=800&h=1000 800w, /shohidul-i-razu.png?w=1200&h=1500 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw",
      alt: "Shohidul Islam Razu - Frontend Developer",
    },
    marquee: {
      text: "REACT · NEXT.JS · TAILWIND CSS · TYPESCRIPT · HTML · CSS · FRAMER MOTION · REST API · FIGMA TO CODE · 50+ PROJECTS · 19 COUNTRIES · 4 YEARS ·",
      highlightWords: ["REACT", "NEXT.JS", "50+"],
    },
  },

  about: {
    sectionLabel: "[ 01 — ABOUT ]",
    ghostText: "ABOUT",
    bigNum: "01",
    heading: "THE\nDEVELOPER\nBEHIND\nTHE CODE.",
    subtitle: "4 Years. 19 Countries. 50+ Projects Shipped.",
    bio: "I'm Razu — a frontend developer based in Noakhali, Bangladesh, with 4 years of experience building modern web interfaces. I've worked with clients from 19 nations, turning Figma designs into pixel-perfect, high-performance React and Next.js applications. I specialize in building fast, accessible, and beautifully animated frontends that users actually enjoy using.",
    skills: ["React / Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    quote: {
      text: "I highly recommend Razu! Extremely patient, professional, and a great teacher. He exceeds every expectation!",
      author: "Imola",
      role: "Manager, Commerce Machine",
      country: "Romania",
    },
  },

  quoteBanner: {
    text: "I DON'T JUST CREATE WEBSITES. I BUILD EXPERIENCES.",
    highlight: "I BUILD EXPERIENCES.",
  },

  services: {
    sectionLabel: "[ 02 — SERVICES ]",
    marqueeText: "WHAT I DO · WHAT I DO · WHAT I DO ·",
    ghostText: "SERVICES",
    sublabel: "[ 02 ]  EVERY PROJECT COMES WITH:",
    cards: [
      {
        icon: "Monitor",
        title: "PIXEL-PERFECT UI DEVELOPMENT",
        desc: "I turn your Figma, XD, or Sketch designs into flawless React components — exact spacing, exact typography, exact interactions. Nothing approximate.",
        num: "01",
        area: "a",
      },
      {
        icon: "Zap",
        title: "NEXT.JS PERFORMANCE & SEO",
        desc: "Server-side rendering, static generation, image optimization, Core Web Vitals — I build Next.js apps that score 95+ on Google PageSpeed and rank.",
        num: "02",
        area: "b",
      },
      {
        icon: "Smartphone",
        title: "RESPONSIVE ON EVERY DEVICE",
        desc: "Mobile-first Tailwind CSS layouts that look and feel intentional on every screen size — phones, tablets, desktops, and ultrawide monitors.",
        num: "03",
        area: "c",
      },
      {
        icon: "Sparkles",
        title: "SMOOTH ANIMATIONS & INTERACTIONS",
        desc: "Framer Motion page transitions, scroll animations, micro-interactions — the details that make a good site feel exceptional.",
        num: "04",
        area: "d",
      },
      {
        icon: "Globe",
        title: "API INTEGRATION & DYNAMIC DATA",
        desc: "REST APIs, headless CMS (Contentful, Sanity), Supabase, Firebase — I connect your frontend to any backend cleanly and efficiently.",
        num: "05",
        area: "e",
      },
      {
        icon: "Layers",
        title: "COMPONENT LIBRARIES & DESIGN SYSTEMS",
        desc: "Reusable, documented React component libraries with Storybook — built so your team can scale the UI without breaking consistency.",
        num: "06",
        area: "f",
      },
    ],
  },

  projects: {
    sectionLabel: "[ 03 — WORK ]",
    marqueeText: "SELECTED WORK · SELECTED WORK · SELECTED WORK ·",
    ghostText: "WORK",
    sublabel: "[ 03 ]  SITES I'VE SHIPPED",
    sublabelDetail:
      "React · Next.js · Tailwind CSS · TypeScript · Framer Motion",
    legacyProjects: [
      {
        name: "Luminary — SaaS Landing Page",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        desc: "High-converting SaaS landing page with animated hero, scroll-triggered sections, and a 98 PageSpeed score.",
        align: "left",
        width: "65%",
      },
      {
        name: "TaskFlow — Project Management App",
        tags: ["React", "TypeScript", "Supabase"],
        desc: "Full-featured project management dashboard with real-time updates, drag-and-drop boards, and role-based access.",
        align: "right",
        width: "55%",
      },
      {
        name: "Meridian — Architecture Studio",
        tags: ["Next.js", "Sanity CMS", "Tailwind"],
        desc: "Award-worthy portfolio site for an architecture firm — custom cursor, parallax gallery, and CMS-powered case studies.",
        align: "left",
        width: "60%",
      },
      {
        name: "PulseMetrics — Analytics Dashboard",
        tags: ["React", "Framer Motion", "REST API"],
        desc: "Data visualization dashboard with animated charts, filterable tables, and a dark/light theme toggle.",
        align: "right",
        width: "45%",
      },
      {
        name: "Storefront — E-Commerce Frontend",
        tags: ["Next.js", "Tailwind CSS", "Stripe"],
        desc: "Headless e-commerce frontend with cart, wishlist, Stripe checkout, and blazing-fast static product pages.",
        align: "left",
        width: "100%",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Luminary SaaS Platform",
        description:
          "Full-scale SaaS landing page with animated hero, scroll-triggered sections, and 98 PageSpeed score. Features pricing calculator, testimonials, and integration showcases.",
        category: "E-COMMERCE",
        year: "2024",
        techStack: ["Next.js", "Tailwind", "Framer Motion", "Stripe"],
      },
      {
        id: 2,
        title: "TaskFlow Dashboard",
        description:
          "Project management with real-time updates, drag-and-drop boards, and role-based access control for teams.",
        category: "SaaS",
        year: "2024",
        techStack: ["React", "TypeScript", "Supabase"],
      },
      {
        id: 3,
        title: "Meridian Studio",
        description:
          "Architecture firm portfolio with custom cursor, parallax gallery, and CMS-powered case studies.",
        category: "PORTFOLIO",
        year: "2023",
        techStack: ["Next.js", "Sanity CMS", "Tailwind"],
      },
      {
        id: 4,
        title: "PulseMetrics",
        description:
          "Analytics dashboard with animated charts, filterable tables, and dark/light theme toggle.",
        category: "DASHBOARD",
        year: "2024",
        techStack: ["React", "Framer Motion", "REST API"],
      },
    ],
  },

  reviews: {
    sectionLabel: "[ 05 — REVIEWS ]",
    marquee: {
      text: "CLIENT LOVE · 50+ PROJECTS SHIPPED · 19 COUNTRIES · 4 YEARS · CLIENT LOVE ·",
      highlightWords: ["50+", "CLIENT LOVE"],
    },
    ghostText: "REVIEWS",
    sublabel: "[ 05 ]  WHAT CLIENTS SAY",
    videoReviews: [
      { videoId: "YOUR_VIDEO_ID_HERE", clientName: "Client Name", country: "Country" },
      { videoId: "YOUR_VIDEO_ID_HERE", clientName: "Client Name", country: "Country" },
      { videoId: "YOUR_VIDEO_ID_HERE", clientName: "Client Name", country: "Country" },
    ],
    textReviews: [
      {
        quote:
          "I highly recommend Razu! He is extremely patient, professional, and even a good teacher! He will do anything it takes to do a job that exceeds any expectations! It was great to collaborate with him.",
        name: "Imola",
        role: "Manager, Commerce Machine",
        country: "Romania",
      },
      {
        quote:
          "Razu delivered exactly what I asked for and more. Fast turnaround, clean code, excellent communication throughout.",
        name: "[Client Name]",
        role: "",
        country: "[Country]",
      },
      {
        quote:
          "Best frontend developer I've worked with. Will definitely return for future projects. Truly exceeded expectations.",
        name: "[Client Name]",
        role: "",
        country: "[Country]",
      },
    ],
  },

  contact: {
    sectionLabel: "[ 06 — CONTACT ]",
    marqueeText: "LET'S BUILD · LET'S BUILD · LET'S BUILD ·",
    ghostText: "CONTACT",
    sublabel: "[ 06 — LET'S BUILD ]",
    heading: ["READY TO", "BUILD YOUR", "DREAM", "SITE?"],
    headingHighlight: "SITE?",
    headingHighlightStyle: { fontSize: "clamp(3rem, 6vw, 5rem)" },
    description:
      "Available for new projects. Whether it's a landing page, a full web app, or a design-to-code conversion — let's jump on Zoom.",
    contactInfo: [
      { icon: "MapPin", text: "Noakhali, Bangladesh" },
      { icon: "Mail", text: "contact@razu.dev" },
      { icon: "Phone", text: "+8801317622631" },
      { icon: "Star", text: "50+ Projects Shipped" },
    ],
    availabilityBadge: "Currently Accepting Projects",
    projectTypes: [
      "Landing Page",
      "Web Application",
      "Design to Code",
      "Component Library",
      "Performance Audit",
      "Other",
    ],
    budgetRanges: ["Under $200", "$200–$500", "$500–$1000", "$1000+"],
  },
};
