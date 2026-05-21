# Minassati Lead Capture Setup

Minassati uses a lightweight Next.js lead endpoint at `/api/leads`.

## Backend Option Used

The current implementation uses a Next.js API route with optional Resend email delivery.

Supabase is not configured in this repo, so no database dependency was added. If Resend environment variables are missing, the form still validates and shows a mailto fallback so visitors can send the same request by email.

## Environment Variables

Add these in Vercel Project Settings or `.env.local`:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL=Minassati Leads <onboarding@resend.dev>
LEAD_CAPTURE_TO_EMAIL=contact@minassati.ma
```

Recommended production value for `RESEND_FROM_EMAIL`:

```bash
RESEND_FROM_EMAIL=Minassati <leads@minassati.ma>
```

Use a verified Resend domain before switching away from `onboarding@resend.dev`.

## Forms Wired

- Course waitlist: course detail pages for paid or coming-soon courses
- Instructor applications: `/instructors`
- Resource requests: `/resources` and resource detail pages
- Pro subscription interest: `/pricing`
- Contact page: `/contact`

## Validation

The API validates:

- name
- email
- interest type
- message
- source page
- source identifier
- course/resource slug when provided

## Spam Protection

- Hidden honeypot field named `website`
- Basic in-memory rate guard per IP: 5 requests per minute
- No captcha is used

The rate guard is intentionally lightweight. On serverless infrastructure it is best-effort per runtime instance, not a durable global limiter.

## Analytics Events

CTA clicks are tracked automatically from elements with `data-cta-id`.

Lead forms emit:

- `lead_form_submit`
- `course_interest`
- `instructor_interest`
- `resource_request`

Events go to Vercel Analytics through `@vercel/analytics` and to `window.gtag` when Google Analytics is present. If no analytics provider is configured, tracking is a no-op.

## Fallback Behavior

If Resend is not configured or delivery fails, `/api/leads` returns a successful fallback response. The UI then shows a clean message asking the visitor to use the visible “فتح البريد” button.

This avoids fake success while keeping the visitor’s request recoverable.
