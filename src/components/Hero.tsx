"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { studioBrand } from "@/data/studioData";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Track scroll progression through the hero section (0 = at top, 1 = scrolled past)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Background parallax & cinematic zoom depth
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.8, 0.35]);

  // Main content floating backward into space + lifting + graceful fade
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65, 0.95], [1, 0.7, 0]);

  // Featured Project Card differential parallax float
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.7, 0.95], [1, 0.75, 0]);

  // Bottom pillars row recession
  const bottomBarY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bottomBarOpacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [1, 0.4, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Immersive Architectural Background Image with Parallax & Float-Back Zoom */}
      <motion.div
        style={{
          scale: backgroundScale,
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
        className="absolute inset-0 z-0 select-none origin-center pointer-events-none will-change-transform"
      >
        <Image
          src="/images/hero-interior.jpg"
          alt="Studio Ayla Architectural Luxury Dining Lounge with Cascading Wisteria and Rose Marble Flooring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Cinematic Multi-layer Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/70" />
      </motion.div>

      {/* Spacer for Top Floating Navbar */}
      <div className="relative z-10 w-full" />

      {/* Hero Content Container with Floating Back 3D Motion */}
      <motion.div
        style={{
          y: contentY,
          scale: contentScale,
          opacity: contentOpacity,
        }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white my-auto origin-center will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          
          {/* Main Hero Typography & CTAs (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Architectural Moniker Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F5]"
            >
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium text-white/95">
                Bespoke Interiors & Custom Lighting
              </span>
            </motion.div>

            {/* Main Monumental Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.04] tracking-tight text-[#FAF8F5] drop-shadow-md"
            >
              Interiors that <br />
              <span className="italic font-normal text-[#FAF8F5] font-serif">
                reflect you.
              </span>
            </motion.h1>

            {/* Supporting Editorial Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-[#FAF8F5]/90 font-light max-w-2xl leading-relaxed tracking-wide drop-shadow-sm"
            >
              {studioBrand.introCopy.split(". ")[0]}. We create spaces centred on individuality, thoughtful spatial design, and signature custom lighting.
            </motion.p>

            {/* Dual Modern CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#FAF8F5] text-[#1C1B1A] text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#C5A880] hover:text-[#121110] shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white/10 border border-white/40 text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-[0.18em] font-light backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white"
              >
                <span>Request Consultation</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Featured Project Floating Capsule with Differential Parallax (Right 4 cols) */}
          <motion.div
            style={{
              y: cardY,
              scale: cardScale,
              opacity: cardOpacity,
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-end lg:items-end will-change-transform"
          >
            <Link
              href="#projects"
              className="group block p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 hover:border-[#C5A880]/60 transition-all duration-500 shadow-2xl max-w-sm w-full"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Featured Space
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                  Project 01
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/15">
                  <Image
                    src="/images/botanical-wisteria-lounge.jpg"
                    alt="Featured Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm sm:text-base text-white truncate group-hover:text-[#C5A880] transition-colors">
                    The Wisteria Dining Atelier
                  </h4>
                  <p className="text-[11px] text-white/70 truncate mt-0.5">
                    Rose Marble & Custom Luminaires
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-[#C5A880] mt-1.5 uppercase tracking-wider font-mono">
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Key Pillars & Scroll Indicator Bar with Subtle Parallax Fade */}
      <motion.div
        style={{
          y: bottomBarY,
          opacity: bottomBarOpacity,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 will-change-transform"
      >
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/15 pt-6 gap-6">
          {/* 3 Core Pillars */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full md:w-auto text-left">
            <div>
              <div className="font-serif text-lg sm:text-xl font-light text-white">
                Individuality
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#C5A880] uppercase tracking-wider font-mono mt-0.5">
                Core Design Value
              </div>
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-light text-white">
                Custom Lighting
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#C5A880] uppercase tracking-wider font-mono mt-0.5">
                Bespoke Luminaires
              </div>
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-light text-white">
                Architecture
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#C5A880] uppercase tracking-wider font-mono mt-0.5">
                Tailored Spaces
              </div>
            </div>
          </div>

          {/* Smooth Scroll Pill Indicator */}
          <Link
            href="#about"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-[#C5A880] transition-colors py-1"
          >
            <span>Explore Studio</span>
            <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-[#C5A880] transition-colors">
              <div className="w-1 h-2 rounded-full bg-[#C5A880] animate-bounce" />
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
