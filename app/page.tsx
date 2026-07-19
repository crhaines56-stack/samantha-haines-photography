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
    "Austin's premier portrait photographer. Boudoir, senior portraits, family, maternity, newborn & headshots in Austin, TX. Serving Steiner Ranch, Westlake, Cedar Park & surrounding areas.",
  alternates: { canonical: "https://www.samanthahainesphotography.com" },
};

const services = [
  {
    href: "/vue-studio",
    title: "Vue Studio",
    description: "Austin's only private luxury boudoir studio. 8 sets. Yours alone.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364364/shp/homepage/shp/homepage/service-boudoir.jpg",
  },
  {
    href: "/boudoir-photographer-austin",
    title: "Boudoir",
    description: "A slow reveal of every facet of you.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364364/shp/homepage/shp/homepage/service-boudoir.jpg",
  },
  {
    href: "/senior-portrait-photographer-austin",
    title: "Senior Portraits",
    description: "The chapter worth remembering.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364368/shp/homepage/shp/homepage/service-senior.jpg",
  },
  {
    href: "/family-photographer-austin",
    title: "Family",
    description: "This version of your family, right now.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364370/shp/homepage/shp/homepage/service-family.jpg",
  },
  {
    href: "/maternity-newborn-photographer-austin",
    title: "Maternity + Newborn",
    description: "Every chapter of new life, beautifully documented.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364377/shp/homepage/shp/homepage/service-maternity.jpg",
  },
  {
    href: "/corporate-events-photographer-austin",
    title: "Corporate Events",
    description: "Conferences, team days, and brand moments — captured with intention.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364372/shp/homepage/shp/homepage/service-headshots.jpg",
  },
  {
    href: "/headshots-branding-photographer-austin",
    title: "Headshots & Branding",
    description: "The image that precedes you in every room.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364372/shp/homepage/shp/homepage/service-headshots.jpg",
  },
];

const testimonials = [
  {
    quote:
      "I almost didn't book. Now I tell every woman I know. do it. You will not regret a single moment.",
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
      "The attention to detail, the experience, the final images. everything exceeded every expectation I had.",
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
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364356/shp/homepage/shp/homepage/hero.jpg"
              alt="Samantha Haines Photography. Austin portrait photographer"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Text readability scrim — separate layer, photo untouched */}
          <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 45%, transparent 72%)'}} />

          <div className="relative max-w-7xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6 animate-fade-in text-shadow-sm">
              Austin, Texas · Est. 2022
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 animate-slide-up text-shadow-hero">
              This is about
              <br />
              <em>more than</em>
              <br />
              a photo.
            </h1>
            <p className="font-sans text-[14px] text-[#e8e4df] max-w-lg leading-relaxed mb-10 text-shadow-sm">
              Your story is waiting to be told.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
            <p className="font-sans text-[11px] text-[#c9b99a] tracking-wider mt-5 uppercase text-shadow-sm">
              Now booking April &amp; May sessions
            </p>
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
        
        {/* Vue Studio — Private Luxury Boudoir Studio Feature */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
                  Vue Studio Austin
                </p>
                <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] italic leading-tight mb-8">
                  A private studio.<br />Built for you.
                </h2>
                <p className="font-sans text-[15px] text-[#a0a0a0] leading-relaxed mb-6">
                  Most photographers rent space. Samantha built hers. Vue Studio is a 2,500 sq ft private luxury portrait studio in Austin. 8 fully furnished sets, motorized backdrops, and a dedicated hair and makeup suite. When you book a session, the entire space is yours.
                </p>
                <p className="font-sans text-[15px] text-[#a0a0a0] leading-relaxed mb-10">
                  No shared hallways. No strangers. No compromises. Just privacy, intention, and the kind of space that makes every woman feel exactly as she should: like the only person in the room.
                </p>
                <a
                  href="/vue-studio"
                  className="font-sans text-[12px] tracking-[0.2em] uppercase text-[#c9b99a] hover:text-[#faf9f7] transition-colors border-b border-[#c9b99a] pb-1"
                >
                  Tour the Studio &rarr;
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#222] p-6 rounded-sm">
                    <p className="font-serif text-3xl text-[#c9b99a] mb-2">8</p>
                    <p className="font-sans text-[12px] tracking-[0.1em] uppercase text-[#faf9f7] mb-1">Sets</p>
                    <p className="font-sans text-[12px] text-[#6b6b6b]">Each fully furnished, distinctly styled</p>
                  </div>
                  <div className="bg-[#222] p-6 rounded-sm">
                    <p className="font-serif text-3xl text-[#c9b99a] mb-2">100%</p>
                    <p className="font-sans text-[12px] tracking-[0.1em] uppercase text-[#faf9f7] mb-1">Private</p>
                    <p className="font-sans text-[12px] text-[#6b6b6b]">The entire studio is yours, every session</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-[#222] p-6 rounded-sm">
                    <p className="font-serif text-3xl text-[#c9b99a] mb-2">2,500</p>
                    <p className="font-sans text-[12px] tracking-[0.1em] uppercase text-[#faf9f7] mb-1">Sq Ft</p>
                    <p className="font-sans text-[12px] text-[#6b6b6b]">Room to breathe, move, and feel like yourself</p>
                  </div>
                  <div className="bg-[#222] p-6 rounded-sm">
                    <p className="font-serif text-3xl text-[#c9b99a] mb-2">1</p>
                    <p className="font-sans text-[12px] tracking-[0.1em] uppercase text-[#faf9f7] mb-1">Client at a time</p>
                    <p className="font-sans text-[12px] text-[#6b6b6b]">No overlapping sessions. Ever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Google Reviews CTA */}
        <section className="py-16 px-6 bg-[#f5f0ea]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#D97706] text-xl">★★★★★</span>
            </div>
            <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] italic mb-4 leading-tight">
              5-star rated on Google.
            </p>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-6 max-w-xl mx-auto">
              Don&apos;t take our word for it. Read what Austin women are saying about their experience.
            </p>
            <a
              href="https://share.google/RattRFsVNZ7AkcM3F"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[12px] tracking-[0.2em] uppercase text-[#8b6f5e] hover:text-[#1a1a1a] transition-colors border-b border-[#c9b99a] pb-1"
            >
              Read Reviews on Google →
            </a>
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
