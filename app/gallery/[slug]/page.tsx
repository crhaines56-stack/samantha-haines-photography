import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGallery, getGalleryImages, getGallerySets } from '@/lib/gallery';
import GalleryClient from '@/components/gallery/GalleryClient';
import PortfolioGalleryClient from '@/components/ui/PortfolioGalleryClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Portfolio categories (static, no DB lookup needed)
const categoryLabels: Record<string, string> = {
  boudoir: 'Boudoir',
  senior: 'Senior Portraits',
  family: 'Family',
  maternity: 'Maternity & Newborn',
  branding: 'Branding & Headshots',
};

const categoryServiceLinks: Record<string, string> = {
  boudoir: '/boudoir-photographer-austin',
  senior: '/senior-portrait-photographer-austin',
  family: '/family-photographer-austin',
  maternity: '/maternity-photographer-austin',
  branding: '/headshots-branding-photographer-austin',
};

const categoryHeroes: Record<string, string> = {
  boudoir: 'https://res.cloudinary.com/du67vy39a/image/upload/v1784506567/shp/boudoir/shp/boudoir/hero.jpg',
  senior: 'https://res.cloudinary.com/du67vy39a/image/upload/v1775364303/shp/senior/shp/senior/hero.jpg',
  family: 'https://res.cloudinary.com/du67vy39a/image/upload/v1775364397/shp/family/shp/family/hero.jpg',
  maternity: 'https://res.cloudinary.com/du67vy39a/image/upload/v1784506229/shp/newborn/shp/newborn/hero.jpg',
  branding: 'https://res.cloudinary.com/du67vy39a/image/upload/v1775364413/shp/headshots/shp/headshots/hero.jpg',
};

const siteOrigin = 'https://samanthahainesphotography.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Portfolio category pages are public image grids. robots.txt disallows
  // /gallery/, so the HTML must not ask to be indexed.
  if (categoryLabels[slug]) {
    const label = categoryLabels[slug];
    const canonical = `${siteOrigin}/gallery/${slug}`;
    const image = categoryHeroes[slug];
    return {
      title: `${label} Portfolio`,
      description: `Full ${label.toLowerCase()} portfolio — Samantha Haines Photography, Austin TX.`,
      alternates: { canonical },
      robots: { index: false, follow: false },
      openGraph: {
        title: `${label} Portfolio`,
        description: `Full ${label.toLowerCase()} portfolio — Samantha Haines Photography, Austin TX.`,
        url: canonical,
        images: [{ url: image, width: 1200, height: 630, alt: `${label} portfolio` }],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${label} Portfolio`,
        description: `Full ${label.toLowerCase()} portfolio — Samantha Haines Photography, Austin TX.`,
        images: [image],
      },
    };
  }

  // Client gallery
  const gallery = await getGallery(slug);
  if (!gallery) {
    return { robots: { index: false, follow: false } };
  }
  const canonical = `${siteOrigin}/gallery/${slug}`;
  const image = gallery.cover_image_url || categoryHeroes.family;
  return {
    title: `${gallery.client_name}'s Gallery`,
    alternates: { canonical },
    robots: { index: false, follow: false },
    openGraph: {
      title: `${gallery.client_name}'s Gallery`,
      url: canonical,
      images: [{ url: image, alt: `${gallery.client_name}'s gallery` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${gallery.client_name}'s Gallery`,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  return ['boudoir', 'senior', 'family', 'maternity', 'branding'].map((slug) => ({
    slug,
  }));
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;

  // Portfolio category pages
  if (categoryLabels[slug]) {
    const label = categoryLabels[slug];
    const serviceLink = categoryServiceLinks[slug] || '/contact';
    return (
      <PortfolioGalleryClient
        category={slug}
        label={label}
        serviceLink={serviceLink}
      />
    );
  }

  // Client gallery (DB lookup)
  const gallery = await getGallery(slug);

  if (!gallery) {
    notFound();
  }

  // Check expiry
  const isExpired =
    gallery.is_expired ||
    (gallery.expires_at && new Date(gallery.expires_at) < new Date());

  if (isExpired) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '16px',
          padding: '40px',
          textAlign: 'center',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
        }}
      >
        <h1 style={{ color: '#faf9f7', fontSize: '2rem', fontWeight: 300 }}>
          This Gallery Has Expired
        </h1>
        <p style={{ color: '#c9b99a', fontSize: '1rem', maxWidth: '480px' }}>
          This gallery is no longer available. Please contact Samantha if you believe this
          is an error.
        </p>
        <a
          href="mailto:samantha@samanthahainesphotography.com"
          style={{
            color: '#c9b99a',
            textDecoration: 'none',
            borderBottom: '1px solid #c9b99a',
            paddingBottom: '2px',
          }}
        >
          samantha@samanthahainesphotography.com
        </a>
      </div>
    );
  }

  const [images, sets] = await Promise.all([
    getGalleryImages(gallery.id),
    getGallerySets(gallery.id),
  ]);

  const galleryData = {
    id: gallery.id,
    slug: gallery.slug,
    clientName: gallery.client_name,
    sessionType: gallery.session_type,
    coverImageUrl: gallery.cover_image_url ?? null,
    isShareable: gallery.is_shareable,
    allowDownloads: gallery.allow_downloads,
    downloadPin: gallery.download_pin ?? null,
    watermarkPreviews: gallery.watermark_previews,
    collectionPassword: gallery.is_shareable ? (gallery.collection_password ?? null) : null,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imagesData = images.map((img: any) => ({
    id: img.id as string,
    setId: img.set_id as string | null,
    cloudinaryPublicId: img.cloudinary_public_id as string,
    cloudinaryUrl: img.cloudinary_url as string,
    thumbnailUrl: img.thumbnail_url as string,
    previewUrl: img.preview_url as string,
    originalUrl: img.original_url as string,
    filename: img.filename as string | null,
    width: img.width as number | null,
    height: img.height as number | null,
    displayOrder: img.display_order as number,
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setsData = sets.map((s: any) => ({
    id: s.id as string,
    name: s.name as string,
    displayOrder: s.display_order as number,
    description: s.description as string | null,
  }));

  return (
    <GalleryClient
      gallery={galleryData}
      initialImages={imagesData}
      sets={setsData}
    />
  );
}
