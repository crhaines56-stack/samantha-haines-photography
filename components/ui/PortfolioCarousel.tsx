'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function PortfolioCarousel({
  images,
  category,
}: {
  images: CarouselImage[];
  category: string;
  label: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    const startX = e.pageX - el.offsetLeft;
    const scrollLeft = el.scrollLeft;

    const onMove = (ev: MouseEvent) => {
      const x = ev.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="mb-10 px-6 max-w-7xl mx-auto flex items-end justify-between">
        <div>
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-3">
            More Work
          </p>
          <h2 className="font-serif text-4xl text-[#faf9f7] italic">More from Samantha.</h2>
        </div>
      </div>

      {/* Scroll hint */}
      <p className="px-6 mb-4 font-sans text-[11px] text-[#6b6b6b] tracking-widest">← Swipe to see more →</p>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-6 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        onMouseDown={handleMouseDown}
      >
        {images.map((img, i) => {
          const isPortrait = (img.height ?? 3) > (img.width ?? 2);
          return (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden"
              style={{
                height: '420px',
                width: isPortrait ? '280px' : '560px',
                scrollSnapAlign: 'start',
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-[50%_25%] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          );
        })}

        </div>

      {/* Always-visible portfolio link */}
      <div className="px-6 mt-8 text-center">
        <Link
          href={`/gallery/${category}`}
          className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase border border-[#c9b99a] text-[#c9b99a] px-8 py-3 hover:bg-[#c9b99a] hover:text-[#0f0f0f] transition-all duration-300"
        >
          See Full Portfolio →
        </Link>
      </div>
    </section>
  );
}
