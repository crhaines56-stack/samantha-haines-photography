import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const secret = process.env.GALLERY_ADMIN_SECRET;

    if (!secret || password !== secret) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    const res = NextResponse.json({ success: true });

    // Set httpOnly cookie valid for 7 days
    res.cookies.set('admin_auth', secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return res;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
