import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Samantha Haines Photography | Austin, TX Portrait Photographer",
  description:
    "Austin's premier portrait photographer. Boudoir, senior portraits, family, newborn, maternity & headshots in Austin, TX. Serving Steiner Ranch, Westlake, Cedar Park & surrounding areas.",
  alternates: { canonical: "https://www.samanthahainesphotography.com" },
};

const services = [
  {
    href: "/boudoir-photographer-austin",
    title: "Boudoir",
    description: "A slow reveal of every facet of you.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    href: "/senior-portrait-photographer-austin",
    title: "Senior Portraits",
    description: "The chapter worth remembering.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
  },
  {
    href: "/family-photographer-austin",
    title: "Family",
    description: "This version of your family, right now.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80",
  },
  {
    href: "/newborn-photographer-austin",
    title: "Newborn",
    description: "The days that feel like forever and a flash.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
  },
  {
    href: "/maternity-photographer-austin",
    title: "Maternity",
    description: "Power. Softness. Everything you are.",
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=80",
  },
  {
    href: "/headshots-branding-photographer-austin",
    title: "Headshots & Branding",
    description: "The image that precedes you in every room.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "I almost didn't book. Now I tell every woman I know — do it. You will not regret a single moment.",
    name: "Ashley M.",
    service: "Boudoir",
  },
  {
    quote:
      "Samantha has a gift for making you feel completely at ease. Our family photos are something we will treasure forever.",
    name: "Jennifer L.",
    service: "Family",
  },
  {
    quote:
      "The attention to detail, the experience, the final images — everything exceeded every expectation I had.",
    name: "Rachel T.",
    service: "Senior Portraits",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-end pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1800&q=85"
              alt="Samantha Haines Photography — Austin portrait photographer"
              fill
              priority
              className="object-cover opacity-60"
            />
          </div>
          <div className="relative max-w-7xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6 animate-fade-in">
              Austin, Texas · Est. 2018
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 animate-slide-up">
              This is about
              <br />
              <em>more than</em>
              <br />
              a photo.
            </h1>
            <p className="font-sans text-[14px] text-[#e8e4df] max-w-lg leading-relaxed mb-10">
              Your story is waiting to be told.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">
              The Philosophy
            </p>
            <p className="font-serif text-3xl md:text-5xl text-[#1a1a1a] leading-tight italic">
              This is about more than looking and smiling at the camera.
              This is about telling a story. With one photo I want you to be
              compelled to pause. To feel. To connect with your art.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                The Experience
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a]">
                Every story, beautifully told.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block overflow-hidden"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} photographer Austin TX`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-3xl text-[#faf9f7] mb-1">
                        {service.title}
                      </h3>
                      <p className="font-sans text-[12px] text-[#c9b99a] tracking-wide">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's Always Included */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-[#faf9f7]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-4">
                Every Session
              </p>
              <h2 className="font-serif text-5xl text-[#faf9f7]">
                What&apos;s always included.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: "✦", title: "Hair & Makeup", desc: "Complimentary professional styling before every session" },
                { icon: "✦", title: "Consultation", desc: "In-person pre-shoot consultation to plan every detail" },
                { icon: "✦", title: "Direction", desc: "Samantha guides every pose, expression, and moment" },
                { icon: "✦", title: "Wall Art Install", desc: "White-glove assistance hanging your finished pieces" },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-[#c9b99a] text-xl mb-4">{item.icon}</p>
                  <h3 className="font-serif text-xl text-[#faf9f7] mb-3">{item.title}</h3>
                  <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Happiness Guarantee */}
        <HappinessGuarantee />

        {/* Testimonials */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Client Stories
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
                What they say.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="p-8 bg-[#f5f0ea]">
                  <p className="font-serif text-xl text-[#1a1a1a] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-sans text-[12px] tracking-widest uppercase text-[#8b6f5e]">
                    {t.name}
                  </p>
                  <p className="font-sans text-[11px] text-[#6b6b6b] mt-1">{t.service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              Ready?
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Let&apos;s tell your story.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session begins with a conversation. No pressure, no obligation —
              just two people talking about what matters most to you.
            </p>
            <CTAButton size="lg" variant="secondary">
              Start the Conversation
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
