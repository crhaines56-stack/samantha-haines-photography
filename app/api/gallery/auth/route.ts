import { NextRequest, NextResponse } from 'next/server';
import { getGallery, verifyPassword, logActivity } from '@/lib/gallery';
import { createHash } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { slug, password } = await req.json();

    if (!slug || !password) {
      return NextResponse.json({ error: 'Missing slug or password' }, { status: 400 });
    }

    const gallery = await getGallery(slug);
    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 });
    }

    if (gallery.is_expired || (gallery.expires_at && new Date(gallery.expires_at) < new Date())) {
      return NextResponse.json({ error: 'Gallery has expired' }, { status: 410 });
    }

    const accessType = verifyPassword(gallery as { collection_password: string; client_password: string }, password);
    if (!accessType) {
      return NextResponse.json({ accessType: null }, { status: 401 });
    }

    // Log visit activity
    const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
    const ipHash = createHash('sha256').update(ip).digest('hex').substring(0, 16);
    await logActivity(gallery.id, 'gallery_view', { visitorIpHash: ipHash, accessType });

    const response = NextResponse.json({
      accessType,
      galleryId: gallery.id,
      clientName: gallery.client_name,
    });

    // Set auth cookie
    response.cookies.set(`gallery_access_${slug}`, accessType, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('Gallery auth error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
