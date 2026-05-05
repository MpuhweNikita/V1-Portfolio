"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "/projects" },
    { label: "Experience", href: "#experience" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/MpuhweNikita", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mpuhwe-nikita-82a80934b/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden bg-hotel-dark pt-32 pb-12">
      {/* Wavy top divider */}
      <div className="wavy-divider-top z-20 pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-white"></path>
        </svg>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-hotel-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-hotel-light/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Large Watermark Text */}
      <div className="absolute -bottom-10 right-0 select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <span className="font-urbanist text-[15rem] font-black text-white leading-none">
          MPUHWE
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <h2 className="font-urbanist text-3xl font-black tracking-tighter text-white uppercase">
                Mpuhwe<span className="text-hotel-accent">.</span>
              </h2>
            </Link>
            <p className="font-josefin text-xl font-medium text-hotel-light/60 leading-relaxed max-w-md">
              Building digital experiences that are as reliable as they are beautiful. Focused on precision, performance, and user-centric design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-hotel-light/50 transition-all hover:border-hotel-accent hover:text-hotel-accent hover:shadow-xl hover:shadow-hotel-accent/10"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-hotel-light/40">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-josefin text-lg font-bold text-white transition-all hover:text-hotel-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-hotel-light/40">Status</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-hotel-accent animate-pulse shadow-[0_0_8px_rgba(39,182,200,0.8)]" />
                <span className="font-josefin text-lg font-bold text-white">Available for hire</span>
              </div>
              <p className="text-hotel-light/60 font-medium">
                I am currently looking for new opportunities and interesting projects to collaborate on.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-hotel-accent font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Start a conversation
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-josefin text-sm font-bold text-hotel-light/40">
            © {year} MPUHWE NIKITA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 font-josefin text-sm font-bold text-hotel-light/40">
            MADE WITH <Heart className="h-4 w-4 text-hotel-accent fill-hotel-accent" /> IN KIGALI
          </div>
        </div>
      </div>
    </footer>
  );
}


