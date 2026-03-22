import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { emails, galleryName, galleryUrl, password, passwordLabel } = await req.json();

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json({ error: 'No emails provided' }, { status: 400 });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${galleryName}'s Gallery is Ready</title>
</head>
<body style="margin:0;padding:0;background:#faf9f7;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf9f7;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a1a1a;border-radius:4px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:40px 48px;background:#1a1a1a;text-align:center;border-bottom:1px solid #2a2a2a;">
              <p style="margin:0 0 8px;color:#c9b99a;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Samantha Haines Photography</p>
              <h1 style="margin:0;color:#faf9f7;font-size:28px;font-weight:300;letter-spacing:1px;">Your gallery is ready</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;background:#1a1a1a;">
              <p style="margin:0 0 24px;color:#c9b99a;font-size:16px;line-height:1.7;text-align:center;">
                ${galleryName}'s gallery is ready to view. Click the button below to open it.
              </p>
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 32px;">
                    <a href="${galleryUrl}" style="display:inline-block;background:#c9b99a;color:#1a1a1a;text-decoration:none;font-size:14px;letter-spacing:2px;text-transform:uppercase;padding:14px 40px;border-radius:2px;font-weight:500;">
                      View Gallery
                    </a>
                  </td>
                </tr>
              </table>
              <!-- Password box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:4px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 6px;color:#888;font-size:11px;letter-spacing:2px;text-transform:uppercase;">${passwordLabel || 'Gallery Password'}</p>
                    <p style="margin:0;color:#faf9f7;font-size:18px;letter-spacing:4px;font-family:monospace;">${password}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:32px 0 0;color:#555;font-size:12px;text-align:center;line-height:1.6;">
                You're receiving this because Samantha Haines Photography has shared a gallery with you.<br/>
                If you have questions, reply to this email or contact Samantha directly.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 48px;background:#111111;text-align:center;">
              <p style="margin:0;color:#555;font-size:11px;letter-spacing:1px;">
                © Samantha Haines Photography · Austin, Texas
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const results = await Promise.allSettled(
      emails.map((email: string) =>
        resend.emails.send({
          from: 'Samantha Haines Photography <noreply@samanthahainesphotography.com>',
          to: email,
          subject: `${galleryName}'s Gallery is ready — Samantha Haines Photography`,
          html,
        })
      )
    );

    const failed = results.filter((r) => r.status === 'rejected');
    if (failed.length > 0) {
      console.error('Some emails failed:', failed);
    }

    return NextResponse.json({
      success: true,
      sent: results.filter((r) => r.status === 'fulfilled').length,
      failed: failed.length,
    });
  } catch (err) {
    console.error('Invite email error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
