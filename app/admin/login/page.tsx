'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin/galleries');
      } else {
        setError('Incorrect password');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        {/* Logo / heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            margin: '0 0 12px',
            color: '#c9b99a',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: '"Jost", sans-serif',
          }}>
            Admin
          </p>
          <h1 style={{
            margin: 0,
            color: '#faf9f7',
            fontSize: '28px',
            fontWeight: 300,
            letterSpacing: '1px',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
          }}>
            Samantha Haines Photography
          </h1>
        </div>

        {/* Login card */}
        <form onSubmit={handleSubmit}>
          <div style={{
            background: '#222',
            borderRadius: '6px',
            padding: '32px',
            border: '1px solid #2a2a2a',
          }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#888',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: '"Jost", sans-serif',
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoFocus
              style={{
                width: '100%',
                background: '#111',
                border: error ? '1px solid #e05555' : '1px solid #333',
                borderRadius: '4px',
                padding: '12px 14px',
                color: '#faf9f7',
                fontSize: '16px',
                fontFamily: '"Jost", sans-serif',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => {
                if (!error) e.target.style.borderColor = '#c9b99a';
              }}
              onBlur={(e) => {
                if (!error) e.target.style.borderColor = '#333';
              }}
            />

            {error && (
              <p style={{
                margin: '8px 0 0',
                color: '#e05555',
                fontSize: '13px',
                fontFamily: '"Jost", sans-serif',
              }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              style={{
                marginTop: '20px',
                width: '100%',
                background: loading || !password ? '#444' : '#c9b99a',
                color: loading || !password ? '#888' : '#1a1a1a',
                border: 'none',
                borderRadius: '4px',
                padding: '13px',
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: '"Jost", sans-serif',
                fontWeight: 500,
                cursor: loading || !password ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {loading ? 'Verifying…' : 'Enter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
