"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/studioData";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 lg:py-40 bg-[#1C1B1A] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center gap-3 mb-12 sm:mb-16">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
              Client Perspectives & Accolades
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Controls */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-[1.12]">
                Words from our Patrons
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-sans text-sm sm:text-base text-[#B3ACA3] font-light leading-relaxed">
                Every commission begins with an intimate dialogue and culminates in spaces that reflect individual character and lasting elegance.
              </p>
            </ScrollReveal>

            {/* Navigation Dots & Arrows */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 ml-4">
                  {testimonialsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        activeIndex === i ? "w-8 bg-[#C5A880]" : "w-2 bg-white/20"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Active Testimonial Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.3} duration={0.9}>
              <div className="relative p-8 sm:p-12 lg:p-14 bg-[#242322] border border-white/10 shadow-2xl transition-all duration-500">
                <Quote className="w-12 h-12 text-[#C5A880]/30 mb-6" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1.5 mb-6 text-[#C5A880]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Body */}
                <blockquote className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-light leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-serif text-lg font-light text-white">{current.author}</h4>
                    <p className="text-xs text-[#8E8880] mt-0.5">{current.role}</p>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="text-xs text-[#C5A880] block font-mono">{current.project}</span>
                    <span className="text-[11px] text-[#8E8880]">{current.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
