"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Mail, Send, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackCourseInterest, trackInstructorInterest, trackLeadFormSubmit, trackResourceRequest } from "@/lib/analytics";

type InterestType = "course_waitlist" | "instructor_application" | "resource_request" | "pro_interest" | "contact";

type LeadCaptureProps = {
  id: string;
  title: string;
  description: string;
  subject: string;
  body?: string;
  buttonLabel: string;
  source: string;
  interestType?: InterestType;
  entitySlug?: string;
  messagePlaceholder?: string;
  className?: string;
};

type Status = "idle" | "loading" | "success" | "fallback" | "error";

function inferInterest(source: string): InterestType {
  if (source.startsWith("course:")) return "course_waitlist";
  if (source.startsWith("resource:") || source === "resources") return "resource_request";
  if (source === "instructors") return "instructor_application";
  if (source === "pricing") return "pro_interest";
  return "contact";
}

function sourceSlug(source: string) {
  return source.includes(":") ? source.split(":").slice(1).join(":") : "";
}

export function LeadCapture({
  id,
  title,
  description,
  subject,
  body = "",
  buttonLabel,
  source,
  interestType,
  entitySlug,
  messagePlaceholder = "اكتب المجال الذي يهمك أو أي تفاصيل تساعدنا على الرد عليك.",
  className,
}: LeadCaptureProps) {
  const resolvedInterest = interestType || inferInterest(source);
  const resolvedSlug = entitySlug || sourceSlug(source);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", message: body });
  const mailtoHref = useMemo(() => {
    const fallbackBody = [
      values.name ? `الاسم: ${values.name}` : "",
      values.email ? `البريد: ${values.email}` : "",
      values.message || body,
      `المصدر: ${source}`,
      resolvedSlug ? `المعرف: ${resolvedSlug}` : "",
    ].filter(Boolean).join("\n");
    return `mailto:contact@minassati.ma?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fallbackBody)}`;
  }, [body, resolvedSlug, source, subject, values.email, values.message, values.name]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      interestType: resolvedInterest,
      message: String(formData.get("message") || ""),
      source,
      sourcePage: window.location.pathname,
      entitySlug: resolvedSlug,
      subject,
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.errors) {
        setFieldErrors(result.errors || {});
        setError(result.error || "تعذر إرسال الطلب. راجع الحقول وحاول مرة أخرى.");
        setStatus("error");
        trackLeadFormSubmit("failure", { type: resolvedInterest, source, slug: resolvedSlug });
        return;
      }

      if (result.fallback) {
        setStatus("fallback");
        trackLeadFormSubmit("fallback", { type: resolvedInterest, source, slug: resolvedSlug });
      } else {
        setStatus("success");
        trackLeadFormSubmit("success", { type: resolvedInterest, source, slug: resolvedSlug });
      }

      if (resolvedInterest === "course_waitlist" && resolvedSlug) trackCourseInterest(resolvedSlug, result.fallback ? "fallback" : "submitted");
      if (resolvedInterest === "instructor_application") trackInstructorInterest(result.fallback ? "fallback" : "submitted");
      if (resolvedInterest === "resource_request") trackResourceRequest(resolvedSlug || source, result.fallback ? "fallback" : "submitted");
      form.reset();
      setValues({ name: "", email: "", message: body });
    } catch {
      setStatus("fallback");
      trackLeadFormSubmit("fallback", { type: resolvedInterest, source, slug: resolvedSlug });
    }
  }

  return (
    <section id={id} className={cn("rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-soft", className)} data-lead-source={source}>
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <h2 className="text-2xl font-black text-slate-950">{title}</h2>
          <p className="mt-2 text-sm font-bold leading-8 text-slate-700">{description}</p>
        </div>
        <Link
          href={mailtoHref}
          className="cta-waitlist inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 ring-1 ring-blue-100"
          data-cta-id={`${id}-mailto-fallback`}
          data-cta-source={source}
          data-course-slug={resolvedInterest === "course_waitlist" ? resolvedSlug : undefined}
          data-resource-slug={resolvedInterest === "resource_request" ? resolvedSlug : undefined}
        >
          <Mail className="h-4 w-4" />
          فتح البريد
        </Link>
      </div>

      <form className="mt-5 grid gap-4" aria-label={title} onSubmit={onSubmit}>
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="interestType" value={resolvedInterest} />
        <input type="hidden" name="entitySlug" value={resolvedSlug} />
        <label className="hidden">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <FieldError error={fieldErrors.name}>
            <input
              name="name"
              required
              minLength={2}
              placeholder="الاسم"
              className="h-12 rounded-xl border border-blue-100 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400"
              onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            />
          </FieldError>
          <FieldError error={fieldErrors.email}>
            <input
              name="email"
              required
              type="email"
              placeholder="البريد الإلكتروني"
              className="h-12 rounded-xl border border-blue-100 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400"
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            />
          </FieldError>
        </div>
        <FieldError error={fieldErrors.message}>
          <textarea
            name="message"
            required
            minLength={5}
            defaultValue={body}
            placeholder={messagePlaceholder}
            className="min-h-28 rounded-xl border border-blue-100 bg-white p-4 text-sm font-bold leading-7 outline-none focus:border-blue-400"
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          />
        </FieldError>
        <button
          className="cta-lead-form inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          data-cta-id={`${id}-form`}
          data-cta-source={source}
          data-course-slug={resolvedInterest === "course_waitlist" ? resolvedSlug : undefined}
          data-resource-slug={resolvedInterest === "resource_request" ? resolvedSlug : undefined}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {buttonLabel}
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-bold leading-7 text-emerald-800">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" /> تم إرسال الطلب. سنراجع الرسالة ونعود إليك عند توفر تحديث مناسب.
        </p>
      ) : null}
      {status === "fallback" ? (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-sm font-bold leading-7 text-amber-900">
          <TriangleAlert className="mt-1 h-4 w-4 shrink-0" /> نظام البريد غير مفعّل بالكامل حالياً. استخدم زر فتح البريد أعلاه لإرسال نفس الطلب مباشرة.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm font-bold leading-7 text-red-800">
          <TriangleAlert className="mt-1 h-4 w-4 shrink-0" /> {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs font-bold leading-6 text-slate-500">لا نطلب أي دفع أو بيانات بطاقة. هذا النموذج مخصص لقياس الاهتمام والرد على الطلبات الجادة.</p>
    </section>
  );
}

function FieldError({ error, children }: { error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-1">
      {children}
      {error ? <span className="text-xs font-bold text-red-700">{error}</span> : null}
    </label>
  );
}
