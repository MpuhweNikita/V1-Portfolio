"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TYPING_TEXT = "Software developer | Frontend & Mobile Development";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  show: {
    opacity: 1,
    y: [35, -15, 0],
    scale: [0.95, 1.05, 1],
    transition: {
      opacity: { duration: 0.4 },
      y: { duration: 0.8, times: [0, 0.6, 1], ease: "easeOut" },
      scale: { duration: 0.8, times: [0, 0.6, 1], ease: "easeOut" }
    },
  },
};

function TypingLine() {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const full = TYPING_TEXT;

    if (phase === "typing") {
      if (display.length < full.length) {
        timeout = setTimeout(() => {
          setDisplay(full.slice(0, display.length + 1));
        }, 45);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay((d) => d.slice(0, -1));
        }, 18);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase]);

  return (
    <p className="font-urbanist text-sm text-hotel-light/80 sm:text-base md:text-lg">
      <span className="text-hotel-accent font-semibold">{display}</span>
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-hotel-accent align-middle" />
    </p>
  );
}

export function Hero({ isLoading = false }: { isLoading?: boolean }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-6 bg-hotel-dark"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-hotel-dark/80 via-hotel-dark to-hotel-dark/90" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-hotel-accent/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-hotel-light/5 blur-[90px]" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-20" />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[10%] z-30 hidden lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-sm">
          <Sparkles className="h-6 w-6 text-hotel-accent" />
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[35%] hidden lg:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-14 w-14 rotate-12 rounded-lg border border-hotel-light bg-hotel-light" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isLoading ? "hidden" : "show"}
          className="relative z-20 max-w-xl"
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-hotel-light"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-hotel-accent shadow-sm" />
            Available for opportunities
          </motion.p>
          <motion.h1
            variants={item}
            className="font-urbanist text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-hotel-accent">Mpuhwe</span>
          </motion.h1>
          <motion.div variants={item} className="mt-4 min-h-[2.5rem]">
            <TypingLine />
          </motion.div>
          <motion.p
            variants={item}
            className="mt-6 text-base leading-relaxed text-hotel-light/90 sm:text-lg font-josefin"
          >
            With over 1 year of hands-on experience, I build high-performance,
            user-centric web and mobile applications. Passionate about clean
            code, intuitive interfaces, and turning ideas into impactful digital
            products. Based in{" "}
            <span className="text-white font-semibold">Kigali, Rwanda</span>.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-hotel-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-hotel-accent/25 transition hover:bg-[#209ba9] hover:scale-[1.02]"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-hotel-accent" />
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoading ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.4,
            duration: 1.5
          }}
          className="relative z-10 mx-auto flex max-w-md justify-center lg:mx-0 lg:max-w-none lg:justify-end"
        >
          <div className="relative">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              style={{
                x: parallax.x * -0.7,
                y: parallax.y * -0.7,
              }}
            >
              <div className="absolute inset-0 rounded-full border border-hotel-accent/30 shadow-[0_0_20px_rgba(39,182,200,0.2)]" />
              <div className="absolute inset-8 rounded-full border border-hotel-accent/20" />
              <div className="absolute inset-14 rounded-full border border-hotel-accent/10" />
              <motion.span
                className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-hotel-accent shadow-[0_0_12px_rgba(39,182,200,0.6)]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
              <motion.span
                className="absolute bottom-12 left-3 h-2.5 w-2.5 rounded-full bg-hotel-accent/80 shadow-[0_0_12px_rgba(39,182,200,0.5)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              />
              <motion.span
                className="absolute right-8 top-20 h-2 w-2 rounded-full bg-hotel-light/90 shadow-[0_0_12px_rgba(234,247,248,0.8)]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-hotel-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div className="absolute -inset-4 rounded-3xl bg-hotel-accent/10 opacity-60 blur-2xl" />
            <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-hotel-dark/10" />
                <Image
                  src="/profile.jpg"
                  alt="Mpuhwe — professional portrait"
                  width={480}
                  height={600}
                  className="aspect-[4/5] w-full max-w-[320px] object-cover sm:max-w-[380px] lg:max-w-[420px] rounded-2xl"
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-white/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xs text-hotel-text/80">Focus</p>
              <p className="font-josefin text-sm font-bold text-hotel-dark">
                Frontend · Mobile
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wavy bottom divider */}
      <div className="wavy-divider-bottom text-white z-20 pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-white"></path>
        </svg>
      </div>
    </section>
  );
}

