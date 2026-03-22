'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Gallery {
  id: string;
  slug: string;
  client_name: string;
  client_email: string | null;
  session_type: string;
  collection_password: string;
  client_password: string;
  download_pin: string | null;
  is_shareable: boolean;
  is_expired: boolean;
  expires_at: string | null;
  created_at: string;
  allow_downloads: boolean;
  watermark_previews: boolean;
}

const SESSION_TYPE_COLORS: Record<string, string> = {
  Boudoir: '#7b5ea7',
  Family: '#4a8b6f',
  'Senior Portraits': '#c9852a',
  Newborn: '#5a8bbf',
  Maternity: '#bf5a7a',
  'Headshots & Branding': '#5a8a5a',
};

function getStatusBadge(gallery: Gallery) {
  const expired =
    gallery.is_expired ||
    (gallery.expires_at && new Date(gallery.expires_at) < new Date());
  return expired ? 'Expired' : 'Active';
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'No expiry';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      title={`Copy ${label}`}
      style={{
        background: 'transparent',
        border: '1px solid #333',
        borderRadius: '4px',
        color: copied ? '#c9b99a' : '#888',
        fontSize: '11px',
        padding: '4px 10px',
        cursor: 'pointer',
        letterSpacing: '1px',
        fontFamily: '"Jost", sans-serif',
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? '✓ Copied' : label}
    </button>
  );
}

export default function AdminGalleriesPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const baseUrl = 'https://www.samanthahainesphotography.com';

  useEffect(() => {
    fetch('/api/admin/galleries')
      .then((r) => r.json())
      .then((data) => {
        if (data.galleries) setGalleries(data.galleries);
        else setError('Failed to load galleries');
      })
      .catch(() => setError('Failed to load galleries'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
      color: '#faf9f7',
      fontFamily: '"Jost", sans-serif',
    }}>
      {/* Top bar */}
      <div style={{
        background: '#111',
        borderBottom: '1px solid #2a2a2a',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <p style={{ margin: '0 0 2px', color: '#c9b99a', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Admin
          </p>
          <h1 style={{
            margin: 0,
            color: '#faf9f7',
            fontSize: '20px',
            fontWeight: 300,
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            letterSpacing: '0.5px',
          }}>
            Samantha Haines Photography
          </h1>
        </div>
        <Link
          href="/admin/galleries/new"
          style={{
            background: '#c9b99a',
            color: '#1a1a1a',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            fontSize: '12px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            fontWeight: 500,
            display: 'inline-block',
          }}
        >
          + New Gallery
        </Link>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2 style={{
            margin: 0,
            fontSize: '14px',
            color: '#888',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 400,
          }}>
            {loading ? 'Loading…' : `${galleries.length} Galleries`}
          </h2>
        </div>

        {error && (
          <div style={{ color: '#e05555', padding: '16px', background: '#1f1010', borderRadius: '4px', marginBottom: '24px' }}>
            {error}
          </div>
        )}

        {!loading && galleries.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#555' }}>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>No galleries yet</p>
            <Link href="/admin/galleries/new" style={{ color: '#c9b99a', fontSize: '13px' }}>
              Create your first gallery →
            </Link>
          </div>
        )}

        {/* Gallery cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {galleries.map((gallery) => {
            const status = getStatusBadge(gallery);
            const galleryUrl = `${baseUrl}/gallery/${gallery.slug}`;
            const sessionColor = SESSION_TYPE_COLORS[gallery.session_type] || '#555';

            return (
              <div
                key={gallery.id}
                style={{
                  background: '#222',
                  border: '1px solid #2a2a2a',
                  borderRadius: '6px',
                  padding: '20px 24px',
                }}
              >
                {/* Row 1: name + badges */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '17px', color: '#faf9f7', fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 400 }}>
                      {gallery.client_name}
                    </span>
                    <span style={{
                      background: sessionColor + '22',
                      color: sessionColor,
                      border: `1px solid ${sessionColor}44`,
                      borderRadius: '100px',
                      padding: '2px 10px',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>
                      {gallery.session_type}
                    </span>
                    <span style={{
                      background: status === 'Active' ? '#1d3a2a' : '#2a1a1a',
                      color: status === 'Active' ? '#5cc98a' : '#e05555',
                      border: `1px solid ${status === 'Active' ? '#2a5a3a' : '#5a2a2a'}`,
                      borderRadius: '100px',
                      padding: '2px 10px',
                      fontSize: '11px',
                      letterSpacing: '1px',
                    }}>
                      {status}
                    </span>
                  </div>

                  {/* Quick actions */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <CopyButton text={galleryUrl} label="Copy Link" />
                    <CopyButton
                      text={`Client: ${gallery.client_password}${gallery.collection_password ? `\nCollection: ${gallery.collection_password}` : ''}`}
                      label="Copy Passwords"
                    />
                    <a
                      href={galleryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'transparent',
                        border: '1px solid #333',
                        borderRadius: '4px',
                        color: '#888',
                        fontSize: '11px',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        letterSpacing: '1px',
                        fontFamily: '"Jost", sans-serif',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      View Gallery ↗
                    </a>
                  </div>
                </div>

                {/* Row 2: metadata */}
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  flexWrap: 'wrap',
                  fontSize: '12px',
                  color: '#666',
                }}>
                  <span>Created {formatDate(gallery.created_at)}</span>
                  <span>Expires: {formatDate(gallery.expires_at)}</span>
                  {gallery.client_email && <span>📧 {gallery.client_email}</span>}
                  <span style={{ color: gallery.is_shareable ? '#5cc98a' : '#c9b99a' }}>
                    {gallery.is_shareable ? 'Anyone with link' : 'Restricted'}
                  </span>
                  {gallery.allow_downloads && <span>📥 Downloads on</span>}
                  {gallery.watermark_previews && <span>💧 Watermarked</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
