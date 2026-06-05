"use client";

import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

const columns = [
  {
    title: "الأقسام",
    links: [
      ["/schools", "المدارس المغربية"],
      ["/opportunities", "الفرص الأجنبية"],
      ["/guidance-request", "التوجيه الشخصي"],
      ["/calendar", "التقويم"],
      ["/faq", "النصائح والأسئلة"],
      ["/articles", "المقالات"],
      ["/after-bac", "بعد الباك"],
    ],
  },
  {
    title: "ثانوي",
    links: [
      ["/about", "من نحن"],
      ["/contact", "تواصل معنا"],
      ["/privacy", "الخصوصية"],
      ["/terms", "الشروط"],
    ],
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="page-shell grid gap-7 py-8 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="منصتي">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-emerald-800">
              <BookOpenCheck className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <strong className="block text-xl font-black">منصتي</strong>
              <span className="text-xs font-bold text-slate-400">دليلك بعد الباك</span>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm font-bold leading-7 text-slate-400">
            منصتي كتعاون التلاميذ والطلبة يفهمو اختيارات ما بعد الباك، المدارس، الفرص، والتوجيه بطريقة بسيطة وواضحة.
          </p>
          <p className="mt-3 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-xs font-black leading-6 text-amber-200">
            المعلومات تقريبية ويجب التحقق من المواقع الرسمية للمؤسسات.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm font-bold text-slate-400 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.07]">
        <div className="page-shell py-4">
          <p className="text-xs font-bold text-slate-600">© {currentYear} منصتي · minassati.ma · جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
