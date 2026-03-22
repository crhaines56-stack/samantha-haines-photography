'use client';

import { useRef, useCallback } from 'react';
import { GalleryData, GalleryImage, GallerySet } from './GalleryClient';
import DownloadButton from './DownloadButton';

interface Props {
  gallery: GalleryData;
  images: GalleryImage[];
  allImages: GalleryImage[];
  sets: GallerySet[];
  activeSetId: string | null;
  onSetChange: (setId: string | null) => void;
  favorites: Set<string>;
  onToggleFavorite: (imageId: string) => void;
  onOpenLightbox: (index: number) => void;
  onShowFavorites: () => void;
  accessType: 'client' | 'guest';
}

export default function GalleryGrid({
  gallery,
  images,
  sets,
  activeSetId,
  onSetChange,
  favorites,
  onToggleFavorite,
  onOpenLightbox,
  onShowFavorites,
}: Props) {
  const headerRef = useRef<HTMLDivElement>(null);

  // Download All is handled by DownloadButton via /api/gallery/download (server-side zip)
  const handleDownloadAll = useCallback(() => {}, []);

  return (
    <div>
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(26,26,26,0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(201,185,154,0.15)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 300,
              color: '#faf9f7',
              margin: 0,
            }}
          >
            {gallery.clientName}&apos;s {gallery.sessionType} Gallery
          </h1>
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#c9b99a',
              margin: '4px 0 0',
              textTransform: 'uppercase',
            }}
          >
            {images.length} {images.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {/* Favorites button */}
          <button
            onClick={onShowFavorites}
            style={buttonStyle('#2a2a2a', '#faf9f7')}
          >
            <HeartIcon filled={favorites.size > 0} />
            <span>Favorites {favorites.size > 0 ? `(${favorites.size})` : ''}</span>
          </button>

          {/* Download all */}
          {gallery.allowDownloads && (
            <DownloadButton
              gallery={gallery}
              mode="bulk"
              images={images}
            />
          )}
        </div>
      </div>

      {/* Set tabs */}
      {sets.length > 1 && (
        <div
          style={{
            display: 'flex',
            gap: '0',
            overflowX: 'auto',
            borderBottom: '1px solid rgba(201,185,154,0.15)',
            padding: '0 24px',
            background: '#1a1a1a',
          }}
        >
          <TabButton
            label="All Photos"
            active={activeSetId === null}
            onClick={() => onSetChange(null)}
          />
          {sets.map((s) => (
            <TabButton
              key={s.id}
              label={s.name}
              active={activeSetId === s.id}
              onClick={() => onSetChange(s.id)}
            />
          ))}
        </div>
      )}

      {/* Masonry grid */}
      <div
        style={{
          padding: '16px',
          columns: 'var(--gallery-cols, 2)',
          columnGap: '8px',
        }}
        className="gallery-masonry"
      >
        {images.map((img, index) => (
          <GalleryThumbnail
            key={img.id}
            image={img}
            index={index}
            isFavorited={favorites.has(img.id)}
            allowDownload={gallery.allowDownloads}
            gallery={gallery}
            onOpen={() => onOpenLightbox(index)}
            onToggleFavorite={() => onToggleFavorite(img.id)}
          />
        ))}
      </div>

      <style>{`
        .gallery-masonry {
          --gallery-cols: 2;
        }
        @media (min-width: 640px) {
          .gallery-masonry { --gallery-cols: 3; }
        }
        @media (min-width: 1024px) {
          .gallery-masonry { --gallery-cols: 4; }
        }
      `}</style>
    </div>
  );
}

function GalleryThumbnail({
  image,
  index,
  isFavorited,
  allowDownload,
  gallery,
  onOpen,
  onToggleFavorite,
}: {
  image: GalleryImage;
  index: number;
  isFavorited: boolean;
  allowDownload: boolean;
  gallery: GalleryData;
  onOpen: () => void;
  onToggleFavorite: () => void;
}) {
  return (
    <div
      style={{
        position: 'relative',
        breakInside: 'avoid',
        marginBottom: '8px',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '2px',
        background: '#2a2a2a',
      }}
      className="gallery-thumb"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.thumbnailUrl}
        alt={image.filename ?? `Photo ${index + 1}`}
        loading="lazy"
        onClick={onOpen}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transition: 'transform 0.3s ease',
        }}
        className="gallery-thumb-img"
      />

      {/* Overlay icons */}
      <div
        className="gallery-thumb-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
          opacity: 0,
          transition: 'opacity 0.2s',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
          title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          style={iconButtonStyle}
        >
          <HeartIcon filled={isFavorited} size={18} />
        </button>

        {allowDownload && (
          <DownloadButton
            gallery={gallery}
            mode="single"
            image={image}
            iconOnly
          />
        )}
      </div>

      <style>{`
        .gallery-thumb:hover .gallery-thumb-overlay { opacity: 1 !important; }
        .gallery-thumb:hover .gallery-thumb-img { transform: scale(1.02); }
        .gallery-thumb-overlay { cursor: default; }
      `}</style>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '12px 20px',
        background: 'none',
        border: 'none',
        borderBottom: active ? '2px solid #c9b99a' : '2px solid transparent',
        color: active ? '#c9b99a' : 'rgba(250,249,247,0.5)',
        fontFamily: '"Jost", sans-serif',
        fontSize: '12px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s, border-color 0.2s',
      }}
    >
      {label}
    </button>
  );
}

const buttonStyle = (bg: string, color: string): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 14px',
  background: bg,
  color,
  border: '1px solid rgba(201,185,154,0.3)',
  borderRadius: '2px',
  fontFamily: '"Jost", sans-serif',
  fontSize: '11px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
});

const iconButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#faf9f7',
  cursor: 'pointer',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function HeartIcon({ filled, size = 16 }: { filled: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#c9b99a' : 'none'} stroke={filled ? '#c9b99a' : 'currentColor'} strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
