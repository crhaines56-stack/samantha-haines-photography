import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    // Verify admin secret
    const adminSecret = req.headers.get('x-gallery-admin-secret');
    if (adminSecret !== process.env.GALLERY_ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { galleryId, imageOrder } = await req.json() as {
      galleryId: string;
      imageOrder: string[];
    };

    if (!galleryId || !Array.isArray(imageOrder)) {
      return NextResponse.json({ error: 'galleryId and imageOrder are required' }, { status: 400 });
    }

    // Update display_order for each image
    await Promise.all(
      imageOrder.map((imageId, index) =>
        sql`
          UPDATE gallery_images
          SET display_order = ${index}
          WHERE id = ${imageId} AND gallery_id = ${galleryId}
        `
      )
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Reorder error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
