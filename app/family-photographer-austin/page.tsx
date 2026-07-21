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
    "Austin family photographer Samantha Haines captures this version of your family right now. genuine connection, real moments, and images you'll treasure forever. Serving Steiner Ranch & Austin TX.",
  alternates: {
    canonical:
      "https://www.samanthahainesphotography.com/family-photographer-austin",
  },
  openGraph: {
    title: "Family Photographer Austin TX",
    description:
      "Austin family photographer Samantha Haines captures this version of your family right now. genuine connection, real moments, and images you'll treasure forever.",
    url: "https://www.samanthahainesphotography.com/family-photographer-austin",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364397/shp/family/shp/family/hero.jpg", width: 1200, height: 630, alt: "Family photographer Austin TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Photographer Austin TX",
    description:
      "Austin family photographer Samantha Haines captures genuine connection and real moments. Serving Steiner Ranch & Austin TX.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364397/shp/family/shp/family/hero.jpg"],
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
        text: "Yes — complimentary hair and makeup for one person is always included. Additional family members can add on hair and makeup or men’s grooming services. Details are discussed during your consultation.",
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
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364401/shp/family/shp/family/gallery-1.jpg",
    alt: "Family photography Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364403/shp/family/shp/family/gallery-2.jpg",
    alt: "Austin family portrait session",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1784515545/shp/family/shp/family/gallery-3.jpg",
    alt: "Outdoor family photos Austin Texas",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364407/shp/family/shp/family/gallery-4.jpg",
    alt: "Family session Steiner Ranch Austin",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364409/shp/family/shp/family/gallery-5.jpg",
    alt: "Candid family portraits Austin TX",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1784513875/shp/family/shp/family/gallery-6.jpg",
    alt: "Family photography golden hour Austin",
  },
  // TODO: replace with new photos from Samantha
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1784513875/shp/family/shp/family/gallery-6.jpg",
    alt: "Family photography Austin TX outdoors",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364401/shp/family/shp/family/gallery-1.jpg",
    alt: "Austin family session golden hour",
  },
  {
    src: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364403/shp/family/shp/family/gallery-2.jpg",
    alt: "Family portrait session Austin Texas",
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
        <div style={{height: '150vh'}}>
          <section className="sticky top-0 h-screen flex items-end pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364397/shp/family/shp/family/hero.jpg"
              alt="Family photographer Austin TX. Samantha Haines Photography"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Text readability scrim — separate layer, photo untouched */}
          <div className="absolute inset-0 pointer-events-none hero-scrim" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 45%, transparent 72%)'}} />

          <div className="relative max-w-5xl mx-auto w-full hero-text">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-6 text-shadow-sm">
              Family · Austin, Texas
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-none mb-8 italic text-shadow-hero">
              This version of your family, right now.
            </h1>
            <p className="font-sans text-[15px] text-[#e8e4df] max-w-2xl leading-relaxed mb-10 text-shadow-sm">
              They won&rsquo;t be this age again. These moments, this chaos, this love —
              it deserves to be documented beautifully, exactly as it is.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
            <p className="font-sans text-[11px] text-[#c9b99a] tracking-wider mt-5 uppercase text-shadow-sm">
              Austin Texas Photographer
            </p>
          </div>
        </section>
          </div>

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
                Whether you&rsquo;re looking for candid or formal portraits, Samantha meets you
                with poses, locations, and styling built around what you want to see. This is
                an experience curated to your family and your goals &mdash; not a formula
                applied to everyone who books.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                She arrives prepared &mdash; thoughtful gifts curated to each child, and the
                patience to let moments unfold naturally. Nothing is forced. Everything is felt.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
                The photos you take home are not just curated pieces of personalized interior
                design. They&rsquo;re beautiful moments frozen in time.
              </p>
            </div>
            <div className="relative h-[550px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364399/shp/family/shp/family/experience.jpg"
                alt="Family session experience Austin TX"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* The Work */}
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
                    className="object-cover object-[50%_25%] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton size="lg">Book Your Session</CTAButton>
            </div>
          </div>
        </section>

        {/* Outdoor vs. In-Home */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-4">
                Where We Shoot
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a]">
                Your space. Your story.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Outdoor",
                  desc: "Austin\u2019s parks, lakesides, and Hill Country backdrops. Golden hour light on your family in a setting that feels like you.",
                  img: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364401/shp/family/shp/family/gallery-1.jpg",
                  alt: "Outdoor family photography Austin TX",
                },
                {
                  title: "In-Home",
                  desc: "Your home is already full of your family\u2019s story. Samantha documents it there \u2014 where the kids are comfortable, the light is familiar, and everything feels real.",
                  img: "https://res.cloudinary.com/du67vy39a/image/upload/v1784515545/shp/family/shp/family/gallery-3.jpg",
                  alt: "In-home family photography Austin TX",
                },
              ].map((item) => (
                <div key={item.title} className="group">
                  <div className="relative h-80 overflow-hidden mb-6">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">{item.title}</h3>
                  <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-4">{item.desc}</p>
                  <Link href="/contact" className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8b6f5e] border-b border-[#8b6f5e] pb-0.5 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
                    Book Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Every Session */}
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
                  desc: "Complimentary wall art installation",
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
            <div className="text-center mt-12">
              <CTAButton size="lg" variant="secondary">Book Your Session</CTAButton>
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
              {faqSchema.mainEntity.map((faq, i) => {
                const isKidsQuestion = faq.name.toLowerCase().includes("cooperate") || faq.name.toLowerCase().includes("kids");
                return (
                  <div key={i} className={`border-b border-[#c9b99a]/30 pb-8 ${isKidsQuestion ? "md:grid md:grid-cols-2 md:gap-12 md:items-start" : ""}`}>
                    <div>
                      <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">{faq.name}</h3>
                      <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </p>
                      {faq.name.toLowerCase().includes('book') && (
                        <Link href="/contact" className="inline-block mt-3 font-sans text-[12px] tracking-[0.15em] uppercase text-[#8b6f5e] hover:text-[#1a1a1a] transition-colors border-b border-[#8b6f5e] pb-0.5">
                          Book Now →
                        </Link>
                      )}
                    </div>
                    {isKidsQuestion && (
                      <div className="relative h-64 mt-6 md:mt-0 overflow-hidden">
                        <Image
                          src="https://res.cloudinary.com/du67vy39a/image/upload/v1784513875/shp/family/shp/family/gallery-6.jpg"
                          alt="Candid family moments Austin TX"
                          fill
                          className="object-cover object-[50%_25%]"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Guarantee */}
        <HappinessGuarantee />

        {/* Client Stories */}
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
            <div className="text-center mt-12">
              <CTAButton size="lg">Book Your Session</CTAButton>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364403/shp/family/shp/family/gallery-2.jpg"
                alt="Family photography session Austin TX"
                fill
                className="object-cover object-[50%_25%]"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">
                How It Works
              </p>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Start the Conversation", desc: "Reach out and tell Samantha a little about your family. No pressure \u2014 just a conversation about what you\u2019re looking for." },
                  { step: "02", title: "Customize the Details", desc: "Samantha works with you to plan location, timing, outfits, and every detail that makes this session yours." },
                  { step: "03", title: "Enjoy Your Photos", desc: "Receive a beautifully edited gallery backed by the SHP Happiness Guarantee. Your family, beautifully documented." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="font-serif text-4xl text-[#c9b99a] leading-none">{item.step}</span>
                    <div>
                      <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{item.title}</h3>
                      <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase bg-[#1a1a1a] text-[#faf9f7] px-8 py-4 hover:bg-[#8b6f5e] transition-colors duration-300">
                  Book Your Session
                </Link>
              </div>
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
