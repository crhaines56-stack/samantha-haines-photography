import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get('admin_auth');
  const validSecret = process.env.GALLERY_ADMIN_SECRET;

  if (!authCookie || authCookie.value !== validSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const galleries = await sql`
      SELECT
        id, slug, client_name, client_email, session_type,
        collection_password, client_password, download_pin,
        is_shareable, is_expired, watermark_previews, allow_downloads,
        expires_at, created_at
      FROM galleries
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ galleries });
  } catch (err) {
    console.error('Admin galleries fetch error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
