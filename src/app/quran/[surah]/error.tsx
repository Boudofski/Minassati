"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="page-shell py-16 text-center">
      <p className="text-2xl font-black text-slate-950">تعذّر تحميل السورة</p>
      <p className="mt-3 text-slate-600">تحقق من اتصالك بالإنترنت وحاول مرة أخرى.</p>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={reset} className="rounded-full bg-slate-950 px-6 py-3 font-black text-white transition hover:bg-slate-800">
          حاول مجدداً
        </button>
        <Link href="/quran" className="rounded-full border border-slate-200 px-6 py-3 font-black text-slate-700 transition hover:bg-slate-50">
          العودة للقرآن
        </Link>
      </div>
    </div>
  );
}
