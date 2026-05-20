"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { QuestionCard } from "./Cards";
import { questionCategories, questions } from "@/data/questions";
import { cn } from "@/lib/utils";

export function QaBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return questions.filter((item) => {
      const matchesCategory = category === "الكل" || item.category === category;
      const matchesQuery = !normalized || `${item.question} ${item.shortAnswer} ${item.category} ${item.tags.join(" ")}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
        <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
          <Search className="h-5 w-5 text-slate-400" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث عن سؤال..."
            className="w-full bg-transparent text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          {["الكل", ...questionCategories].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold transition",
                category === item ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm font-bold text-slate-500">
          يعرض {filtered.length} من {questions.length} سؤال.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((question) => (
          <QuestionCard key={question.slug} question={question} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 text-center text-slate-600">
          <p className="font-bold">لا توجد نتائج مطابقة حالياً. جرّب سؤالاً أقصر أو كلمة مثل الصلاة، الصدق، القرآن.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">استكشف الدروس</Link>
            <Link href="/parents" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800">دليل الأهل</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
