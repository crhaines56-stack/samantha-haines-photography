import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ galleryId: string }> }
) {
  // Accept both cookie auth (browser) and header auth (API)
  const authCookie = req.cookies.get('admin_auth');
  const headerSecret = req.headers.get('x-gallery-admin-secret');
  const validSecret = process.env.GALLERY_ADMIN_SECRET;

  const isAuthed =
    (authCookie && authCookie.value === validSecret) ||
    headerSecret === validSecret;

  if (!isAuthed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { galleryId } = await params;

    const images = await sql`
      SELECT
        id, gallery_id, set_id, cloudinary_public_id,
        original_url, preview_url, thumbnail_url,
        filename, width, height, display_order, is_private, uploaded_at
      FROM gallery_images
      WHERE gallery_id = ${galleryId}
      ORDER BY display_order ASC, uploaded_at ASC
    `;

    return NextResponse.json({ images });
  } catch (err) {
    console.error('Admin gallery images fetch error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
