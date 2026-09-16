"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { studioBrand } from "@/data/studioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ["hero", "about", "services", "projects", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between ${
          isScrolled
            ? "bg-[#FAF8F5]/92 backdrop-blur-xl border border-[#1C1B1A]/10 shadow-[0_12px_36px_rgba(28,27,26,0.08)]"
            : "bg-black/35 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div
            className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden p-1 transition-all duration-300 flex items-center justify-center shrink-0 ${
              isScrolled
                ? "bg-[#1C1B1A] border border-[#1C1B1A]/10 shadow-sm"
                : "bg-black/70 border border-white/30 shadow-md"
            }`}
          >
            <Image
              src="/images/studio-ayla-logo.png"
              alt="Studio Ayla Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span
              className={`font-serif text-lg sm:text-xl tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${
                isScrolled ? "text-[#1C1B1A]" : "text-white drop-shadow-sm"
              }`}
            >
              Studio Ayla
            </span>
            <span
              className={`text-[8px] sm:text-[8.5px] tracking-[0.25em] uppercase font-sans font-light mt-0.5 transition-colors duration-300 ${
                isScrolled ? "text-[#8E8880]" : "text-white/80"
              }`}
            >
              Interiors & Custom Lighting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-black/10 dark:bg-white/5 rounded-full px-3 py-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] xl:text-xs uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full transition-all duration-300 relative ${
                  isActive
                    ? isScrolled
                      ? "bg-[#1C1B1A] text-[#FAF8F5] font-medium shadow-xs"
                      : "bg-white text-[#1C1B1A] font-semibold shadow-xs"
                    : isScrolled
                    ? "text-[#1C1B1A]/75 hover:text-[#1C1B1A] hover:bg-[#1C1B1A]/5"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions (Status + Consultation Button) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-sm ${
              isScrolled
                ? "bg-[#C5A880] text-[#121110] hover:bg-[#1C1B1A] hover:text-[#FAF8F5]"
                : "bg-[#FAF8F5] text-[#1C1B1A] hover:bg-[#C5A880] hover:text-[#121110]"
            }`}
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile & Tablet Hamburger Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "text-[#1C1B1A] hover:bg-[#1C1B1A]/5"
                : "text-white hover:bg-white/15"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Modern Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#121110]/98 backdrop-blur-2xl text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 animate-fade-in overflow-y-auto">
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-black/80 p-1 border border-white/20">
                <Image
                  src="/images/studio-ayla-logo.png"
                  alt="Studio Ayla Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] uppercase font-light text-white">
                  Studio Ayla
                </span>
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#C5A880]">
                  Interiors & Custom Lighting
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="py-8 flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] text-[#C5A880] uppercase font-mono pb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE STUDIO AYLA</span>
            </div>
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between py-2.5 border-b border-white/5 hover:border-[#C5A880]/30 transition-all"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#8E8880] group-hover:text-[#C5A880]">
                    0{idx + 1}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-light text-white/90 group-hover:text-white group-hover:translate-x-2 transition-all">
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8880] opacity-0 group-hover:opacity-100 group-hover:text-[#C5A880] transition-all" />
              </Link>
            ))}
          </div>

          {/* Drawer Footer & Direct Actions */}
          <div className="pt-6 border-t border-white/10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#8E8880]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${studioBrand.email}`} className="hover:text-white transition-colors truncate">
                  {studioBrand.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:+94777981560`} className="hover:text-white transition-colors">
                  {studioBrand.phone}
                </a>
              </div>
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C5A880] text-[#121110] text-xs uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors"
            >
              <span>Book A Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
