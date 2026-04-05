import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Newborn Photographer Austin TX | Samantha Haines Photography",
  description:
    "Austin newborn photographer Samantha Haines captures the first fleeting days with gentle, safe, stunning portraits. Studio sessions in Austin TX & Steiner Ranch. Hair & makeup included for parents.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/newborn-photographer-austin",
  },
  openGraph: {
    title: "Newborn Photographer Austin TX | Samantha Haines Photography",
    description:
      "Austin newborn photographer capturing the first fleeting days of life. Safe, gentle, stunning studio sessions in Austin TX.",
    url: "https://www.samanthahainesphotography.com/newborn-photographer-austin",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364379/shp/newborn/shp/newborn/hero.jpg", width: 1200, height: 630, alt: "Newborn photographer Austin TX — Samantha Haines Photography" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newborn Photographer Austin TX | Samantha Haines Photography",
    description: "Austin newborn photographer capturing the first fleeting days of life.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364379/shp/newborn/shp/newborn/hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I book my Austin newborn session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book during your second trimester — ideally between weeks 20 and 28. Newborn sessions should happen within the first 5 to 14 days after birth, when babies are most sleepy and poseable. Booking early guarantees your spot is held for your due date window.",
      },
    },
    {
      "@type": "Question",
      name: "Is the studio safe and warm enough for a newborn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The studio is kept warm throughout every newborn session. All props, wraps, and surfaces are sanitized before each session. Your baby's safety and comfort are the highest priority — every setup and pose is done gently and carefully.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a newborn session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newborn sessions are typically 2 to 4 hours. Time is built in for feeding, settling, soothing, and diaper changes — there's no rush. The session moves at your baby's pace entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents, siblings, and grandparents be included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Family frames are a beautiful part of every newborn session. Samantha plans time for parent portraits, sibling moments, and grandparent frames within the session. These become some of the most cherished images.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included for parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional hair and makeup is included for mothers in every newborn session. You'll arrive camera-ready so you can focus entirely on your baby and being present in these first images as a family.",
      },
    },
    {
      "@type": "Question",
      name: "What should we bring to the newborn session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring feeding supplies (bottle or breastfeeding), extra diapers, a pacifier if your baby uses one, and any meaningful items you'd like included — a family heirloom, a blanket with sentimental value, or a sibling's stuffed animal. Samantha provides all props, wraps, and backdrops.",
      },
    },
    {
      "@type": "Question",
      name: "What if my baby is fussy or won't sleep during the session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is completely normal and expected. Samantha is experienced in soothing newborns and knows how to work with their natural rhythms. Sessions are never rushed — there's always time built in for feeding, settling, and breaks. The goal is for both baby and family to feel at ease throughout.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364384/shp/newborn/shp/newborn/gallery-1.jpg",
    alt: "Newborn studio portrait Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364387/shp/newborn/shp/newborn/gallery-2.jpg",
    alt: "Newborn baby photos Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364389/shp/newborn/shp/newborn/gallery-3.jpg",
    alt: "Family newborn session Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364391/shp/newborn/shp/newborn/gallery-4.jpg",
    alt: "Newborn lifestyle photography Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364393/shp/newborn/shp/newborn/gallery-5.jpg",
    alt: "Austin newborn photographer Samantha Haines",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364395/shp/newborn/shp/newborn/gallery-6.jpg",
    alt: "Newborn and parent portraits Austin TX",
  },
];

export default function NewbornPhotographerAustinPage() {
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
              alt="Newborn photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Newborn Photography · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              The days that feel like forever and a flash.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Those first days are here for only the briefest window. The weight of them. The curl of tiny fingers. The way they fit perfectly against your chest. These are the moments worth documenting with the care and intention they deserve.
            </p>
            <CTAButton href="/contact" size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Happiness Guarantee — above the fold on scroll */}
        <HappinessGuarantee />

        {/* About the Experience */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364383/shp/newborn/shp/newborn/experience.jpg"
                alt="Newborn session experience at Vue Studio Austin TX"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                The Experience
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                Gentle. Safe. Unhurried.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Every newborn session is built around your baby's pace — not a clock. Time is planned for feeding, settling, and everything in between. There's no rush, ever.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                The studio is kept warm throughout. All props and surfaces are sanitized before every session. Samantha has spent years learning how to soothe, position, and capture newborns safely — your baby's comfort is always the first priority.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                Hair and makeup are included for mom. Partner and sibling frames are always part of the plan. And at the end of the session, you'll have images that capture exactly who your family was on one of the most significant days of your lives.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Every Session Includes
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-16 italic leading-tight">
              Everything taken care of.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { title: "Hair & Makeup for Mom", desc: "Professional styling included — you'll arrive ready and relaxed, not rushed." },
                { title: "All Props & Wraps", desc: "Samantha provides everything. Heirlooms and meaningful items are always welcome." },
                { title: "Sibling & Family Frames", desc: "Time is built in for parents, siblings, and grandparents — no extra coordination needed." },
                { title: "Expert Posing & Safety", desc: "Every position is done gently and carefully. Baby's comfort guides every moment." },
                { title: "Unhurried Pace", desc: "Sessions run as long as they need to. Feeding breaks, settling time — all accounted for." },
                { title: "Professional Editing", desc: "Every delivered image is carefully finished. Nothing leaves unpolished." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-[#c9b99a] mt-1 text-lg">✦</span>
                  <div>
                    <h3 className="font-sans text-[13px] tracking-widest uppercase text-[#1a1a1a] mb-2">{item.title}</h3>
                    <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-6 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">Gallery</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] italic">The first days.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
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

        {/* Timing Guide */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              When to Book
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#faf9f7] mb-12 italic leading-tight">
              The window is smaller than you think.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { timing: "Book at 20–28 weeks", desc: "Reserve your due date window during the second trimester. Sessions fill quickly — especially spring and fall." },
                { timing: "Session at days 5–14", desc: "The ideal newborn window. Babies are sleepiest, most flexible, and curl naturally into poses during this period." },
                { timing: "Maternity at weeks 28–36", desc: "If you want maternity portraits, these are often booked alongside the newborn session as a paired package." },
              ].map((item) => (
                <div key={item.timing} className="border-t border-[#333] pt-8">
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#c9b99a] mb-4">{item.timing}</p>
                  <p className="font-sans text-[14px] text-[#e8e4df] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <CTAButton href="/contact" variant="outline" size="lg">Reserve Your Date</CTAButton>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">Questions</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] italic">Everything you want to know.</h2>
            </div>
            <div className="space-y-12">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-[#e8e4df] pb-12">
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">{faq.name}</h3>
                  <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#f5f0ea] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">Austin, TX</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] italic mb-8 leading-tight">
              These days don't come back.
            </h2>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-10">
              Samantha personally responds to every inquiry. Sessions book quickly — especially around due dates. The conversation starts here.
            </p>
            <CTAButton href="/contact" size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 px-6 bg-[#faf9f7] border-t border-[#e8e4df]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">Also by Samantha</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/maternity-photographer-austin", label: "Maternity" },
                { href: "/family-photographer-austin", label: "Family" },
                { href: "/boudoir-photographer-austin", label: "Boudoir" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="font-sans text-[12px] tracking-[0.2em] uppercase text-[#8b6f5e] hover:text-[#1a1a1a] transition-colors border border-[#c9b99a] px-6 py-3"
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
