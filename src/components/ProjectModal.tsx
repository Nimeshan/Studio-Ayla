"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Layers, Sparkles, ArrowRight } from "lucide-react";
import { Project } from "@/data/studioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] text-[#1C1B1A] shadow-2xl border border-[#1C1B1A]/10 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-[#FAF8F5]/90 hover:bg-[#1C1B1A] hover:text-[#FAF8F5] transition-all rounded-none border border-[#1C1B1A]/10"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Main Large Image */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] lg:min-h-[600px] bg-[#1C1B1A]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.2em] font-sans">
              {project.projectNumber}
            </div>
          </div>

          {/* Project Details Panel */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-[#FAF8F5]">
            <div className="space-y-6">
              {/* Category & Type */}
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium">
                  {project.type}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A] font-light">
                  {project.name}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-[#5A5652] leading-relaxed font-light">
                {project.description}
              </p>

              {/* Quote / Narrative */}
              {project.quote && (
                <blockquote className="border-l-2 border-[#C5A880] pl-4 py-1 italic font-serif text-base sm:text-lg text-[#1C1B1A]">
                  &ldquo;{project.quote}&rdquo;
                </blockquote>
              )}

              {/* Project Meta Info Grid */}
              <div className="pt-4 border-t border-[#1C1B1A]/8 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8880] block font-sans">
                    Location
                  </span>
                  <span className="font-medium text-[#1C1B1A] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    {project.location}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8880] block font-sans">
                    Year
                  </span>
                  <span className="font-medium text-[#1C1B1A] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    {project.year}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8880] block font-sans">
                    Scope of Work
                  </span>
                  <span className="font-medium text-[#1C1B1A] flex items-center gap-1 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                    {project.scope}
                  </span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8E8880] block font-sans">
                  Craft & Detailing
                </span>
                <ul className="space-y-1.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-[#5A5652] flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-[#C5A880] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Inquire CTA */}
            <div className="pt-6 border-t border-[#1C1B1A]/8">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] hover:text-[#121110] transition-colors"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
