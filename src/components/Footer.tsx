"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Globe } from "lucide-react";
import { studioBrand } from "@/data/studioData";
import { ScrollReveal } from "./ScrollReveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#121110] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Row: Brand & Tagline & Scroll Top */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/10 gap-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-[#242424] p-1.5 border border-white/20 shadow-md flex items-center justify-center shrink-0">
                <Image
                  src="/images/studio-ayla-logo.png"
                  alt="Studio Ayla Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.18em] uppercase font-light text-[#FAF8F5]">
                  {studioBrand.name}
                </h3>
                <p className="font-serif text-base sm:text-lg text-[#C5A880] italic">
                  {studioBrand.tagline}
                </p>
                <p className="text-xs text-[#8E8880] max-w-sm font-light pt-1">
                  Personalised interiors and custom lighting designed around individuality.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="self-start md:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8E8880] hover:text-[#C5A880] transition-colors p-2"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Middle Row: Navigation Links & Inquiries */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10">
            {/* Nav links */}
            <div className="md:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8880] block mb-4 font-sans">
                Navigation
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs uppercase tracking-[0.18em] text-[#C2BCB3] hover:text-[#C5A880] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Email */}
            <div className="md:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8880] block mb-4 font-sans">
                Inquiries
              </span>
              <a
                href={`mailto:${studioBrand.email}`}
                className="text-xs text-[#FAF8F5] hover:text-[#C5A880] transition-colors font-sans tracking-wide block"
              >
                {studioBrand.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="md:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8880] block mb-4 font-sans">
                Follow
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={studioBrand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#C2BCB3] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
                  aria-label="Studio Ayla Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href={studioBrand.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#C2BCB3] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
                  aria-label="Studio Ayla Facebook"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href={studioBrand.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#C2BCB3] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
                  aria-label="Studio Ayla Website / Worldwide"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A746D] gap-4">
          <p>© {studioBrand.year} Studio Ayla. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">
            Editorial Interior Architecture & Lighting
          </p>
        </div>
      </div>
    </footer>
  );
}
