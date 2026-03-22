import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Samantha Haines Photography <noreply@samanthahainesphotography.com>",
      to: "samantha@samanthahainesphotography.com",
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
          <p style="margin-top: 40px; color: #6b6b6b; font-size: 12px;">This inquiry was submitted via samanthahainesphotography.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
