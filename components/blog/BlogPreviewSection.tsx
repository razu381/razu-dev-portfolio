"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "../shared/Marquee";
import { posts } from "@/data/posts";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const previewPosts = posts.slice(0, 3);

const BlogPreviewSection = () => {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      <Marquee text="LATEST POSTS · LATEST POSTS · LATEST POSTS ·" highlightWords={["LATEST"]} />

      {/* Vertical label */}
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        [ 04 — BLOG ]
      </div>

      {/* Ghost text */}
      <div className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        BLOG
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-20 mt-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono-label text-sm text-primary mb-2 tracking-wider">[ 04 ]</p>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground mb-3">THOUGHTS & TUTORIALS</h2>
          <p className="font-mono-label text-xs text-muted-foreground/60 mb-16 tracking-wider">
            React · Next.js · Tailwind CSS · TypeScript · Frontend Tips
          </p>
        </motion.div>

        {/* Asymmetric 3-card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Card 1 — Featured (left, 55%) */}
          <motion.div className="lg:col-span-7 lg:row-span-2"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0 }} variants={fadeUp}>
            <BlogCard post={previewPosts[0]} featured />
          </motion.div>

          {/* Card 2 — right top */}
          <motion.div className="lg:col-span-5"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.08 }} variants={fadeUp}>
            <BlogCard post={previewPosts[1]} />
          </motion.div>

          {/* Card 3 — right bottom, offset */}
          <motion.div className="lg:col-span-5 lg:mt-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.16 }} variants={fadeUp}>
            <BlogCard post={previewPosts[2]} />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Link href="/blog"
            className="font-mono-label text-xs text-muted-foreground/60 tracking-wider hover:text-primary transition-colors inline-flex items-center gap-1 group">
            MORE POSTS IN THE BLOG <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const BlogCard = ({ post, featured = false }: { post: typeof posts[0]; featured?: boolean }) => {
  return (
    <Link href={`/blog/${post.slug}`}
      className="block bg-surface border border-border overflow-hidden group h-full brutalist-card">
      {/* Image */}
      <div className={`w-full flex items-center justify-center ${featured ? "aspect-[16/9] lg:aspect-[16/10]" : "aspect-video"}`}
        style={{ background: "linear-gradient(135deg, #111 0%, #0d1a10 100%)" }}>
        <span className="font-mono-label text-[10px] text-muted-foreground/30 tracking-wider">[ BLOG IMAGE ]</span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-7">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono-label text-[10px] text-primary border border-primary px-2.5 py-0.5 tracking-wider">
            {post.category}
          </span>
          <span className="font-mono-label text-[10px] text-muted-foreground/60">{post.date}</span>
        </div>

        <h3 className={`font-display font-bold text-foreground leading-tight mb-2 ${featured ? "text-lg md:text-xl" : "text-sm md:text-base"}`}>
          {post.title}
        </h3>

        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="font-mono-label text-[10px] text-muted-foreground/40">{post.readTime}</span>
          <span className="font-mono-label text-[11px] text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            READ MORE <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPreviewSection;
