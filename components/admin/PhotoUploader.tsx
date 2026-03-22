'use client';

import { useCallback, useRef, useState } from 'react';

export interface UploadedImage {
  id: string;
  thumbnailUrl: string;
  previewUrl: string;
  originalUrl: string;
  filename: string;
  width: number;
  height: number;
}

interface FileUploadItem {
  file: File;
  previewUrl: string;
  status: 'pending' | 'uploading' | 'done' | 'error';
  progress: number;
  result?: UploadedImage;
  error?: string;
}

interface PhotoUploaderProps {
  galleryId: string;
  setId?: string;
  onUploadComplete?: (images: UploadedImage[]) => void;
}

const BATCH_SIZE = 3;

export default function PhotoUploader({ galleryId, setId, onUploadComplete }: PhotoUploaderProps) {
  const [queue, setQueue] = useState<FileUploadItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadedImages = useRef<UploadedImage[]>([]);

  const addFiles = useCallback((files: FileList | File[]) => {
    const newItems: FileUploadItem[] = Array.from(files)
      .filter((f) => f.type.startsWith('image/'))
      .map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
        status: 'pending',
        progress: 0,
      }));
    setQueue((prev) => [...prev, ...newItems]);
    setAllDone(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
    e.target.value = '';
  };

  async function uploadFile(item: FileUploadItem, index: number): Promise<UploadedImage | null> {
    setQueue((prev) =>
      prev.map((q, i) => (i === index ? { ...q, status: 'uploading', progress: 10 } : q))
    );

    const formData = new FormData();
    formData.append('galleryId', galleryId);
    formData.append('file', item.file);
    if (setId) formData.append('setId', setId);

    try {
      const res = await fetch('/api/gallery/upload', {
        method: 'POST',
        headers: { 'x-gallery-admin-secret': 'shp-gallery-2026' },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Upload failed' }));
        setQueue((prev) =>
          prev.map((q, i) =>
            i === index ? { ...q, status: 'error', progress: 0, error: err.error || 'Failed' } : q
          )
        );
        return null;
      }

      const result: UploadedImage = await res.json();
      setQueue((prev) =>
        prev.map((q, i) =>
          i === index ? { ...q, status: 'done', progress: 100, result } : q
        )
      );
      return result;
    } catch {
      setQueue((prev) =>
        prev.map((q, i) =>
          i === index ? { ...q, status: 'error', progress: 0, error: 'Network error' } : q
        )
      );
      return null;
    }
  }

  async function startUpload() {
    const pending = queue.filter((q) => q.status === 'pending');
    if (pending.length === 0) return;

    setIsUploading(true);
    uploadedImages.current = [];

    // Process in batches of BATCH_SIZE
    const pendingWithIndex = queue
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.status === 'pending');

    for (let i = 0; i < pendingWithIndex.length; i += BATCH_SIZE) {
      const batch = pendingWithIndex.slice(i, i + BATCH_SIZE);
      const results = await Promise.all(
        batch.map(({ item, index }) => uploadFile(item, index))
      );
      results.forEach((r) => {
        if (r) uploadedImages.current.push(r);
      });
    }

    setIsUploading(false);
    setAllDone(true);
    if (onUploadComplete) {
      onUploadComplete(uploadedImages.current);
    }
  }

  const pendingCount = queue.filter((q) => q.status === 'pending').length;
  const doneCount = queue.filter((q) => q.status === 'done').length;
  const errorCount = queue.filter((q) => q.status === 'error').length;
  const uploadingCount = queue.filter((q) => q.status === 'uploading').length;
  const totalCount = queue.length;

  return (
    <div style={{ fontFamily: '"Jost", sans-serif' }}>
      {/* Drop zone */}
      {!isUploading && !allDone && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${isDragging ? '#c9b99a' : '#444'}`,
            borderRadius: '8px',
            padding: '48px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            background: isDragging ? '#c9b99a0d' : '#111',
            transition: 'all 0.2s',
            marginBottom: queue.length > 0 ? '24px' : '0',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>📷</div>
          <p style={{ margin: '0 0 8px', color: '#faf9f7', fontSize: '16px', fontWeight: 300 }}>
            Drop photos here or click to browse
          </p>
          <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>
            Accepts all image formats · Multiple files allowed
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      )}

      {/* Queue */}
      {queue.length > 0 && (
        <>
          {/* Overall progress */}
          {isUploading && (
            <div style={{
              background: '#222',
              border: '1px solid #2a2a2a',
              borderRadius: '6px',
              padding: '16px 20px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{ color: '#888', fontSize: '13px' }}>
                Uploading {doneCount + uploadingCount} of {totalCount}…
              </span>
              <span style={{ color: '#c9b99a', fontSize: '13px', fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(((doneCount + errorCount) / totalCount) * 100)}%
              </span>
            </div>
          )}

          {/* Success state */}
          {allDone && (
            <div style={{
              background: '#1d3a2a',
              border: '1px solid #2a5a3a',
              borderRadius: '6px',
              padding: '16px 20px',
              marginBottom: '16px',
              color: '#5cc98a',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ fontSize: '20px' }}>✓</span>
              <span>
                {doneCount} photo{doneCount !== 1 ? 's' : ''} uploaded successfully
                {errorCount > 0 && ` · ${errorCount} failed`}
              </span>
            </div>
          )}

          {/* Thumbnail grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '10px',
            marginBottom: '20px',
          }}>
            {queue.map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  position: 'relative',
                  paddingTop: '100%',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: '#111',
                  border: `1px solid ${
                    item.status === 'done' ? '#2a5a3a' :
                    item.status === 'error' ? '#5a2a2a' :
                    item.status === 'uploading' ? '#c9b99a44' :
                    '#2a2a2a'
                  }`,
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.previewUrl}
                    alt={item.file.name}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: item.status === 'uploading' ? 0.5 : 1,
                    }}
                  />
                  {/* Status overlay */}
                  {item.status === 'done' && (
                    <div style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      background: '#1d3a2a',
                      border: '1px solid #2a5a3a',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#5cc98a',
                    }}>✓</div>
                  )}
                  {item.status === 'error' && (
                    <div style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      background: '#2a1a1a',
                      border: '1px solid #5a2a2a',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#e05555',
                    }}>!</div>
                  )}
                  {item.status === 'uploading' && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: '#333',
                    }}>
                      <div style={{
                        height: '100%',
                        background: '#c9b99a',
                        width: `${item.progress}%`,
                        transition: 'width 0.3s',
                      }} />
                    </div>
                  )}
                </div>
                <p style={{
                  margin: '4px 0 0',
                  fontSize: '10px',
                  color: item.status === 'error' ? '#e05555' : '#666',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {item.error || item.file.name}
                </p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          {!allDone && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {pendingCount > 0 && !isUploading && (
                <button
                  type="button"
                  onClick={startUpload}
                  style={{
                    background: '#c9b99a',
                    color: '#1a1a1a',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 24px',
                    fontSize: '12px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontFamily: '"Jost", sans-serif',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Upload {pendingCount} Photo{pendingCount !== 1 ? 's' : ''}
                </button>
              )}
              {!isUploading && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
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
                  Add More
                </button>
              )}
              {isUploading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #444',
                    borderTopColor: '#c9b99a',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                  }} />
                  <span style={{ color: '#888', fontSize: '13px' }}>Uploading…</span>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
          )}

          {/* Add more after done */}
          {allDone && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <button
                type="button"
                onClick={() => {
                  setAllDone(false);
                  fileInputRef.current?.click();
                }}
                style={{
                  background: 'transparent',
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
                Add More Photos
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
