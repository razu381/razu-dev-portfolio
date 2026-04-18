"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Star } from "lucide-react";
import Marquee from "../shared/Marquee";
import type { ContactData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contactIconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = { MapPin, Mail, Phone, Star };

const ContactSection = ({ data }: { data: ContactData }) => {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ID
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
        : 'https://formspree.io/f/YOUR_FORM_ID',
        {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", type: "", budget: "", message: "" });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-surface-alt border border-foreground/[0.06] text-foreground px-4 py-3.5 font-body text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50";

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.sectionLabel}
      </div>
      <Marquee text={data.marqueeText} />
      <div className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        {data.ghostText}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-20 mt-16">
        <p className="font-mono-label text-sm text-muted-foreground mb-12 tracking-wider">
          <span className="text-primary">{data.sublabel}</span>
        </p>
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div className="lg:w-[55%]" initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold leading-[0.9] mb-8">
              {data.heading.map((line, i) => {
                const isLast = i === data.heading.length - 1;
                const isHighlight = isLast && line === data.headingHighlight;
                return (
                  <span
                    key={i}
                    className={`block ${isHighlight ? "text-primary" : "text-foreground"}`}
                    style={isHighlight ? { fontSize: "clamp(3rem, 6vw, 5rem)", ...data.headingHighlightStyle } : { fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                    {line}
                  </span>
                );
              })}
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-muted-foreground mb-8 max-w-md">
              {data.description}
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-3 mb-8">
              {data.contactInfo.map(({ icon, text }) => {
                const Icon = contactIconMap[icon];
                return (
                  <div key={text} className="flex items-center gap-3">
                    {Icon && <Icon size={16} className="text-primary" />}
                    <span className="font-mono-label text-sm text-muted-foreground">{text}</span>
                  </div>
                );
              })}
            </motion.div>
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 font-mono-label text-xs text-primary border border-primary/30 px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {data.availabilityBadge}
            </motion.div>
          </motion.div>

          {submitted ? (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="lg:w-[45%] bg-surface-alt border border-primary/30 p-8 text-center">
              <motion.div variants={fadeUp} className="text-6xl mb-4">✓</motion.div>
              <motion.h3 variants={fadeUp} className="font-display font-extrabold text-2xl text-foreground mb-4">
                Message Sent!
              </motion.h3>
              <motion.p variants={fadeUp} className="font-body text-muted-foreground mb-6">
                Thanks for reaching out! I'll get back to you within 24 hours.
              </motion.p>
              <motion.button variants={fadeUp} onClick={() => setSubmitted(false)}
                className="bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3 hover:brightness-110 transition-all">
                Send Another
              </motion.button>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="lg:w-[45%] space-y-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}>
              <motion.input variants={fadeUp} type="text" name="name" placeholder="Name" required
                className={inputClass}
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <motion.input variants={fadeUp} type="email" name="email" placeholder="Email" required
                className={inputClass}
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              <motion.select variants={fadeUp} name="type" required
                className={`${inputClass} appearance-none`}
                value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                <option value="" disabled>Project Type</option>
                {data.projectTypes.map(t => <option key={t}>{t}</option>)}
              </motion.select>
              <motion.select variants={fadeUp} name="budget" required
                className={`${inputClass} appearance-none`}
                value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                <option value="" disabled>Budget Range</option>
                {data.budgetRanges.map(b => <option key={b}>{b}</option>)}
              </motion.select>
              <motion.textarea variants={fadeUp} name="message" placeholder="Message" rows={5} required
                className={`${inputClass} resize-none`}
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <motion.button variants={fadeUp} type="submit" disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-heading font-bold text-sm py-4 hover:brightness-110 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 0 0 0 transparent" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,234,28,0.2)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}>
                {submitting ? "SENDING..." : "SEND MESSAGE →"}
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
