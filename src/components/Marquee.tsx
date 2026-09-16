"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface MarqueeProps {
  items?: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

const defaultItems = [
  "Bespoke Interiors",
  "Custom Lighting Design",
  "Spatial Architecture",
  "Master Artisan Craft",
  "Residential Sanctuaries",
  "Sculptural Luminaires",
  "Biophilic Living",
  "Atmospheric Detailing",
];

export default function Marquee({
  items = defaultItems,
  speed = 28,
  reverse = false,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`relative w-full overflow-hidden py-5 sm:py-7 bg-[#1C1B1A] text-[#FAF8F5] border-y border-white/10 select-none ${className}`}
    >
      {/* Edge gradient fades for seamless infinity look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1C1B1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1C1B1A] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {/* Double repeated sequence to ensure unbroken continuous loop */}
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-6 sm:gap-10 mx-4 sm:mx-6"
          >
            <span className="font-serif text-lg sm:text-2xl lg:text-3xl font-light tracking-[0.12em] uppercase text-[#FAF8F5]/90 hover:text-[#C5A880] transition-colors">
              {text}
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880] shrink-0 opacity-75" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
