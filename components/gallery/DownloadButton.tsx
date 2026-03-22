'use client';

import { useState } from 'react';
import { GalleryData, GalleryImage } from './GalleryClient';

interface SingleProps {
  gallery: GalleryData;
  mode: 'single';
  image: GalleryImage;
  iconOnly?: boolean;
  onBulkDownload?: never;
  images?: never;
}

interface BulkProps {
  gallery: GalleryData;
  mode: 'bulk';
  images: GalleryImage[];
  onBulkDownload?: never;
  iconOnly?: boolean;
  image?: never;
  favoriteIds?: string[];
  label?: string;
}

type Props = SingleProps | BulkProps;

export default function DownloadButton(props: Props) {
  const { gallery, mode, iconOnly } = props;
  const image = mode === 'single' ? props.image : undefined;
  const favoriteIds = mode === 'bulk' ? props.favoriteIds : undefined;
  const label = mode === 'bulk' ? props.label : undefined;
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const isPinVerified = () => {
    if (!gallery.downloadPin) return true;
    return sessionStorage.getItem(`gallery_pin_${gallery.id}`) === 'verified';
  };

  const downloadZip = async (imageIds?: string[]) => {
    setDownloading(true);
    try {
      const body: { galleryId: string; imageIds?: string[]; mode?: string } = { galleryId: gallery.id };
      if (imageIds?.length) {
        body.imageIds = imageIds;
        body.mode = 'favorites';
      }
      const res = await fetch('/api/gallery/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // Get filename from Content-Disposition header
      const disposition = res.headers.get('Content-Disposition');
      const filename = disposition?.match(/filename="(.+)"/)?.[1] || 'photos.zip';
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Download failed:', e);
      alert('Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const downloadSingle = async () => {
    setDownloading(true);
    try {
      // Proxy through our API to avoid CORS
      const res = await fetch(`/api/gallery/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ galleryId: gallery.id, imageIds: [image!.id], mode: 'favorites' }),
      });
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = image!.filename || `photo-${image!.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch {
      alert('Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const executeDownload = () => {
    if (mode === 'single') {
      downloadSingle();
    } else {
      downloadZip(favoriteIds);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (downloading) return;
    if (isPinVerified()) {
      executeDownload();
      return;
    }
    setPendingAction(() => executeDownload);
    setShowPinModal(true);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === gallery.downloadPin) {
      sessionStorage.setItem(`gallery_pin_${gallery.id}`, 'verified');
      setShowPinModal(false);
      setPin('');
      setPinError('');
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
    } else {
      setPinError('Incorrect PIN. Please try again.');
    }
  };

  const buttonLabel = downloading
    ? 'Preparing...'
    : label || (mode === 'bulk' ? 'Download All' : 'Download');

  return (
    <>
      <button
        onClick={handleClick}
        disabled={downloading}
        title={mode === 'bulk' ? 'Download all photos as zip' : 'Download photo'}
        style={
          iconOnly
            ? {
                background: 'none',
                border: 'none',
                color: downloading ? '#c9b99a' : '#faf9f7',
                cursor: downloading ? 'wait' : 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: downloading ? 0.6 : 1,
              }
            : {
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: '#2a2a2a',
                color: downloading ? '#c9b99a' : '#faf9f7',
                border: '1px solid rgba(201,185,154,0.3)',
                borderRadius: '2px',
                fontFamily: '"Jost", sans-serif',
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase' as const,
                cursor: downloading ? 'wait' : 'pointer',
                opacity: downloading ? 0.8 : 1,
                whiteSpace: 'nowrap' as const,
              }
        }
      >
        {downloading ? <SpinnerIcon size={iconOnly ? 18 : 14} /> : <DownloadIcon size={iconOnly ? 18 : 14} />}
        {!iconOnly && <span>{buttonLabel}</span>}
      </button>

      {/* PIN Modal */}
      {showPinModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowPinModal(false); }}
        >
          <div style={{ background: '#1e1e1e', border: '1px solid rgba(201,185,154,0.2)', borderRadius: '4px', padding: '32px', maxWidth: '360px', width: '100%', textAlign: 'center' }}>
            <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.4rem', fontWeight: 300, color: '#faf9f7', margin: '0 0 8px' }}>
              Download PIN Required
            </h3>
            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', color: 'rgba(250,249,247,0.5)', margin: '0 0 24px' }}>
              Enter your download PIN to access the full-resolution photos.
            </p>
            <form onSubmit={handlePinSubmit}>
              <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter PIN" autoFocus
                style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,185,154,0.3)', borderRadius: '2px', color: '#faf9f7', fontFamily: '"Jost", sans-serif', fontSize: '18px', textAlign: 'center', letterSpacing: '4px', outline: 'none', boxSizing: 'border-box' as const, marginBottom: '12px' }}
              />
              {pinError && <p style={{ color: '#e07070', fontFamily: '"Jost", sans-serif', fontSize: '13px', marginBottom: '12px' }}>{pinError}</p>}
              <button type="submit" style={{ width: '100%', padding: '12px', background: '#c9b99a', color: '#1a1a1a', border: 'none', borderRadius: '2px', fontFamily: '"Jost", sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' as const, cursor: 'pointer' }}>
                Unlock Downloads
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function DownloadIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function SpinnerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animation: 'spin 1s linear infinite' }}>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
