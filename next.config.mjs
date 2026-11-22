/** @type {import('next').NextConfig} */
const legacyRedirects = [
  ["/headshotsbranding", "/headshots-branding-photographer-austin"],
  ["/familyportraits", "/family-photographer-austin"],
  ["/newborn-and-maternity-portraits", "/maternity-photographer-austin"],
  ["/austinseniorportraits", "/senior-portrait-photographer-austin"],
  ["/happinessguarantee", "/blog/happiness-guarantee-photography"],
  ["/clientgalleries", "/contact"],
  ["/lifestylefamily", "/family-photographer-austin"],
  ["/portrait-package", "/"],
  ["/maternity-newborn-photographer-austin", "/maternity-photographer-austin"],
  ["/corporate-events-photographer-austin", "/contact"],
  ["/headshots-austin", "/headshots-branding-photographer-austin"],
];

const nextConfig = {
  // Next's built-in trailing-slash redirect runs before custom redirects and
  // would send /old-path/ to /old-path (still a 404) before the legacy rule.
  // Handling both here makes /old-path and /old-path/ 308 straight to the target.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...legacyRedirects.flatMap(([source, destination]) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
