import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import archiver from 'archiver';


export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); const { galleryId, imageIds, mode } = body;

    if (!galleryId) {
      return NextResponse.json({ error: 'Missing galleryId' }, { status: 400 });
    }

    // Fetch requested images
    let images;
    if (mode === 'favorites' && imageIds?.length > 0) {
      images = await sql`
        SELECT id, original_url, filename, display_order
        FROM gallery_images
        WHERE gallery_id = ${galleryId}
        AND id = ANY(${imageIds}::uuid[])
        ORDER BY display_order ASC
      `;
    } else {
      images = await sql`
        SELECT id, original_url, filename, display_order
        FROM gallery_images
        WHERE gallery_id = ${galleryId}
        ORDER BY display_order ASC
      `;
    }

    if (!images.length) {
      return NextResponse.json({ error: 'No images found' }, { status: 404 });
    }

    // Get gallery name for zip filename
    const gallery = await sql`SELECT client_name, session_type FROM galleries WHERE id = ${galleryId}`;
    const galleryName = gallery[0]
      ? `${gallery[0].client_name}-${gallery[0].session_type}`.toLowerCase().replace(/\s+/g, '-')
      : 'gallery';

    // Build zip server-side
    const archive = archiver('zip', { zlib: { level: 6 } });

    // Fetch all images and add to archive
    const fetchPromises = (images as {id: string, original_url: string, filename: string | null, display_order: number}[]).map(async (img, index: number) => {
      const response = await fetch(img.original_url);
      if (!response.ok) return;
      const buffer = await response.arrayBuffer();
      const filename = img.filename || `photo-${String(index + 1).padStart(3, '0')}.jpg`;
      archive.append(Buffer.from(buffer), { name: filename });
    });

    await Promise.all(fetchPromises);
    archive.finalize();

    // Convert archiver stream to ReadableStream for Next.js response
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      archive.on('data', (chunk: Buffer) => chunks.push(chunk));
      archive.on('end', resolve);
      archive.on('error', reject);
    });

    const zipBuffer = Buffer.concat(chunks);
    const zipFilename = `${galleryName}-photos.zip`;

    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${zipFilename}"`,
        'Content-Length': String(zipBuffer.length),
      },
    });
  } catch (err: unknown) {
    console.error('Download error:', err);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}
