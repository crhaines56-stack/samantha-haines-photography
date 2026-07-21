'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: number;
  cloudinary_url: string;
  cloudinary_public_id: string;
  width: number;
  height: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PortfolioGalleryClient({
  category,
  label,
  serviceLink,
}: {
  category: string;
  label: string;
  serviceLink: string;
}) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch(`/api/portfolio/photos?category=${category}`)
      .then((r) => r.json())
      .then((data) => {
        setPhotos(shuffle(data.photos || []));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Sticky header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl text-[#faf9f7] italic">
            Samantha Haines
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href={serviceLink}
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#c9b99a] hover:text-[#faf9f7] transition-colors"
            >
              About {label}
            </Link>
            <Link
              href="/contact"
              className="font-sans text-[11px] tracking-[0.2em] uppercase bg-[#faf9f7] text-[#1a1a1a] px-5 py-2.5 hover:bg-[#c9b99a] transition-colors duration-300"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </header>

      {/* Page title */}
      <div className="pt-32 pb-12 px-6 text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-4">
          Full Portfolio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#faf9f7] italic">{label}</h1>
      </div>

      {/* Masonry grid */}
      <div className="px-4 pb-24">
        {loading ? (
          <div className="text-center py-32">
            <p className="font-sans text-[12px] tracking-widest uppercase text-[#6b6b6b]">
              Loading...
            </p>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-sans text-[12px] tracking-widest uppercase text-[#6b6b6b]">
              Photos coming soon.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 max-w-7xl mx-auto">
            {photos.map((photo) => {
              const safeWidth = photo.width > 0 ? photo.width : 3;
              const safeHeight = photo.height > 0 ? photo.height : 4;
              return (
                <div key={photo.id} className="break-inside-avoid mb-3">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: `${safeWidth}/${safeHeight}` }}
                  >
                    <Image
                      src={photo.cloudinary_url}
                      alt={`${label} photography Austin TX`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center bg-[#1a1a1a]">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
          Ready?
        </p>
        <h2 className="font-serif text-5xl text-[#faf9f7] mb-8 italic leading-tight">
          Let&rsquo;s create yours.
        </h2>
        <Link
          href="/contact"
          className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase bg-[#faf9f7] text-[#1a1a1a] px-10 py-4 hover:bg-[#c9b99a] transition-colors duration-300"
        >
          Book a Session
        </Link>
      </section>
    </div>
  );
}
