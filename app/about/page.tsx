import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About Samantha Haines | Austin TX Portrait Photographer",
  description:
    "Meet Samantha Haines — Austin portrait photographer, mother of four, and storyteller. Based in Steiner Ranch, serving families, couples & businesses across Austin, TX.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/about",
  },
  openGraph: {
    title: "About Samantha Haines | Austin TX Portrait Photographer",
    description:
      "Meet Samantha Haines — Austin portrait photographer, mother of four, and storyteller. Based in Steiner Ranch, serving families, couples & businesses across Austin, TX.",
    url: "https://www.samanthahainesphotography.com/about",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg", width: 1200, height: 630, alt: "Samantha Haines Photography Austin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samantha Haines | Austin TX Portrait Photographer",
    description:
      "Meet Samantha Haines — Austin portrait photographer, mother of four, and storyteller.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samantha Haines",
  "jobTitle": "Portrait Photographer",
  "url": "https://www.samanthahainesphotography.com/about",
  "image": "https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg",
  "worksFor": { "@type": "LocalBusiness", "name": "Samantha Haines Photography" },
  "knowsAbout": [
    "Boudoir Photography",
    "Family Photography",
    "Senior Portrait Photography",
    "Newborn Photography",
    "Maternity Photography",
    "Headshot Photography",
    "Austin Photography"
  ],
  "sameAs": [
    "https://www.instagram.com/samanthahainesphotography",
    "https://www.facebook.com/samanthahainesphotography"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX"
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] flex items-end pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <Image
              src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg"
              alt="Samantha Haines — Austin portrait photographer"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative max-w-4xl mx-auto w-full">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c9b99a] mb-4">
              The Photographer
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#faf9f7] leading-none italic">
              About Samantha
            </h1>
          </div>
        </section>

        {/* Intro / Philosophy */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-8">
              In Her Own Words
            </p>
            <p className="font-serif text-3xl md:text-4xl text-[#1a1a1a] leading-relaxed italic mb-10">
              &ldquo;As a mother of four, I connect with families. As a wife I connect
              with couples. And as a business owner and previous digital and social media
              marketing executive, I connect with businesses. I am so excited to expertly
              guide you in whatever stage you&rsquo;re looking for through this process to
              create stunning imagery that truly tells everyone your unique story.&rdquo;
            </p>
            <p className="font-sans text-[14px] text-[#8b6f5e] tracking-widest">— xx Samantha</p>
          </div>
        </section>

        {/* Story section */}
        <section className="py-24 px-6 bg-[#f5f0ea]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://res.cloudinary.com/du67vy39a/image/upload/v1775364397/shp/family/shp/family/hero.jpg"
                alt="Samantha with her family in Austin Texas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
                Her Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-8">
                A life she&apos;s in love with.
              </h2>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                I&rsquo;m so lucky and in love with my life. And I hope to capture the moments
                that show how in love with your life you are. I met my husband Chris when we
                were 18 years old in Arizona and can honestly say I&rsquo;m more crazy in love
                with the man now, well over a decade later.
              </p>
              <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
                We have created a life we love with 4 amazing kids living in the Steiner Ranch
                community of Austin, Texas. Our boys are Colton, Camden, Crew, and Cash.
                Watching them achieve new milestones is such a highlight for us. I would love
                to document those milestones for you.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-6">
              What Drives Her
            </p>
            <h2 className="font-serif text-5xl text-[#faf9f7] mb-16 italic">
              More than a photographer.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {[
                {
                  title: "Storyteller First",
                  desc: "Every session is about telling your story — not just documenting a moment, but capturing the feeling, connection, and soul behind it.",
                },
                {
                  title: "Community Rooted",
                  desc: "Born from Steiner Ranch, Samantha is part of the Austin community she photographs. She knows these families, these streets, this light.",
                },
                {
                  title: "Artist Always",
                  desc: "With a background in marketing and an eye for visual narrative, Samantha brings a creative vision that makes every image something worth pausing for.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t border-[#6b6b6b]/30 pt-8">
                  <h3 className="font-serif text-2xl text-[#faf9f7] mb-4">{item.title}</h3>
                  <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#faf9f7] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8b6f5e] mb-6">
              Let&rsquo;s Connect
            </p>
            <h2 className="font-serif text-5xl text-[#1a1a1a] mb-8 leading-tight italic">
              Your story is waiting to be told.
            </h2>
            <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-10">
              Every session begins with a conversation. There&rsquo;s no pressure, no obligation
              — just two people talking about what matters most to you.
            </p>
            <CTAButton size="lg">Start the Conversation</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
