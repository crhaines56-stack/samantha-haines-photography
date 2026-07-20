import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Georgetown Photographer | Samantha Haines Photography | Austin, TX",
  description:
    "Portrait photographer serving Georgetown, TX. Specializing in boudoir, family, senior, newborn, maternity & headshots. Hair & makeup always included. Book today.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/georgetown-photographer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you photograph families in Georgetown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Georgetown is a wonderful community full of families with rich stories to tell. Samantha loves serving Georgetown clients and capturing the warmth and character that makes this historic city so special.",
      },
    },
    {
      "@type": "Question",
      name: "Where is your studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha photographs at Vue Studio, located at 2302 Jacks Pass, Austin, TX. approximately 35 minutes from Georgetown. The drive down I-35 is easy, and the experience waiting for you at the studio is absolutely worth it.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in every session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every session includes professional hair and makeup, a pre-shoot consultation, expert posing direction, and white-glove wall art installation assistance. The complete portrait experience. no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you travel to Georgetown for outdoor sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Georgetown has beautiful outdoor settings. from the historic downtown square to the San Gabriel River park areas. Samantha is happy to travel to Georgetown for outdoor portrait sessions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of photography do you offer in Georgetown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha offers boudoir, family, senior portraits, newborn, maternity, and professional headshots & branding for Georgetown clients. Every session type includes professional hair and makeup.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit samanthahainesphotography.com/contact and send a message. Samantha will get back to you to schedule a consultation and start planning your perfect portrait session.",
      },
    },
  ],
};

const services = [
  {
    href: "/vue-studio",
    title: "Vue Studio",
    desc: "Austin's private luxury boudoir studio. 8 sets. Yours alone.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1784508133/shp/homepage/shp/homepage/service-vue-studio.jpg",
  },
  {
    href: "/boudoir-photographer-austin",
    title: "Boudoir",
    desc: "A slow reveal of every facet of you.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1784506563/shp/homepage/shp/homepage/service-boudoir.jpg",
  },
  {
    href: "/senior-portrait-photographer-austin",
    title: "Senior Portraits",
    desc: "A chapter worth remembering.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364368/shp/homepage/shp/homepage/service-senior.jpg",
  },
  {
    href: "/family-photographer-austin",
    title: "Family",
    desc: "This version of your family, right now.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364370/shp/homepage/shp/homepage/service-family.jpg",
  },
  {
    href: "/maternity-newborn-photographer-austin",
    title: "Maternity + Newborn",
    desc: "Every chapter of new life, beautifully documented.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1784506229/shp/newborn/shp/newborn/hero.jpg",
  },
  {
    href: "/headshots-branding-photographer-austin",
    title: "Branding + Headshots",
    desc: "First impressions are forever.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364372/shp/homepage/shp/homepage/service-headshots.jpg",
  },
];

const relatedLocations = [
  { href: "/round-rock-photographer", label: "Round Rock" },
  { href: "/cedar-park-photographer", label: "Cedar Park" },
  { href: "/dripping-springs-photographer", label: "Dripping Springs" },
];

export default function GeorgetownPhotographerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <div style={{height: '150vh'}}>
          <section className="sticky top-0 h-screen flex items-end pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364356/shp/homepage/shp/homepage/hero.jpg"
              alt="Georgetown Photographer. Samantha Haines Photography"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Text readability scrim — separate layer, photo untouched */}
          <div className="absolute inset-0 pointer-events-none hero-scrim" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 45%, transparent 72%)'}} />

          <div className="relative max-w-5xl mx-auto w-full hero-text">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6 text-shadow-sm">
              Georgetown · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#faf9f7] leading-none mb-8 italic text-shadow-hero">
              Georgetown Photographer. Samantha Haines
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10 text-shadow-sm">
              Portrait photography for Georgetown&rsquo;s families and women. honoring the historic
              charm and community spirit of one of Texas&rsquo;s most beloved cities.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
            <p className="font-sans text-[11px] text-[#c9b99a] tracking-wider mt-5 uppercase text-shadow-sm">
              Austin Texas Photographer
            </p>
          </div>
        </section>
          </div>

        {/* Intro */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Your Georgetown Photographer
            </p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-8 italic leading-snug">
              Georgetown&rsquo;s charm deserves portraits with the same character.
            </h2>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-4">
              Georgetown is one of Texas&rsquo;s most charming cities. with its historic downtown, 
              growing family communities, and a spirit that&rsquo;s both proud and welcoming. Samantha Haines
              is proud to serve Georgetown families and women, creating portrait experiences that
              honor the depth and character of the people who call this city home.
            </p>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
              Vue Studio is 35 minutes from Georgetown. and Samantha is also happy to bring her
              artistry to Georgetown&rsquo;s beautiful outdoor settings for sessions closer to home.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">What Samantha Offers</p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">Portrait experiences for every chapter.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="group block overflow-hidden">
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={`${s.title} photographer Austin TX`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-3xl text-[#faf9f7] mb-1">{s.title}</h3>
                      <p className="font-sans text-[12px] text-[#c9b99a] tracking-wide">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HappinessGuarantee />

        {/* What's Always Included */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-4">Every Session</p>
              <h2 className="font-serif text-5xl text-[#faf9f7]">What&rsquo;s always included.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: "✦", title: "Hair & Makeup", desc: "Professional styling so you arrive camera-ready and confident." },
                { icon: "✦", title: "Consultation", desc: "A pre-shoot conversation to plan every detail together." },
                { icon: "✦", title: "Direction", desc: "Expert guidance so you never have to wonder what to do next." },
                { icon: "✦", title: "Wall Art Install", desc: "White-glove assistance bringing your finished pieces home." },
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

        {/* Testimonial */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">Client Love</p>
            <p className="font-serif text-2xl text-[#1a1a1a] leading-relaxed italic mb-8">
              &ldquo;We were blessed to have Samantha take our family pictures recently, and the final product was beyond our expectations! One word… ecstatic! Samantha has a vision and executes that vision to perfection. She has that eye for photography that even on a cloudy, dreary day she can find the magic!!!&rdquo;
            </p>
            <p className="font-sans text-[12px] tracking-widest uppercase text-[#8b6f5e]">Family Client</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">Your Questions</p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">Everything you want to know.</h2>
            </div>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-[#c9b99a]/30 pb-8">
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">{faq.name}</h3>
                  <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">Ready?</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#faf9f7] mb-8 leading-tight italic">
              Georgetown portraits worth treasuring for generations.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. Let&rsquo;s talk about your vision and make it a reality.
            </p>
            <CTAButton size="lg" variant="secondary">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Related Locations */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedLocations.map((loc) => (
                <Link key={loc.href} href={loc.href} className="font-sans text-[11px] tracking-[0.2em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 hover:bg-[#1a1a1a] hover:text-[#faf9f7] transition-all duration-300">
                  {loc.label}
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
