'use client';

import { useState } from 'react';
import { GalleryData } from './GalleryClient';

interface Props {
  gallery: GalleryData;
  onAuth: (accessType: 'client' | 'guest') => void;
}

export default function PasswordGate({ gallery, onAuth }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/gallery/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: gallery.slug, password }),
      });
      const data = await res.json();

      if (!data.accessType) {
        setError('Incorrect password. Please try again.');
        setLoading(false);
        return;
      }

      onAuth(data.accessType as 'client' | 'guest');
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blurred cover image background */}
      {gallery.coverImageUrl && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${gallery.coverImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px) brightness(0.3)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '420px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Logo / Brand */}
        <div style={{ marginBottom: '40px' }}>
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#c9b99a',
              marginBottom: '12px',
            }}
          >
            Samantha Haines Photography
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 300,
              color: '#faf9f7',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {gallery.clientName}&apos;s Gallery
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
            style={{
              width: '100%',
              padding: '14px 18px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,185,154,0.3)',
              borderRadius: '2px',
              color: '#faf9f7',
              fontSize: '16px',
              fontFamily: '"Jost", sans-serif',
              letterSpacing: '2px',
              outline: 'none',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          />

          {error && (
            <p
              style={{
                color: '#e07070',
                fontSize: '13px',
                marginTop: '10px',
                fontFamily: '"Jost", sans-serif',
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '16px',
              width: '100%',
              padding: '14px',
              background: '#c9b99a',
              color: '#1a1a1a',
              border: 'none',
              borderRadius: '2px',
              fontSize: '13px',
              fontFamily: '"Jost", sans-serif',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            {loading ? 'Entering...' : 'Enter Gallery'}
          </button>
        </form>

        {gallery.isShareable && (
          <p
            style={{
              marginTop: '24px',
              fontFamily: '"Jost", sans-serif',
              fontSize: '12px',
              color: 'rgba(250,249,247,0.4)',
              letterSpacing: '1px',
            }}
          >
            Guests may also enter with the shared gallery password
          </p>
        )}
      </div>
    </div>
  );
}
