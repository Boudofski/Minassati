import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "محتوى إسلامي للأطفال - منصتي",
  description: "محتوى مبسط للأطفال ضمن منصتي: قصص، أنشطة، أذكار، أسئلة، ومواد إسلامية عائلية.",
  alternates: { canonical: "/islamic-kids" },
};

const links = [
  { href: "/stories", label: "القصص" },
  { href: "/activities", label: "الأنشطة" },
  { href: "/adhkar", label: "الأذكار" },
  { href: "/qa", label: "أسئلة وأجوبة" },
  { href: "/parents", label: "دليل الأهل" },
  { href: "/kids-zone", label: "منطقة الأطفال" },
];

export default function IslamicKidsPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="max-w-4xl">
        <p className="rounded-full bg-teal-50 px-4 py-2 text-sm font-black text-teal-700 inline-flex">تصنيف داخل منصتي</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">محتوى مبسط للأطفال ضمن منصتي</h1>
        <p className="mt-5 text-lg leading-9 text-slate-600">المحتوى العائلي القديم لم يعد هو هوية الموقع الرئيسية، لكنه يبقى مفيداً كتصنيف إسلامي للأطفال والأسر.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl border border-slate-200 bg-white p-6 text-xl font-black text-slate-950 shadow-soft transition hover:-translate-y-1 hover:border-teal-200">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
