"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { type Post, type ContentBlock } from "@/data/posts";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface BlogPostClientProps {
  post: Post | null;
  related: Post[];
}

export default function BlogPostClient({ post, related }: BlogPostClientProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!post) {
    return (
      <>
        <CustomCursor />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display font-extrabold text-4xl text-foreground mb-4">Post Not Found</h1>
            <Link href="/blog" className="font-mono-label text-sm text-primary hover:underline">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* Post Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-12 pt-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #080808 0%, #0d1a10 60%, #080808 100%)" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.75)" }} />

        {/* Vertical label */}
        <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase z-10"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          [ BLOG ]
        </div>

        <div className="relative z-10 max-w-[860px] mx-auto w-full px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Breadcrumb */}
            <div className="font-mono-label text-[10px] text-muted-foreground/60 tracking-wider mb-5 flex items-center gap-2">
              <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
              <span className="text-muted-foreground/30">/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">BLOG</Link>
              <span className="text-muted-foreground/30">/</span>
              <span className="text-muted-foreground/40 truncate max-w-[200px]">{post.title.toUpperCase()}</span>
            </div>

            {/* Category */}
            <span className="inline-block font-mono-label text-[10px] text-primary border border-primary px-2.5 py-0.5 tracking-wider mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-display font-extrabold text-foreground leading-[1.15] max-w-[760px]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-5 font-mono-label text-[11px] text-muted-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-surface-alt border border-primary flex items-center justify-center" style={{ borderRadius: "50%" }}>
                  <span className="font-display font-bold text-xs text-primary">SR</span>
                </div>
                <span>Shohidul Islam Razu</span>
              </div>
              <span className="text-muted-foreground/30">·</span>
              <span>{post.date}</span>
              <span className="text-muted-foreground/30">·</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-[960px] mx-auto px-6 -mt-16 relative z-20">
        <div className="w-full aspect-[16/7] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #111 0%, #0d1a10 100%)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}>
          <span className="font-mono-label text-sm text-muted-foreground/30 tracking-wider">[ FEATURED IMAGE ]</span>
        </div>
      </div>

      {/* Post Content */}
      <article className="max-w-[720px] mx-auto px-6 pt-16 pb-20">
        {post.content.map((block, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <RenderBlock block={block} />
          </motion.div>
        ))}
      </article>

      {/* Share Row */}
      <div className="max-w-[720px] mx-auto px-6 border-t border-border py-7 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono-label text-[11px] text-muted-foreground/60 tracking-wider">SHARE THIS POST:</span>
        <div className="flex gap-2">
          {["TWITTER", "LINKEDIN", "COPY LINK"].map(label => (
            <button key={label}
              className="font-mono-label text-[10px] border border-border px-3.5 py-1.5 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Author Box */}
      <div className="max-w-[720px] mx-auto px-6 border-t border-border pt-10 mt-4">
        <div className="flex gap-5 items-start">
          <div className="w-16 h-16 shrink-0 bg-surface-alt border-2 border-primary flex items-center justify-center" style={{ borderRadius: "50%" }}>
            <span className="font-display font-bold text-lg text-primary">SR</span>
          </div>
          <div>
            <span className="font-mono-label text-[10px] text-primary uppercase tracking-wider">WRITTEN BY</span>
            <h3 className="font-display font-bold text-lg text-foreground mt-1">Shohidul Islam Razu</h3>
            <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
              Full-stack developer and creative technologist. I build modern web applications with Next.js, React, and Tailwind CSS. Sharing insights from my journey in the world of web development.
            </p>
            <div className="flex gap-2 mt-4">
              {["TWITTER", "LINKEDIN", "GITHUB"].map(label => (
                <a key={label} href="#" className="font-mono-label text-[10px] border border-border px-3 py-1 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <Marquee text="MORE POSTS · MORE POSTS · MORE POSTS ·" />
      </div>

      <section className="max-w-[960px] mx-auto px-6 pt-16 pb-20">
        <p className="font-mono-label text-sm text-primary mb-2 tracking-wider">[ RELATED POSTS ]</p>
        <h2 className="font-display font-bold text-2xl text-foreground mb-8">Keep Reading</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map(rp => (
            <motion.div key={rp.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link href={`/blog/${rp.slug}`}
                className="block bg-surface border border-border overflow-hidden group brutalist-card h-full">
                <div className="aspect-video flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #111 0%, #0d1a10 100%)" }}>
                  <span className="font-mono-label text-[10px] text-muted-foreground/30 tracking-wider">[ POST IMAGE ]</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-[10px] text-primary border border-primary px-2 py-0.5 tracking-wider">{rp.category}</span>
                    <span className="font-mono-label text-[10px] text-muted-foreground/60">{rp.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground leading-tight mt-2">{rp.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">{rp.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-mono-label text-[10px] text-muted-foreground/40">{rp.readTime}</span>
                    <span className="font-mono-label text-[10px] text-muted-foreground/60 group-hover:text-primary transition-colors">READ →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back to blog */}
        <div className="text-center mt-12">
          <Link href="/blog"
            className="font-mono-label text-[11px] text-muted-foreground/60 tracking-wider hover:text-primary transition-colors inline-flex items-center gap-1 group">
            <span className="inline-block transition-transform group-hover:-translate-x-1">←</span> BACK TO ALL POSTS
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

const RenderBlock = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "h2":
      return <h2 className="font-display font-bold text-2xl text-foreground mt-12 mb-4">{block.text}</h2>;
    case "h3":
      return <h3 className="font-display font-semibold text-xl text-foreground mt-9 mb-3">{block.text}</h3>;
    case "p":
      return <p className="font-body text-base text-muted-foreground leading-[1.9] mb-5">{block.text}</p>;
    case "blockquote":
      return (
        <blockquote className="border-l-[3px] border-l-primary pl-6 my-8 font-body italic text-muted-foreground/70 text-lg">
          "{block.text}"
        </blockquote>
      );
    case "code":
      return (
        <pre className="bg-surface border border-border p-6 my-7 overflow-x-auto font-mono-label text-sm text-primary leading-relaxed">
          <code>{block.code}</code>
        </pre>
      );
    case "list":
      return (
        <ul className="font-body text-base text-muted-foreground leading-[1.8] pl-6 mb-5 space-y-1">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-4">
              <span className="absolute left-0 text-primary font-display font-bold">•</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "hr":
      return <hr className="border-border my-10" />;
    default:
      return null;
  }
};
