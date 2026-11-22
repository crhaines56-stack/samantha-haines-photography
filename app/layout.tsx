import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import HeroScrollManager from "@/components/ui/HeroScrollManager";

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

const HOMEPAGE_HERO =
  "https://res.cloudinary.com/du67vy39a/image/upload/v1775364356/shp/homepage/shp/homepage/hero.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://samanthahainesphotography.com"),
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
    url: "https://samanthahainesphotography.com",
    siteName: "Samantha Haines Photography",
    title: "Samantha Haines Photography | Austin, TX Portrait Photographer",
    description:
      "Award-winning portrait photographer in Austin, TX specializing in boudoir, senior portraits, family, newborn, maternity, and headshots.",
    images: [
      {
        url: HOMEPAGE_HERO,
        width: 1200,
        height: 630,
        alt: "Samantha Haines Photography. Austin portrait photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samantha Haines Photography | Austin, TX",
    description: "Award-winning portrait photographer in Austin, TX.",
    images: [HOMEPAGE_HERO],
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

function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  // GA4 IDs look like G-XXXXXXXX. Anything else, including a missing
  // value that stringifies to "undefined", must not be rendered.
  if (!measurementId || !measurementId.startsWith("G-")) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `}
      </Script>
    </>
  );
}

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
      <body className="antialiased">
        <HeroScrollManager />
        <LocalBusinessSchema />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
