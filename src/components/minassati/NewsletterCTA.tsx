import Link from "next/link";
import { ArrowLeft, Heart, Share2 } from "lucide-react";

interface NewsletterCTAProps {
  variant?: "dark" | "light";
}

export function NewsletterCTA({ variant = "light" }: NewsletterCTAProps) {
  const isDark = variant === "dark";
  return (
    <div className={`rounded-[2rem] p-6 sm:p-8 ${isDark ? "bg-slate-950 text-white" : "border border-slate-200 bg-white shadow-soft"}`}>
      <div className="flex items-start gap-4">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${isDark ? "bg-white/10 text-teal-300" : "bg-teal-50 text-teal-700"}`}>
          <Heart className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className={`text-xl font-black ${isDark ? "text-white" : "text-slate-950"}`}>
            ابدأ بخطة 10 دقائق يومياً
          </h3>
          <p className={`mt-2 leading-8 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            10 دقائق يومياً مع طفلك تكفي لبناء عادة إيمانية تدوم. درس قصير، سؤال، ذكر، ونشاط بسيط.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/start"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 ${isDark ? "bg-white text-slate-950" : "bg-slate-950 text-white shadow-lg shadow-slate-950/16"}`}
            >
              ابدأ من هنا <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/?text=${encodeURIComponent("اكتشفت منصة منصتي لتعليم الإسلام للأطفال، جربها معي! https://minassati.ma")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 ${isDark ? "border-white/30 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700"}`}
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
              شارك منصتي مع ولي أمر آخر
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
