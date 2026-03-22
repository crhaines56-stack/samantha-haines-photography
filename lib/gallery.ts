import { sql } from './db';

export function generateSlug(clientName: string, sessionType: string): string {
  const base = `${clientName}-${sessionType}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const suffix = Math.random().toString(36).substring(2, 7);
  return `${base}-${suffix}`;
}

export function generatePassword(length: number = 8): string {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export async function getGallery(slug: string) {
  const rows = await sql`
    SELECT * FROM galleries WHERE slug = ${slug} LIMIT 1
  `;
  return rows[0] ?? null;
}

export async function getGalleryImages(galleryId: string, setId?: string) {
  if (setId) {
    return await sql`
      SELECT * FROM gallery_images
      WHERE gallery_id = ${galleryId} AND set_id = ${setId} AND is_private = FALSE
      ORDER BY display_order ASC, uploaded_at ASC
    `;
  }
  return await sql`
    SELECT * FROM gallery_images
    WHERE gallery_id = ${galleryId} AND is_private = FALSE
    ORDER BY display_order ASC, uploaded_at ASC
  `;
}

export async function getGallerySets(galleryId: string) {
  return await sql`
    SELECT * FROM gallery_sets
    WHERE gallery_id = ${galleryId}
    ORDER BY display_order ASC
  `;
}

export async function logActivity(
  galleryId: string,
  action: string,
  opts?: {
    imageId?: string;
    visitorIpHash?: string;
    visitorName?: string;
    accessType?: string;
  }
) {
  try {
    await sql`
      INSERT INTO gallery_activity (gallery_id, action, image_id, visitor_ip_hash, visitor_name, access_type)
      VALUES (
        ${galleryId},
        ${action},
        ${opts?.imageId ?? null},
        ${opts?.visitorIpHash ?? null},
        ${opts?.visitorName ?? null},
        ${opts?.accessType ?? null}
      )
    `;
  } catch (err) {
    console.error('Failed to log activity:', err);
  }
}

export function verifyPassword(
  gallery: { collection_password: string; client_password: string },
  password: string
): 'client' | 'guest' | null {
  if (password === gallery.client_password) return 'client';
  if (password === gallery.collection_password) return 'guest';
  return null;
}
