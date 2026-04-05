import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Boudoir Photographer Austin TX | Samantha Haines Photography",
  description:
    "Austin boudoir photography by Samantha Haines. A slow reveal of every facet of you — hair & makeup included, fully private, designed for every woman at every stage.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/boudoir-photographer-austin",
  },
  openGraph: {
    title: "Boudoir Photographer Austin TX",
    description:
      "Austin boudoir photography by Samantha Haines. A slow reveal of every facet of you — hair & makeup included, fully private, designed for every woman at every stage.",
    url: "https://www.samanthahainesphotography.com/boudoir-photographer-austin",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364228/shp/boudoir/shp/boudoir/hero.jpg", width: 1200, height: 630, alt: "Boudoir photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boudoir Photographer Austin TX",
    description:
      "Austin boudoir photography by Samantha Haines. Hair & makeup included, fully private.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364228/shp/boudoir/shp/boudoir/hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I have to be a certain size or age to do a boudoir session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. Samantha has photographed women from their 20s to their 60s — at every size, every stage, every season of life. Every woman deserves to feel beautifully seen.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional hair and makeup are included with every boudoir session. You arrive and Samantha's team takes care of the rest.",
      },
    },
    {
      "@type": "Question",
      name: "Will my images be shared publicly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your images belong to you — completely. Nothing is shared without your explicit permission, ever. What happens in your session stays exactly where it belongs: with you.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to my boudoir session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha provides wardrobe guidance during your consultation so you know exactly what to bring. She'll walk you through outfit options, styling tips, and everything you need to feel prepared and confident.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a boudoir session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are unhurried. You'll have time for multiple outfits, multiple moods, and multiple moments. The goal is a complete, layered collection — not a rushed shoot.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the session held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boudoir sessions are held at Samantha's private studio in Austin, TX. The environment is comfortable, welcoming, and completely private.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm nervous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's completely normal — most women are. Samantha guides you through every single moment. Your only job is to show up. She handles the rest.",
      },
    },
    {
      "@type": "Question",
      name: "What do I receive after my session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After your session, you'll receive a curated gallery of beautifully edited images. These are pieces of art — made to live on your walls and remind you, on any given day, exactly how extraordinary you are.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364251/shp/boudoir/shp/boudoir/gallery-1.jpg",
    alt: "Boudoir photography Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364241/shp/boudoir/shp/boudoir/experience.jpg",
    alt: "Elegant boudoir portrait Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364267/shp/boudoir/shp/boudoir/gallery-3.jpg",
    alt: "Artistic boudoir session Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364286/shp/boudoir/shp/boudoir/gallery-4.jpg",
    alt: "Intimate portrait photography Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364293/shp/boudoir/shp/boudoir/gallery-5.jpg",
    alt: "Boudoir photography Steiner Ranch Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364299/shp/boudoir/shp/boudoir/gallery-6.jpg",
    alt: "Empowerment portrait session Austin TX",
  },
];

const relatedServices = [
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/senior-portrait-photographer-austin", label: "Senior Portraits" },
  { href: "/headshots-branding-photographer-austin", label: "Headshots & Branding" },
];

export default function BoudoirPage() {
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
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364228/shp/boudoir/shp/boudoir/hero.jpg"
              alt="Boudoir photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Boudoir · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              How do you capture all the facets of you?
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              A session with Samantha is a slow reveal — different outfits, different moods,
              every side of who you are. The result is a collection of images that&rsquo;s as
              layered and complex as you are.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Hook */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed italic">
              &ldquo;Most women who book a boudoir session will tell you the same thing afterward:
              &lsquo;I almost didn&rsquo;t do it.&rsquo; They weren&rsquo;t sure they were ready.
              They weren&rsquo;t sure they were the right size, age, or type. They weren&rsquo;t
              sure what to expect walking through the door. And then they saw their photos.&rdquo;
            </p>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                The Experience
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                A slow reveal.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                You&rsquo;ll arrive as one version of yourself — and through different outfits,
                different moods, and different moments, the full range of who you are gets to
                exist in front of the lens.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Every session is different because every woman is different. Whether you want
                stunning and artistic, sensual and confident, or something entirely your own —
                Samantha works with you to create exactly that. There is no formula. There is
                no judgment. There is only you, beautifully seen.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                Hair and makeup are included. Wardrobe guidance is included. And Samantha
                guides you through every single moment — so your only job is to show up.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364241/shp/boudoir/shp/boudoir/experience.jpg"
                alt="Boudoir session experience Austin TX"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                The Work
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
                Every woman. Beautifully seen.
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
                  desc: "Professional styling before every session — arrive and let the team take care of you.",
                },
                {
                  icon: "✦",
                  title: "Consultation",
                  desc: "A pre-session conversation to plan outfits, mood, and every detail that matters to you.",
                },
                {
                  icon: "✦",
                  title: "Direction",
                  desc: "Samantha guides every moment. You don't need to know how to pose — that's her job.",
                },
                {
                  icon: "✦",
                  title: "Wall Art Install",
                  desc: "White-glove assistance bringing your finished pieces to life in your home.",
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

        {/* Privacy */}
        <section className="py-20 px-6 bg-[#f5f0ea]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Your Privacy
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed italic">
              &ldquo;Your images belong to you — completely. Nothing is shared without your
              explicit permission, ever. What happens in your session stays exactly where it
              belongs: with you.&rdquo;
            </p>
          </div>
        </section>

        {/* Happiness Guarantee */}
        <HappinessGuarantee />

        {/* Inclusivity */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed italic mb-8">
              &ldquo;Samantha has photographed women from their 20s to their 60s — at every size,
              every stage, every season of life. The one thing they all have in common is that
              they left feeling more like themselves than they did walking in.&rdquo;
            </p>
          </div>
        </section>

        {/* Art Section */}
        <section className="py-20 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-serif text-3xl md:text-4xl text-[#faf9f7] leading-relaxed italic">
              &ldquo;These aren&rsquo;t snapshots. They&rsquo;re pieces of art — made to live on
              your walls and remind you, on any given day, exactly how extraordinary you are.&rdquo;
            </p>
            <p className="font-sans text-[14px] text-[#8b6f5e] tracking-widest mt-8">— Samantha</p>
          </div>
        </section>

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
                    "I almost didn't book. Now I tell every woman I know — do it. You will not regret a single moment.",
                  label: "Boudoir Client",
                },
                {
                  quote:
                    "I walked in nervous and walked out feeling like the most beautiful, powerful version of myself. Samantha has a rare gift.",
                  label: "Boudoir Client",
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
              You&rsquo;re Ready
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Let&rsquo;s begin.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. There&rsquo;s no pressure, no
              obligation — just Samantha, and you, talking about what this could look like.
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
