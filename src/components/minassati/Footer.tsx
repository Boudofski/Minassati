"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck } from "lucide-react";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

const footerCopy: Record<Locale, {
  tagline: string;
  description: string;
  newsletter: { label: string; btn: string };
  columns: { title: string; links: [string, string][] }[];
  islamicKids: string;
}> = {
  ar: {
    tagline: "منصة مغربية للتعلم والموارد الرقمية",
    description: "دورات ومسارات وموارد عملية مع قارئ قرآن مجاني — للمغاربة والعالم العربي.",
    newsletter: { label: "احصل على إشعار عند فتح الاشتراك Pro", btn: "أعلمني" },
    columns: [
      {
        title: "التعلم",
        links: [
          ["/courses", "الدورات"],
          ["/paths", "المسارات"],
          ["/articles", "المقالات"],
          ["/resources", "الموارد"],
          ["/quran", "قارئ القرآن"],
          ["/audio", "الصوتيات"],
        ],
      },
      {
        title: "المنصة",
        links: [
          ["/pricing", "الاشتراك"],
          ["/instructors", "للمدربين"],
          ["/about", "من نحن"],
          ["/contact", "تواصل معنا"],
        ],
      },
      {
        title: "قانوني",
        links: [
          ["/privacy", "سياسة الخصوصية"],
          ["/terms", "شروط الاستخدام"],
          ["/help", "مركز المساعدة"],
        ],
      },
    ],
    islamicKids: "محتوى الأطفال",
  },
  en: {
    tagline: "Moroccan learning marketplace",
    description: "Practical courses, paths, and resources — with a free Quran reader built in.",
    newsletter: { label: "Get notified when Pro opens", btn: "Notify me" },
    columns: [
      {
        title: "Learning",
        links: [
          ["/courses", "Courses"],
          ["/paths", "Paths"],
          ["/articles", "Articles"],
          ["/resources", "Resources"],
          ["/quran", "Quran Reader"],
          ["/audio", "Audio Quran"],
        ],
      },
      {
        title: "Platform",
        links: [
          ["/pricing", "Pricing"],
          ["/instructors", "Instructors"],
          ["/about", "About"],
          ["/contact", "Contact"],
        ],
      },
      {
        title: "Legal",
        links: [
          ["/privacy", "Privacy"],
          ["/terms", "Terms"],
          ["/help", "Help"],
        ],
      },
    ],
    islamicKids: "Islamic Kids",
  },
  fr: {
    tagline: "Plateforme marocaine d'apprentissage",
    description: "Cours, parcours et ressources pratiques — avec un lecteur de Coran gratuit intégré.",
    newsletter: { label: "Être notifié à l'ouverture de l'abonnement Pro", btn: "M'avertir" },
    columns: [
      {
        title: "Apprendre",
        links: [
          ["/courses", "Cours"],
          ["/paths", "Parcours"],
          ["/articles", "Articles"],
          ["/resources", "Ressources"],
          ["/quran", "Lecteur du Coran"],
          ["/audio", "Audio Coran"],
        ],
      },
      {
        title: "Plateforme",
        links: [
          ["/pricing", "Abonnement"],
          ["/instructors", "Formateurs"],
          ["/about", "À propos"],
          ["/contact", "Contact"],
        ],
      },
      {
        title: "Légal",
        links: [
          ["/privacy", "Confidentialité"],
          ["/terms", "Conditions"],
          ["/help", "Aide"],
        ],
      },
    ],
    islamicKids: "Enfants",
  },
  es: {
    tagline: "Plataforma marroquí de aprendizaje",
    description: "Cursos, rutas y recursos prácticos — con un lector del Corán gratuito integrado.",
    newsletter: { label: "Recibe un aviso cuando abra la suscripción Pro", btn: "Avisarme" },
    columns: [
      {
        title: "Aprender",
        links: [
          ["/courses", "Cursos"],
          ["/paths", "Rutas"],
          ["/articles", "Artículos"],
          ["/resources", "Recursos"],
          ["/quran", "Lector del Corán"],
          ["/audio", "Audio Corán"],
        ],
      },
      {
        title: "Plataforma",
        links: [
          ["/pricing", "Suscripción"],
          ["/instructors", "Instructores"],
          ["/about", "Acerca de"],
          ["/contact", "Contacto"],
        ],
      },
      {
        title: "Legal",
        links: [
          ["/privacy", "Privacidad"],
          ["/terms", "Términos"],
          ["/help", "Ayuda"],
        ],
      },
    ],
    islamicKids: "Niños",
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
      {/* Newsletter interest strip */}
      <div className="border-b border-white/[0.07]">
        <div className="page-shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-slate-400">{l.newsletter.label}</p>
          <Link
            href={prefix("/pricing") + "#pricing-waitlist"}
            className="inline-flex shrink-0 items-center rounded-full bg-white/10 px-5 py-2 text-sm font-black text-white transition hover:bg-white/20"
          >
            {l.newsletter.btn}
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="page-shell grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
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

        {/* Link columns */}
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

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="page-shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold text-slate-600">© {currentYear} منصتي · minassati.ma · جميع الحقوق محفوظة</p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
            <Link href={prefix("/privacy")} className="transition hover:text-white">Privacy</Link>
            <Link href={prefix("/terms")} className="transition hover:text-white">Terms</Link>
            <Link href={prefix("/islamic-kids")} className="transition hover:text-slate-400">{l.islamicKids}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
