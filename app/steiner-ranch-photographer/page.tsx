import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Steiner Ranch Photographer | Samantha Haines Photography | Austin, TX",
  description:
    "Portrait photographer serving Steiner Ranch, TX. Specializing in boudoir, family, senior, newborn, maternity & headshots. Hair & makeup always included. Book today.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/steiner-ranch-photographer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you photograph families in Steiner Ranch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — Steiner Ranch is Samantha's home community. She photographs families throughout the neighborhood and surrounding areas, including the beautiful lake and hill views Steiner Ranch is known for.",
      },
    },
    {
      "@type": "Question",
      name: "Where is your studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha photographs at Vue Studio, located at 2302 Jacks Pass, Austin, TX. The studio is approximately 5 minutes from Steiner Ranch — you couldn't ask for a more convenient location.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in every session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every session includes professional hair and makeup, a pre-shoot consultation, expert posing direction, and white-glove wall art installation assistance. No hidden extras — it's all part of the experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you travel to Steiner Ranch for outdoor sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Samantha is happy to photograph outdoor sessions in Steiner Ranch. With the gorgeous Lake Austin views and lush greenbelt areas, it's one of her favorite locations for outdoor portrait sessions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of photography do you offer in Steiner Ranch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha offers a full range of portrait photography for Steiner Ranch clients: boudoir, family, senior portraits, newborn, maternity, and professional headshots & branding. All sessions include hair and makeup.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply reach out via the contact form at samanthahainesphotography.com/contact. Samantha will get back to you to schedule a consultation and talk through everything that goes into creating your perfect session.",
      },
    },
  ],
};

const services = [
  {
    href: "/boudoir-photographer-austin",
    title: "Boudoir",
    desc: "Intimate, empowering portraits celebrating who you are right now.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364364/shp/homepage/shp/homepage/service-boudoir.jpg",
  },
  {
    href: "/family-photographer-austin",
    title: "Family",
    desc: "Genuine connection and real moments your family will treasure forever.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364370/shp/homepage/shp/homepage/service-family.jpg",
  },
  {
    href: "/senior-portrait-photographer-austin",
    title: "Senior Portraits",
    desc: "Confident, editorial senior portraits that reflect your personality.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364368/shp/homepage/shp/homepage/service-senior.jpg",
  },
  {
    href: "/newborn-photographer-austin",
    title: "Newborn",
    desc: "Tiny details and pure wonder — captured in the first days of life.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364375/shp/homepage/shp/homepage/service-newborn.jpg",
  },
  {
    href: "/maternity-photographer-austin",
    title: "Maternity",
    desc: "Powerful, beautiful portraits honoring this remarkable chapter.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364377/shp/homepage/shp/homepage/service-maternity.jpg",
  },
  {
    href: "/headshots-branding-photographer-austin",
    title: "Headshots & Branding",
    desc: "Professional images that tell your brand story with confidence.",
    img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364372/shp/homepage/shp/homepage/service-headshots.jpg",
  },
];

const relatedLocations = [
  { href: "/cedar-park-photographer", label: "Cedar Park" },
  { href: "/lakeway-photographer", label: "Lakeway" },
  { href: "/westlake-photographer", label: "Westlake" },
];

export default function SteinerRanchPhotographerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-end pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364228/shp/boudoir/shp/boudoir/hero.jpg"
              alt="Steiner Ranch Photographer — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Steiner Ranch · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#faf9f7] leading-none mb-8 italic">
              Steiner Ranch Photographer — Samantha Haines
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Local. Personal. Extraordinary. Samantha calls Steiner Ranch home — and there&rsquo;s
              no one who knows this community, its families, and its beauty better.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Your Neighborhood Photographer
            </p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-8 italic leading-snug">
              Serving Steiner Ranch families and women with heart.
            </h2>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-4">
              Samantha Haines lives in Steiner Ranch — she&rsquo;s not just serving this community, she&rsquo;s part of it.
              From families navigating the beautiful chaos of life to women ready to see themselves differently,
              Samantha creates portrait experiences that feel personal because they are.
            </p>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
              Vue Studio is just 5 minutes away, making the entire experience seamlessly convenient —
              from your consultation to your finished wall art.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                What Samantha Offers
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">Portrait experiences for every chapter.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="group block bg-[#faf9f7] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={`${s.title} photographer Steiner Ranch Austin TX`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{s.title}</h3>
                    <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
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

        {/* Happiness Guarantee */}
        <HappinessGuarantee />

        {/* Testimonial */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">
              Client Love
            </p>
            <p className="font-serif text-2xl text-[#1a1a1a] leading-relaxed italic mb-8">
              &ldquo;We were blessed to have Samantha take our family pictures recently, and the final product was beyond our expectations! One word… ecstatic! Samantha has a vision and executes that vision to perfection. She has that eye for photography that even on a cloudy, dreary day she can find the magic!!!&rdquo;
            </p>
            <p className="font-sans text-[12px] tracking-widest uppercase text-[#8b6f5e]">
              Family Client — Steiner Ranch
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Your Questions
              </p>
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
              Let&rsquo;s create something beautiful together.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session starts with a conversation. As your neighbor and photographer,
              Samantha is ready to create portraits that will live on your walls for decades.
            </p>
            <CTAButton size="lg" variant="secondary">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Related Locations */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Also Serving
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedLocations.map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  className="font-sans text-[11px] tracking-[0.2em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 hover:bg-[#1a1a1a] hover:text-[#faf9f7] transition-all duration-300"
                >
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
