import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Dripping Springs Photographer | Samantha Haines Photography | Austin, TX",
  description:
    "Portrait photographer serving Dripping Springs, TX. Specializing in boudoir, family, senior, newborn, maternity & headshots. Hair & makeup always included. Book today.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/dripping-springs-photographer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you photograph families in Dripping Springs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Dripping Springs is one of the most beautiful communities in the Austin area, and Samantha loves serving the families who call the Texas Hill Country home. The natural beauty of the area makes for stunning outdoor portraits.",
      },
    },
    {
      "@type": "Question",
      name: "Where is your studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha photographs at Vue Studio, located at 2302 Jacks Pass, Austin, TX — approximately 30 minutes from Dripping Springs. For clients who prefer a studio experience, the drive through the Hill Country is a beautiful one.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in every session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every session includes professional hair and makeup, a pre-shoot consultation, expert posing direction, and white-glove wall art installation assistance. The complete experience is always included — no hidden extras.",
      },
    },
    {
      "@type": "Question",
      name: "Do you travel to Dripping Springs for outdoor sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The Texas Hill Country surrounding Dripping Springs is some of the most beautiful land in Texas — perfect for outdoor portrait sessions. Samantha loves photographing in natural settings like this.",
      },
    },
    {
      "@type": "Question",
      name: "What types of photography do you offer in Dripping Springs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha offers boudoir, family, senior portraits, newborn, maternity, and professional headshots & branding for Dripping Springs clients. Every session includes professional hair and makeup.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit samanthahainesphotography.com/contact to start the conversation. Samantha will be in touch to discuss your vision and schedule your consultation.",
      },
    },
  ],
};

const services = [
  { href: "/boudoir-photographer-austin", title: "Boudoir", desc: "Intimate, empowering portraits celebrating who you are right now.", img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364364/shp/homepage/shp/homepage/service-boudoir.jpg" },
  { href: "/family-photographer-austin", title: "Family", desc: "Genuine connection and real moments your family will treasure forever.", img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364370/shp/homepage/shp/homepage/service-family.jpg" },
  { href: "/senior-portrait-photographer-austin", title: "Senior Portraits", desc: "Confident, editorial senior portraits that reflect your personality.", img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364368/shp/homepage/shp/homepage/service-senior.jpg" },
  { href: "/newborn-photographer-austin", title: "Newborn", desc: "Tiny details and pure wonder — captured in the first days of life.", img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364375/shp/homepage/shp/homepage/service-newborn.jpg" },
  { href: "/maternity-photographer-austin", title: "Maternity", desc: "Powerful, beautiful portraits honoring this remarkable chapter.", img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364377/shp/homepage/shp/homepage/service-maternity.jpg" },
  { href: "/headshots-branding-photographer-austin", title: "Headshots & Branding", desc: "Professional images that tell your brand story with confidence.", img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364372/shp/homepage/shp/homepage/service-headshots.jpg" },
];

const relatedLocations = [
  { href: "/westlake-photographer", label: "Westlake" },
  { href: "/lakeway-photographer", label: "Lakeway" },
  { href: "/georgetown-photographer", label: "Georgetown" },
];

export default function DrippingSpringsPhotographerPage() {
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
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364379/shp/newborn/shp/newborn/hero.jpg"
              alt="Dripping Springs Photographer — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Dripping Springs · Texas Hill Country
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#faf9f7] leading-none mb-8 italic">
              Dripping Springs Photographer — Samantha Haines
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Hill Country portraits as breathtaking as the land itself — serving Dripping Springs
              families with artistry, warmth, and a genuine love for this beautiful corner of Texas.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Your Dripping Springs Photographer
            </p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-8 italic leading-snug">
              The Hill Country is beautiful. Your portraits should be too.
            </h2>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-4">
              Dripping Springs sits in the heart of the Texas Hill Country — surrounded by cedar, limestone,
              and wide-open skies that photographers dream about. Samantha Haines brings her artistry
              and personal touch to Dripping Springs families and women, creating portraits that feel
              as natural and beautiful as the land around them.
            </p>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
              Vue Studio is 30 minutes from Dripping Springs — and for those who prefer the studio experience,
              every moment of the drive is worth it. Samantha also happily travels to outdoor locations
              throughout the Hill Country.
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
                <Link key={s.href} href={s.href} className="group block bg-[#faf9f7] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={s.img} alt={`${s.title} photographer Dripping Springs TX`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
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

        <HappinessGuarantee />

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
              Hill Country portraits worth hanging forever.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Dripping Springs deserves portraits as beautiful as its landscape. Let&rsquo;s start the conversation.
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
