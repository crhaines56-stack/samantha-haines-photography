'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PhotoUploader, { UploadedImage } from '@/components/admin/PhotoUploader';

interface GalleryImage {
  id: string;
  thumbnail_url: string;
  filename: string | null;
  display_order: number;
  width: number | null;
  height: number | null;
}

interface GalleryInfo {
  id: string;
  slug: string;
  client_name: string;
  session_type: string;
}

const ADMIN_SECRET = 'shp-gallery-2026';

export default function ManageGalleryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [gallery, setGallery] = useState<GalleryInfo | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [originalOrder, setOriginalOrder] = useState<string[]>([]);
  const [orderChanged, setOrderChanged] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [showUploader, setShowUploader] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Drag state
  const dragIndex = useRef<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // Load gallery info
        const galRes = await fetch('/api/admin/galleries');
        const galData = await galRes.json();
        const found = galData.galleries?.find((g: GalleryInfo) => g.slug === slug);
        if (!found) {
          setError('Gallery not found');
          setLoading(false);
          return;
        }
        setGallery(found);

        // Load images (cookie is sent automatically by browser)
        const imgRes = await fetch(`/api/admin/galleries/${found.id}/images`);
        if (imgRes.ok) {
          const imgData = await imgRes.json();
          const imgs = imgData.images || [];
          setImages(imgs);
          setOriginalOrder(imgs.map((i: GalleryImage) => i.id));
        }
      } catch {
        setError('Failed to load gallery');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  // Check if order has changed
  useEffect(() => {
    const currentOrder = images.map((i) => i.id);
    const changed =
      currentOrder.length !== originalOrder.length ||
      currentOrder.some((id, idx) => id !== originalOrder[idx]);
    setOrderChanged(changed);
  }, [images, originalOrder]);

  // ── Drag and drop handlers ──────────────────────────────────────────────
  const handleDragStart = useCallback((index: number) => {
    dragIndex.current = index;
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    setDragOverIndex(null);
    if (dragIndex.current === null || dragIndex.current === dropIndex) return;

    setImages((prev) => {
      const next = [...prev];
      const [moved] = next.splice(dragIndex.current!, 1);
      next.splice(dropIndex, 0, moved);
      return next;
    });
    dragIndex.current = null;
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragOverIndex(null);
    dragIndex.current = null;
  }, []);

  // ── Save order ──────────────────────────────────────────────────────────
  async function saveOrder() {
    if (!gallery) return;
    setSaving(true);
    setSaveStatus('idle');
    try {
      const res = await fetch('/api/gallery/reorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-gallery-admin-secret': ADMIN_SECRET,
        },
        body: JSON.stringify({
          galleryId: gallery.id,
          imageOrder: images.map((i) => i.id),
        }),
      });
      if (res.ok) {
        setOriginalOrder(images.map((i) => i.id));
        setOrderChanged(false);
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2500);
      } else {
        setSaveStatus('error');
      }
    } catch {
      setSaveStatus('error');
    } finally {
      setSaving(false);
    }
  }

  // ── Delete image ────────────────────────────────────────────────────────
  async function deleteImage(imageId: string) {
    setDeletingId(imageId);
    try {
      const res = await fetch(`/api/gallery/images/${imageId}`, {
        method: 'DELETE',
        headers: { 'x-gallery-admin-secret': ADMIN_SECRET },
      });
      if (res.ok) {
        setImages((prev) => prev.filter((i) => i.id !== imageId));
        setOriginalOrder((prev) => prev.filter((id) => id !== imageId));
      }
    } catch {
      // silent
    } finally {
      setDeletingId(null);
      setConfirmDelete(null);
    }
  }

  // ── Upload complete handler ─────────────────────────────────────────────
  function handleUploadComplete(newImages: UploadedImage[]) {
    const mapped: GalleryImage[] = newImages.map((img, i) => ({
      id: img.id,
      thumbnail_url: img.thumbnailUrl,
      filename: img.filename,
      display_order: images.length + i,
      width: img.width,
      height: img.height,
    }));
    setImages((prev) => [...prev, ...mapped]);
    setOriginalOrder((prev) => [...prev, ...mapped.map((m) => m.id)]);
    setShowUploader(false);
  }

  // ── Styles ──────────────────────────────────────────────────────────────
  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    color: '#888',
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: '"Jost", sans-serif',
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Jost", sans-serif', color: '#888' }}>
        Loading…
      </div>
    );
  }

  if (error || !gallery) {
    return (
      <div style={{ minHeight: '100vh', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Jost", sans-serif', color: '#e05555' }}>
        {error || 'Gallery not found'}
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a1a', color: '#faf9f7', fontFamily: '"Jost", sans-serif' }}>
      {/* Top bar */}
      <div style={{
        background: '#111',
        borderBottom: '1px solid #2a2a2a',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/admin/galleries" style={{ color: '#666', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <div>
            <p style={{ margin: '0 0 2px', color: '#c9b99a', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Manage Photos
            </p>
            <h1 style={{ margin: 0, color: '#faf9f7', fontSize: '18px', fontWeight: 300, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              {gallery.client_name}
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Save order button — only shows when changed */}
          {orderChanged && (
            <button
              type="button"
              onClick={saveOrder}
              disabled={saving}
              style={{
                background: saving ? '#888' : '#c9b99a',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: '"Jost", sans-serif',
                fontWeight: 600,
                cursor: saving ? 'not-allowed' : 'pointer',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              {saving ? 'Saving…' : 'Save Order'}
            </button>
          )}
          {saveStatus === 'saved' && (
            <span style={{ color: '#5cc98a', fontSize: '13px' }}>✓ Order saved</span>
          )}
          {saveStatus === 'error' && (
            <span style={{ color: '#e05555', fontSize: '13px' }}>Save failed</span>
          )}

          <button
            type="button"
            onClick={() => setShowUploader(!showUploader)}
            style={{
              background: showUploader ? '#333' : 'transparent',
              color: '#888',
              border: '1px solid #444',
              borderRadius: '4px',
              padding: '10px 20px',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontFamily: '"Jost", sans-serif',
              cursor: 'pointer',
            }}
          >
            {showUploader ? 'Hide Uploader' : '+ Add Photos'}
          </button>

          <a
            href={`/gallery/${gallery.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '4px',
              color: '#666',
              fontSize: '12px',
              padding: '10px 16px',
              cursor: 'pointer',
              letterSpacing: '1px',
              fontFamily: '"Jost", sans-serif',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            View Gallery ↗
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 24px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Upload section */}
        {showUploader && (
          <div style={{
            background: '#222',
            border: '1px solid #2a2a2a',
            borderRadius: '6px',
            padding: '24px',
            marginBottom: '32px',
          }}>
            <p style={{ ...labelStyle, marginBottom: '16px' }}>Add Photos</p>
            <PhotoUploader
              galleryId={gallery.id}
              onUploadComplete={handleUploadComplete}
            />
          </div>
        )}

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#888', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 400 }}>
            {images.length} Photo{images.length !== 1 ? 's' : ''}
          </h2>
          {images.length > 0 && (
            <p style={{ margin: 0, color: '#555', fontSize: '12px' }}>
              Drag ⠿ handle to reorder
            </p>
          )}
        </div>

        {/* Empty state */}
        {images.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#555' }}>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>No photos yet</p>
            <button
              type="button"
              onClick={() => setShowUploader(true)}
              style={{
                background: 'transparent',
                border: '1px solid #444',
                borderRadius: '4px',
                color: '#888',
                padding: '10px 20px',
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: '"Jost", sans-serif',
                cursor: 'pointer',
              }}
            >
              Upload Photos
            </button>
          </div>
        )}

        {/* Photo grid */}
        {images.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}>
            {images.map((img, index) => (
              <div
                key={img.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                style={{
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  background: '#111',
                  border: `2px solid ${dragOverIndex === index ? '#c9b99a' : '#2a2a2a'}`,
                  opacity: dragIndex.current === index ? 0.4 : 1,
                  transition: 'border-color 0.15s, opacity 0.15s',
                  cursor: 'default',
                  aspectRatio: '1',
                }}
              >
                {/* Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.thumbnail_url}
                  alt={img.filename || `Photo ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Drag handle — top left */}
                <div
                  draggable={false}
                  onMouseDown={(e) => e.stopPropagation()}
                  style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    background: '#000000cc',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    cursor: 'grab',
                    fontSize: '16px',
                    lineHeight: 1,
                    color: '#faf9f7cc',
                    userSelect: 'none',
                    zIndex: 2,
                  }}
                  title="Drag to reorder"
                >
                  ⠿
                </div>

                {/* Delete button — top right */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmDelete(img.id);
                  }}
                  disabled={deletingId === img.id}
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    background: '#000000cc',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#faf9f7cc',
                    zIndex: 2,
                    lineHeight: 1,
                  }}
                  title="Delete photo"
                >
                  {deletingId === img.id ? '…' : '×'}
                </button>

                {/* Order number badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '6px',
                  left: '6px',
                  background: '#000000aa',
                  borderRadius: '3px',
                  padding: '2px 6px',
                  fontSize: '10px',
                  color: '#888',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete confirmation dialog */}
      {confirmDelete && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#000000cc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '24px',
        }}>
          <div style={{
            background: '#222',
            border: '1px solid #3a2a2a',
            borderRadius: '8px',
            padding: '32px',
            maxWidth: '400px',
            width: '100%',
            fontFamily: '"Jost", sans-serif',
          }}>
            <h3 style={{ margin: '0 0 12px', color: '#faf9f7', fontWeight: 300, fontSize: '18px', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Delete Photo?
            </h3>
            <p style={{ margin: '0 0 24px', color: '#888', fontSize: '13px', lineHeight: 1.6 }}>
              This will permanently delete the photo from the gallery and Cloudinary. This cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setConfirmDelete(null)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#888',
                  padding: '12px',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontFamily: '"Jost", sans-serif',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => deleteImage(confirmDelete)}
                style={{
                  flex: 1,
                  background: '#5a2a2a',
                  border: '1px solid #8a3a3a',
                  borderRadius: '4px',
                  color: '#e05555',
                  padding: '12px',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontFamily: '"Jost", sans-serif',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .photo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
