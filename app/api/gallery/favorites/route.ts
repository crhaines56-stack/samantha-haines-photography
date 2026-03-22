import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getAuthCookie(req: NextRequest, slug: string) {
  return req.cookies.get(`gallery_access_${slug}`)?.value ?? null;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const galleryId = searchParams.get('galleryId');
    const slug = searchParams.get('slug');

    if (!galleryId || !slug) {
      return NextResponse.json({ error: 'Missing galleryId or slug' }, { status: 400 });
    }

    const access = getAuthCookie(req, slug);
    if (!access) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const favorites = await sql`
      SELECT gf.*, gi.thumbnail_url, gi.preview_url, gi.original_url, gi.filename
      FROM gallery_favorites gf
      JOIN gallery_images gi ON gf.image_id = gi.id
      WHERE gf.gallery_id = ${galleryId}
      ORDER BY gf.created_at ASC
    `;

    return NextResponse.json({ favorites });
  } catch (err) {
    console.error('Favorites GET error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { galleryId, imageId, note, action, slug } = await req.json();

    if (!galleryId || !imageId || !action || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const access = getAuthCookie(req, slug);
    if (!access) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'add') {
      // Upsert favorite
      await sql`
        INSERT INTO gallery_favorites (gallery_id, image_id, note)
        VALUES (${galleryId}, ${imageId}, ${note ?? null})
        ON CONFLICT DO NOTHING
      `;
    } else if (action === 'remove') {
      await sql`
        DELETE FROM gallery_favorites
        WHERE gallery_id = ${galleryId} AND image_id = ${imageId}
      `;
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Favorites POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { galleryId, message, slug, visitorName } = await req.json();

    if (!galleryId || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const access = getAuthCookie(req, slug);
    if (!access) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get gallery info + favorites
    const galleries = await sql`SELECT * FROM galleries WHERE id = ${galleryId} LIMIT 1`;
    const gallery = galleries[0];
    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 });
    }

    const favorites = await sql`
      SELECT gf.*, gi.filename, gi.preview_url, gi.original_url
      FROM gallery_favorites gf
      JOIN gallery_images gi ON gf.image_id = gi.id
      WHERE gf.gallery_id = ${galleryId} AND gf.submitted = FALSE
    `;

    if (favorites.length === 0) {
      return NextResponse.json({ error: 'No favorites to submit' }, { status: 400 });
    }

    // Mark as submitted
    await sql`
      UPDATE gallery_favorites SET submitted = TRUE
      WHERE gallery_id = ${galleryId} AND submitted = FALSE
    `;

    // Send email via Resend
    if (gallery.notify_on_favorites) {
      const favoritesList = (favorites as { filename?: string; original_url: string; note?: string }[])
        .map((f, i: number) =>
          `<li style="margin-bottom:8px;">
            <strong>#${i + 1}:</strong> ${f.filename ?? f.original_url}
            ${f.note ? `<br><em>Note: ${f.note}</em>` : ''}
          </li>`
        )
        .join('');

      await resend.emails.send({
        from: 'Samantha Haines Photography <noreply@samanthahainesphotography.com>',
        to: 'samantha@samanthahainesphotography.com',
        subject: `⭐ ${gallery.client_name} submitted their gallery favorites`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #8b6f5e;">Gallery Favorites Submitted</h2>
            <p><strong>Client:</strong> ${gallery.client_name}</p>
            <p><strong>Session Type:</strong> ${gallery.session_type}</p>
            ${visitorName ? `<p><strong>Submitted by:</strong> ${visitorName}</p>` : ''}
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            <p><strong>Total Favorites:</strong> ${favorites.length}</p>
            <hr style="border-color: #c9b99a; margin: 20px 0;" />
            <h3>Selected Images:</h3>
            <ol>${favoritesList}</ol>
            <hr style="border-color: #c9b99a; margin: 20px 0;" />
            <p style="color: #888; font-size: 12px;">
              This notification was sent from your Samantha Haines Photography client gallery system.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, submitted: favorites.length });
  } catch (err) {
    console.error('Favorites PUT error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
