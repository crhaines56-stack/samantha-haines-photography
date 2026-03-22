import Link from "next/link";

const services = [
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
  { href: "/senior-portrait-photographer-austin", label: "Senior Portraits" },
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/newborn-photographer-austin", label: "Newborn" },
  { href: "/maternity-photographer-austin", label: "Maternity" },
  { href: "/headshots-branding-photographer-austin", label: "Headshots & Branding" },
];

const locations = [
  { href: "/steiner-ranch-photographer", label: "Steiner Ranch" },
  { href: "/cedar-park-photographer", label: "Cedar Park" },
  { href: "/westlake-photographer", label: "Westlake" },
  { href: "/round-rock-photographer", label: "Round Rock" },
  { href: "/lakeway-photographer", label: "Lakeway" },
  { href: "/dripping-springs-photographer", label: "Dripping Springs" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf9f7] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <p className="font-serif text-2xl tracking-widest leading-none">
                SAMANTHA HAINES
              </p>
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#c9b99a] uppercase mt-0.5">
                Photography
              </p>
            </div>
            <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed max-w-xs">
              Austin&apos;s premier portrait studio. Boudoir, senior portraits, family,
              newborn, maternity & headshots.
            </p>
            <p className="font-sans text-[12px] text-[#c9b99a] mt-4">
              2302 Jacks Pass, Austin, TX
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c9b99a] mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-sans text-[13px] text-[#6b6b6b] hover:text-[#faf9f7] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c9b99a] mb-6">
              Serving
            </p>
            <ul className="space-y-3">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] text-[#6b6b6b] hover:text-[#faf9f7] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c9b99a] mb-6">
              Connect
            </p>
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-[13px] text-[#6b6b6b] hover:text-[#faf9f7] transition-colors"
                >
                  Book a Session
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-sans text-[13px] text-[#6b6b6b] hover:text-[#faf9f7] transition-colors"
                >
                  About Samantha
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-sans text-[13px] text-[#6b6b6b] hover:text-[#faf9f7] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase border border-[#c9b99a] text-[#c9b99a] px-6 py-3 hover:bg-[#c9b99a] hover:text-[#1a1a1a] transition-all duration-300"
            >
              Start the Conversation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-[#6b6b6b]">
            © {new Date().getFullYear()} Samantha Haines Photography. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-[#6b6b6b]">
            Austin, TX · Steiner Ranch · Cedar Park · Westlake
          </p>
        </div>
      </div>
    </footer>
  );
}
