"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Mail } from "lucide-react";
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
      { title: "المنصة", links: [["/pricing", "الاشتراك"], ["/instructors", "للمدربين"], ["/student-dashboard-preview", "لوحة المتعلم"], ["/creator-preview", "لوحة المدرب"]] },
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
      { title: "Platform", links: [["/pricing", "Pricing"], ["/instructors", "Instructors"], ["/student-dashboard-preview", "Student preview"], ["/creator-preview", "Creator preview"]] },
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
      { title: "Plateforme", links: [["/pricing", "Abonnement"], ["/instructors", "Formateurs"], ["/student-dashboard-preview", "Aperçu étudiant"], ["/creator-preview", "Aperçu créateur"]] },
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
      { title: "Plataforma", links: [["/pricing", "Suscripción"], ["/instructors", "Instructores"], ["/student-dashboard-preview", "Vista estudiante"], ["/creator-preview", "Vista creador"]] },
      { title: "Empresa", links: [["/about", "Acerca de"], ["/contact", "Contacto"], ["/privacy", "Privacidad"], ["/terms", "Términos"], ["/help", "Ayuda"]] },
    ],
  },
};

export function Footer() {
  const pathname = usePathname() || "/";
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : "ar";
  const prefix = (href: string) => rootLocalizedPath(locale, href);
  const copy = footerCopy[locale];
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 islamic-bg-white opacity-[0.04]" />
      <div className="page-shell relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link href={prefix("/")} className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950"><BookOpenCheck className="h-6 w-6" /></span>
              <span><strong className="block text-2xl font-black">منصتي</strong><span className="text-sm font-bold text-teal-300">{copy.tagline}</span></span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
              {copy.description}
            </p>
            <div className="mt-5"><LanguageSwitcher align="start" /></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-sm font-black text-white">{column.title}</h2>
                <nav className="space-y-3" aria-label={column.title}>
                  {column.links.map(([href, label]) => <Link key={href} href={href} className="block text-sm font-semibold text-slate-400 hover:text-teal-200">{label}</Link>)}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/6 p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-black">{copy.newsletter}</h2>
            <p className="mt-1 text-sm leading-7 text-slate-400">{copy.newsletterText}</p>
          </div>
          <form className="flex flex-col gap-2 sm:flex-row" aria-label="النشرة البريدية">
            <input type="email" placeholder={copy.email} className="h-12 rounded-full border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-teal-300" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-slate-950" type="submit"><Mail className="h-4 w-4" />{copy.subscribe}</button>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs font-semibold text-slate-500">© 2026 منصتي - minassati.ma</div>
      </div>
    </footer>
  );
}
