import Link from "next/link";
import { ButtonLink } from "@/components/minassati/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-sm font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-4xl font-black text-slate-950">الصفحة غير موجودة</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">الرابط الذي تبحث عنه غير متوفر. يمكنك العودة إلى الصفحة الرئيسية أو تصفح الأسئلة التعليمية.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">الرئيسية</ButtonLink>
        <Link href="/qa" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
          الأسئلة والأجوبة
        </Link>
      </div>
    </section>
  );
}
