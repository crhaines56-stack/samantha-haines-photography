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
      // Reveal over first 40% of viewport scroll, then locked at full visibility
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.4), 1);
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
