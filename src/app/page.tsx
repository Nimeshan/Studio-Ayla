import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientGlow from "@/components/AmbientGlow";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1C1B1A] flex flex-col antialiased selection:bg-[#C5A880] selection:text-[#121110] relative">
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress />

      {/* Atmospheric Luminaire Mouse Follower Glow */}
      <AmbientGlow />

      {/* Header Navigation */}
      <Navbar />

      {/* 1. Home (Hero) */}
      <Hero />

      {/* Architectural Infinite Moving Ribbon */}
      <Marquee speed={24} />

      {/* 2. About */}
      <About />

      {/* 3. Services */}
      <Services />

      {/* 4. Projects */}
      <Portfolio />

      {/* Reverse Moving Marquee Ribbon */}
      <Marquee
        reverse={true}
        speed={32}
        items={[
          "Custom Glass & Brass Luminaires",
          "Acoustic Harmony",
          "Tactile Terracotta & Marble",
          "Circadian Light Engineering",
          "Bespoke Mayfair & Kyoto Ateliers",
        ]}
      />

      {/* 5. Gallery */}
      <Gallery />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

