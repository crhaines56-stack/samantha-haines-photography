import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Newborn Photographer Austin TX",
  description:
    "Austin newborn photographer Samantha Haines captures the days that feel like forever and a flash. Gentle, beautiful newborn portraits in Austin TX, Steiner Ranch & surrounding areas.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/newborn-photographer-austin",
  },
  openGraph: {
    title: "Newborn Photographer Austin TX",
    description:
      "Austin newborn photographer Samantha Haines captures the days that feel like forever and a flash. Gentle, beautiful newborn portraits in Austin TX & Steiner Ranch.",
    url: "https://www.samanthahainesphotography.com/newborn-photographer-austin",
    images: [{ url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80", width: 1200, height: 630, alt: "Newborn photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newborn Photographer Austin TX",
    description:
      "Austin newborn photographer Samantha Haines captures the days that feel like forever and a flash.",
    images: ["https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I book my newborn session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha recommends booking during your second trimester. The ideal window for newborn sessions is within the first 5–14 days after birth, when babies are most sleepy and flexible. Booking early ensures your spot is reserved for your due date.",
      },
    },
    {
      "@type": "Question",
      name: "What if my baby doesn't sleep during the session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha is infinitely patient. Sessions are unhurried — she'll take the time needed for feeding, soothing, and settling. Awake babies often produce beautiful, wide-eyed portraits too.",
      },
    },
    {
      "@type": "Question",
      name: "Is the studio safe and warm for my newborn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Samantha keeps the studio warm, clean, and calm. Every prop and wrap is sanitized. Your baby's comfort and safety are the highest priority throughout the entire session.",
      },
    },
    {
      "@type": "Question",
      name: "Can siblings and parents be included in the session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — family frames with siblings and parents are a beautiful part of the newborn session. Samantha plans time for these within every session.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to the newborn session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring everything you need for baby — diapers, extra clothes, feeding supplies. Samantha provides all wraps, props, and setup. She'll send a detailed guide before your session.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a newborn session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newborn sessions are designed to take as long as they need to. There's no rush. Sessions typically run 2–4 hours, with time built in for feeding and settling.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to bring specific colors or outfits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha provides a wardrobe and styling guide before your session. She has an extensive collection of wraps, hats, and props — and will help you coordinate any family outfits to complement the session beautifully.",
      },
    },
    {
      "@type": "Question",
      name: "What if my baby arrives early or late?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Life with a newborn is unpredictable — Samantha understands completely. She works with families to adjust timing as needed and accommodates early or late arrivals with as much flexibility as possible.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
    alt: "Newborn photographer Austin TX",
  },
  {
    src: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",
    alt: "Newborn portrait session Austin",
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    alt: "Baby photography Austin Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    alt: "Newborn photos Austin TX",
  },
  {
    src: "https://images.unsplash.com/photo-1576072113660-f869c453df7d?w=800&q=80",
    alt: "Newborn photography Steiner Ranch Austin",
  },
  {
    src: "https://images.unsplash.com/photo-1574070555740-3d3e1b2ab0e6?w=800&q=80",
    alt: "Family newborn session Austin Texas",
  },
];

const relatedServices = [
  { href: "/maternity-photographer-austin", label: "Maternity" },
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
];

export default function NewbornPage() {
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
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1800&q=80"
              alt="Newborn photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Newborn · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              The days that feel like forever and a flash.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              The weight of them. The smell. The way they curl into you. These moments
              are here for only the briefest window — and they deserve to be preserved
              beautifully.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                The Experience
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                Gentle. Unhurried. Yours.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha understands that a newborn session is one of the most intimate
                experiences a family can have. She creates a calm, warm environment where
                your baby is always safe, always comfortable, and always the priority.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                There&rsquo;s no rush. Sessions are built around your baby&rsquo;s needs —
                with time for feeding, settling, and those in-between moments that become
                some of the most treasured images.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                Siblings and parents are welcomed into the session. These are family
                portraits as much as they are newborn portraits — the beginning of a story
                that will span a lifetime.
              </p>
            </div>
            <div className="relative h-[550px]">
              <Image
                src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80"
                alt="Newborn session experience Austin TX"
                fill
                className="object-cover"
              />
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
                The smallest moments. The biggest love.
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
                  desc: "Professional styling for parents so you feel wonderful in every frame.",
                },
                {
                  icon: "✦",
                  title: "Consultation",
                  desc: "A pre-session conversation to plan every detail — props, wraps, family frames.",
                },
                {
                  icon: "✦",
                  title: "Direction",
                  desc: "Samantha guides every moment — all you need to do is hold your baby.",
                },
                {
                  icon: "✦",
                  title: "Wall Art Install",
                  desc: "White-glove assistance bringing your finished portraits into your home.",
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
                    "We couldn't believe how calm and patient Samantha was. Our baby was fussy the whole time and somehow she still got the most beautiful, peaceful images we've ever seen.",
                  label: "Newborn Client",
                },
                {
                  quote:
                    "Booking our newborn session with Samantha is one of the best decisions we made as new parents. These photos already feel like heirlooms.",
                  label: "Newborn Client",
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
              Book Early
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              This window is brief. Don&rsquo;t miss it.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Samantha recommends booking during your second trimester to secure your
              spot. Every session starts with a conversation — reach out today.
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
