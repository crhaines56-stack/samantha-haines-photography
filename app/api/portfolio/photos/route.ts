import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (!category) {
    return NextResponse.json({ error: 'Category required' }, { status: 400 });
  }

  const photos = await sql`
    SELECT id, cloudinary_url, cloudinary_public_id, width, height
    FROM portfolio_photos
    WHERE category = ${category}
    ORDER BY created_at DESC
  `;

  return NextResponse.json({ photos });
}
