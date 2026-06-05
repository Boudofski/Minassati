"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck } from "lucide-react";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

const footerCopy: Record<Locale, {
  tagline: string;
  description: string;
  columns: { title: string; links: [string, string][] }[];
}> = {
  ar: {
    tagline: "منصة مغربية للتوجيه الدراسي والمهني",
    description: "نساعد التلاميذ والطلبة في المغرب على فهم اختيارات ما بعد الباك، المهن، المدارس، المنح، والموارد العملية.",
    columns: [
      { title: "التوجيه", links: [["/orientation", "التوجيه"], ["/after-bac", "بعد الباك"], ["/paths", "المسارات"], ["/careers", "المهن"]] },
      { title: "المعرفة", links: [["/schools", "المدارس"], ["/scholarships", "المنح"], ["/articles", "المقالات"], ["/resources", "الموارد"]] },
      { title: "المنصة", links: [["/quran", "القرآن"], ["/audio", "الصوتيات"], ["/about", "من نحن"], ["/contact", "تواصل معنا"], ["/privacy", "الخصوصية"], ["/terms", "الشروط"], ["/help", "المساعدة"]] },
    ],
  },
  en: {
    tagline: "Moroccan study and career guidance",
    description: "Guidance for Moroccan students on after-bac options, careers, schools, scholarships, articles, and practical resources.",
    columns: [
      { title: "Guidance", links: [["/orientation", "Guidance"], ["/after-bac", "After bac"], ["/paths", "Paths"], ["/careers", "Careers"]] },
      { title: "Knowledge", links: [["/schools", "Schools"], ["/scholarships", "Scholarships"], ["/articles", "Articles"], ["/resources", "Resources"]] },
      { title: "Platform", links: [["/quran", "Quran"], ["/audio", "Audio"], ["/about", "About"], ["/contact", "Contact"], ["/privacy", "Privacy"], ["/terms", "Terms"], ["/help", "Help"]] },
    ],
  },
  fr: {
    tagline: "Orientation scolaire et professionnelle au Maroc",
    description: "Orientation pour les élèves et étudiants marocains: après bac, métiers, écoles, bourses, articles et ressources pratiques.",
    columns: [
      { title: "Orientation", links: [["/orientation", "Orientation"], ["/after-bac", "Après bac"], ["/paths", "Parcours"], ["/careers", "Métiers"]] },
      { title: "Savoir", links: [["/schools", "Écoles"], ["/scholarships", "Bourses"], ["/articles", "Articles"], ["/resources", "Ressources"]] },
      { title: "Plateforme", links: [["/quran", "Coran"], ["/audio", "Audio"], ["/about", "À propos"], ["/contact", "Contact"], ["/privacy", "Confidentialité"], ["/terms", "Conditions"], ["/help", "Aide"]] },
    ],
  },
  es: {
    tagline: "Orientación académica y profesional en Marruecos",
    description: "Guía para estudiantes marroquíes sobre opciones después del bac, carreras, escuelas, becas, artículos y recursos.",
    columns: [
      { title: "Orientación", links: [["/orientation", "Orientación"], ["/after-bac", "Después bac"], ["/paths", "Rutas"], ["/careers", "Carreras"]] },
      { title: "Conocimiento", links: [["/schools", "Escuelas"], ["/scholarships", "Becas"], ["/articles", "Artículos"], ["/resources", "Recursos"]] },
      { title: "Plataforma", links: [["/quran", "Corán"], ["/audio", "Audio"], ["/about", "Acerca de"], ["/contact", "Contacto"], ["/privacy", "Privacidad"], ["/terms", "Términos"], ["/help", "Ayuda"]] },
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
      <div className="page-shell grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href={prefix("/")} className="flex items-center gap-3" aria-label="منصتي">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-950">
              <BookOpenCheck className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <strong className="block text-xl font-black">منصتي</strong>
              <span className="text-xs font-bold text-slate-500">{l.tagline}</span>
            </div>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">{l.description}</p>
          <div className="mt-5">
            <LanguageSwitcher />
          </div>
        </div>

        {l.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={prefix(href)} className="text-sm font-bold text-slate-500 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="page-shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold text-slate-600">© {currentYear} منصتي · minassati.ma · جميع الحقوق محفوظة</p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
            <Link href={prefix("/privacy")} className="transition hover:text-white">Privacy</Link>
            <Link href={prefix("/terms")} className="transition hover:text-white">Terms</Link>
            <Link href={prefix("/contact")} className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
