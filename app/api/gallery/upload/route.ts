import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { v2 as cloudinary } from 'cloudinary';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    const adminSecret = req.headers.get('x-gallery-admin-secret');
    if (adminSecret !== process.env.GALLERY_ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const galleryId = formData.get('galleryId') as string;
    const file = formData.get('file') as File;
    const setId = formData.get('setId') as string | null;

    if (!galleryId || !file) {
      return NextResponse.json({ error: 'galleryId and file are required' }, { status: 400 });
    }

    // Convert file to base64 data URI — more reliable in serverless than upload_stream
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${buffer.toString('base64')}`;

    // Upload to Cloudinary using base64 method
    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: `samantha-haines-photography/galleries/${galleryId}`,
      resource_type: 'image',
      use_filename: true,
      unique_filename: true,
      filename_override: file.name.replace(/\.[^.]+$/, ''),
    });

    if (!uploadResult || !uploadResult.public_id) {
      throw new Error(`Cloudinary upload returned no public_id. Result: ${JSON.stringify(uploadResult)}`);
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const publicId = uploadResult.public_id;

    const thumbnailUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_400,h_400,c_fill,q_auto,f_auto/${publicId}`;
    const previewUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_1600,q_auto,f_auto/${publicId}`;
    const originalUrl = uploadResult.secure_url;
    const filename = file.name;
    const width = uploadResult.width;
    const height = uploadResult.height;

    const orderRows = await sql`
      SELECT COALESCE(MAX(display_order), -1) + 1 AS next_order
      FROM gallery_images WHERE gallery_id = ${galleryId}
    `;
    const displayOrder = (orderRows[0] as { next_order: number }).next_order ?? 0;

    const inserted = await sql`
      INSERT INTO gallery_images (
        gallery_id, set_id, cloudinary_public_id,
        original_url, preview_url, thumbnail_url,
        filename, width, height, display_order
      ) VALUES (
        ${galleryId}, ${setId ?? null}, ${publicId},
        ${originalUrl}, ${previewUrl}, ${thumbnailUrl},
        ${filename}, ${width}, ${height}, ${displayOrder}
      ) RETURNING id
    `;

    return NextResponse.json({
      id: (inserted[0] as { id: string }).id,
      thumbnailUrl,
      previewUrl,
      originalUrl,
      filename,
      width,
      height,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Upload error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
