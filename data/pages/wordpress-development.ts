import { PageData } from "./types";

export const wordpressData: PageData = {
  hero: {
    badge: "[ WORDPRESS & WOOCOMMERCE DEVELOPER ]",
    greeting: "HI, I AM",
    nameHighlight: "SHOHIDUL",
    scrambleText: "RAZU",
    scrambleStyle: { fontSize: "clamp(2.5rem, 7vw, 7rem)" },
    roleTags:
      "I build WooCommerce stores and booking systems that take orders — not excuses.",
    spineLabel: "WordPress Developer · WooCommerce · Booking Systems",
    spineNum: "01/06",
    stats: [
      { num: "50+", label: "Projects Delivered" },
      { num: "19+", label: "Countries Served" },
      { num: "4★+", label: "Upwork Rating" },
    ],
    primaryCta: { label: "See Your Free Homepage Design", href: "#contact" },
    secondaryCta: { label: "View My Work", href: "#projects" },
    image: {
      src: "/shohidul-i-razu.png",
      srcSet:
        "/shohidul-i-razu.png?w=600&h=750 600w, /shohidul-i-razu.png?w=800&h=1000 800w, /shohidul-i-razu.png?w=1200&h=1500 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw",
      alt: "Shohidul Islam Razu - WordPress Developer",
    },
    marquee: {
      text: "WORDPRESS · WOOCOMMERCE · BOOKING SYSTEMS · ELEMENTOR · CUSTOM THEMES · 50+ SITES · 19 COUNTRIES ·",
      highlightWords: ["WORDPRESS", "WOOCOMMERCE", "50+"],
    },
  },

  about: {
    sectionLabel: "[ 01 — WHO BUILDS YOUR SITE MATTERS ]",
    ghostText: "ABOUT",
    bigNum: "01",
    heading: "Former medical student.\nWordPress developer.\nDetail-oriented by training,\nconversion-focused by choice.",
    subtitle: "4 Years. 19 Countries. 50+ WordPress Sites Delivered.",
    bio: "I build WooCommerce stores and booking systems that take orders — not excuses. Every checkout flow I build runs automated tests after launch, because your customers shouldn't be the ones finding bugs.",
    skills: [
      "WooCommerce",
      "Booking Systems",
      "Elementor Pro",
      "WordPress Maintenance",
    ],
    quote: {
      text: "My clients find out about checkout problems before their customers do — because every order flow I build runs automated tests after launch.",
      author: "Razu",
      role: "WordPress Developer",
      country: "Bangladesh",
    },
  },

  quoteBanner: {
    text: "I DON'T JUST\nBUILD SITES. I BUILD",
    highlight: "STORES THAT TAKE\nORDERS.",
  },

  services: {
    sectionLabel: "[ 02 — SERVICES ]",
    marqueeText: "WORDPRESS SERVICES · WORDPRESS SERVICES · WORDPRESS SERVICES ·",
    ghostText: "SERVICES",
    sublabel: "[ 02 ]  EVERY WP PROJECT COMES WITH:",
    cards: [
      {
        icon: "Monitor",
        title: "WooCommerce Store Development",
        desc: "A store that looks nothing like the templates everyone else is using. Built for conversion — from the product page to the thank-you screen.",
        num: "01",
        area: "a",
      },
      {
        icon: "Zap",
        title: "Booking System Development",
        desc: "Your own branded booking system — no Calendly subscription, no one else's logo. Fully yours, fully in your control.",
        num: "02",
        area: "b",
      },
      {
        icon: "Smartphone",
        title: "WordPress Website Development",
        desc: "Fast, secure, and stable — built to handle real traffic without breaking. Not a pretty site that collapses the moment someone tries to buy.",
        num: "03",
        area: "c",
      },
      {
        icon: "Sparkles",
        title: "Custom Elementor Widget Development",
        desc: "When the standard widgets aren't enough for what you're building. Custom components built to match your exact design — pixel for pixel.",
        num: "04",
        area: "d",
      },
      {
        icon: "Globe",
        title: "Automated Order & Booking Flow Monitoring",
        desc: "A script that checks your checkout and booking flow every 15 minutes. Available as a standalone addon — or bundled into the Maintenance package below.",
        num: "05",
        area: "e",
        isUnique: true,
        badge: "[ UNIQUE SERVICE ]",
      },
      {
        icon: "Layers",
        title: "WordPress Maintenance — with Monitoring Included",
        desc: "Updates, backups, security, and automated order flow testing — all handled. The monitoring addon is bundled here. Most developers charge extra for it.",
        num: "06",
        area: "f",
      },
    ],
  },

  valueStack: {
    sectionLabel: "WHAT YOU ACTUALLY GET",
    introLine:
      "This is what every premium client gets. Not an upsell menu — just the standard.",
    headline: "Most developers charge extra for this.\nIt's all included.",
    checklist: [
      {
        text: "Free 3–4 section homepage mockup — ",
        bold: "before you sign anything",
        badge: "FREE",
      },
      {
        text: "Revisions until you're proud to share it — ",
        bold: "no cap, no extra invoices",
        badge: "NO CAP",
      },
      {
        text: "30-day bug fix after launch — ",
        bold: "free",
        badge: "FREE",
      },
      {
        text: "Speed & security hardening — ",
        bold: "included on every project",
        badge: "INCLUDED",
      },
      {
        text: "Automated backup system — ",
        bold: "included",
        badge: "INCLUDED",
      },
      {
        text: "On-page SEO structure (titles, schema, sitemap) — ",
        bold: "included",
        badge: "INCLUDED",
      },
    ],
    riskReversal:
      "You see the homepage design before you pay a cent.\nIf you don't love the direction, walk away.\nNo invoice. No awkward email. Nothing.",
    supportingLine:
      "I only take projects I'm confident I can deliver. The mockup shows both of us if we're the right fit — before either of us commits.",
    cta: { label: "Get Your Free Homepage Design →", href: "#contact" },
  },

  process: {
    sectionLabel: "HOW IT WORKS",
    headline: "You see it before you buy it.",
    steps: [
      {
        number: "01",
        title: "Free Mockup First",
        body: "We talk. I understand your business, your customers, and what a successful site looks like for you. Then I build a free 3–4 section homepage concept. You approve the direction — or walk away. Zero obligation. No invoice. Nothing.",
      },
      {
        number: "02",
        title: "Build Together",
        body: "You send your logo, content, and brand direction. I build the homepage first — we lock it in. Then the rest of the site, page by page, approved by you at every step. No surprises.",
      },
      {
        number: "03",
        title: "Test & Launch",
        body: "Before anything goes live, I run automated tests on your order and booking flow. You get a site that has been checked, not just built. Then we launch — and I'm still here for 30 days after.",
      },
    ],
    closingLine: 'No ghost developers. No "it worked on my machine."',
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
    heading: ["READY TO SEE", "YOUR SITE", "BEFORE YOU", "PAY FOR IT?"],
    headingHighlight: "PAY FOR IT?",
    headingHighlightStyle: { fontSize: "clamp(3rem, 6vw, 5rem)" },
    description:
      "Get a free 3–4 section homepage concept. No contract. If you don't love the direction, you owe nothing.",
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
    bulletList: [
      "No upfront payment required",
      "30-day bug fix guarantee after launch",
      "Automated testing included on every project",
      "Built for WooCommerce and booking systems",
    ],
  },
};
