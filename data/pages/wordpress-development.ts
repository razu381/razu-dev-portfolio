import { PageData } from "./types";

export const wordpressData: PageData = {
  hero: {
    badge: "[ AVAILABLE · WORDPRESS SPECIALIST ]",
    greeting: "EXPERT",
    nameHighlight: "WORDPRESS",
    scrambleText: "DEVELOPMENT",
    scrambleStyle: { fontSize: "clamp(2.5rem, 7vw, 7rem)" },
    roleTags:
      "WordPress  ·  WooCommerce  ·  Elementor  ·  Custom Themes  ·  PHP  ·  SEO",
    spineLabel: "WordPress Developer · Custom Themes · WooCommerce",
    spineNum: "01/06",
    stats: [
      { num: "50+", label: "WP Sites Launched" },
      { num: "19", label: "Countries" },
      { num: "4+", label: "Years Exp" },
    ],
    primaryCta: { label: "VIEW MY WORK", href: "#projects" },
    secondaryCta: { label: "GET A QUOTE →", href: "#contact" },
    image: {
      src: "/shohidul-i-razu.png",
      srcSet:
        "/shohidul-i-razu.png?w=600&h=750 600w, /shohidul-i-razu.png?w=800&h=1000 800w, /shohidul-i-razu.png?w=1200&h=1500 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw",
      alt: "Shohidul Islam Razu - WordPress Developer",
    },
    marquee: {
      text: "WORDPRESS · WOOCOMMERCE · ELEMENTOR · CUSTOM THEMES · PHP · SEO OPTIMIZATION · 50+ SITES · 19 COUNTRIES · 4 YEARS ·",
      highlightWords: ["WORDPRESS", "WOOCOMMERCE", "50+"],
    },
  },

  about: {
    sectionLabel: "[ 01 — ABOUT ]",
    ghostText: "ABOUT",
    bigNum: "01",
    heading: "THE WP\nDEVELOPER\nBEHIND\nYOUR SITE.",
    subtitle: "4 Years. 19 Countries. 50+ WordPress Sites Delivered.",
    bio: "I'm Razu — a frontend developer and WordPress specialist based in Noakhali, Bangladesh. With 4 years of experience, I've built custom WordPress themes, WooCommerce stores, and Elementor-powered sites for clients across 19 countries. I focus on speed, SEO, and clean code that makes your site rank and convert.",
    skills: [
      "Custom WordPress Themes",
      "WooCommerce",
      "Elementor Pro",
      "SEO Optimization",
    ],
    quote: {
      text: "I highly recommend Razu! Extremely patient, professional, and a great teacher. He exceeds every expectation!",
      author: "Imola",
      role: "Manager, Commerce Machine",
      country: "Romania",
    },
  },

  quoteBanner: {
    text: "YOUR WORDPRESS SITE SHOULD BE ",
    highlight: "YOUR BEST EMPLOYEE.",
  },

  services: {
    sectionLabel: "[ 02 — SERVICES ]",
    marqueeText: "WORDPRESS SERVICES · WORDPRESS SERVICES · WORDPRESS SERVICES ·",
    ghostText: "SERVICES",
    sublabel: "[ 02 ]  EVERY WP PROJECT COMES WITH:",
    cards: [
      {
        icon: "Monitor",
        title: "CUSTOM WORDPRESS THEMES",
        desc: "Bespoke WordPress themes built from your designs — no bloat, no page-builder lock-in, just clean PHP, CSS, and JavaScript.",
        num: "01",
        area: "a",
      },
      {
        icon: "Zap",
        title: "WOOCOMMERCE STORE SETUP",
        desc: "Full WooCommerce builds with product catalogs, payment gateways, shipping rules, and a checkout flow that converts.",
        num: "02",
        area: "b",
      },
      {
        icon: "Smartphone",
        title: "RESPONSIVE & MOBILE-FIRST",
        desc: "Every WordPress site I build looks pixel-perfect on phones, tablets, and desktops — no exceptions.",
        num: "03",
        area: "c",
      },
      {
        icon: "Sparkles",
        title: "SPEED & CORE WEB VITALS",
        desc: "I optimize every WP site for 90+ PageSpeed scores — lazy loading, caching, image optimization, and clean code.",
        num: "04",
        area: "d",
      },
      {
        icon: "Globe",
        title: "SEO & RANKING READINESS",
        desc: "On-page SEO, schema markup, sitemap generation, and Yoast/RankMath configuration — so your site gets found.",
        num: "05",
        area: "e",
      },
      {
        icon: "Layers",
        title: "MAINTENANCE & SUPPORT",
        desc: "Ongoing WordPress maintenance — plugin updates, security patches, backups, and performance monitoring.",
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
    heading: ["READY TO", "LAUNCH YOUR", "WORDPRESS", "SITE?"],
    headingHighlight: "SITE?",
    headingHighlightStyle: { fontSize: "clamp(3rem, 6vw, 5rem)" },
    description:
      "Available for new WordPress projects. Whether it's a custom theme, a WooCommerce store, or a full site rebuild — let's talk.",
    contactInfo: [
      { icon: "MapPin", text: "Noakhali, Bangladesh" },
      { icon: "Mail", text: "contact@razu.dev" },
      { icon: "Phone", text: "+8801317622631" },
      { icon: "Star", text: "50+ WP Sites Launched" },
    ],
    availabilityBadge: "Currently Accepting WP Projects",
    projectTypes: [
      "Custom WordPress Theme",
      "WooCommerce Store",
      "WordPress Redesign",
      "Elementor Site",
      "Speed Optimization",
      "Other",
    ],
    budgetRanges: ["Under $200", "$200–$500", "$500–$1000", "$1000+"],
  },
};
