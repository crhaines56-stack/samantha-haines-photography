"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
  { href: "/senior-portrait-photographer-austin", label: "Senior" },
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/newborn-photographer-austin", label: "Newborn" },
  { href: "/maternity-photographer-austin", label: "Maternity" },
  { href: "/headshots-branding-photographer-austin", label: "Headshots" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf9f7]/95 backdrop-blur-sm shadow-sm"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span className={`font-serif text-2xl tracking-widest leading-none transition-colors duration-300 ${isScrolled ? "text-[#1a1a1a]" : "text-[#faf9f7]"}`}>
            SAMANTHA HAINES
          </span>
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#c9b99a] uppercase mt-0.5">
            Photography
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                isScrolled
                  ? "text-[#6b6b6b] hover:text-[#1a1a1a]"
                  : "text-[#faf9f7]/80 hover:text-[#faf9f7]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-[11px] tracking-[0.2em] uppercase bg-[#1a1a1a] text-[#faf9f7] px-5 py-2.5 hover:bg-[#8b6f5e] transition-colors duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#1a1a1a] transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1a1a1a] transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1a1a1a] transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#faf9f7] border-t border-[#e8e4df] px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] tracking-[0.2em] uppercase text-[#6b6b6b] hover:text-[#1a1a1a]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-sans text-[12px] tracking-[0.2em] uppercase bg-[#1a1a1a] text-[#faf9f7] px-5 py-3 text-center hover:bg-[#8b6f5e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
