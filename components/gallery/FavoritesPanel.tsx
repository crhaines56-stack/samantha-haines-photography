'use client';

import { useState } from 'react';
import { GalleryData, GalleryImage } from './GalleryClient';

interface Props {
  gallery: GalleryData;
  favoriteImages: GalleryImage[];
  favoriteNotes: Record<string, string>;
  onRemove: (imageId: string) => void;
  onClose: () => void;
}

export default function FavoritesPanel({
  gallery,
  favoriteImages,
  favoriteNotes,
  onRemove,
  onClose,
}: Props) {
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (favoriteImages.length === 0) return;
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/gallery/favorites', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          galleryId: gallery.id,
          slug: gallery.slug,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error ?? 'Something went wrong');
      }
    } catch {
      setError('Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const [downloadingFavs, setDownloadingFavs] = useState(false);

  const handleDownloadFavorites = async () => {
    setDownloadingFavs(true);
    try {
      const imageIds = favoriteImages.map((img) => img.id);
      const res = await fetch('/api/gallery/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ galleryId: gallery.id, imageIds, mode: 'favorites' }),
      });
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const disposition = res.headers.get('Content-Disposition');
      const filename = disposition?.match(/filename="(.+)"/)?.[1] || 'favorites.zip';
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch {
      alert('Download failed. Please try again.');
    } finally {
      setDownloadingFavs(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 200,
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(420px, 100vw)',
          background: '#1e1e1e',
          borderLeft: '1px solid rgba(201,185,154,0.2)',
          zIndex: 201,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid rgba(201,185,154,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.4rem',
                fontWeight: 300,
                color: '#faf9f7',
                margin: 0,
              }}
            >
              Your Favorites
            </h2>
            <p
              style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#c9b99a',
                margin: '4px 0 0',
                textTransform: 'uppercase',
              }}
            >
              {favoriteImages.length} {favoriteImages.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#faf9f7',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
          {favoriteImages.length === 0 ? (
            <p
              style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '13px',
                color: 'rgba(250,249,247,0.4)',
                textAlign: 'center',
                marginTop: '40px',
              }}
            >
              No favorites yet. Tap the heart icon on any photo.
            </p>
          ) : submitted ? (
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  color: '#faf9f7',
                  margin: '0 0 8px',
                }}
              >
                Favorites Submitted!
              </h3>
              <p
                style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '13px',
                  color: '#c9b99a',
                }}
              >
                Samantha has been notified of your selections.
              </p>
            </div>
          ) : (
            <>
              {/* Thumbnail grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '6px',
                  marginBottom: '24px',
                }}
              >
                {favoriteImages.map((img) => (
                  <div
                    key={img.id}
                    style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.thumbnailUrl}
                      alt={img.filename ?? ''}
                      style={{ width: '100%', height: '90px', objectFit: 'cover', display: 'block' }}
                    />
                    {favoriteNotes[img.id] && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'rgba(0,0,0,0.7)',
                          padding: '2px 4px',
                          fontSize: '9px',
                          fontFamily: '"Jost", sans-serif',
                          color: '#faf9f7',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {favoriteNotes[img.id]}
                      </div>
                    )}
                    <button
                      onClick={() => onRemove(img.id)}
                      style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        background: 'rgba(0,0,0,0.6)',
                        border: 'none',
                        color: '#faf9f7',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '16px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '11px',
                    letterSpacing: '1.5px',
                    color: '#c9b99a',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Message to Samantha (optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Any notes about your favorites..."
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,185,154,0.2)',
                    borderRadius: '2px',
                    color: '#faf9f7',
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13px',
                    padding: '10px',
                    resize: 'vertical',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {error && (
                <p
                  style={{
                    color: '#e07070',
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13px',
                    marginBottom: '12px',
                  }}
                >
                  {error}
                </p>
              )}
            </>
          )}
        </div>

        {/* Footer CTAs */}
        {!submitted && favoriteImages.length > 0 && (
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid rgba(201,185,154,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                padding: '14px',
                background: '#c9b99a',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '2px',
                fontFamily: '"Jost", sans-serif',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: submitting ? 'not-allowed' : 'pointer',
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? 'Submitting...' : `Submit Favorites (${favoriteImages.length})`}
            </button>

            {gallery.allowDownloads && (
              <button
                onClick={handleDownloadFavorites}
                style={{
                  padding: '12px',
                  background: 'transparent',
                  color: '#faf9f7',
                  border: '1px solid rgba(201,185,154,0.3)',
                  borderRadius: '2px',
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {downloadingFavs ? 'Preparing zip...' : 'Download Favorites'}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
