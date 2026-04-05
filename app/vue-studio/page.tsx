import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Vue Studio Austin | Premium Portrait Photography Studio",
  description:
    "Vue Studio — Austin's newest premium portrait studio. 2,500 sq ft, 8 fully furnished sets, motorized backdrops, dedicated hair & makeup room. Available for sessions and studio rental.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/vue-studio",
  },
  robots: { index: true, follow: true },
};

const studioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Vue Studio Austin",
      description:
        "Premium 2,500 sq ft portrait photography studio in Austin, TX featuring 8 fully furnished sets, motorized backdrops, and a dedicated hair & makeup suite.",
      url: "https://www.samanthahainesphotography.com/vue-studio",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2302 Jacks Pass",
        addressLocality: "Austin",
        addressRegion: "TX",
        addressCountry: "US",
      },
      priceRange: "$$$",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many sets does Vue Studio have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vue Studio has 8 separate, fully furnished sets — each with its own distinct look and feel. All 8 sets are available for every session type.",
          },
        },
        {
          "@type": "Question",
          name: "Is Vue Studio available to rent for other photographers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Vue Studio is available for rental on PeerSpace. Whether you need an hour or a full day, the space is available for photographers, content creators, and production teams.",
          },
        },
        {
          "@type": "Question",
          name: "Does Vue Studio have parking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — on-site parking is available for clients and photographers.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Vue Studio located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vue Studio is located at 2302 Jacks Pass, Austin, TX.",
          },
        },
      ],
    },
  ],
};

const sets = [
  {
    name: "The Living Room",
    description: "Fully furnished with warm, editorial styling. Sofas, rugs, natural light.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364439/shp/vue-studio/shp/vue-studio/set-1.jpg",
  },
  {
    name: "The Bedroom",
    description: "Lush bedding, soft tones, and privacy — designed for intimate sessions.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364441/shp/vue-studio/shp/vue-studio/set-2.jpg",
  },
  {
    name: "The Backdrop Wall",
    description: "Fully motorized seamless backdrops in a curated palette of neutral tones.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364442/shp/vue-studio/shp/vue-studio/set-3.jpg",
  },
  {
    name: "The Vanity Suite",
    description: "Dedicated hair and makeup room — fully equipped, beautifully lit.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364444/shp/vue-studio/shp/vue-studio/for-photographers.jpg",
  },
  {
    name: "The Garden Set",
    description: "Indoor botanicals and natural textures for an organic, editorial look.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364446/shp/vue-studio/shp/vue-studio/for-clients.jpg",
  },
  {
    name: "The Archway",
    description: "Clean architectural lines and dramatic negative space for striking portraits.",
    image: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364437/shp/vue-studio/shp/vue-studio/hero.jpg",
  },
];

const specs = [
  { label: "Square Footage", value: "2,500 sq ft" },
  { label: "Furnished Sets", value: "8 Unique Sets" },
  { label: "Backdrops", value: "Fully Motorized" },
  { label: "Hair & Makeup", value: "Dedicated Suite" },
  { label: "Parking", value: "On-Site" },
  { label: "Location", value: "2302 Jacks Pass, Austin TX" },
];

