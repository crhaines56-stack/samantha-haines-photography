import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Maternity & Newborn Photographer Austin TX",
  description:
    "Austin maternity and newborn photographer Samantha Haines captures the full journey — from pregnancy to those first fleeting days. Beautiful portraits in Austin TX & Steiner Ranch.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/maternity-photographer-austin",
  },
  openGraph: {
    title: "Maternity & Newborn Photographer Austin TX",
    description:
      "Austin maternity and newborn photographer Samantha Haines captures the full journey — from bump to baby. Beautiful portraits in Austin TX & Steiner Ranch.",
    url: "https://www.samanthahainesphotography.com/maternity-photographer-austin",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364379/shp/newborn/shp/newborn/hero.jpg", width: 1200, height: 630, alt: "Maternity and newborn photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maternity & Newborn Photographer Austin TX",
    description:
      "Austin maternity and newborn photographer Samantha Haines. From pregnancy to those first fleeting days.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364379/shp/newborn/shp/newborn/hero.jpg"],
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
      name: "When should I book my newborn session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha recommends booking during your second trimester. The ideal window for newborn sessions is within the first 5–14 days after birth, when babies are most sleepy and flexible. Booking early ensures your spot is reserved for your due date.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book maternity and newborn together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and most clients do. Booking both together creates a continuous story of this entire chapter of your life, from pregnancy through those first fleeting days. Samantha plans both sessions together so the images feel cohesive.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional hair and makeup are included with every maternity session — so you can focus entirely on enjoying the experience. For newborn sessions, styling guidance is provided for parents.",
      },
    },
    {
      "@type": "Question",
      name: "Can my partner, other children, and family be included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Partner and sibling frames are a beautiful addition to both maternity and newborn sessions. Samantha plans time for these within every session.",
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
      name: "How long do sessions take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both maternity and newborn sessions are designed to be relaxed and unhurried. Newborn sessions typically run 2–4 hours with time built in for feeding and settling. Maternity sessions take however long it takes to do justice to this season of your life.",
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
  ],
};

const maternityImages = [
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364384/shp/newborn/shp/newborn/gallery-1.jpg",
    alt: "Maternity photographer Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364383/shp/newborn/shp/newborn/experience.jpg",
    alt: "Pregnancy photography Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364389/shp/newborn/shp/newborn/gallery-3.jpg",
    alt: "Outdoor maternity photos Austin TX",
  },
];

const newbornImages = [
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364391/shp/newborn/shp/newborn/gallery-4.jpg",
    alt: "Newborn photographer Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364393/shp/newborn/shp/newborn/gallery-5.jpg",
    alt: "Newborn portrait session Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364395/shp/newborn/shp/newborn/gallery-6.jpg",
    alt: "Newborn photos Austin TX",
  },
];

const relatedServices = [
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
  { href: "/headshots-austin", label: "Headshots" },
];

export default function MaternityNewbornPage() {
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
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364379/shp/newborn/shp/newborn/hero.jpg"
              alt="Maternity and newborn photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Maternity & Newborn · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              From bump to baby.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Pregnancy is extraordinary. And those first days with your newborn — the weight of them, the smell, the way they curl into you — are here for only the briefest window. Both deserve to be documented beautifully.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
            <p className="font-sans text-[11px] text-[#c9b99a] tracking-wider mt-5 uppercase">
              Now booking April &amp; May sessions
            </p>
          </div>
        </section>

        {/* Happiness Guarantee */}
        <HappinessGuarantee />

        {/* Happiness Guarantee */}
        <HappinessGuarantee />

        {/* </section>

        {/* Maternity Section */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364383/shp/newborn/shp/newborn/experience.jpg"
                alt="Maternity session experience Austin TX"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                Maternity
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                Celebrated. Seen. Extraordinary.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha approaches maternity sessions as a celebration of who you are right now — the strength, the tenderness, the anticipation. She guides you through every moment so your only job is to arrive and breathe it in.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                Wardrobe is thoughtfully planned. Hair and makeup are included. Partners and older children are welcomed. The result is a collection of images that will remind you, years from now, of exactly how powerful and beautiful you were in this season.
              </p>
            </div>
          </div>
        </section>

        {/* Maternity Gallery */}
        <section className="py-16 px-6 bg-[#f5f0ea]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Maternity
              </p>
              <h2 className="font-serif text-4xl text-[#1a1a1a]">
                A season worth remembering.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {maternityImages.map((img, i) => (
                <div key={i} className="relative h-80 overflow-hidden">
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

        {/* Newborn Section */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                Newborn
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                Gentle. Unhurried. Yours.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha creates a calm, warm environment where your baby is always safe, always comfortable, and always the priority. There&rsquo;s no rush — sessions are built around your baby&rsquo;s needs, with time for feeding, settling, and those in-between moments that become the most treasured images.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                Siblings and parents are welcomed. These are family portraits as much as they are newborn portraits — the beginning of a story that will span a lifetime.
              </p>
            </div>
            <div className="relative h-[550px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364393/shp/newborn/shp/newborn/gallery-5.jpg"
                alt="Newborn session experience Austin TX"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Newborn Gallery */}
        <section className="py-16 px-6 bg-[#f5f0ea]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Newborn
              </p>
              <h2 className="font-serif text-4xl text-[#1a1a1a]">
                The smallest moments. The biggest love.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {newbornImages.map((img, i) => (
                <div key={i} className="relative h-80 overflow-hidden">
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

        {/* Book Together CTA */}
        <section className="py-20 px-6 bg-[#1a1a1a]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              Document the Full Chapter
            </p>
            <h2 className="font-serif text-5xl text-[#faf9f7] mb-6 italic leading-tight">
              Most clients book both together.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              When you book maternity and newborn sessions together, Samantha plans them as one continuous story — cohesive, intentional, and complete. From the final weeks of pregnancy to those first fleeting days.
            </p>
            <CTAButton size="lg" variant="secondary">
              Start the Conversation
            </CTAButton>
          </div>
        </section>

        {/* What's Always Included */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Every Session
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
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
                  <p className="text-[#8b6f5e] text-xl mb-4">{item.icon}</p>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">{item.title}</h3>
                  <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
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
                    "We couldn't believe how calm and patient Samantha was. Our baby was fussy the whole time and somehow she still got the most beautiful, peaceful images we've ever seen.",
                  label: "Newborn Client",
                },
              ].map((t, i) => (
                <div key={i} className="p-8 bg-[#faf9f7]">
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
        <section className="py-24 px-6 bg-[#faf9f7]">
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

        {/* Final CTA */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              This Season Won&rsquo;t Come Again
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              You deserve to be beautifully seen.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. Samantha recommends booking during your second trimester to secure your spot for both sessions.
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
