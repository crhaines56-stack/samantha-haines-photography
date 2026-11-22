import type { Metadata } from "next";

// robots.txt disallows /gallery/. These pages stay out of the index so the
// HTML robots tag matches that rule. Public portfolio grids and private
// client galleries both live under this path.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
