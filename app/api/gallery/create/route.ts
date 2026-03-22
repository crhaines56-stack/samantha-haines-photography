import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { generateSlug, generatePassword } from '@/lib/gallery';

export async function POST(req: NextRequest) {
  try {
    // Verify admin secret
    const adminSecret = req.headers.get('x-gallery-admin-secret');
    if (adminSecret !== process.env.GALLERY_ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
      clientName,
      clientEmail,
      sessionType,
      isShareable = true,
      watermarkPreviews = false,
      allowDownloads = true,
      downloadPin,
      expiresInDays,
      clientPassword: providedClientPassword,
      collectionPassword: providedCollectionPassword,
    } = await req.json();

    if (!clientName || !sessionType) {
      return NextResponse.json({ error: 'clientName and sessionType are required' }, { status: 400 });
    }

    const slug = generateSlug(clientName, sessionType);
    const collectionPassword = providedCollectionPassword || generatePassword(8);
    const clientPassword = providedClientPassword || generatePassword(10);
    const pin = downloadPin ?? null;

    const expiresAt = expiresInDays
      ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000).toISOString()
      : null;

    await sql`
      INSERT INTO galleries (
        slug, client_name, client_email, session_type,
        collection_password, client_password, download_pin,
        is_shareable, watermark_previews, allow_downloads, expires_at
      ) VALUES (
        ${slug}, ${clientName}, ${clientEmail ?? null}, ${sessionType},
        ${collectionPassword}, ${clientPassword}, ${pin},
        ${isShareable}, ${watermarkPreviews}, ${allowDownloads}, ${expiresAt}
      )
    `;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.samanthahainesphotography.com';

    return NextResponse.json({
      slug,
      galleryUrl: `${baseUrl}/gallery/${slug}`,
      collectionPassword,
      clientPassword,
      ...(pin ? { downloadPin: pin } : {}),
    });
  } catch (err) {
    console.error('Gallery create error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
