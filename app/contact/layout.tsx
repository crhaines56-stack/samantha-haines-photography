import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session | Samantha Haines Photography",
  description:
    "Ready to book your Austin portrait session? Contact Samantha Haines Photography to schedule your boudoir, family, senior, newborn, maternity, or headshot session.",
  alternates: { canonical: "https://www.samanthahainesphotography.com/contact" },
  openGraph: {
    title: "Book a Session | Samantha Haines Photography",
    description:
      "Book your Austin portrait session today. Hair & makeup always included.",
    url: "https://www.samanthahainesphotography.com/contact",
    images: [
      {
        url: "https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg",
        width: 1200,
        height: 630,
        alt: "Samantha Haines Photography Austin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Session | Samantha Haines Photography",
    description: "Book your Austin portrait session today. Hair & makeup always included.",
    images: ["https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
