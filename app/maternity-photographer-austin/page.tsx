import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Maternity Photographer Austin TX | Samantha Haines Photography",
  description:
    "Austin maternity photographer Samantha Haines captures your power, softness, and everything you are during pregnancy. Beautiful maternity portraits in Austin TX & Steiner Ranch.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/maternity-photographer-austin",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the best time for maternity photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal window for maternity portraits is between 28–36 weeks — when the bump is beautifully full but you're still comfortable and mobile. Samantha will help you find the perfect timing during your consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear for my maternity session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha provides a full wardrobe and styling guide before your session. She has a curated collection of gowns, wraps, and pieces designed to photograph beautifully and celebrate the pregnant form.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional hair and makeup are included with every maternity session — so you can focus entirely on enjoying the experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can my partner and other children be included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Partner and sibling frames are a beautiful addition to maternity sessions. Samantha plans time for these within every session.",
      },
    },
    {
      "@type": "Question",
      name: "Where are maternity sessions held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are held at outdoor locations throughout Austin or in Samantha's private studio — depending on your vision. Location is discussed and chosen during your consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be in shape or look a certain way for maternity photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. These sessions are about celebrating exactly who you are right now — the power, the softness, the strength of pregnancy at every size and stage. Samantha photographs every woman beautifully.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pair maternity and newborn sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Samantha offers maternity and newborn sessions that tell a continuous story. Booking both together creates a beautiful documentation of this entire chapter.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a maternity session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maternity sessions are designed to be relaxed and unhurried. Samantha builds in time for multiple looks, locations, and moments — however long it takes to do justice to this season of your life.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=80",
    alt: "Maternity photographer Austin TX",
  },
  {
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
    alt: "Maternity portrait session Austin",
  },
  {
    src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
    alt: "Pregnancy photography Austin Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
    alt: "Outdoor maternity photos Austin TX",
  },
  {
    src: "https://images.unsplash.com/photo-1536015640197-b53f9f6fd8e3?w=800&q=80",
    alt: "Maternity photography golden hour Austin",
  },
  {
    src: "https://images.unsplash.com/photo-1510474071012-67b0a0a4da70?w=800&q=80",
    alt: "Maternity portraits Steiner Ranch Austin",
  },
];

const relatedServices = [
  { href: "/newborn-photographer-austin", label: "Newborn" },
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
];

export default function MaternityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-screen flex items-end pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1800&q=80"
              alt="Maternity photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Maternity · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              Power. Softness. Everything you are.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Pregnancy is one of the most extraordinary seasons of your life.
              It deserves to be documented with the same artistry and intention as everything else you are.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px]">
              <Image
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80"
                alt="Maternity session experience Austin TX"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                The Experience
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                Celebrated. Seen. Extraordinary.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha approaches maternity sessions with the same reverence she brings to
                every session — as a celebration of who you are, not just how you look.
                The strength, the tenderness, the anticipation — all of it is worth capturing.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                She guides you through every moment, every pose, every frame — so your
                only job is to arrive and breathe it in. Wardrobe is thoughtfully planned.
                Hair and makeup are included. Partners and older children are welcomed.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                The result is a collection of images that will remind you, years from now,
                of exactly how powerful and beautiful you were in this season.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                The Work
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
                A season worth remembering.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Always Included */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-4">
                Every Session
              </p>
              <h2 className="font-serif text-5xl text-[#faf9f7]">
                What&rsquo;s always included.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: "✦",
                  title: "Hair & Makeup",
                  desc: "Professional styling so you arrive feeling as radiant as you are.",
                },
                {
                  icon: "✦",
                  title: "Consultation",
                  desc: "A pre-shoot conversation to plan timing, wardrobe, location, and everything in between.",
                },
                {
                  icon: "✦",
                  title: "Direction",
                  desc: "Samantha guides every moment — so you can relax into the experience.",
                },
                {
                  icon: "✦",
                  title: "Wall Art Install",
                  desc: "White-glove assistance bringing your finished portraits home.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-[#c9b99a] text-xl mb-4">{item.icon}</p>
                  <h3 className="font-serif text-xl text-[#faf9f7] mb-3">{item.title}</h3>
                  <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Happiness Guarantee */}
        <HappinessGuarantee />

        {/* Testimonials */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Client Stories
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">What they say.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "I was nervous about how I'd look — I didn't feel like myself at 32 weeks. But Samantha saw something I couldn't see yet. The images took my breath away.",
                  label: "Maternity Client",
                },
                {
                  quote:
                    "These photos are some of the most treasured things I own. Samantha captured this season of life in a way I'll look back on forever with complete gratitude.",
                  label: "Maternity Client",
                },
              ].map((t, i) => (
                <div key={i} className="p-8 bg-[#f5f0ea]">
                  <p className="font-serif text-xl text-[#1a1a1a] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-sans text-[12px] tracking-widest uppercase text-[#8b6f5e]">
                    {t.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Your Questions
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
                Everything you want to know.
              </h2>
            </div>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-[#c9b99a]/30 pb-8">
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">{faq.name}</h3>
                  <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              This Season Won&rsquo;t Come Again
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              You deserve to be beautifully seen.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. Reach out today and let&rsquo;s
              plan something extraordinary for this extraordinary season.
            </p>
            <CTAButton size="lg" variant="secondary">
              Start the Conversation
            </CTAButton>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-10">
              More From Samantha
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="font-sans text-[11px] tracking-[0.2em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 hover:bg-[#1a1a1a] hover:text-[#faf9f7] transition-all duration-300"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
