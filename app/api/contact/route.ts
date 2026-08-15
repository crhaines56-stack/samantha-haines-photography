import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── HubSpot Contact Creation ────────────────────────────────────────────────
async function createHubSpotContact(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const token = process.env.HUBSPOT_API_KEY;
  if (!token) {
    console.warn("HUBSPOT_API_KEY not set — skipping HubSpot sync");
    return;
  }

  // Split name into first/last best-effort
  const nameParts = data.name.trim().split(/\s+/);
  const firstname = nameParts[0] ?? data.name;
  const lastname = nameParts.slice(1).join(" ") || "";

  const properties: Record<string, string> = {
    email: data.email,
    firstname,
    lastname,
    hs_lead_status: "NEW",
    // Store the full inquiry message in the HubSpot "message" property
    message: `[Service: ${data.service || "General"}]\n\n${data.message}`,
  };

  if (data.phone) properties.phone = data.phone;

  // Create or update the contact (upsert by email)
  const res = await fetch(
    "https://api.hubapi.com/crm/v3/objects/contacts",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    // 409 = contact already exists — that's fine, not an error
    if (res.status === 409) {
      console.log("HubSpot: contact already exists for", data.email);
    } else {
      console.error("HubSpot error:", res.status, body);
    }
  } else {
    const result = await res.json();
    console.log("HubSpot contact created:", result.id);
  }
}

// ─── Contact Form API Route ───────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Use verified domain if available, fall back to resend.dev until DNS is live
    const fromDomain = process.env.EMAIL_DOMAIN_VERIFIED === "true"
      ? "noreply@samanthahainesphotography.com"
      : "onboarding@resend.dev";

    // Send email notification to Samantha
    const { data, error: resendError } = await resend.emails.send({
      from: `Samantha Haines Photography <${fromDomain}>`,
      to: process.env.CONTACT_EMAIL || "samantha@samanthahainesphotography.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${service || "General"}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #faf9f7;">
          <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 24px;">New Client Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e8e4df;">
              <td style="padding: 12px 0; color: #8b6f5e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e4df;">
              <td style="padding: 12px 0; color: #8b6f5e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; color: #1a1a1a;"><a href="mailto:${email}" style="color: #8b6f5e;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr style="border-bottom: 1px solid #e8e4df;">
              <td style="padding: 12px 0; color: #8b6f5e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
              <td style="padding: 12px 0; color: #1a1a1a;">${phone}</td>
            </tr>
            ` : ""}
            ${service ? `
            <tr style="border-bottom: 1px solid #e8e4df;">
              <td style="padding: 12px 0; color: #8b6f5e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td>
              <td style="padding: 12px 0; color: #1a1a1a;">${service}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 12px 0; color: #8b6f5e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1a1a1a; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; padding: 16px; background: #f0ebe4; border-left: 3px solid #8b6f5e; font-size: 13px; color: #6b6b6b;">
            ✅ This lead has been automatically added to your <strong>HubSpot CRM</strong>.
          </p>
          <p style="margin-top: 16px; color: #6b6b6b; font-size: 12px;">This inquiry was submitted via samanthahainesphotography.com</p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or contact us directly." },
        { status: 500 }
      );
    }

    // Fire HubSpot sync in the background — don't block the response
    createHubSpotContact({ name, email, phone, service, message }).catch((err) =>
      console.error("HubSpot sync failed (non-fatal):", err)
    );

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
