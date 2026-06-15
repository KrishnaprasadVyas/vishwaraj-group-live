/**
 * RESEND SETUP REQUIRED:
 * 1. Create account at resend.com
 * 2. Add & verify domain vishwarajgroup.com at resend.com/domains
 * 3. Create API key at resend.com/api-keys
 * 4. Copy .env.local.example to .env.local and fill in the values
 * 5. Set same env vars in your deployment platform (Vercel/etc)
 */
import { Resend } from "resend";

import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/contact-schema";
import { cleanContactDetails, siteConfig } from "@/lib/content";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid contact payload." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail =
    process.env.CONTACT_EMAIL ??
    cleanContactDetails.emails[1]?.email ??
    cleanContactDetails.emails[0]?.email;

  if (!apiKey || !contactEmail) {
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, phone, email, message } = parsed.data;

  try {
    await Promise.all([
      resend.emails.send({
        from: `${siteConfig.companyName} <${process.env.RESEND_FROM_EMAIL ?? "noreply@vishwarajpolychem.com"}>`,
        to: contactEmail,
        replyTo: email,
        subject: `New website inquiry from ${name}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827"><h2 style="margin:0 0 16px">New inquiry from ${name}</h2><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replaceAll("\n", "<br/>")}</p></div>`,
      }),
      resend.emails.send({
        from: `${siteConfig.companyName} <${process.env.RESEND_FROM_EMAIL ?? "noreply@vishwarajpolychem.com"}>`,
        to: email,
        subject: `We received your inquiry`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827"><h2 style="margin:0 0 16px">Thanks, ${name}</h2><p>We received your inquiry and will get back to you shortly.</p><p><strong>${siteConfig.companyName}</strong><br/>${contactEmail}</p></div>`,
      }),
    ]);

    return NextResponse.json({
      message: "Your inquiry has been sent successfully.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
