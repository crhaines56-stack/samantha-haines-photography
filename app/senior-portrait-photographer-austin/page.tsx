import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Senior Portrait Photographer Austin TX | Samantha Haines Photography",
  description:
    "Austin senior portrait photographer Samantha Haines captures the chapter worth remembering. Stunning, editorial senior portraits that go far beyond the ordinary. Serving Austin TX & surrounding areas.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/senior-portrait-photographer-austin",
  },
  openGraph: {
    title: "Senior Portrait Photographer Austin TX",
    description:
      "Austin senior portrait photographer Samantha Haines captures the chapter worth remembering. Stunning, editorial senior portraits that go far beyond the ordinary.",
    url: "https://www.samanthahainesphotography.com/senior-portrait-photographer-austin",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364303/shp/senior/shp/senior/hero.jpg", width: 1200, height: 630, alt: "Senior portrait photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Portrait Photographer Austin TX",
    description:
      "Austin senior portrait photographer Samantha Haines captures the chapter worth remembering.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364303/shp/senior/shp/senior/hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should we book a senior portrait session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha recommends booking your senior portrait session in the spring or fall semester of your senior year. Popular dates fill quickly — the earlier you connect, the more flexibility you'll have.",
      },
    },
    {
      "@type": "Question",
      name: "How many outfits can we bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha encourages multiple outfit changes — each one creates a different mood, a different story. The exact number is discussed during your pre-shoot consultation based on your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional hair and makeup are included with every senior portrait session. You show up and Samantha's team takes care of the rest.",
      },
    },
    {
      "@type": "Question",
      name: "Can we include sports, hobbies, or interests in the session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. These sessions are about who you are right now — your interests, your personality, your passions. Samantha works with you to incorporate what makes your story uniquely yours.",
      },
    },
    {
      "@type": "Question",
      name: "Where are senior portrait sessions held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions can be held at outdoor locations throughout Austin — parks, urban settings, natural landscapes — or in Samantha's studio. The location is chosen during your consultation to match your vision.",
      },
    },
    {
      "@type": "Question",
      name: "Do the images work for yearbook submissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Samantha is familiar with yearbook requirements and can provide images formatted for submission. Details are confirmed during your consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Samantha's senior portraits different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha approaches every senior session as an editorial shoot — not a standard school photo. The result is imagery that captures who you truly are at this moment in time: beautiful, layered, and completely yours.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents be involved in the session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course. Samantha welcomes parent involvement and often includes a few family frames within the senior session as a beautiful keepsake of this chapter.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364310/shp/senior/shp/senior/gallery-1.jpg",
    alt: "Senior portrait photographer Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364306/shp/senior/shp/senior/experience.jpg",
    alt: "High school senior portraits Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364325/shp/senior/shp/senior/gallery-3.jpg",
    alt: "Senior portrait session Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364330/shp/senior/shp/senior/gallery-4.jpg",
    alt: "Outdoor senior portraits Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364334/shp/senior/shp/senior/gallery-5.jpg",
    alt: "Editorial senior portraits Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364338/shp/senior/shp/senior/gallery-6.jpg",
    alt: "Senior portrait photography Steiner Ranch Austin",
  },
];

const relatedServices = [
  { href: "/family-photographer-austin", label: "Family" },
  { href: "/boudoir-photographer-austin", label: "Boudoir" },
  { href: "/headshots-branding-photographer-austin", label: "Headshots & Branding" },
];

export default function SeniorPortraitPage() {
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
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364303/shp/senior/shp/senior/hero.jpg"
              alt="Senior portrait photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-55"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Senior Portraits · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              The chapter worth remembering.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Your senior year is unlike any other. These portraits should be too —
              editorial, emotional, and entirely about who you are right now.
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

        {/* The Experience */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364306/shp/senior/shp/senior/experience.jpg"
                alt="Senior portrait experience Austin TX"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                The Experience
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight mb-8 italic">
                Not your school photo.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha treats every senior portrait session like an editorial shoot — built
                around your personality, your passions, and the version of yourself you want
                to remember.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Multiple outfits, locations, and moods. Hair and makeup included. And Samantha
                directing every moment so you can relax and simply be yourself — beautifully
                captured in the process.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                The result is a gallery of images that show who you truly are at this moment
                in time. Art worth hanging, sharing, and carrying forward.
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
                Editorial. Personal. Yours.
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
                  desc: "Professional styling included so you show up ready and confident.",
                },
                {
                  icon: "✦",
                  title: "Consultation",
                  desc: "A pre-shoot consultation to plan outfits, locations, and your vision.",
                },
                {
                  icon: "✦",
                  title: "Direction",
                  desc: "Samantha guides every pose and expression — you just have to show up.",
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
                    "The attention to detail, the experience, the final images — everything exceeded every expectation I had. These aren't just senior photos — they're art.",
                  label: "Senior Portrait Client",
                },
                {
                  quote:
                    "Samantha made the whole session feel fun and relaxed. I was nervous going in and left feeling like myself. The photos are genuinely stunning.",
                  label: "Senior Portrait Client",
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
              This Moment Won&rsquo;t Wait
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Let&rsquo;s capture who you are.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. Tell Samantha your vision — and
              together you&rsquo;ll create portraits worth carrying into the next chapter.
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
