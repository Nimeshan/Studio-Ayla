"use client";

import React from "react";
import Image from "next/image";
import { studioBrand } from "@/data/studioData";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function About() {
  const { aboutCopy, coreValue, introCopy } = studioBrand;

  return (
    <section
      id="about"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Section with • ABOUT and Highlight Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-24">
          {/* Left: • ABOUT Label */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-2.5 pt-2">
                <span className="w-2 h-2 rounded-full bg-[#1C1B1A]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E6862] font-mono font-medium">
                  ABOUT
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Large Highlight Statement & First Intro Paragraph */}
          <div className="lg:col-span-9 space-y-10 sm:space-y-12">
            {/* Highlighted Core Manifesto Statement */}
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-[#1C1B1A] leading-[1.18] tracking-tight">
                {aboutCopy.highlight || "We design calm, intentional interiors that balance light, material, and the way a room is actually lived in."}
              </h2>
            </ScrollReveal>

            {/* First Intro Paragraph: Interiors that reflect you */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-8 border-t border-[#1C1B1A]/10 space-y-4 max-w-3xl">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-light italic">
                  {aboutCopy.heading}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#4E4A45] font-light leading-relaxed">
                  {introCopy}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Custom Lighting Atelier Image Composition & Floating Stats */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <ScrollReveal direction="up" delay={0.35} duration={0.9}>
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden shadow-2xl bg-[#EAE4D9] group rounded-sm">
                <Image
                  src="/images/custom-lighting-craft.jpg"
                  alt="Studio Ayla Bespoke Custom Lighting Craftsmanship and Sculptural Luminaire Workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Artisan Workshop Moniker */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#1C1B1A]/10 shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1B1A] font-mono font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    Custom Lighting Atelier
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#1C1B1A]/5 shadow-md">
                  <p className="font-serif text-sm sm:text-base italic text-[#1C1B1A] leading-snug">
                    &ldquo;Every luminaire is prototyped and hand-sculpted to define the emotional tone of your space.&rdquo;
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8E8880] mt-1.5 font-sans">
                    Studio Ayla Lighting Workshop
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Studio Stats with Stagger */}
            <StaggerContainer className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 border-t border-[#1C1B1A]/10 pt-6">
              {aboutCopy.stats.map((stat, i) => (
                <StaggerItem key={i} className="space-y-1">
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#1C1B1A] block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8880] block font-sans">
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column: Narrative Copy & Pillars */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <ScrollReveal direction="up" delay={0.25}>
              <div className="p-6 sm:p-8 bg-[#F4EFEA] border border-[#1C1B1A]/8 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium block">
                  {coreValue.label} — {coreValue.heading}
                </span>
                <p className="font-serif text-2xl text-[#1C1B1A] font-light leading-snug">
                  {coreValue.statement}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <div className="space-y-4 text-[#5A5652] font-sans text-base sm:text-lg font-light leading-relaxed">
                <p>{aboutCopy.paragraph1}</p>
                <p>{aboutCopy.paragraph2}</p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="pt-4 border-t border-[#1C1B1A]/10 space-y-3.5">
              <StaggerItem className="flex items-center gap-3 text-xs sm:text-sm text-[#1C1B1A]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="tracking-wide">Personalised spatial architecture & tailored masterplans</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-3 text-xs sm:text-sm text-[#1C1B1A]">
                <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="tracking-wide">Bespoke lighting concepts engineered for natural circadian harmony</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-3 text-xs sm:text-sm text-[#1C1B1A]">
                <Award className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="tracking-wide">Exclusive artisan network across stone, timber, and hand-blown glass</span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
