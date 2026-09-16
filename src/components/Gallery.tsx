"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/studioData";
import { Maximize2, X, ChevronRight, ChevronLeft } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = ["All", "Hospitality", "Residential", "Lighting", "Wellness"];

  const filteredItems =
    selectedFilter === "All"
      ? galleryData
      : galleryData.filter((item) =>
          item.category.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden border-t border-[#1C1B1A]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-[#1C1B1A]/10 gap-8">
          <div className="space-y-4 max-w-xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E8880] font-sans font-medium">
                  Visual Atelier
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C1B1A] leading-[1.1]">
                Atmosphere & Light Gallery
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-sans text-sm sm:text-base text-[#7A746D] font-light leading-relaxed">
                A curated photographic journey through bespoke lighting moments, textured stone, and atmospheric architecture.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Tabs */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-sans ${
                    selectedFilter === cat
                      ? "bg-[#1C1B1A] text-[#FAF8F5]"
                      : "bg-transparent text-[#7A746D] hover:text-[#1C1B1A] border border-[#1C1B1A]/10 hover:border-[#1C1B1A]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {filteredItems.map((item, index) => (
            <StaggerItem key={item.id}>
              <div
                onClick={() => openLightbox(index)}
                className="group cursor-pointer relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-[#EAE4D9] shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] mb-1 font-mono">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-light">{item.title}</h4>
                  <p className="text-xs text-white/80 mt-0.5">{item.subtitle}</p>

                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh]">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="text-center mt-4 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-mono block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-2xl font-light mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  {filteredItems[lightboxIndex].subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
