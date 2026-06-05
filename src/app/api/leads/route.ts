import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  interestType?: string;
  message?: string;
  sourcePage?: string;
  source?: string;
  entitySlug?: string;
  subject?: string;
  website?: string;
};

const allowedInterests = new Set(["course_waitlist", "instructor_application", "resource_request", "pro_interest", "contact", "guidance_request"]);
const buckets = new Map<string, { count: number; resetAt: number }>();
const windowMs = 60_000;
const maxRequests = 5;

function clean(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function rateGuard(ip: string) {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || current.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  current.count += 1;
  return current.count <= maxRequests;
}

function validate(payload: LeadPayload) {
  const lead = {
    name: clean(payload.name, 120),
    email: clean(payload.email, 180).toLowerCase(),
    interestType: clean(payload.interestType, 80),
    message: clean(payload.message, 2000),
    sourcePage: clean(payload.sourcePage, 300),
    source: clean(payload.source, 120),
    entitySlug: clean(payload.entitySlug, 120),
    subject: clean(payload.subject, 180) || "Lead from Minassati",
    website: clean(payload.website, 200),
  };

  const errors: Record<string, string> = {};
  if (lead.website) errors.website = "Spam protection triggered.";
  if (lead.name.length < 2) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) errors.email = "A valid email is required.";
  if (!allowedInterests.has(lead.interestType)) errors.interestType = "Interest type is required.";
  if (lead.message.length < 5) errors.message = "Message is required.";
  if (!lead.sourcePage) errors.sourcePage = "Source page is required.";

  return { lead, errors };
}

async function sendViaResend(lead: ReturnType<typeof validate>["lead"]) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_CAPTURE_TO_EMAIL;
  if (!apiKey || !to) return { delivered: false, reason: "missing_env" };

  const from = process.env.RESEND_FROM_EMAIL || "Minassati Leads <onboarding@resend.dev>";
  const replyTo = lead.email;
  const lines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Interest: ${lead.interestType}`,
    `Source: ${lead.source}`,
    `Source page: ${lead.sourcePage}`,
    `Slug: ${lead.entitySlug || "-"}`,
    "",
    lead.message,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject: `[Minassati] ${lead.subject}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    return { delivered: false, reason: "resend_error", detail: text.slice(0, 300) };
  }

  return { delivered: true };
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") || "";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";
  if (!rateGuard(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Try again soon." }, { status: 429 });
  }

  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { lead, errors } = validate(payload);
  if (Object.keys(errors).length > 0) {
    const status = errors.website ? 200 : 400;
    return NextResponse.json({ ok: !errors.website, errors }, { status });
  }

  try {
    const delivery = await sendViaResend(lead);
    if (!delivery.delivered) {
      return NextResponse.json({ ok: true, fallback: true, reason: delivery.reason });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: true, fallback: true, reason: "delivery_exception" });
  }
}
