'use client';
import { useState, useRef } from 'react';

const CATEGORIES = [
  { value: 'boudoir', label: 'Boudoir' },
  { value: 'senior', label: 'Senior Portraits' },
  { value: 'family', label: 'Family' },
  { value: 'maternity', label: 'Maternity & Newborn' },
  { value: 'branding', label: 'Branding & Headshots' },
];

interface UploadResult {
  file: string;
  success: boolean;
  error?: string;
}

export default function PortfolioAdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [category, setCategory] = useState('family');
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const authenticate = () => {
    if (password === 'shp-gallery-2026') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const uploadFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    setUploading(true);
    setResults([]);

    for (const file of fileArray) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      formData.append('password', password);

      try {
        const res = await fetch('/api/portfolio/upload', { method: 'POST', body: formData });
        const data = await res.json();
        setResults((prev) => [
          ...prev,
          { file: file.name, success: Boolean(data.success), error: data.error },
        ]);
      } catch {
        setResults((prev) => [
          ...prev,
          { file: file.name, success: false, error: 'Upload failed' },
        ]);
      }
    }

    setUploading(false);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-6">
        <div className="max-w-sm w-full">
          <h1 className="font-serif text-4xl text-[#1a1a1a] mb-8 italic text-center">
            Portfolio Admin
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && authenticate()}
            placeholder="Password"
            className="w-full border-b border-[#c9b99a] bg-transparent py-3 font-sans text-[14px] text-[#1a1a1a] placeholder-[#c9b99a] focus:outline-none mb-6"
          />
          <button
            onClick={authenticate}
            className="w-full bg-[#1a1a1a] text-[#faf9f7] font-sans text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#8b6f5e] transition-colors"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl text-[#1a1a1a] mb-2 italic">Portfolio Upload</h1>
        <p className="font-sans text-[13px] text-[#6b6b6b] mb-10">
          Select a category and drag your photos in. Full-size JPEGs are fine.
        </p>

        {/* Category select */}
        <div className="mb-8">
          <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-3">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-b border-[#c9b99a] bg-transparent py-3 font-sans text-[14px] text-[#1a1a1a] focus:outline-none cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            uploadFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed py-20 text-center cursor-pointer transition-colors ${
            dragOver
              ? 'border-[#8b6f5e] bg-[#f5f0ea]'
              : 'border-[#c9b99a] hover:border-[#8b6f5e]'
          }`}
        >
          <p className="font-sans text-[13px] text-[#6b6b6b] mb-2">
            Drag photos here or click to browse
          </p>
          <p className="font-sans text-[11px] text-[#c9b99a]">
            Full-size JPEGs welcome — any size
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files && uploadFiles(e.target.files)}
          />
        </div>

        {/* Upload status */}
        {uploading && (
          <p className="font-sans text-[12px] text-[#8b6f5e] mt-6 text-center">
            Uploading...
          </p>
        )}

        {results.length > 0 && (
          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-between mb-4">
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b]">
                {results.filter((r) => r.success).length}/{results.length} uploaded
              </p>
              <button
                onClick={() => setResults([])}
                className="font-sans text-[11px] text-[#c9b99a] hover:text-[#8b6f5e] transition-colors"
              >
                Clear
              </button>
            </div>
            {results.map((r, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 font-sans text-[13px] ${
                  r.success ? 'text-green-700' : 'text-red-600'
                }`}
              >
                <span>{r.success ? '✓' : '✗'}</span>
                <span className="flex-1 truncate">{r.file}</span>
                {r.error && (
                  <span className="text-[11px] text-[#6b6b6b] shrink-0">({r.error})</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Nav links */}
        <div className="mt-16 pt-8 border-t border-[#c9b99a]/30 flex gap-6">
          {CATEGORIES.map((c) => (
            <a
              key={c.value}
              href={`/gallery/${c.value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#8b6f5e] hover:text-[#1a1a1a] transition-colors"
            >
              {c.label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
