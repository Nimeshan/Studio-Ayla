"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/studioData";
import { ChevronRight, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Services() {
  const [activeService, setActiveService] = useState<string>("interior-design");

  return (
    <section
      id="services"
      className="py-24 sm:py-32 lg:py-40 bg-[#F3EFEA] relative overflow-hidden border-t border-[#1C1B1A]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16 sm:mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E8880] font-sans font-medium">
                Capabilities & Scope
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C1B1A] leading-[1.1]">
              Tailored Services
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm sm:text-base text-[#7A746D] font-light leading-relaxed">
              From comprehensive residential architecture to one-of-a-kind sculptural luminaires, our services are structured around individuality and uncompromising craft.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimal Editorial Services List with Stagger */}
        <StaggerContainer className="divide-y divide-[#1C1B1A]/10 border-y border-[#1C1B1A]/10">
          {servicesData.map((service) => {
            const isExpanded = activeService === service.id;
            return (
              <StaggerItem key={service.id}>
                <div
                  onMouseEnter={() => setActiveService(service.id)}
                  onClick={() => setActiveService(isExpanded ? "" : service.id)}
                  className={`group transition-all duration-500 py-8 sm:py-12 cursor-pointer ${
                    isExpanded ? "bg-[#FAF8F5]/80 px-6 sm:px-8 -mx-6 sm:-mx-8 shadow-sm" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Number & Title */}
                    <div className="lg:col-span-5 flex items-baseline gap-6 sm:gap-8">
                      <span className="font-serif text-xl sm:text-2xl text-[#8E8880] font-light">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1B1A] font-light group-hover:text-[#C5A880] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-4">
                      <p className="font-sans text-sm sm:text-base text-[#5A5652] font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="lg:col-span-3">
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[#7A746D] flex items-center gap-2"
                          >
                            <ChevronRight className="w-3 h-3 text-[#C5A880] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Note */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8E8880]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>All services include bespoke spatial detailing and lighting consultation.</span>
            </div>
            <a
              href="#contact"
              className="text-[#1C1B1A] uppercase tracking-[0.18em] font-medium hover:text-[#C5A880] transition-colors border-b border-[#1C1B1A]/20 pb-0.5"
            >
              Inquire for custom brief →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
