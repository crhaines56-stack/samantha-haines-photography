'use client';

import { useState, KeyboardEvent, useRef } from 'react';
import Link from 'next/link';
import PhotoUploader, { UploadedImage } from '@/components/admin/PhotoUploader';

const SESSION_TYPES = [
  'Boudoir',
  'Family',
  'Senior Portraits',
  'Newborn',
  'Maternity',
  'Headshots & Branding',
];

function generatePassword(length = 8): string {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      style={copyBtnStyle(copied)}
    >
      {copied ? '✓' : '⎘'}
    </button>
  );
}

function copyBtnStyle(active: boolean) {
  return {
    background: active ? '#c9b99a22' : 'transparent',
    border: `1px solid ${active ? '#c9b99a' : '#444'}`,
    borderRadius: '4px',
    color: active ? '#c9b99a' : '#666',
    padding: '6px 12px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.15s',
    flexShrink: 0 as const,
  };
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '8px',
  color: '#888',
  fontSize: '11px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontFamily: '"Jost", sans-serif',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#111',
  border: '1px solid #333',
  borderRadius: '4px',
  padding: '12px 14px',
  color: '#faf9f7',
  fontSize: '15px',
  fontFamily: '"Jost", sans-serif',
  outline: 'none',
  boxSizing: 'border-box',
};

const sectionStyle: React.CSSProperties = {
  background: '#222',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  padding: '24px',
  marginBottom: '16px',
};

