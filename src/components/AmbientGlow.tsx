"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function AmbientGlow() {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 140, mass: 0.6 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!isVisible) setIsVisible(true);
        cursorX.set(e.clientX - 160);
        cursorY.set(e.clientY - 160);
      };

      const handleMouseLeave = () => setIsVisible(false);
      const handleMouseEnter = () => setIsVisible(true);

      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseleave", handleMouseLeave);
      document.body.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none z-30 opacity-40 mix-blend-multiply blur-3xl bg-radial from-[#C5A880]/35 via-[#EAE4D9]/20 to-transparent transition-opacity duration-500"
    />
  );
}
