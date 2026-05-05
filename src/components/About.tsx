"use client";

import { motion } from "framer-motion";
import { Code2, Layers, MapPin, Rocket, Target } from "lucide-react";

const stats = [
  { label: "1+ Years Experience", value: "1+", sub: "Building in production" },
  { label: "15+ Projects Built", value: "15+", sub: "Web & mobile" },
  { label: "Technologies", value: "10+", sub: "Stack breadth" },
  { label: "Based in Kigali", value: "RW", sub: "Open to remote" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-t border-white/50 bg-hotel-light py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-hotel-accent">About Me</p>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight text-hotel-dark sm:text-4xl">
            What I Do
          </h2>
          <motion.span
            className="mt-3 block h-0.5 w-28 rounded-full bg-hotel-accent"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-6 text-hotel-text/90"
          >
            <p className="text-lg leading-relaxed text-hotel-dark/90">
              Over the past year, I&apos;ve grown from writing my first production
              components to shipping full user flows across{" "}
              <strong className="font-bold text-hotel-dark">web and mobile</strong>.
              I specialize in{" "}
              <strong className="font-bold text-hotel-dark">
                frontend engineering
              </strong>{" "}
              and{" "}
              <strong className="font-bold text-hotel-dark">mobile development</strong>
              — translating designs into fast, accessible experiences users actually
              enjoy.
            </p>
            <p className="leading-relaxed text-hotel-text/80">
              I care about maintainable architecture, thoughtful motion, and
              measurable performance. Every project is a chance to level up: new
              patterns, tighter TypeScript, cleaner state, and sharper product
              instincts.
            </p>
            <p className="flex items-start gap-3 rounded-2xl border border-hotel-accent/20 bg-white/60 p-4 leading-relaxed shadow-sm">
              <Target className="mt-0.5 h-5 w-5 shrink-0 text-hotel-accent" />
              <span>
                I&apos;m actively open to roles and collaborations where I can
                contribute to ambitious products while continuing to deepen my
                craft in React, React Native, and modern full-stack tooling.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-white bg-white p-6 shadow-xl shadow-hotel-dark/5"
              >
                <div className="absolute inset-0 bg-hotel-accent/5 opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-hotel-light text-hotel-accent ring-1 ring-hotel-accent/20">
                    {i === 0 && <Rocket className="h-5 w-5" />}
                    {i === 1 && <Layers className="h-5 w-5" />}
                    {i === 2 && <Code2 className="h-5 w-5" />}
                    {i === 3 && <MapPin className="h-5 w-5" />}
                  </div>
                  <p className="font-urbanist text-3xl font-black text-hotel-dark">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-hotel-text">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs text-hotel-text/70">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

