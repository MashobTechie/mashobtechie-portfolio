import { NextResponse } from "next/server";

import { validateInquiry, type Inquiry } from "@/lib/inquiry";
import { site } from "@/content/site";

/**
 * Project inquiry endpoint.
 *
 * Validates the submission and hands it to `deliverInquiry`. Delivery is
 * currently a server-side log — swap the body of that function for Resend,
 * Supabase, a webhook or whatever you prefer, and nothing else changes.
 */
export async function POST(request: Request) {
  let payload: Partial<Inquiry> & { website?: string };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: real people never fill a hidden field. Accept silently so bots
  // get no signal that they were caught.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateInquiry(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const inquiry: Inquiry = {
    name: payload.name!.trim(),
    email: payload.email!.trim(),
    company: payload.company?.trim() || undefined,
    projectType: payload.projectType!,
    budget: payload.budget || "Not specified",
    timeline: payload.timeline || "Not specified",
    message: payload.message!.trim(),
  };

  try {
    await deliverInquiry(inquiry);
  } catch (error) {
    console.error("[inquiry] delivery failed", error);
    return NextResponse.json(
      { ok: false, error: "Could not send your inquiry. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

/**
 * TODO(launch): replace with real delivery.
 *
 * Resend example:
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Website <inquiries@mashobtechie.com>",
 *     to: site.email,
 *     replyTo: inquiry.email,
 *     subject: `New project inquiry — ${inquiry.name}`,
 *     text: formatInquiry(inquiry),
 *   });
 */
async function deliverInquiry(inquiry: Inquiry) {
  console.info(
    `[inquiry] would deliver to ${site.email}\n${formatInquiry(inquiry)}`,
  );
}

function formatInquiry(inquiry: Inquiry) {
  return [
    `Name:      ${inquiry.name}`,
    `Email:     ${inquiry.email}`,
    `Business:  ${inquiry.company ?? "—"}`,
    `Building:  ${inquiry.projectType}`,
    `Budget:    ${inquiry.budget}`,
    `Timeline:  ${inquiry.timeline}`,
    "",
    inquiry.message,
  ].join("\n");
}
