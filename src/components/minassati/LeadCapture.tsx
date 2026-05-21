import Link from "next/link";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type LeadCaptureProps = {
  id: string;
  title: string;
  description: string;
  subject: string;
  body?: string;
  buttonLabel: string;
  source: string;
  className?: string;
};

export function LeadCapture({ id, title, description, subject, body = "", buttonLabel, source, className }: LeadCaptureProps) {
  const href = `mailto:contact@minassati.ma?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id={id} className={cn("rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-soft", className)} data-lead-source={source}>
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-950">{title}</h2>
          <p className="mt-2 text-sm font-bold leading-8 text-slate-700">{description}</p>
        </div>
        <Link
          href={href}
          className="cta-waitlist inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white"
          data-cta-id={id}
          data-cta-source={source}
        >
          <Mail className="h-4 w-4" />
          {buttonLabel}
        </Link>
      </div>
      <form className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_auto]" action="mailto:contact@minassati.ma" method="post" encType="text/plain" aria-label={title}>
        <input type="hidden" name="source" value={source} />
        <input name="name" placeholder="الاسم" className="h-11 rounded-xl border border-blue-100 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400" />
        <input name="email" type="email" placeholder="البريد الإلكتروني" className="h-11 rounded-xl border border-blue-100 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400" />
        <button className="cta-static-form h-11 rounded-xl bg-white px-5 text-sm font-black text-slate-950 ring-1 ring-blue-100" data-cta-id={`${id}-form`} type="submit">
          إرسال
        </button>
      </form>
      <p className="mt-3 text-xs font-bold leading-6 text-slate-500">نموذج بسيط يفتح تطبيق البريد. لا يوجد تخزين بيانات أو دفع داخل الموقع حالياً.</p>
    </section>
  );
}
