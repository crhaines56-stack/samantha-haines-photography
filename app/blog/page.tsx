import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog | Samantha Haines Photography",
  description:
    "Photography tips, behind-the-scenes stories, and everything you need to know about booking a portrait session in Austin, TX. Written by Samantha Haines.",
  alternates: {
    canonical: "https://www.samanthahainesphotography.com/blog",
  },
  openGraph: {
    title: "Blog | Samantha Haines Photography",
    description:
      "Photography tips, behind-the-scenes stories, and everything you need to know about booking a portrait session in Austin, TX.",
    url: "https://www.samanthahainesphotography.com/blog",
    siteName: "Samantha Haines Photography",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364432/shp/blog/shp/blog/boudoir-guide-cover.jpg", width: 1200, height: 630, alt: "Samantha Haines Photography Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Samantha Haines Photography",
    description:
      "Photography tips, behind-the-scenes stories, and everything you need to know about booking a portrait session in Austin, TX.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364432/shp/blog/shp/blog/boudoir-guide-cover.jpg"],
  },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  interface Post {
    slug: string;
    title?: string;
    date?: string;
    excerpt?: string;
    image?: string;
  }
  const posts = getAllPosts() as Post[];

  return (
    <>
      <Header />
      <main className="bg-[#faf9f7] min-h-screen">
        {/* Hero */}
        <section className="pt-36 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-4">
              Journal & Resources
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-wide mb-6">
              The Blog
            </h1>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed max-w-xl mx-auto">
              Tips, stories, and everything you need to know before booking your session — from an Austin photographer who&apos;s seen it all.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-[#e8e4df]" />
        </div>

        {/* Posts Grid */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          {posts.length === 0 ? (
            <p className="text-center font-sans text-[#6b6b6b]">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  {/* Post Image */}
                  {post.image && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative w-full aspect-[16/9] overflow-hidden mb-6 bg-[#e8e4df]">
                        <Image
                          src={post.image}
                          alt={post.title ?? ""}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </Link>
                  )}

                  {/* Meta */}
                  <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8b6f5e] mb-3">
                    {post.date ? formatDate(post.date) : ""}
                  </p>

                  {/* Title */}
                  <h2 className="font-serif text-2xl text-[#1a1a1a] mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#8b6f5e] transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="font-sans text-[14px] text-[#6b6b6b] leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#8b6f5e] hover:border-[#8b6f5e] transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="bg-[#1a1a1a] text-[#faf9f7] py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#c9b99a] mb-4">
              Ready to Book?
            </p>
            <h2 className="font-serif text-4xl mb-6">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="font-sans text-[14px] text-[#a0a0a0] mb-10 leading-relaxed">
              Have questions or ready to claim your date? Reach out and I&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase bg-[#8b6f5e] text-white px-10 py-4 hover:bg-[#c9b99a] hover:text-[#1a1a1a] transition-all duration-300"
            >
              Start the Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
