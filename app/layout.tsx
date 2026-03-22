import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Dancing_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samanthahainesphotography.com"),
  title: {
    default: "Samantha Haines Photography | Austin, TX Portrait Photographer",
    template: "%s | Samantha Haines Photography",
  },
  description:
    "Award-winning portrait photographer in Austin, TX. Specializing in boudoir, senior portraits, family, newborn, maternity, and headshots. Serving Steiner Ranch, Cedar Park, Westlake, and surrounding areas.",
  keywords: [
    "Austin photographer",
    "Austin portrait photographer",
    "boudoir photographer Austin",
    "senior portrait photographer Austin",
    "family photographer Austin",
    "Steiner Ranch photographer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.samanthahainesphotography.com",
    siteName: "Samantha Haines Photography",
    title: "Samantha Haines Photography | Austin, TX Portrait Photographer",
    description:
      "Award-winning portrait photographer in Austin, TX specializing in boudoir, senior portraits, family, newborn, maternity, and headshots.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samantha Haines Photography | Austin, TX",
    description: "Award-winning portrait photographer in Austin, TX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${dancing.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
