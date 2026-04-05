import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Headshots & Branding Photographer Austin TX | Samantha Haines Photography",
  description:
    "Austin headshots and personal branding photographer Samantha Haines. The image that precedes you in every room — compelling, polished, and completely yours. Serving Austin TX businesses.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/headshots-branding-photographer-austin",
  },
  openGraph: {
    title: "Headshots & Branding Photographer Austin TX",
    description:
      "Austin headshots and personal branding photographer Samantha Haines. The image that precedes you in every room — compelling, polished, and completely yours.",
    url: "https://www.samanthahainesphotography.com/headshots-branding-photographer-austin",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364413/shp/headshots/shp/headshots/hero.jpg", width: 1200, height: 630, alt: "Headshots and branding photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Headshots & Branding Photographer Austin TX",
    description:
      "Austin headshots and personal branding photographer Samantha Haines. The image that precedes you in every room.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364413/shp/headshots/shp/headshots/hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between headshots and personal branding photography?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A headshot is a single, polished portrait — typically used for LinkedIn, websites, and directories. Personal branding photography is a broader collection that tells the full story of who you are and what you do: your workspace, your process, your personality. Samantha offers both, and often combines them for a complete package.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional hair and makeup are included with every headshot and branding session — so you arrive and immediately look and feel your best.",
      },
    },
    {
      "@type": "Question",
      name: "How many outfits should I bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha recommends 2–4 outfits for a full branding session — each creating a different tone and use case. Wardrobe guidance is provided during your pre-shoot consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Where are headshot sessions held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions can be held at Samantha's private studio, your office or workspace, or at curated Austin locations that reflect your brand. The location is chosen during your consultation to match your vision.",
      },
    },
    {
      "@type": "Question",
      name: "Can you photograph our entire team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Samantha works with teams of all sizes to create cohesive, professional headshots that elevate the brand across the board. Team sessions are discussed and planned individually.",
      },
    },
    {
      "@type": "Question",
      name: "How are the images delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your final gallery is delivered as high-resolution digital files optimized for web and print. Samantha can also advise on sizing and formatting for specific platforms — LinkedIn, websites, speaking bios, and more.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha works with professionals across industries — from executives and entrepreneurs to real estate agents, attorneys, coaches, creatives, and beyond. If you have a brand to communicate, she can capture it.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need professional experience posing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Samantha's background in marketing and visual storytelling means she knows exactly how to guide you into poses that feel natural, powerful, and completely authentic to who you are.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364416/shp/headshots/shp/headshots/gallery-1.jpg",
    alt: "Headshots photographer Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364417/shp/headshots/shp/headshots/gallery-2.jpg",
    alt: "Professional headshots Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364415/shp/headshots/shp/headshots/experience.jpg",
    alt: "Personal branding photography Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364421/shp/headshots/shp/headshots/gallery-4.jpg",
    alt: "Business headshots Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364424/shp/headshots/shp/headshots/gallery-5.jpg",
    alt: "Branding photographer Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364425/shp/headshots/shp/headshots/gallery-6.jpg",
    alt: "Executive headshots Austin Texas",
  },
];

const relatedServices = [
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/senior-portrait-photographer-austin", label: "Senior Portraits" },
];

export default function HeadshotsPage() {
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
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364413/shp/headshots/shp/headshots/hero.jpg"
              alt="Headshots and branding photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Headshots & Branding · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              The image that precedes you in every room.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Your headshot is often the first impression you make. It should be
              compelling, confident, and completely authentic to who you are.
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
                Your story, before you say a word.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha approaches headshots and personal branding with the same
                storytelling instinct she brings to every session. She&rsquo;s not
                photographing a face — she&rsquo;s photographing a professional, a
                personality, a brand.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                With a background in digital marketing and visual strategy, she understands
                what imagery needs to communicate — and how to create it. The result is
                headshots that don&rsquo;t just look polished. They feel right.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                Hair and makeup are included. Wardrobe guidance is provided. And Samantha
                creates a relaxed, comfortable environment so your authentic self can
                shine through every single frame.
              </p>
            </div>
            <div className="relative h-[550px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364415/shp/headshots/shp/headshots/experience.jpg"
                alt="Headshots session experience Austin TX"
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
                Confident. Compelling. Completely yours.
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
                  desc: "Professional styling so you show up looking as impressive as your work.",
                },
                {
                  icon: "✦",
                  title: "Consultation",
                  desc: "A pre-shoot strategy session to align on look, feel, location, and goals.",
                },
                {
                  icon: "✦",
                  title: "Direction",
                  desc: "Samantha guides every expression and pose — naturally and authentically.",
                },
                {
                  icon: "✦",
                  title: "Wall Art Install",
                  desc: "White-glove installation for any large-format pieces for your office or home.",
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
                    "The resulting headshots and branding imagery exceeded my expectations and perfectly conveyed the narrative I wanted for my business. She has a gift for creating a comfortable and relaxed environment. Her personable approach combined with her expertise makes her an absolute pleasure to work with.",
                  label: "Branding Client",
                },
                {
                  quote:
                    "I've had professional photos taken before and never felt like they truly looked like me. Samantha changed that. These headshots look like me on my best day — and I use them everywhere.",
                  label: "Headshots Client",
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
              Elevate Your Image
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Make the impression you deserve.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. Tell Samantha about your brand,
              your goals, your vision — and together you&rsquo;ll create imagery that
              works as hard as you do.
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
