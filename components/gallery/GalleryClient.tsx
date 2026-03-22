'use client';

import { useState, useEffect } from 'react';
import PasswordGate from './PasswordGate';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';
import FavoritesPanel from './FavoritesPanel';

export interface GalleryImage {
  id: string;
  setId: string | null;
  cloudinaryPublicId: string;
  cloudinaryUrl: string;
  thumbnailUrl: string;
  previewUrl: string;
  originalUrl: string;
  filename: string | null;
  width: number | null;
  height: number | null;
  displayOrder: number;
}

export interface GallerySet {
  id: string;
  name: string;
  displayOrder: number;
  description: string | null;
}

export interface GalleryData {
  id: string;
  slug: string;
  clientName: string;
  sessionType: string;
  coverImageUrl: string | null;
  isShareable: boolean;
  allowDownloads: boolean;
  downloadPin: string | null;
  watermarkPreviews: boolean;
  collectionPassword: string | null;
}

interface Props {
  gallery: GalleryData;
  initialImages: GalleryImage[];
  sets: GallerySet[];
}

export default function GalleryClient({ gallery, initialImages, sets }: Props) {
  const [accessType, setAccessType] = useState<'client' | 'guest' | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSetId, setActiveSetId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [favoriteNotes, setFavoriteNotes] = useState<Record<string, string>>({});
  const [showFavorites, setShowFavorites] = useState(false);

  // Check session storage for existing access
  useEffect(() => {
    const stored = sessionStorage.getItem(`gallery_auth_${gallery.slug}`);
    if (stored === 'client' || stored === 'guest') {
      setAccessType(stored);
    }
  }, [gallery.slug]);

  const handleAuth = (type: 'client' | 'guest') => {
    setAccessType(type);
    sessionStorage.setItem(`gallery_auth_${gallery.slug}`, type);
  };

  const filteredImages = activeSetId
    ? initialImages.filter((img) => img.setId === activeSetId)
    : initialImages;

  const toggleFavorite = (imageId: string, note?: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(imageId)) {
        next.delete(imageId);
      } else {
        next.add(imageId);
        if (note) setFavoriteNotes((n) => ({ ...n, [imageId]: note }));
      }
      return next;
    });

    // Persist to server
    fetch('/api/gallery/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        galleryId: gallery.id,
        imageId,
        slug: gallery.slug,
        action: favorites.has(imageId) ? 'remove' : 'add',
        note,
      }),
    }).catch(console.error);
  };

  const removeFavorite = (imageId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.delete(imageId);
      return next;
    });
    fetch('/api/gallery/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        galleryId: gallery.id,
        imageId,
        slug: gallery.slug,
        action: 'remove',
      }),
    }).catch(console.error);
  };

  if (!accessType) {
    return (
      <PasswordGate
        gallery={gallery}
        onAuth={handleAuth}
      />
    );
  }

  const favoriteImages = initialImages.filter((img) => favorites.has(img.id));

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a1a', color: '#faf9f7' }}>
      <GalleryGrid
        gallery={gallery}
        images={filteredImages}
        allImages={initialImages}
        sets={sets}
        activeSetId={activeSetId}
        onSetChange={setActiveSetId}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onOpenLightbox={setLightboxIndex}
        onShowFavorites={() => setShowFavorites(true)}
        accessType={accessType}
      />

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          gallery={gallery}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      {showFavorites && (
        <FavoritesPanel
          gallery={gallery}
          favoriteImages={favoriteImages}
          favoriteNotes={favoriteNotes}
          onRemove={removeFavorite}
          onClose={() => setShowFavorites(false)}
        />
      )}
    </div>
  );
}
