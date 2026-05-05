"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ProjectCategory } from "@/data/projects";
import { projects } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-20 lg:py-28 bg-hotel-light"
    >
      {/* Wavy top divider from Skills section */}
      <div className="wavy-divider-top z-20 pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-white"></path>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-[2.5rem] bg-hotel-dark p-8 shadow-2xl sm:p-14 lg:p-20 border border-white/5 backdrop-blur-3xl"
        >
            {/* Background ambient light */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-hotel-accent/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-hotel-accent/10 blur-[100px]" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex rounded-full border border-hotel-accent/30 bg-hotel-accent/10 px-5 py-2">
                <p className="mb-0 text-sm font-semibold uppercase tracking-widest text-white">Portfolio</p>
              </div>
              <h2 className="font-urbanist text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Featured Work
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-hotel-light/80 sm:text-xl font-josefin">
                A curated collection of scalable platforms, mobile applications, and reliable systems I&apos;ve built to solve complex challenges.
              </p>

              <Link
                href="/projects"
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-hotel-accent px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-[#209ba9] active:scale-[0.98]"
              >
                See my work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}


