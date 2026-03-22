import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify admin secret
    const adminSecret = req.headers.get('x-gallery-admin-secret');
    if (adminSecret !== process.env.GALLERY_ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    // Get the image record to get the Cloudinary public_id
    const rows = await sql`
      SELECT id, cloudinary_public_id FROM gallery_images WHERE id = ${id} LIMIT 1
    `;

    if (!rows.length) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const image = rows[0] as { id: string; cloudinary_public_id: string | null };

    // Delete from Cloudinary if we have a public_id
    if (image.cloudinary_public_id) {
      try {
        await cloudinary.uploader.destroy(image.cloudinary_public_id);
      } catch (cloudinaryErr) {
        console.error('Cloudinary delete error (non-fatal):', cloudinaryErr);
        // Continue even if Cloudinary delete fails — still remove from DB
      }
    }

    // Delete from database
    await sql`DELETE FROM gallery_images WHERE id = ${id}`;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Delete image error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
