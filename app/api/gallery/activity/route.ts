import { NextRequest, NextResponse } from 'next/server';
import { logActivity } from '@/lib/gallery';
import { createHash } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { galleryId, action, imageId, accessType } = await req.json();

    if (!galleryId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
    const ipHash = createHash('sha256').update(ip).digest('hex').substring(0, 16);

    await logActivity(galleryId, action, { imageId, visitorIpHash: ipHash, accessType });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Activity POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
