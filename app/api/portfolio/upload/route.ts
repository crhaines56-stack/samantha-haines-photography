import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';
export const maxDuration = 60;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;
    const password = formData.get('password') as string;

    const validPassword = process.env.GALLERY_ADMIN_SECRET || 'shp-gallery-2026';
    if (password !== validPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!file || !category) {
      return NextResponse.json({ error: 'File and category required' }, { status: 400 });
    }

    const VALID_CATEGORIES = ['boudoir', 'senior', 'family', 'maternity', 'branding'];
    if (!VALID_CATEGORIES.includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${buffer.toString('base64')}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: `shp/portfolio/${category}`,
      resource_type: 'image',
    });

    await sql`
      INSERT INTO portfolio_photos (category, cloudinary_url, cloudinary_public_id, width, height)
      VALUES (${category}, ${result.secure_url}, ${result.public_id}, ${result.width}, ${result.height})
    `;

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      width: result.width,
      height: result.height,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Portfolio upload error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
