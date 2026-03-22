import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  type PostItem = Record<string, unknown> & { slug: string };
  const posts = getAllPosts() as PostItem[];
  return posts.map((post: PostItem) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { frontmatter } = getPostBySlug(params.slug);
    return {
      title: `${frontmatter.title} | Samantha Haines Photography`,
      description: frontmatter.description,
      alternates: {
        canonical: `https://samanthahainesphoto.com/blog/${params.slug}`,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        url: `https://samanthahainesphoto.com/blog/${params.slug}`,
        siteName: "Samantha Haines Photography",
        images: frontmatter.image ? [{ url: frontmatter.image }] : [],
        type: "article",
        publishedTime: frontmatter.date,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: PageProps) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  // Build FAQPage schema if faqs in frontmatter
  const faqSchema =
    frontmatter.faqs && frontmatter.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: frontmatter.faqs.map((faq: { q: string; a: string }) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <>
      <Header />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="bg-[#faf9f7] min-h-screen">
        {/* Hero Image */}
        {frontmatter.image && (
          <div className="relative w-full h-[50vh] md:h-[60vh] bg-[#1a1a1a]">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              priority
              className="object-cover opacity-80"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/60" />
          </div>
        )}

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          {/* Back Link */}
          <Link
            href="/blog"
            className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8b6f5e] hover:text-[#1a1a1a] transition-colors mb-10 inline-flex items-center gap-2"
          >
            ← Back to Blog
          </Link>

          {/* Meta */}
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8b6f5e] mt-8 mb-4">
            {frontmatter.date ? formatDate(frontmatter.date) : ""}
          </p>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-8">
            {frontmatter.title}
          </h1>

          <div className="h-px bg-[#e8e4df] mb-10" />

          {/* MDX Content */}
          <div className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#1a1a1a] prose-headings:font-normal
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:font-sans prose-p:text-[15px] prose-p:text-[#4a4a4a] prose-p:leading-relaxed prose-p:mb-5
            prose-a:text-[#8b6f5e] prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ul:pl-6 prose-li:font-sans prose-li:text-[15px] prose-li:text-[#4a4a4a]
            prose-strong:text-[#1a1a1a] prose-strong:font-semibold">
            <MDXRemote source={content} />
          </div>

          <div className="h-px bg-[#e8e4df] mt-16 mb-10" />

          {/* Author Block */}
          <div className="flex items-start gap-4 py-8 border border-[#e8e4df] px-6">
            <div>
              <p className="font-serif text-lg text-[#1a1a1a] mb-1">Samantha Haines</p>
              <p className="font-sans text-[13px] text-[#6b6b6b] leading-relaxed">
                Austin-based portrait photographer specializing in boudoir, senior portraits, family, newborn, maternity, and headshots. Samantha has photographed thousands of clients across the Austin area and brings warmth, artistry, and intention to every session.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
