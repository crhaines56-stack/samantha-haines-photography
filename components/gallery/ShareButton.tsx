'use client';

import { useState, useRef, useEffect } from 'react';
import { GalleryData } from './GalleryClient';

interface Props {
  gallery: GalleryData;
  iconOnly?: boolean;
}

export default function ShareButton({ gallery, iconOnly = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNativeShare, setHasNativeShare] = useState(false);
  const [galleryUrl, setGalleryUrl] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setGalleryUrl(`${window.location.origin}/gallery/${gallery.slug}`);
    setHasNativeShare(typeof navigator !== 'undefined' && 'share' in navigator);
  }, [gallery.slug]);

  if (!gallery.isShareable) return null;

  const collectionPassword = gallery.collectionPassword;

  const addEmail = (val: string) => {
    const trimmed = val.trim().replace(/,$/, '');
    if (trimmed && trimmed.includes('@') && !emails.includes(trimmed)) {
      setEmails((prev) => [...prev, trimmed]);
    }
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addEmail(inputValue);
    }
    if (e.key === 'Backspace' && inputValue === '' && emails.length > 0) {
      setEmails((prev) => prev.slice(0, -1));
    }
  };

  const removeEmail = (email: string) => {
    setEmails((prev) => prev.filter((e) => e !== email));
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSend = async () => {
    if (emails.length === 0) return;
    setSending(true);
    try {
      const res = await fetch('/api/gallery/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          galleryId: gallery.id,
          emails,
          galleryUrl,
          password: collectionPassword ?? '',
          clientName: gallery.clientName,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setEmails([]);
      showToast('Invitations sent!');
    } catch {
      showToast('Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(galleryUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      showToast('Could not copy link');
    }
  };

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(collectionPassword ?? '');
      setCopiedPassword(true);
      setTimeout(() => setCopiedPassword(false), 2000);
    } catch {
      showToast('Could not copy password');
    }
  };

  const handleNativeShare = async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({
        title: `${gallery.clientName}'s Gallery — Samantha Haines Photography`,
        url: galleryUrl,
        text: `View your gallery. Password: ${collectionPassword ?? ''}`,
      });
    } catch {
      // User cancelled — ignore
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={iconOnly ? iconOnlyButtonStyle : headerButtonStyle}
        title="Share gallery"
      >
        <ShareIcon size={iconOnly ? 20 : 16} />
        {!iconOnly && <span>Share</span>}
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(26,26,26,0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(4px)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            style={{
              background: '#1e1e1e',
              borderRadius: '4px',
              border: '1px solid rgba(201,185,154,0.18)',
              width: '100%',
              maxWidth: '480px',
              padding: '28px 28px 20px',
              position: 'relative',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontSize: '1.45rem',
                color: '#faf9f7',
                margin: '0 0 24px',
                paddingRight: '28px',
                lineHeight: 1.3,
              }}
            >
              Share &lsquo;{gallery.clientName}&rsquo;s Gallery
            </h2>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'none',
                border: 'none',
                color: 'rgba(250,249,247,0.45)',
                cursor: 'pointer',
                fontSize: '24px',
                lineHeight: 1,
                padding: '4px 6px',
              }}
            >
              ×
            </button>

            {/* ─── Section 1: Share with people ─── */}
            <div style={{ marginBottom: '20px' }}>
              <p style={sectionLabelStyle}>Share with people</p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  padding: '7px 8px',
                  background: '#151515',
                  border: '1px solid rgba(201,185,154,0.18)',
                  borderRadius: '2px',
                  minHeight: '42px',
                  cursor: 'text',
                  alignItems: 'center',
                }}
                onClick={() => inputRef.current?.focus()}
              >
                {emails.map((email) => (
                  <span key={email} style={chipStyle}>
                    {email}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeEmail(email);
                      }}
                      style={chipXStyle}
                      aria-label={`Remove ${email}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  ref={inputRef}
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    if (inputValue) addEmail(inputValue);
                  }}
                  placeholder={emails.length === 0 ? 'Add people by email' : ''}
                  style={{
                    flex: '1 1 140px',
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: '#faf9f7',
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13px',
                    minWidth: '80px',
                    padding: '2px 4px',
                  }}
                />
              </div>

              <div
                style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}
              >
                <button
                  onClick={handleSend}
                  disabled={emails.length === 0 || sending}
                  style={{
                    ...tanButtonStyle,
                    opacity: emails.length === 0 || sending ? 0.45 : 1,
                    cursor: emails.length === 0 || sending ? 'not-allowed' : 'pointer',
                  }}
                >
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div style={dividerStyle} />

            {/* ─── Section 2: Get link ─── */}
            <div style={{ marginBottom: '20px' }}>
              <p style={sectionLabelStyle}>Get link</p>

              {gallery.isShareable ? (
                <>
                  {/* Gallery URL row */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      marginBottom: '10px',
                      alignItems: 'stretch',
                    }}
                  >
                    <input
                      readOnly
                      value={galleryUrl}
                      style={readonlyInputStyle}
                    />
                    <button onClick={copyLink} style={copyButtonStyle}>
                      {copiedLink ? (
                        <>
                          <CheckIcon size={13} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <ClipboardIcon size={13} />
                          <span>Copy link</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Password row */}
                  {collectionPassword && (
                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          color: 'rgba(250,249,247,0.45)',
                          fontFamily: '"Jost", sans-serif',
                          fontSize: '10px',
                          letterSpacing: '1.2px',
                          whiteSpace: 'nowrap',
                          textTransform: 'uppercase',
                        }}
                      >
                        Password:
                      </span>
                      <input
                        readOnly
                        value={collectionPassword}
                        style={{
                          ...readonlyInputStyle,
                          letterSpacing: '3px',
                          fontFamily: 'monospace',
                          fontSize: '13px',
                        }}
                      />
                      <button onClick={copyPassword} style={{ ...copyButtonStyle, padding: '8px 10px' }}>
                        {copiedPassword ? <CheckIcon size={13} /> : <ClipboardIcon size={13} />}
                      </button>
                    </div>
                  )}

                  <p
                    style={{
                      margin: '6px 0 0',
                      color: 'rgba(250,249,247,0.35)',
                      fontFamily: '"Jost", sans-serif',
                      fontSize: '11px',
                      lineHeight: 1.5,
                    }}
                  >
                    Anyone with this link and password can view the gallery.
                  </p>
                </>
              ) : (
                <p
                  style={{
                    color: 'rgba(250,249,247,0.45)',
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13px',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  This gallery is restricted. Only invited guests can view.
                </p>
              )}
            </div>

            {/* ─── Section 3: Native share (mobile only) ─── */}
            {hasNativeShare && (
              <>
                <div style={dividerStyle} />
                <div style={{ marginBottom: '20px' }}>
                  <button
                    onClick={handleNativeShare}
                    style={{
                      ...tanButtonStyle,
                      width: '100%',
                      justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <ShareIcon size={14} />
                    Share via...
                  </button>
                </div>
              </>
            )}

            {/* Divider + Done */}
            <div style={dividerStyle} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
              <button onClick={() => setIsOpen(false)} style={doneButtonStyle}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#2a2a2a',
            border: '1px solid rgba(201,185,154,0.3)',
            color: '#c9b99a',
            padding: '10px 22px',
            borderRadius: '2px',
            fontFamily: '"Jost", sans-serif',
            fontSize: '13px',
            letterSpacing: '0.5px',
            zIndex: 3000,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {toast}
        </div>
      )}
    </>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const headerButtonStyle: React.CSSProperties = {
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
};

const iconOnlyButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#faf9f7',
  cursor: 'pointer',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const sectionLabelStyle: React.CSSProperties = {
  fontFamily: '"Jost", sans-serif',
  fontSize: '10px',
  letterSpacing: '1.8px',
  textTransform: 'uppercase',
  color: 'rgba(250,249,247,0.4)',
  margin: '0 0 10px',
};

const chipStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '3px',
  background: '#2a2a2a',
  border: '1px solid rgba(201,185,154,0.25)',
  color: '#c9b99a',
  borderRadius: '999px',
  padding: '3px 8px 3px 10px',
  fontFamily: '"Jost", sans-serif',
  fontSize: '12px',
};

const chipXStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: 'rgba(250,249,247,0.4)',
  cursor: 'pointer',
  padding: '0',
  fontSize: '16px',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
};

const readonlyInputStyle: React.CSSProperties = {
  flex: 1,
  background: '#151515',
  border: '1px solid rgba(201,185,154,0.15)',
  borderRadius: '2px',
  color: 'rgba(250,249,247,0.65)',
  fontFamily: '"Jost", sans-serif',
  fontSize: '12px',
  padding: '8px 10px',
  outline: 'none',
  minWidth: 0,
};

const copyButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  background: '#2a2a2a',
  border: '1px solid rgba(201,185,154,0.3)',
  color: '#c9b99a',
  borderRadius: '2px',
  padding: '8px 12px',
  fontFamily: '"Jost", sans-serif',
  fontSize: '11px',
  letterSpacing: '0.5px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  flexShrink: 0,
};

const tanButtonStyle: React.CSSProperties = {
  background: '#c9b99a',
  color: '#1a1a1a',
  border: 'none',
  borderRadius: '2px',
  padding: '9px 22px',
  fontFamily: '"Jost", sans-serif',
  fontSize: '11px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontWeight: 500,
};

const doneButtonStyle: React.CSSProperties = {
  background: 'none',
  border: '1px solid rgba(201,185,154,0.3)',
  color: '#c9b99a',
  borderRadius: '2px',
  padding: '8px 22px',
  fontFamily: '"Jost", sans-serif',
  fontSize: '11px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const dividerStyle: React.CSSProperties = {
  borderTop: '1px solid rgba(201,185,154,0.1)',
  margin: '0 0 20px',
};

// ─── Icons ─────────────────────────────────────────────────────────────────────

function ShareIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function ClipboardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="9" y="2" width="6" height="4" rx="1" ry="1" />
      <path d="M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
    </svg>
  );
}

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
