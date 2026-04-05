export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Samantha Haines Photography",
    "description": "Premium boutique portrait studio in Austin, TX specializing in boudoir, family, senior, newborn, maternity, and headshot photography.",
    "url": "https://www.samanthahainesphotography.com",
    "telephone": "",
    "email": "samantha@samanthahainesphotography.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2302 Jacks Pass",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78732",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3862",
      "longitude": "-97.8972"
    },
    "priceRange": "$$$",
    "areaServed": [
      { "@type": "City", "name": "Austin" },
      { "@type": "Place", "name": "Steiner Ranch" },
      { "@type": "City", "name": "Cedar Park" },
      { "@type": "City", "name": "Round Rock" },
      { "@type": "City", "name": "Lakeway" },
      { "@type": "City", "name": "Westlake" },
      { "@type": "City", "name": "Georgetown" },
      { "@type": "City", "name": "Dripping Springs" }
    ],
    "openingHours": "Mo-Sa 09:00-18:00",
    "image": "https://res.cloudinary.com/du67vy39a/image/upload/v1775364428/shp/about/shp/about/samantha.jpg",
    "sameAs": [
      "https://www.instagram.com/samanthahainesphotography",
      "https://www.facebook.com/samanthahainesphotography"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
