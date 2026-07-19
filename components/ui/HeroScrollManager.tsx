"use client";

import { useEffect } from "react";

/**
 * HeroScrollManager
 * Drives --hero-progress (0 → 1) on <html> as the user scrolls.
 * Elements with .hero-scrim and .hero-text read this value for opacity.
 * Fully passive — never blocks scroll.
 */
export default function HeroScrollManager() {
  useEffect(() => {
    let ticking = false;

    const update = () => {
      // Fully revealed after 280px of scroll
      const progress = Math.min(window.scrollY / 280, 1);
      document.documentElement.style.setProperty("--hero-progress", String(progress));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Start hidden
    document.documentElement.style.setProperty("--hero-progress", "0");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
