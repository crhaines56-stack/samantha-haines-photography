import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Vue Studio Austin TX | Samantha Haines Photography",
  description:
    "Vue Studio by Samantha Haines Photography — a private, elevated photography experience in Austin, TX. Opening soon. Join the waitlist.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/vue-studio",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Vue Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vue Studio is Samantha Haines Photography's private, elevated studio experience — designed for clients who want an immersive, full-service session in a curated environment. Details coming soon.",
      },
    },
    {
      "@type": "Question",
      name: "When does Vue Studio open?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vue Studio opens in Spring 2026. Join the waitlist to be the first to know.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of sessions are available at Vue Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vue Studio will be available for boudoir, portrait, and branding sessions. Full details on available session types will be announced at launch.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Vue Studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vue Studio is located in the Austin, TX area. Exact address details will be shared with waitlist members and booked clients.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reserve my spot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out via the contact form to express your interest. Samantha is personally curating the waitlist and will be in touch as spots become available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Vue Studio different from Samantha's current session experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vue Studio is a dedicated, purpose-built environment designed to elevate the session experience even further — with thoughtfully curated spaces, lighting, and amenities designed around the client.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a session before the studio opens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Samantha is accepting waitlist inquiries now. Contact her to discuss your vision and secure your place.",
      },
    },
    {
      "@type": "Question",
      name: "Will Vue Studio be available for events or collaborations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha is open to discussing select collaborations and events at Vue Studio. Reach out directly to explore possibilities.",
      },
    },
  ],
};

export default function VueStudioPage() {
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
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=80"
              alt="Vue Studio by Samantha Haines Photography — Austin TX"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Vue Studio · Austin, Texas · Opening Spring 2026
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic">
              An elevated experience. Coming soon.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Vue Studio is Samantha&rsquo;s private, purpose-built photography environment —
              designed for clients who want an immersive, full-service session unlike anything
              else in Austin.
            </p>
            <CTAButton size="lg">Join the Waitlist</CTAButton>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">
              The Vision
            </p>
            <h2 className="font-serif text-5xl text-[#1a1a1a] mb-8 leading-tight italic">
              A space designed around you.
            </h2>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-8">
              Every detail of Vue Studio has been designed with one goal: to create a
              photography experience that feels as extraordinary as the images it produces.
              Curated spaces. Thoughtful lighting. An environment where you arrive and
              immediately feel at ease.
            </p>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
              Samantha is personally curating the waitlist for opening sessions.
              If you&rsquo;re ready to experience something different, reach out today.
            </p>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                A Preview
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
                Beauty in every frame.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
                  alt: "Vue Studio Austin TX preview",
                },
                {
                  src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
                  alt: "Photography studio Austin Texas",
                },
                {
                  src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
                  alt: "Vue Studio portrait session preview",
                },
                {
                  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
                  alt: "Studio photography Austin TX",
                },
                {
                  src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
                  alt: "Portrait studio Austin Texas",
                },
                {
                  src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
                  alt: "Vue Studio branding session Austin",
                },
              ].map((img, i) => (
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

        {/* What to Expect */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-4">
                What to Expect
              </p>
              <h2 className="font-serif text-5xl text-[#faf9f7]">
                Everything, elevated.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: "✦",
                  title: "Private Studio",
                  desc: "A dedicated, purpose-built space designed for photography — and for you.",
                },
                {
                  icon: "✦",
                  title: "Hair & Makeup",
                  desc: "Professional styling included with every Vue Studio session.",
                },
                {
                  icon: "✦",
                  title: "Full Direction",
                  desc: "Samantha guides every moment — you simply arrive and experience it.",
                },
                {
                  icon: "✦",
                  title: "Wall Art Install",
                  desc: "White-glove assistance bringing your finished pieces into your space.",
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

        {/* CTA */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              Opening Spring 2026
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Be first through the door.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Samantha is personally curating the Vue Studio waitlist. Reach out now to
              express your interest and secure your spot.
            </p>
            <CTAButton size="lg" variant="secondary">
              Join the Waitlist
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
