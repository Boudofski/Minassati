"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck } from "lucide-react";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";

const footerCopy: Record<Locale, {
  tagline: string;
  description: string;
  disclaimer: string;
  columns: { title: string; links: [string, string][] }[];
}> = {
  ar: {
    tagline: "منصة التوجيه المدرسي المغربية",
    description: "منصتي تساعد التلاميذ والطلبة على فهم اختيارات المدارس، الفرص الأجنبية، والتوجيه الشخصي بطريقة بسيطة.",
    disclaimer: "المعلومات تقريبية ويجب التحقق من المواقع الرسمية للمؤسسات.",
    columns: [
      { title: "الأقسام", links: [["/schools", "المدارس المغربية"], ["/opportunities", "الفرص الأجنبية"], ["/guidance-request", "التوجيه الشخصي"], ["/calendar", "التقويم"], ["/faq", "النصائح والأسئلة"], ["/articles", "المقالات"]] },
      { title: "ثانوي", links: [["/quran", "القرآن"], ["/audio", "الصوتيات"], ["/about", "من نحن"], ["/contact", "تواصل معنا"]] },
      { title: "قانوني", links: [["/privacy", "الخصوصية"], ["/terms", "الشروط"]] },
    ],
  },
  en: {
    tagline: "Moroccan school guidance platform",
    description: "Minassati helps students understand schools, foreign opportunities, and personal guidance in a simple way.",
    disclaimer: "Information is approximate and must be verified on official institution websites.",
    columns: [
      { title: "Sections", links: [["/schools", "Moroccan Schools"], ["/opportunities", "Foreign Opportunities"], ["/guidance-request", "Personal Guidance"], ["/calendar", "Calendar"], ["/faq", "Tips & FAQ"], ["/articles", "Articles"]] },
      { title: "Secondary", links: [["/quran", "Quran"], ["/audio", "Audio"], ["/about", "About"], ["/contact", "Contact"]] },
      { title: "Legal", links: [["/privacy", "Privacy"], ["/terms", "Terms"]] },
    ],
  },
  fr: {
    tagline: "Plateforme marocaine d'orientation scolaire",
    description: "Minassati aide les élèves à comprendre les écoles, les opportunités étrangères et l'orientation personnelle.",
    disclaimer: "Les informations sont indicatives et doivent être vérifiées sur les sites officiels.",
    columns: [
      { title: "Sections", links: [["/schools", "Écoles marocaines"], ["/opportunities", "Opportunités"], ["/guidance-request", "Orientation"], ["/calendar", "Calendrier"], ["/faq", "Conseils"], ["/articles", "Articles"]] },
      { title: "Secondaire", links: [["/quran", "Coran"], ["/audio", "Audio"], ["/about", "À propos"], ["/contact", "Contact"]] },
      { title: "Légal", links: [["/privacy", "Confidentialité"], ["/terms", "Conditions"]] },
    ],
  },
  es: {
    tagline: "Plataforma marroquí de orientación escolar",
    description: "Minassati ayuda a estudiantes a entender escuelas, oportunidades extranjeras y orientación personal.",
    disclaimer: "La información es aproximada y debe verificarse en sitios oficiales.",
    columns: [
      { title: "Secciones", links: [["/schools", "Escuelas"], ["/opportunities", "Oportunidades"], ["/guidance-request", "Orientación"], ["/calendar", "Calendario"], ["/faq", "Consejos"], ["/articles", "Artículos"]] },
      { title: "Secundario", links: [["/quran", "Corán"], ["/audio", "Audio"], ["/about", "Acerca de"], ["/contact", "Contacto"]] },
      { title: "Legal", links: [["/privacy", "Privacidad"], ["/terms", "Términos"]] },
    ],
  },
};

export function Footer() {
  const pathname = usePathname() || "/";
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : "ar";
  const prefix = (href: string) => rootLocalizedPath(locale, href);
  const l = footerCopy[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="page-shell grid gap-7 py-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href={prefix("/")} className="flex items-center gap-3" aria-label="منصتي">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-emerald-800">
              <BookOpenCheck className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <strong className="block text-xl font-black">منصتي</strong>
              <span className="text-xs font-bold text-slate-400">{l.tagline}</span>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm font-bold leading-7 text-slate-400">{l.description}</p>
          <p className="mt-3 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-xs font-black leading-6 text-amber-200">{l.disclaimer}</p>
        </div>
        {l.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={prefix(href)} className="text-sm font-bold text-slate-400 transition hover:text-white">{label}</Link>
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
