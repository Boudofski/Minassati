"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck } from "lucide-react";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

const footerCopy: Record<Locale, {
  tagline: string;
  description: string;
  newsletter: string;
  newsletterText: string;
  email: string;
  subscribe: string;
  columns: { title: string; links: [string, string][] }[];
}> = {
  ar: {
    tagline: "منصة مغربية للتعلم والموارد الرقمية",
    description: "دورات ومسارات وموارد عملية للمغاربة، مع قارئ قرآن واستماع مجاني كأداة إسلامية موثوقة داخل المنصة.",
    newsletter: "النشرة التعليمية",
    newsletterText: "تحديثات حول الدورات والموارد والاشتراكات القادمة.",
    email: "البريد الإلكتروني",
    subscribe: "اشترك",
    columns: [
      { title: "التعلم", links: [["/courses", "الدورات"], ["/paths", "المسارات"], ["/articles", "المقالات"], ["/resources", "الموارد"]] },
      { title: "القرآن", links: [["/quran", "قارئ القرآن"], ["/audio", "الصوتيات"], ["/islamic-kids", "محتوى الأطفال"]] },
      { title: "المنصة", links: [["/pricing", "الاشتراك"], ["/instructors", "للمدربين"]] },
      { title: "الشركة", links: [["/about", "من نحن"], ["/contact", "تواصل معنا"], ["/privacy", "سياسة الخصوصية"], ["/terms", "شروط الاستخدام"], ["/help", "مركز المساعدة"]] },
    ],
  },
  en: {
    tagline: "Moroccan learning marketplace",
    description: "Practical courses, learning paths, and digital resources for Moroccan learners, with Quran reading and listening as a free trusted utility.",
    newsletter: "Learning newsletter",
    newsletterText: "Updates about courses, resources, and upcoming subscriptions.",
    email: "Email address",
    subscribe: "Subscribe",
    columns: [
      { title: "Learning", links: [["/courses", "Courses"], ["/paths", "Paths"], ["/articles", "Articles"], ["/resources", "Resources"]] },
      { title: "Quran", links: [["/quran", "Quran reader"], ["/audio", "Audio Quran"], ["/islamic-kids", "Islamic Kids"]] },
      { title: "Platform", links: [["/pricing", "Pricing"], ["/instructors", "Instructors"]] },
      { title: "Company", links: [["/about", "About"], ["/contact", "Contact"], ["/privacy", "Privacy"], ["/terms", "Terms"], ["/help", "Help"]] },
    ],
  },
  fr: {
    tagline: "Plateforme marocaine d'apprentissage",
    description: "Cours, parcours et ressources numériques pratiques, avec lecture et écoute du Coran comme outil gratuit et fiable.",
    newsletter: "Newsletter",
    newsletterText: "Nouveautés sur les cours, ressources et abonnements à venir.",
    email: "Adresse e-mail",
    subscribe: "S'inscrire",
    columns: [
      { title: "Apprendre", links: [["/courses", "Cours"], ["/paths", "Parcours"], ["/articles", "Articles"], ["/resources", "Ressources"]] },
      { title: "Coran", links: [["/quran", "Lecteur du Coran"], ["/audio", "Audio Coran"], ["/islamic-kids", "Enfants"]] },
      { title: "Plateforme", links: [["/pricing", "Abonnement"], ["/instructors", "Formateurs"]] },
      { title: "Entreprise", links: [["/about", "À propos"], ["/contact", "Contact"], ["/privacy", "Confidentialité"], ["/terms", "Conditions"], ["/help", "Aide"]] },
    ],
  },
  es: {
    tagline: "Plataforma marroquí de aprendizaje",
    description: "Cursos, rutas y recursos digitales prácticos, con lectura y audio del Corán como utilidad gratuita y fiable.",
    newsletter: "Boletín",
    newsletterText: "Novedades sobre cursos, recursos y suscripciones próximas.",
    email: "Correo electrónico",
    subscribe: "Suscribirse",
    columns: [
      { title: "Aprender", links: [["/courses", "Cursos"], ["/paths", "Rutas"], ["/articles", "Artículos"], ["/resources", "Recursos"]] },
      { title: "Corán", links: [["/quran", "Lector del Corán"], ["/audio", "Audio Corán"], ["/islamic-kids", "Niños"]] },
      { title: "Plataforma", links: [["/pricing", "Suscripción"], ["/instructors", "Instructores"]] },
      { title: "Empresa", links: [["/about", "Acerca de"], ["/contact", "Contacto"], ["/privacy", "Privacidad"], ["/terms", "Términos"], ["/help", "Ayuda"]] },
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
      {/* Main grid */}
      <div className="page-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <Link href={prefix("/")} className="flex items-center gap-3" aria-label="منصتي">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
              <BookOpenCheck className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <strong className="block text-xl font-black">منصتي</strong>
              <span className="text-xs font-bold text-slate-400">{l.tagline}</span>
            </div>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">{l.description}</p>
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
                  <Link href={href} className="text-sm font-bold text-slate-400 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold text-slate-500">© {currentYear} منصتي · minassati.ma · جميع الحقوق محفوظة</p>
          <div className="flex gap-4 text-xs font-bold text-slate-500">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
