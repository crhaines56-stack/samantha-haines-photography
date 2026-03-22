'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { GalleryData, GalleryImage } from './GalleryClient';
import DownloadButton from './DownloadButton';
import ShareButton from './ShareButton';

interface Props {
  images: GalleryImage[];
  currentIndex: number;
  gallery: GalleryData;
  favorites: Set<string>;
  onToggleFavorite: (imageId: string) => void;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  gallery,
  favorites,
  onToggleFavorite,
  onClose,
  onNavigate,
}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const image = images[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setIsLoaded(false);
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsLoaded(false);
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  if (!image) return null;

  const isFavorited = favorites.has(image.id);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10,10,10,0.97)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: '#faf9f7',
          fontSize: '28px',
          cursor: 'pointer',
          zIndex: 10,
          padding: '8px',
          lineHeight: 1,
        }}
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev arrow */}
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          style={arrowStyle('left')}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '60px 80px',
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={image.id}
          src={image.previewUrl}
          alt={image.filename ?? `Photo ${currentIndex + 1}`}
          onLoad={() => setIsLoaded(true)}
          style={{
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 160px)',
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Next arrow */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={goNext}
          style={arrowStyle('right')}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Bottom bar */}
      <div
        style={{
          width: '100%',
          padding: '12px 24px',
          background: 'rgba(26,26,26,0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(201,185,154,0.1)',
          boxSizing: 'border-box',
        }}
      >
        {/* Counter */}
        <span
          style={{
            fontFamily: '"Jost", sans-serif',
            fontSize: '12px',
            letterSpacing: '2px',
            color: 'rgba(250,249,247,0.5)',
          }}
        >
          {currentIndex + 1} / {images.length}
        </span>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Heart / Favorite */}
          <button
            onClick={() => onToggleFavorite(image.id)}
            style={actionButtonStyle}
            title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <HeartIcon filled={isFavorited} size={20} />
          </button>

          {/* Note */}
          <button
            onClick={() => setShowNote(!showNote)}
            style={actionButtonStyle}
            title="Add note"
          >
            <NoteIcon size={18} />
          </button>

          {/* Share */}
          {gallery.isShareable && (
            <ShareButton gallery={gallery} iconOnly />
          )}

          {/* Download */}
          {gallery.allowDownloads && (
            <DownloadButton
              gallery={gallery}
              mode="single"
              image={image}
              iconOnly
            />
          )}
        </div>
      </div>

      {/* Note panel */}
      {showNote && (
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '24px',
            background: '#2a2a2a',
            border: '1px solid rgba(201,185,154,0.3)',
            borderRadius: '4px',
            padding: '12px',
            minWidth: '240px',
          }}
        >
          <textarea
            placeholder="Add a note to this photo..."
            rows={3}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: '#faf9f7',
              fontFamily: '"Jost", sans-serif',
              fontSize: '13px',
              resize: 'none',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
      )}
    </div>
  );
}

const arrowStyle = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'absolute',
  [side]: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#faf9f7',
  fontSize: '36px',
  lineHeight: 1,
  width: '44px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '2px',
  zIndex: 10,
  transition: 'background 0.2s',
});

const actionButtonStyle: React.CSSProperties = {
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#c9b99a' : 'none'} stroke={filled ? '#c9b99a' : '#faf9f7'} strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function NoteIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#faf9f7" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
