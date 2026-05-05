"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { SkillItem } from "@/data/skills";
import { skillCategories } from "@/data/skills";

function SkillCard({ skill, si }: { skill: SkillItem; si: number }) {
  const Icon = skill.icon;
  const circumference = 97.4;
  const offset = circumference - (skill.proficiency / 100) * circumference;

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: si * 0.03 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all duration-200 hover:border-hotel-light hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
          <svg
            className="absolute h-12 w-12 -rotate-90 text-hotel-light"
            viewBox="0 0 36 36"
            aria-hidden
          >
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#27B6C8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, delay: 0.1 + si * 0.05, ease: "easeOut" }}
            />
          </svg>
          <Icon className="relative z-10 h-5 w-5 text-hotel-accent" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-bold text-hotel-dark group-hover:text-hotel-accent transition-colors">
            {skill.name}
          </span>
          <span className="text-[10px] font-black text-hotel-accent/80 uppercase tracking-widest">{skill.proficiency}%</span>
        </div>
      </div>
    </motion.li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-white py-32 lg:py-40">
      {/* Wavy top divider from About section */}
      <div className="wavy-divider-top z-20 pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-light"></path>
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-hotel-accent">
            Expertise
          </p>
          <h2 className="font-urbanist text-5xl font-black tracking-tight text-hotel-dark sm:text-6xl">
            Skills & Tools
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-hotel-text/80 font-medium font-josefin">
            My technical arsenal for building high-end digital products.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-hotel-accent/10 bg-hotel-light/30 p-10 shadow-lg shadow-hotel-dark/5"
            >
              <h3 className="mb-10 font-urbanist text-2xl font-black text-hotel-dark uppercase tracking-widest text-center">
                {cat.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} si={si} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