export default function VueStudioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-end pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364437/shp/vue-studio/shp/vue-studio/hero.jpg"
              alt="Vue Studio Austin — premium portrait photography studio"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-7xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Now Open · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#faf9f7] leading-none mb-6">
              Vue Studio.
            </h1>
            <p className="font-serif text-3xl md:text-4xl text-[#c9b99a] italic mb-8">
              Where every session becomes art.
            </p>
            <p className="font-sans text-[14px] text-[#e8e4df] max-w-xl leading-relaxed mb-10">
              2,500 square feet. 8 fully furnished sets. Motorized backdrops.
              A dedicated hair & makeup suite. Everything your session — or your shoot — deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg">Book a Session</CTAButton>
              <a
                href="https://www.peerspace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-[12px] tracking-[0.2em] uppercase border border-[#c9b99a] text-[#c9b99a] px-10 py-4 hover:bg-[#c9b99a] hover:text-[#1a1a1a] transition-all duration-300 text-center"
              >
                Rent the Studio
              </a>
            </div>
          </div>
        </section>

        {/* Studio Specs */}
        <section className="py-20 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#2a2a2a]">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-[#1a1a1a] p-8 text-center">
                  <p className="font-serif text-2xl text-[#faf9f7] mb-2">{spec.value}</p>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#c9b99a]">
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Sets */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                The Space
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-6">
                8 sets. Infinite stories.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
                Every set at Vue Studio is fully furnished, professionally styled, and
                ready to shoot. No assembly required. No compromises made.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sets.map((set) => (
                <div key={set.name} className="group overflow-hidden bg-[#faf9f7]">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={set.image}
                      alt={`${set.name} — Vue Studio Austin`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{set.name}</h3>
                    <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">
                      {set.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Clients */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364444/shp/vue-studio/shp/vue-studio/for-photographers.jpg"
                alt="Hair and makeup suite at Vue Studio Austin"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                For Clients
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] mb-8 leading-tight">
                The premium experience you deserve.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Hair & Makeup Included",
                    body: "Every Samantha Haines Photography session begins in our dedicated H&amp;M suite. Arrive as yourself. Leave camera-ready.",
                  },
                  {
                    title: "8 Sets in One Session",
                    body: "Move through multiple looks, moods, and settings — all in one visit. No location scouting. No driving between spots. Pure creativity.",
                  },
                  {
                    title: "Completely Private",
                    body: "Your session is yours alone. The studio is never double-booked. Your images, your space, your experience.",
                  },
                  {
                    title: "On-Site Parking",
                    body: "Pull up, walk in, and let the experience begin. No stress before the first frame.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-[#c9b99a] mt-1 flex-shrink-0">✦</span>
                    <div>
                      <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">{item.title}</h3>
                      <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <CTAButton size="lg">Book Your Session</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* For Photographers — PeerSpace */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
                For Photographers & Creators
              </p>
              <h2 className="font-serif text-5xl text-[#faf9f7] mb-8 leading-tight">
                Your next shoot
                <br />
                <em className="text-[#c9b99a]">starts here.</em>
              </h2>
              <p className="font-sans text-[14px] text-[#8b949e] leading-relaxed mb-8">
                Vue Studio is available for rental on PeerSpace — by the hour or the day.
                Whether you&apos;re a photographer, content creator, brand team, or production house,
                you&apos;ll find exactly the space you need without the overhead of owning it.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  "8 distinct, fully furnished sets — ready to shoot on arrival",
                  "Fully motorized seamless backdrops in curated neutral tones",
                  "Professional lighting infrastructure throughout",
                  "Dedicated hair & makeup suite for talent",
                  "2,500 sq ft of usable space — room to move, room to create",
                  "On-site parking for crew and clients",
                  "Central Austin location — easy access from any direction",
                ].map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <span className="text-[#c9b99a] flex-shrink-0 mt-0.5">✦</span>
                    <p className="font-sans text-[13px] text-[#8b949e] leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.peerspace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-[12px] tracking-[0.2em] uppercase bg-[#c9b99a] text-[#1a1a1a] px-10 py-4 hover:bg-[#faf9f7] transition-all duration-300"
              >
                View on PeerSpace
              </a>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364442/shp/vue-studio/shp/vue-studio/set-3.jpg"
                alt="Vue Studio Austin photography studio rental PeerSpace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 px-6 bg-[#f5f0ea]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Find Us
            </p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-4">
              2302 Jacks Pass, Austin, TX
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10 max-w-xl mx-auto">
              Centrally located and easy to reach from Steiner Ranch, Cedar Park,
              Westlake, Lakeway, Round Rock, and beyond. On-site parking always available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg">Book a Session</CTAButton>
              <a
                href="https://www.peerspace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-[12px] tracking-[0.2em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 hover:bg-[#1a1a1a] hover:text-[#faf9f7] transition-all duration-300 text-center"
              >
                Rent the Studio on PeerSpace
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-12 text-center">
              Frequently asked.
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How many sets does Vue Studio have?",
                  a: "8 separate, fully furnished sets — each with its own distinct look and feel. All 8 sets are available for every session and rental.",
                },
                {
                  q: "Is Vue Studio available to rent for other photographers?",
                  a: "Yes. Vue Studio is listed on PeerSpace and available to photographers, content creators, and production teams by the hour or the day.",
                },
                {
                  q: "What's included in a studio rental?",
                  a: "Access to all 8 furnished sets, motorized backdrops, the hair & makeup suite, and on-site parking. Full details and availability on our PeerSpace listing.",
                },
                {
                  q: "Where is Vue Studio located?",
                  a: "2302 Jacks Pass, Austin, TX — centrally located with easy access from Steiner Ranch, Westlake, Cedar Park, and the greater Austin area.",
                },
                {
                  q: "Can clients book sessions at Vue Studio with Samantha?",
                  a: "Absolutely — all Samantha Haines Photography sessions are held at Vue Studio. Hair and makeup are always included.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-[#e8e4df] pb-8">
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">{faq.q}</h3>
                  <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services CTA */}
        <section className="py-20 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              Book Your Session
            </p>
            <h2 className="font-serif text-5xl text-[#faf9f7] mb-6 italic leading-tight">
              Your story is waiting to be told.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every service. Every story. All at Vue Studio.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { href: "/boudoir-photographer-austin", label: "Boudoir" },
                { href: "/senior-portrait-photographer-austin", label: "Senior" },
                { href: "/family-photographer-austin", label: "Family" },
                { href: "/newborn-photographer-austin", label: "Newborn" },
                { href: "/maternity-photographer-austin", label: "Maternity" },
                { href: "/headshots-branding-photographer-austin", label: "Headshots" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="font-sans text-[11px] tracking-[0.15em] uppercase border border-[#2a2a2a] text-[#6b6b6b] px-5 py-2 hover:border-[#c9b99a] hover:text-[#c9b99a] transition-all duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <CTAButton size="lg" variant="secondary">
              Start the Conversation
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }}
      />
    </>
  );
}
