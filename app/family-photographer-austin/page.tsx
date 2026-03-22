import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Family Photographer Austin TX",
  description:
    "Austin family photographer Samantha Haines captures this version of your family right now — genuine connection, real moments, and images you'll treasure forever. Serving Steiner Ranch & Austin TX.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/family-photographer-austin",
  },
  openGraph: {
    title: "Family Photographer Austin TX",
    description:
      "Austin family photographer Samantha Haines captures this version of your family right now — genuine connection, real moments, and images you'll treasure forever.",
    url: "https://www.samanthahainesphotography.com/family-photographer-austin",
    images: [{ url: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1200&q=80", width: 1200, height: 630, alt: "Family photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Photographer Austin TX",
    description:
      "Austin family photographer Samantha Haines captures genuine connection and real moments. Serving Steiner Ranch & Austin TX.",
    images: ["https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1200&q=80"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best time for a family photo session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha schedules sessions during golden hour — the hour after sunrise or the hour before sunset — for the most beautiful, flattering light. She'll work with your family's schedule to find the perfect time.",
      },
    },
    {
      "@type": "Question",
      name: "What should we wear to our family session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha provides wardrobe guidance during your pre-shoot consultation. Generally, coordinating tones (not matching) photograph beautifully. She'll help you plan outfits that feel like your family and photograph like art.",
      },
    },
    {
      "@type": "Question",
      name: "What if our kids don't cooperate during the session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha comes prepared — with patience, treats, playlists, and the experience to draw genuine moments from even the most unpredictable little ones. Some of the most beautiful family photos happen in the candid, unscripted moments.",
      },
    },
    {
      "@type": "Question",
      name: "Where do you photograph families in Austin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha photographs families throughout Austin and surrounding areas including Steiner Ranch, Westlake, Cedar Park, Lakeway, and beyond. Location is discussed during your consultation to find the spot that feels most like you.",
      },
    },
    {
      "@type": "Question",
      name: "How long is a family session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are designed with room to breathe — enough time for everyone to settle in, play, connect, and let the real moments emerge. No rushed, stiff posing. Just your family being yourselves.",
      },
    },
    {
      "@type": "Question",
      name: "Is hair and makeup included for family sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — professional hair and makeup are available for parents in family sessions. Details are discussed during your consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How soon after our session will we see our images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your gallery will be delivered within the timeframe discussed during your consultation. Every image is carefully edited to reflect the beauty and emotion of your session.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer wall art installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Samantha offers white-glove wall art installation assistance to help bring your finished pieces to life in your home exactly as you envisioned.",
      },
    },
  ],
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80",
    alt: "Family photography Austin TX",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    alt: "Austin family portrait session",
  },
  {
    src: "https://images.unsplash.com/photo-1542315192-1f61a1792f33?w=800&q=80",
    alt: "Outdoor family photos Austin Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1604931374888-9d8c3b8e5b4a?w=800&q=80",
    alt: "Family session Steiner Ranch Austin",
  },
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cfeaa0?w=800&q=80",
    alt: "Candid family portraits Austin TX",
  },
  {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    alt: "Family photography golden hour Austin",
  },
];

const relatedServices = [
  { href: "/newborn-photographer-austin", label: "Newborn" },
  { href: "/maternity-photographer-austin", label: "Maternity" },
  { href: "/senior-portrait-photographer-austin", label: "Senior Portraits" },
];

export default function FamilyPage() {
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
              src="https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1800&q=80"
              alt="Family photographer Austin TX — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-55"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Family · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              This version of your family, right now.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              They won&rsquo;t be this age again. These moments, this chaos, this love —
              it deserves to be documented beautifully, exactly as it is.
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
                Laid-back. Real. Extraordinary.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                Samantha doesn&rsquo;t want you to stand in a line and say cheese. She wants to
                capture your family the way you actually are — laughing, running, holding on
                to each other, and being completely yourselves.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                She arrives prepared — with treats for the kids, a playlist, and the patience
                to let moments unfold naturally. The result is imagery that feels alive, not
                posed. Connection, not performance.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                These photos will hang on your walls. They&rsquo;ll be passed down. They&rsquo;ll
                matter for a long time. Samantha photographs them accordingly.
              </p>
            </div>
            <div className="relative h-[550px]">
              <Image
                src="https://images.unsplash.com/photo-1542315192-1f61a1792f33?w=800&q=80"
                alt="Family session experience Austin TX"
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
                Every family has a story worth telling.
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
                  desc: "Complimentary professional styling so you show up feeling your best.",
                },
                {
                  icon: "✦",
                  title: "Consultation",
                  desc: "A pre-shoot conversation to plan location, outfits, timing, and every detail.",
                },
                {
                  icon: "✦",
                  title: "Direction",
                  desc: "Samantha guides every moment — so your family can just be your family.",
                },
                {
                  icon: "✦",
                  title: "Wall Art Install",
                  desc: "White-glove assistance bringing your finished pieces home.",
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "We were blessed to have Samantha take our family pictures recently, and the final product was beyond our expectations! One word… ecstatic! Samantha has a vision and executes that vision to perfection. She has that eye for photography that even on a cloudy, dreary day she can find the magic!!!",
                  label: "Family Client",
                },
                {
                  quote:
                    "Samantha was amazing from start to finish with our family pictures. She came to the shoot very prepared and chose the perfect time with the best lighting. Samantha was also fabulous with our kids and grabbing great candid shots even when they were being difficult. I have her photos already framed on our wall.",
                  label: "Family Client",
                },
                {
                  quote:
                    "Our session was laid-back and fun while remaining extremely professional. We have had photos done with numerous photographers, but the entire experience with Samantha was really something special. She came prepared with her gear, treats for the kids, and a speaker with a playlist.",
                  label: "Family Client",
                },
              ].map((t, i) => (
                <div key={i} className="p-8 bg-[#f5f0ea]">
                  <p className="font-serif text-lg text-[#1a1a1a] leading-relaxed italic mb-6">
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
              Ready?
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Let&rsquo;s document your family.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. Tell Samantha who your family is —
              and together you&rsquo;ll create something that lasts.
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
