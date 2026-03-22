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
  onBulkDownload: () => void;
  iconOnly?: boolean;
  image?: never;
}

type Props = SingleProps | BulkProps;

export default function DownloadButton({ gallery, mode, image, onBulkDownload, iconOnly }: Props) {
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const isPinVerified = () => {
    if (!gallery.downloadPin) return true;
    return sessionStorage.getItem(`gallery_pin_${gallery.id}`) === 'verified';
  };

  const executeDownload = async () => {
    if (mode === 'single' && image) {
      try {
        // Fetch as blob to force download to Downloads folder (not open in tab)
        const response = await fetch(image.originalUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = image.filename ?? `photo-${image.id}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch {
        // Fallback: direct download attribute
        const link = document.createElement('a');
        link.href = image.originalUrl;
        link.download = image.filename ?? `photo-${image.id}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else if (mode === 'bulk' && onBulkDownload) {
      onBulkDownload();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isPinVerified()) {
      executeDownload();
      return;
    }

    // Need PIN verification
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

  return (
    <>
      <button
        onClick={handleClick}
        title={mode === 'bulk' ? 'Download all photos' : 'Download photo'}
        style={
          iconOnly
            ? {
                background: 'none',
                border: 'none',
                color: '#faf9f7',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            : {
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: '#2a2a2a',
                color: '#faf9f7',
                border: '1px solid rgba(201,185,154,0.3)',
                borderRadius: '2px',
                fontFamily: '"Jost", sans-serif',
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }
        }
      >
        <DownloadIcon size={iconOnly ? 18 : 14} />
        {!iconOnly && <span>{mode === 'bulk' ? 'Download All' : 'Download'}</span>}
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
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPinModal(false);
          }}
        >
          <div
            style={{
              background: '#1e1e1e',
              border: '1px solid rgba(201,185,154,0.2)',
              borderRadius: '4px',
              padding: '32px',
              maxWidth: '360px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.4rem',
                fontWeight: 300,
                color: '#faf9f7',
                margin: '0 0 8px',
              }}
            >
              Download PIN Required
            </h3>
            <p
              style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '13px',
                color: 'rgba(250,249,247,0.5)',
                margin: '0 0 24px',
              }}
            >
              Enter your download PIN to access the full-resolution photos.
            </p>
            <form onSubmit={handlePinSubmit}>
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(201,185,154,0.3)',
                  borderRadius: '2px',
                  color: '#faf9f7',
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '18px',
                  textAlign: 'center',
                  letterSpacing: '4px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  marginBottom: '12px',
                }}
              />
              {pinError && (
                <p style={{ color: '#e07070', fontFamily: '"Jost", sans-serif', fontSize: '13px', marginBottom: '12px' }}>
                  {pinError}
                </p>
              )}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#c9b99a',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '2px',
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
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
