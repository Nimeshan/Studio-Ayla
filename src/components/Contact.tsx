"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { studioBrand } from "@/data/studioData";
import { ScrollReveal } from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = ["Residential", "Commercial", "Custom Lighting", "Other"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Direct Client-Side Submission to Web3Forms (Native Free Plan integration)
      const formPayload = new FormData();
      formPayload.append("access_key", "eba2f827-85ce-4ffd-9e58-aac34c9c536b");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone || "Not provided");
      formPayload.append("project_type", formData.projectType);
      formPayload.append("message", formData.message);
      formPayload.append("from_name", `Studio Ayla Web (${formData.name})`);
      formPayload.append("subject", `✨ New Studio Ayla Inquiry: ${formData.name} (${formData.projectType})`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Residential",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email studioayladesign@gmail.com directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden border-t border-[#1C1B1A]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Editorial Info */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#C5A880]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E8880] font-sans font-medium">
                    Get in Touch
                  </span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C1B1A] leading-[1.08] tracking-tight">
                  Let&apos;s create something uniquely yours.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="font-sans text-base sm:text-lg text-[#5A5652] font-light leading-relaxed">
                Have a space in mind? Tell us about your project and let&apos;s start a conversation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-6 border-t border-[#1C1B1A]/10 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8880] block mb-1 font-sans">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${studioBrand.email}`}
                    className="font-serif text-xl sm:text-2xl text-[#1C1B1A] hover:text-[#C5A880] transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5 text-[#C5A880]" />
                    <span>{studioBrand.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8880] block mb-1 font-sans">
                    Consultation Inquiries
                  </span>
                  <p className="text-sm text-[#5A5652] font-light">
                    We accept bespoke residential, hospitality, and custom luminaire commissions globally.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1B1A]/10 flex items-center gap-6">
                  <a
                    href={studioBrand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-[#8E8880] hover:text-[#C5A880] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={studioBrand.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-[#8E8880] hover:text-[#C5A880] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={studioBrand.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-[#8E8880] hover:text-[#C5A880] transition-colors"
                  >
                    Pinterest
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.25} duration={0.9}>
              <div className="bg-[#FAF8F5] p-8 sm:p-12 border border-[#1C1B1A]/10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] relative">
                {status === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#C5A880]/15 rounded-full flex items-center justify-center mx-auto text-[#C5A880]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl text-[#1C1B1A] font-light">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm text-[#7A746D] max-w-md mx-auto font-light leading-relaxed">
                      Your inquiry has been received. Our team will review your project brief and get in touch within 24–48 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-6 py-2.5 text-xs uppercase tracking-[0.18em] border border-[#1C1B1A] text-[#1C1B1A] hover:bg-[#1C1B1A] hover:text-[#FAF8F5] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8880] font-sans"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Maya Wickremesinghe"
                          className="w-full px-4 py-3 bg-white border border-[#1C1B1A]/15 text-[#1C1B1A] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8880] font-sans"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 bg-white border border-[#1C1B1A]/15 text-[#1C1B1A] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8880] font-sans"
                        >
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+94 77 123 4567"
                          className="w-full px-4 py-3 bg-white border border-[#1C1B1A]/15 text-[#1C1B1A] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="projectType"
                          className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8880] font-sans"
                        >
                          Project Typology
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-[#1C1B1A]/15 text-[#1C1B1A] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8880] font-sans"
                      >
                        Project Details & Vision *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your space, location, timeline, and lighting requirements..."
                        className="w-full px-4 py-3 bg-white border border-[#1C1B1A]/15 text-[#1C1B1A] text-sm focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#C5A880] hover:text-[#121110] flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      <span>{status === "loading" ? "Submitting Inquiry..." : "Submit Project Inquiry"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