function Toggle({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint?: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
      <div>
        <span style={{ color: '#faf9f7', fontSize: '14px' }}>{label}</span>
        {hint && <p style={{ margin: '2px 0 0', color: '#555', fontSize: '12px' }}>{hint}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        style={{
          width: '44px',
          height: '24px',
          borderRadius: '12px',
          background: checked ? '#c9b99a' : '#333',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}
      >
        <span style={{
          position: 'absolute',
          top: '3px',
          left: checked ? '23px' : '3px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: '#faf9f7',
          transition: 'left 0.2s',
        }} />
      </button>
    </div>
  );
}

interface GalleryCreatedData {
  id: string;
  slug: string;
  galleryUrl: string;
  clientPassword: string;
  collectionPassword?: string;
  galleryName: string;
  emails: string[];
  isShareable: boolean;
}

// ─── Step indicator ──────────────────────────────────────────────────────────
function StepIndicator({ step }: { step: 1 | 2 | 3 }) {
  const steps = [
    { n: 1, label: 'Gallery Details' },
    { n: 2, label: 'Upload Photos' },
    { n: 3, label: 'Done' },
  ];
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      padding: '16px 24px',
      borderBottom: '1px solid #2a2a2a',
      background: '#111',
    }}>
      {steps.map(({ n, label }, i) => (
        <div key={n} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: step > n ? '#1d3a2a' : step === n ? '#c9b99a' : '#222',
              border: `2px solid ${step > n ? '#2a5a3a' : step === n ? '#c9b99a' : '#444'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: step > n ? '#5cc98a' : step === n ? '#1a1a1a' : '#555',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.3s',
            }}>
              {step > n ? '✓' : n}
            </div>
            <span style={{
              fontSize: '10px',
              color: step === n ? '#c9b99a' : '#555',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div style={{
              flex: 1,
              height: '2px',
              background: step > n ? '#2a5a3a' : '#2a2a2a',
              margin: '0 8px',
              marginBottom: '18px',
              transition: 'background 0.3s',
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Step 3: Done ────────────────────────────────────────────────────────────
function DonePanel({
  data,
  uploadedCount,
  onCreateAnother,
}: {
  data: GalleryCreatedData;
  uploadedCount: number;
  onCreateAnother: () => void;
}) {
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showTemplate, setShowTemplate] = useState(false);

  const copyField = async (key: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 1800);
  };

  const emailTemplate = `Hi ${data.galleryName},

Your gallery is ready to view!

🔗 Gallery link: ${data.galleryUrl}

🔑 Password: ${data.isShareable ? data.collectionPassword : data.clientPassword}

Click the link above, enter your password, and enjoy your photos!

Warmly,
Samantha`;

  async function sendInvites() {
    if (data.emails.length === 0) return;
    setEmailStatus('sending');
    try {
      const res = await fetch('/api/gallery/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: data.emails,
          galleryName: data.galleryName,
          galleryUrl: data.galleryUrl,
          password: data.isShareable ? data.collectionPassword : data.clientPassword,
          passwordLabel: data.isShareable ? 'Collection Password' : 'Your Password',
        }),
      });
      if (res.ok) setEmailStatus('sent');
      else setEmailStatus('error');
    } catch {
      setEmailStatus('error');
    }
  }

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: '#111',
    border: '1px solid #2a2a2a',
    borderRadius: '4px',
    padding: '12px 16px',
    marginBottom: '10px',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '"Jost", sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>
        {/* Check icon */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#1d3a2a',
            border: '2px solid #2a5a3a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '28px',
          }}>
            ✓
          </div>
          <h2 style={{
            margin: '0 0 6px',
            color: '#faf9f7',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '26px',
            fontWeight: 300,
          }}>
            Gallery Ready
          </h2>
          <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>
            {data.galleryName}
            {uploadedCount > 0 && (
              <span style={{ color: '#5cc98a', marginLeft: '8px' }}>
                · {uploadedCount} photo{uploadedCount !== 1 ? 's' : ''} uploaded
              </span>
            )}
          </p>
        </div>

        {/* Share panel */}
        <div style={{ background: '#222', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '24px', marginBottom: '16px' }}>
          <p style={{ ...labelStyle, marginBottom: '16px' }}>Share Details</p>

          {/* Gallery URL */}
          <p style={{ margin: '0 0 6px', color: '#666', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Gallery URL</p>
          <div style={rowStyle}>
            <span style={{ flex: 1, color: '#c9b99a', fontSize: '13px', wordBreak: 'break-all' }}>{data.galleryUrl}</span>
            <button
              type="button"
              onClick={() => copyField('url', data.galleryUrl)}
              style={copyBtnStyle(copiedField === 'url')}
            >
              {copiedField === 'url' ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          {/* Client password */}
          <p style={{ margin: '16px 0 6px', color: '#666', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Client Password</p>
          <div style={rowStyle}>
            <span style={{ flex: 1, color: '#faf9f7', fontSize: '15px', letterSpacing: '3px', fontFamily: 'monospace' }}>{data.clientPassword}</span>
            <button type="button" onClick={() => copyField('client', data.clientPassword)} style={copyBtnStyle(copiedField === 'client')}>
              {copiedField === 'client' ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          {/* Collection password (if shareable) */}
          {data.isShareable && data.collectionPassword && (
            <>
              <p style={{ margin: '16px 0 6px', color: '#666', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Collection Password</p>
              <div style={rowStyle}>
                <span style={{ flex: 1, color: '#faf9f7', fontSize: '15px', letterSpacing: '3px', fontFamily: 'monospace' }}>{data.collectionPassword}</span>
                <button type="button" onClick={() => copyField('collection', data.collectionPassword!)} style={copyBtnStyle(copiedField === 'collection')}>
                  {copiedField === 'collection' ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </>
          )}

          {/* Email invites */}
          {data.emails.length > 0 && (
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #2a2a2a' }}>
              <p style={{ margin: '0 0 12px', color: '#888', fontSize: '12px' }}>
                {data.emails.length} email{data.emails.length > 1 ? 's' : ''} to notify
              </p>
              <button
                type="button"
                onClick={sendInvites}
                disabled={emailStatus !== 'idle'}
                style={{
                  width: '100%',
                  background: emailStatus === 'sent' ? '#1d3a2a' : emailStatus === 'error' ? '#2a1a1a' : '#c9b99a',
                  color: emailStatus === 'sent' ? '#5cc98a' : emailStatus === 'error' ? '#e05555' : '#1a1a1a',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '12px',
                  fontSize: '12px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontFamily: '"Jost", sans-serif',
                  cursor: emailStatus !== 'idle' ? 'default' : 'pointer',
                  fontWeight: 500,
                }}
              >
                {emailStatus === 'idle' && 'Send Email Invitations'}
                {emailStatus === 'sending' && 'Sending…'}
                {emailStatus === 'sent' && '✓ Emails Sent'}
                {emailStatus === 'error' && 'Failed — Try Again'}
              </button>
            </div>
          )}
        </div>

        {/* Email template */}
        <div style={{ background: '#222', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '16px 24px', marginBottom: '16px' }}>
          <button
            type="button"
            onClick={() => setShowTemplate(!showTemplate)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#888',
              fontSize: '12px',
              cursor: 'pointer',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: '"Jost", sans-serif',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ transition: 'transform 0.2s', display: 'inline-block', transform: showTemplate ? 'rotate(90deg)' : 'none' }}>▶</span>
            Email Template
          </button>
          {showTemplate && (
            <div style={{ marginTop: '16px' }}>
              <pre style={{
                background: '#111',
                border: '1px solid #2a2a2a',
                borderRadius: '4px',
                padding: '16px',
                color: '#c9b99a',
                fontSize: '12px',
                lineHeight: 1.7,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                margin: '0 0 10px',
                fontFamily: 'monospace',
              }}>
                {emailTemplate}
              </pre>
              <button
                type="button"
                onClick={() => copyField('template', emailTemplate)}
                style={{ ...copyBtnStyle(copiedField === 'template'), padding: '8px 16px', fontSize: '12px' }}
              >
                {copiedField === 'template' ? '✓ Copied' : 'Copy Template'}
              </button>
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link
            href={`/admin/galleries/${data.slug}`}
            style={{
              flex: 1,
              textAlign: 'center',
              background: 'transparent',
              border: '1px solid #c9b99a',
              borderRadius: '4px',
              color: '#c9b99a',
              textDecoration: 'none',
              padding: '12px',
              fontSize: '12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: '"Jost", sans-serif',
            }}
          >
            Manage Photos
          </Link>
          <Link
            href="/admin/galleries"
            style={{
              flex: 1,
              textAlign: 'center',
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '4px',
              color: '#888',
              textDecoration: 'none',
              padding: '12px',
              fontSize: '12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: '"Jost", sans-serif',
            }}
          >
            All Galleries
          </Link>
          <button
            type="button"
            onClick={onCreateAnother}
            style={{
              flex: 1,
              background: 'transparent',
              border: '1px solid #444',
              borderRadius: '4px',
              color: '#666',
              cursor: 'pointer',
              padding: '12px',
              fontSize: '12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: '"Jost", sans-serif',
            }}
          >
            New Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function NewGalleryPage() {
  // Step state
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form state
  const [galleryName, setGalleryName] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [isShareable, setIsShareable] = useState(true);
  const [emails, setEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const [clientPassword, setClientPassword] = useState(generatePassword(10));
  const [collectionPassword, setCollectionPassword] = useState(generatePassword(8));
  const [hasExpiry, setHasExpiry] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const [allowDownloads, setAllowDownloads] = useState(true);
  const [downloadPin, setDownloadPin] = useState('');
  const [watermark, setWatermark] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Gallery created data (passed to step 2 + 3)
  const [createdGallery, setCreatedGallery] = useState<GalleryCreatedData | null>(null);
  const [uploadedCount, setUploadedCount] = useState(0);

  const emailInputRef = useRef<HTMLInputElement>(null);

  function addEmail(raw: string) {
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) return;
    if (!emails.includes(trimmed)) {
      setEmails((prev) => [...prev, trimmed]);
    }
    setEmailInput('');
  }

  function handleEmailKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addEmail(emailInput);
    } else if (e.key === 'Backspace' && !emailInput && emails.length > 0) {
      setEmails((prev) => prev.slice(0, -1));
    }
  }

  async function handleSubmit() {
    if (!galleryName.trim()) { setFormError('Gallery name is required'); return; }
    if (!sessionType) { setFormError('Session type is required'); return; }
    setFormError('');
    setSubmitting(true);

    try {
      let expiresInDays: number | undefined;
      if (hasExpiry && expiryDate) {
        const diff = new Date(expiryDate).getTime() - Date.now();
        expiresInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      }

      const res = await fetch('/api/gallery/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-gallery-admin-secret': 'shp-gallery-2026',
        },
        body: JSON.stringify({
          clientName: galleryName.trim(),
          sessionType,
          isShareable,
          watermarkPreviews: watermark,
          allowDownloads,
          downloadPin: downloadPin || undefined,
          expiresInDays,
          clientPassword,
          collectionPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || 'Failed to create gallery');
        return;
      }

      setCreatedGallery({
        id: data.id,
        slug: data.slug,
        galleryUrl: data.galleryUrl,
        clientPassword: data.clientPassword,
        collectionPassword: data.collectionPassword,
        galleryName: galleryName.trim(),
        emails,
        isShareable,
      });
      setStep(2);
    } catch {
      setFormError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleUploadComplete(images: UploadedImage[]) {
    setUploadedCount(images.length);
  }

  function resetForm() {
    setGalleryName('');
    setSessionType('');
    setIsShareable(true);
    setEmails([]);
    setEmailInput('');
    setClientPassword(generatePassword(10));
    setCollectionPassword(generatePassword(8));
    setHasExpiry(false);
    setExpiryDate('');
    setAllowDownloads(true);
    setDownloadPin('');
    setWatermark(false);
    setFormError('');
    setCreatedGallery(null);
    setUploadedCount(0);
    setStep(1);
  }

  // Step 3: Done
  if (step === 3 && createdGallery) {
    return (
      <div style={{ minHeight: '100vh', background: '#1a1a1a', fontFamily: '"Jost", sans-serif' }}>
        <div style={{ background: '#111', borderBottom: '1px solid #2a2a2a', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/admin/galleries" style={{ color: '#666', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <h1 style={{ margin: 0, color: '#faf9f7', fontSize: '18px', fontWeight: 300, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            Create Client Gallery
          </h1>
        </div>
        <StepIndicator step={3} />
        <DonePanel data={createdGallery} uploadedCount={uploadedCount} onCreateAnother={resetForm} />
      </div>
    );
  }

  // Step 2: Upload Photos
  if (step === 2 && createdGallery) {
    return (
      <div style={{ minHeight: '100vh', background: '#1a1a1a', color: '#faf9f7', fontFamily: '"Jost", sans-serif' }}>
        {/* Top bar */}
        <div style={{
          background: '#111',
          borderBottom: '1px solid #2a2a2a',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <Link href="/admin/galleries" style={{ color: '#666', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <div>
            <p style={{ margin: '0 0 2px', color: '#c9b99a', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              New Gallery
            </p>
            <h1 style={{ margin: 0, color: '#faf9f7', fontSize: '18px', fontWeight: 300, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              {createdGallery.galleryName}
            </h1>
          </div>
        </div>

        <StepIndicator step={2} />

        <div style={{ padding: '32px 24px', maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ margin: '0 0 8px', color: '#faf9f7', fontSize: '20px', fontWeight: 300, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Upload Photos
            </h2>
            <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>
              Upload photos for this gallery. You can always add more later from the gallery management page.
            </p>
          </div>

          <div style={sectionStyle}>
            <PhotoUploader
              galleryId={createdGallery.id}
              onUploadComplete={handleUploadComplete}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
            <button
              type="button"
              onClick={() => setStep(3)}
              style={{
                background: 'transparent',
                color: '#888',
                border: '1px solid #444',
                borderRadius: '4px',
                padding: '12px 24px',
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: '"Jost", sans-serif',
                cursor: 'pointer',
              }}
            >
              Skip for Now
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              style={{
                background: '#c9b99a',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '4px',
                padding: '12px 28px',
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: '"Jost", sans-serif',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Continue to Share Settings →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Gallery Details
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
        gap: '16px',
      }}>
        <Link href="/admin/galleries" style={{ color: '#666', textDecoration: 'none', fontSize: '20px' }}>
          ←
        </Link>
        <div>
          <p style={{ margin: '0 0 2px', color: '#c9b99a', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            New Gallery
          </p>
          <h1 style={{
            margin: 0,
            color: '#faf9f7',
            fontSize: '18px',
            fontWeight: 300,
            fontFamily: '"Cormorant Garamond", Georgia, serif',
          }}>
            Create Client Gallery
          </h1>
        </div>
      </div>

      <StepIndicator step={1} />

      {/* Form */}
      <div style={{ padding: '32px 24px', maxWidth: '640px', margin: '0 auto' }}>

        {/* Gallery Name */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Gallery Name</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="e.g. Johnson Family Session"
            value={galleryName}
            onChange={(e) => setGalleryName(e.target.value)}
          />
        </div>

        {/* Session Type */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Session Type</label>
          <select
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
            style={{
              ...inputStyle,
              appearance: 'none',
              WebkitAppearance: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="" disabled>Select session type…</option>
            {SESSION_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Share Settings */}
        <div style={sectionStyle}>
          <p style={labelStyle}>Share Settings</p>

          <div style={{
            display: 'flex',
            background: '#111',
            borderRadius: '4px',
            border: '1px solid #333',
            overflow: 'hidden',
            marginBottom: '20px',
          }}>
            {[
              { label: '🔒 Restricted', value: false },
              { label: '🔗 Anyone with the link', value: true },
            ].map(({ label, value }) => (
              <button
                key={String(value)}
                type="button"
                onClick={() => setIsShareable(value)}
                style={{
                  flex: 1,
                  background: isShareable === value ? '#c9b99a' : 'transparent',
                  color: isShareable === value ? '#1a1a1a' : '#888',
                  border: 'none',
                  padding: '10px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontFamily: '"Jost", sans-serif',
                  transition: 'all 0.2s',
                  fontWeight: isShareable === value ? 500 : 400,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {isShareable && (
            <div>
              <label style={{ ...labelStyle, marginBottom: '6px' }}>Collection Password</label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                  style={{ ...inputStyle, letterSpacing: '3px', fontFamily: 'monospace' }}
                  type="text"
                  value={collectionPassword}
                  onChange={(e) => setCollectionPassword(e.target.value)}
                />
                <CopyBtn text={collectionPassword} />
                <button
                  type="button"
                  onClick={() => setCollectionPassword(generatePassword(8))}
                  title="Regenerate"
                  style={{
                    background: 'transparent',
                    border: '1px solid #444',
                    borderRadius: '4px',
                    color: '#666',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    flexShrink: 0,
                  }}
                >
                  ↻
                </button>
              </div>
            </div>
          )}

          {!isShareable && (
            <div>
              <label style={{ ...labelStyle, marginBottom: '6px' }}>Invite by Email</label>
              <div
                onClick={() => emailInputRef.current?.focus()}
                style={{
                  minHeight: '48px',
                  background: '#111',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  padding: '8px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  alignItems: 'center',
                  cursor: 'text',
                }}
              >
                {emails.map((email) => (
                  <span
                    key={email}
                    style={{
                      background: '#c9b99a22',
                      border: '1px solid #c9b99a44',
                      borderRadius: '100px',
                      padding: '3px 10px 3px 12px',
                      color: '#c9b99a',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    {email}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEmails((prev) => prev.filter((em) => em !== email));
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#c9b99a',
                        cursor: 'pointer',
                        padding: '0',
                        fontSize: '14px',
                        lineHeight: 1,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  ref={emailInputRef}
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  onKeyDown={handleEmailKeyDown}
                  onBlur={() => addEmail(emailInput)}
                  placeholder={emails.length === 0 ? 'Add email addresses…' : ''}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#faf9f7',
                    fontSize: '14px',
                    fontFamily: '"Jost", sans-serif',
                    flex: 1,
                    minWidth: '160px',
                    padding: '2px 4px',
                  }}
                />
              </div>
              <p style={{ margin: '6px 0 0', color: '#555', fontSize: '12px' }}>
                Press Enter or comma to add each email
              </p>
            </div>
          )}
        </div>

        {/* Client Password */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Client Password</label>
          <p style={{ margin: '0 0 10px', color: '#666', fontSize: '12px' }}>
            This is the full-access password for the client.
          </p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              style={{ ...inputStyle, letterSpacing: '3px', fontFamily: 'monospace' }}
              type="text"
              value={clientPassword}
              onChange={(e) => setClientPassword(e.target.value)}
            />
            <CopyBtn text={clientPassword} />
            <button
              type="button"
              onClick={() => setClientPassword(generatePassword(10))}
              title="Regenerate"
              style={{
                background: 'transparent',
                border: '1px solid #444',
                borderRadius: '4px',
                color: '#666',
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: '14px',
                flexShrink: 0,
              }}
            >
              ↻
            </button>
          </div>
        </div>

        {/* Expiry */}
        <div style={sectionStyle}>
          <div style={{ marginBottom: hasExpiry ? '16px' : '0' }}>
            <Toggle
              checked={hasExpiry}
              onChange={setHasExpiry}
              label="Set expiry date"
              hint="Gallery will become inaccessible after this date"
            />
          </div>
          {hasExpiry && (
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              style={inputStyle}
            />
          )}
        </div>

        {/* Downloads */}
        <div style={sectionStyle}>
          <div style={{ marginBottom: allowDownloads ? '16px' : '0' }}>
            <Toggle
              checked={allowDownloads}
              onChange={setAllowDownloads}
              label="Allow Downloads"
              hint="Clients can download their photos"
            />
          </div>
          {allowDownloads && (
            <div>
              <label style={labelStyle}>Download PIN <span style={{ color: '#555', fontWeight: 300, letterSpacing: 0, textTransform: 'none', fontSize: '11px' }}>(optional)</span></label>
              <input
                style={inputStyle}
                type="text"
                placeholder="Leave blank for no PIN"
                value={downloadPin}
                onChange={(e) => setDownloadPin(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Watermark */}
        <div style={sectionStyle}>
          <Toggle
            checked={watermark}
            onChange={setWatermark}
            label="Watermark Previews"
            hint="Add watermark overlay to preview images"
          />
        </div>

        {/* Error */}
        {formError && (
          <div style={{
            background: '#2a1a1a',
            border: '1px solid #5a2a2a',
            borderRadius: '4px',
            padding: '12px 16px',
            color: '#e05555',
            fontSize: '13px',
            marginBottom: '16px',
          }}>
            {formError}
          </div>
        )}

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            width: '100%',
            background: submitting ? '#666' : '#c9b99a',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: '4px',
            padding: '15px',
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 600,
            cursor: submitting ? 'not-allowed' : 'pointer',
            marginBottom: '40px',
          }}
        >
          {submitting ? 'Creating…' : 'Create Gallery & Continue →'}
        </button>
      </div>
    </div>
  );
}
