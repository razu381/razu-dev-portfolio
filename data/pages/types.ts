import { ComponentType } from "react";

export interface HeroStat {
  num: string;
  label: string;
}

export interface HeroData {
  badge: string;
  greeting: string;
  nameHighlight: string;
  scrambleText: string;
  scrambleStyle: React.CSSProperties;
  roleTags: string;
  spineLabel: string;
  spineNum: string;
  stats: HeroStat[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: {
    src: string;
    srcSet: string;
    sizes: string;
    alt: string;
  };
  marquee: {
    text: string;
    highlightWords: string[];
  };
}

export interface AboutData {
  sectionLabel: string;
  ghostText: string;
  bigNum: string;
  heading: string;
  subtitle: string;
  bio: string;
  skills: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    country: string;
  };
}

export interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
  num: string;
  area: string;
  isUnique?: boolean;
  badge?: string;
}

export interface ServicesData {
  sectionLabel: string;
  marqueeText: string;
  ghostText: string;
  sublabel: string;
  cards: ServiceCard[];
}

export interface LegacyProject {
  name: string;
  tags: string[];
  desc: string;
  align: string;
  width: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  techStack: string[];
}

export interface ProjectsData {
  sectionLabel: string;
  marqueeText: string;
  ghostText: string;
  sublabel: string;
  sublabelDetail: string;
  legacyProjects: LegacyProject[];
  projects: Project[];
}

export interface TextReview {
  quote: string;
  name: string;
  role: string;
  country: string;
}

export interface VideoReview {
  videoId: string;
  clientName: string;
  country: string;
}

export interface ReviewsData {
  sectionLabel: string;
  marquee: {
    text: string;
    highlightWords: string[];
  };
  ghostText: string;
  sublabel: string;
  videoReviews: VideoReview[];
  textReviews: TextReview[];
}

export interface ContactInfoItem {
  icon: string;
  text: string;
}

export interface ContactData {
  sectionLabel: string;
  marqueeText: string;
  ghostText: string;
  sublabel: string;
  heading: string[];
  headingHighlight: string;
  headingHighlightStyle: React.CSSProperties;
  description: string;
  contactInfo: ContactInfoItem[];
  availabilityBadge: string;
  projectTypes: string[];
  budgetRanges: string[];
  bulletList?: string[];
}

export interface QuoteBannerData {
  text: string;
  highlight?: string;
}

export interface ValueStackCheckItem {
  text: string;
  bold?: string;
  badge?: string;
}

export interface ValueStackData {
  spineLabel: string;
  sectionLabel: string;
  ghostText: string;
  bigNum: string;
  introLine: string;
  marquee: { text: string; highlightWords: string[] };
  headline: string;
  stepsLabel: string;
  steps: ProcessStep[];
  checklist: ValueStackCheckItem[];
  riskReversal: string;
  supportingLine: string;
  cta: { label: string; href: string };
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface ProcessData {
  sectionLabel: string;
  headline: string;
  steps: ProcessStep[];
  closingLine: string;
}

export interface PageData {
  hero: HeroData;
  about: AboutData;
  quoteBanner: QuoteBannerData;
  services: ServicesData;
  valueStack?: ValueStackData;
  process?: ProcessData;
  projects: ProjectsData;
  reviews: ReviewsData;
  contact: ContactData;
}
