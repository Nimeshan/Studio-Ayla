"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, Eye } from "lucide-react";
import { projectsData, Project } from "@/data/studioData";
import ProjectModal from "./ProjectModal";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Residential", "Hospitality", "Custom Lighting", "Wellness"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          p.type.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-[#1C1B1A]/10 gap-8">
          <div className="space-y-4 max-w-xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E8880] font-sans font-medium">
                  Selected Portfolio
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C1B1A] leading-[1.1]">
                Curated Spaces & Bespoke Lighting
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-sans text-sm sm:text-base text-[#7A746D] font-light leading-relaxed">
                An editorial showcase of spaces crafted around human character, architectural light, and tactile materials.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Tabs */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-sans ${
                    selectedCategory === cat
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

        {/* Editorial Magazine Grid for Projects with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 pt-12 sm:pt-16">
          {filteredProjects.map((project, index) => (
            <StaggerItem
              key={project.id}
              className={`transition-all duration-500 ${
                index % 2 === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <article
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer flex flex-col space-y-5"
              >
                {/* Project Image Container */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#EAE4D9] shadow-sm">
                  <Image
                    src={project.image}
                    alt={`${project.name} - ${project.type}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Hover Overlay with View Badge */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-5 py-2.5 bg-[#FAF8F5]/95 backdrop-blur-md text-[#1C1B1A] text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>View Project Details</span>
                    </div>
                  </div>

                  {/* Project Number Label in top corner */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-sm text-[#1C1B1A] text-[10px] uppercase tracking-[0.2em] font-sans font-medium border border-[#1C1B1A]/5">
                    {project.projectNumber}
                  </div>
                </div>

                {/* Project Metadata & Typography */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8E8880] uppercase tracking-[0.18em] font-sans">
                    <span>{project.type}</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-light group-hover:text-[#C5A880] transition-colors flex items-center justify-between">
                    <span>{project.name}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C5A880]" />
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#5A5652] font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Modal Lightbox for Project Details */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  );
}
