import { notFound } from 'next/navigation';
import { getGallery, getGalleryImages, getGallerySets } from '@/lib/gallery';
import GalleryClient from '@/components/gallery/GalleryClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;
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

  // Serialize for client
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
    // Only expose password to client when gallery is shareable (not sensitive in that case)
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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const gallery = await getGallery(slug);
  if (!gallery) return {};
  return {
    title: `${gallery.client_name}'s Gallery | Samantha Haines Photography`,
    robots: { index: false, follow: false },
  };
}
