import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";
import HappinessGuarantee from "@/components/sections/HappinessGuarantee";

export const metadata: Metadata = {
  title: "Westlake Photographer | Samantha Haines Photography | Austin, TX",
  description:
    "Portrait photographer serving Westlake, TX. Specializing in boudoir, family, senior, newborn, maternity & headshots. Hair & makeup always included. Book today.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/westlake-photographer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you photograph families in Westlake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Westlake families appreciate quality and artistry — and that's exactly what Samantha Haines delivers. From intimate family sessions to senior portraits, Samantha creates imagery worthy of Westlake's elegant homes.",
      },
    },
    {
      "@type": "Question",
      name: "Where is your studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha photographs at Vue Studio, located at 2302 Jacks Pass, Austin, TX — just 15 minutes from Westlake. It's one of the closest premium portrait studios to the Westlake area.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in every session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every session includes professional hair and makeup, a personalized pre-shoot consultation, expert direction throughout the session, and white-glove wall art installation assistance. The full luxury experience is always included.",
      },
    },
    {
      "@type": "Question",
      name: "Do you travel to Westlake for outdoor sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Westlake's beautiful neighborhoods, green spaces, and stunning Hill Country views provide exceptional outdoor portrait settings. Samantha is happy to bring the session to you.",
      },
    },
    {
      "@type": "Question",
      name: "What types of photography do you offer in Westlake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samantha offers boudoir, family, senior portraits, newborn, maternity, and professional headshots & branding photography for Westlake clients. Every session type includes professional hair and makeup.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out via samanthahainesphotography.com/contact. Samantha will personally respond to schedule your consultation and begin crafting an experience tailored to you.",
      },
    },
  ],
};

const services = [
  { href: "/boudoir-photographer-austin", title: "Boudoir", desc: "Intimate, empowering portraits celebrating who you are right now.", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" },
  { href: "/family-photographer-austin", title: "Family", desc: "Genuine connection and real moments your family will treasure forever.", img: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80" },
  { href: "/senior-portrait-photographer-austin", title: "Senior Portraits", desc: "Confident, editorial senior portraits that reflect your personality.", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80" },
  { href: "/newborn-photographer-austin", title: "Newborn", desc: "Tiny details and pure wonder — captured in the first days of life.", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80" },
  { href: "/maternity-photographer-austin", title: "Maternity", desc: "Powerful, beautiful portraits honoring this remarkable chapter.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80" },
  { href: "/headshots-branding-photographer-austin", title: "Headshots & Branding", desc: "Professional images that tell your brand story with confidence.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
];

const relatedLocations = [
  { href: "/lakeway-photographer", label: "Lakeway" },
  { href: "/steiner-ranch-photographer", label: "Steiner Ranch" },
  { href: "/dripping-springs-photographer", label: "Dripping Springs" },
];

export default function WestlakePhotographerPage() {
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
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=1800&q=80"
              alt="Westlake Photographer — Samantha Haines Photography"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-5xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6">
              Westlake · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#faf9f7] leading-none mb-8 italic">
              Westlake Photographer — Samantha Haines
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10">
              Refined portrait photography for Westlake&rsquo;s discerning families and women —
              every detail elevated, every image extraordinary.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Your Westlake Photographer
            </p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-8 italic leading-snug">
              Westlake expects excellence. Samantha delivers it.
            </h2>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-4">
              Westlake is one of Austin&rsquo;s most sought-after communities — known for its beauty,
              its standards, and its families who value the finer things. Samantha Haines brings
              that same level of care and artistry to every portrait session she creates.
              From boudoir to family to senior portraits, the result is always imagery worthy of your walls.
            </p>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
              Vue Studio is just 15 minutes from Westlake — one of the most convenient premium portrait
              studios in the Austin area for Westlake residents.
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
                    <Image src={s.img} alt={`${s.title} photographer Westlake Austin TX`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
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
                { icon: "✦", title: "Consultation", desc: "A personalized pre-shoot conversation to plan every detail." },
                { icon: "✦", title: "Direction", desc: "Expert guidance so you always know exactly what to do." },
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
              Westlake&rsquo;s finest portraits start here.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every great portrait begins with a conversation. Let&rsquo;s talk about what you envision.
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
