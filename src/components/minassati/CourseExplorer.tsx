"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { courses, courseCategories, courseLanguages, courseLevels, type Course } from "@/data/courses";

const priceOptions = [
  { value: "all", label: "كل الأسعار" },
  { value: "free", label: "مجاني" },
  { value: "paid", label: "مدفوع" },
  { value: "comingSoon", label: "قريبًا" },
];

const categoryGradient: Record<string, string> = {
  "الذكاء الاصطناعي":       "from-violet-900 to-indigo-900",
  "التسويق الرقمي":          "from-blue-900 to-cyan-900",
  "العمل الحر":              "from-amber-900 to-orange-900",
  "التجارة الإلكترونية":     "from-emerald-900 to-teal-900",
  "التصميم وصناعة المحتوى": "from-rose-900 to-pink-900",
  "اللغات":                  "from-sky-900 to-blue-900",
  "الإنتاجية":               "from-slate-800 to-slate-900",
};

export function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  // status badge
  const statusBadge =
    course.priceType === "free" ? <span className="badge-free">مجاني</span>
    : course.priceType === "comingSoon" ? <span className="badge-soon">قريبًا</span>
    : <span className="badge-pro">{course.priceMAD ? `${course.priceMAD} د.م` : "Pro"}</span>;

  // level badge color
  const levelClass =
    course.level === "مبتدئ" ? "badge-free"
    : course.level === "متوسط" ? "badge-new"
    : "badge-pro";

  const thumbGradient = categoryGradient[course.category] ?? "from-slate-900 to-slate-800";

  return (
    <Link href={`/courses/${course.slug}`} className="card-premium group flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className={`relative flex h-36 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br ${thumbGradient} p-6`}>
        <div className="absolute inset-0 islamic-bg-white opacity-[0.04]" />
        <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-2xl font-black text-white/80 backdrop-blur">
          {course.icon}
        </span>
        <div className="absolute end-3 top-3">{statusBadge}</div>
        {course.featured && (
          <div className="absolute start-3 top-3"><span className="badge-new">مختار</span></div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-black uppercase tracking-wider text-blue-600">{course.category}</p>
        <h3 className="text-lg font-black leading-tight text-slate-950 transition-colors group-hover:text-blue-700">
          {course.title}
        </h3>
        <p className="text-sm leading-7 text-slate-500 line-clamp-2">
          {course.subtitle}
        </p>
        {course.outcomes[0] && (
          <p className="mt-1 flex-1 text-xs font-bold text-emerald-700">
            ✓ {course.outcomes[0]}
          </p>
        )}
        <div className="mt-2 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <div className="flex items-center gap-2">
            <span className={levelClass}>{course.level}</span>
            {course.duration && <span className="text-xs font-bold text-slate-400">· {course.duration}</span>}
          </div>
          {course.instructor && (
            <span className="max-w-[100px] truncate text-xs font-bold text-slate-400">{course.instructor}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function CourseExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [price, setPrice] = useState("all");
  const [language, setLanguage] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesQuery = !q || [course.title, course.subtitle, course.description, course.category, ...course.tags].join(" ").toLowerCase().includes(q);
      return (
        matchesQuery &&
        (category === "all" || course.category === category) &&
        (level === "all" || course.level === level) &&
        (price === "all" || course.priceType === price) &&
        (language === "all" || course.language === language)
      );
    });
  }, [category, language, level, price, query]);

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <label className="relative">
            <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث عن دورة أو مهارة" className="h-12 w-full rounded-xl border border-slate-200 bg-white ps-11 pe-4 text-sm font-bold outline-none focus:border-blue-400" />
          </label>
          <Select value={category} onChange={setCategory} options={[["all", "كل التصنيفات"], ...courseCategories.map((item) => [item, item] as [string, string])]} />
          <Select value={level} onChange={setLevel} options={[["all", "كل المستويات"], ...courseLevels.map((item) => [item, item] as [string, string])]} />
          <Select value={price} onChange={setPrice} options={priceOptions.map((item) => [item.value, item.label] as [string, string])} />
          <Select value={language} onChange={setLanguage} options={[["all", "كل اللغات"], ...courseLanguages.map((item) => [item, item] as [string, string])]} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-sm font-black text-slate-600">{filtered.length} دورة</p>
        <Link href="/pricing" className="text-sm font-black text-blue-700">الاشتراكات قيد التحضير</Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => <CourseCard key={course.slug} course={course} />)}
      </div>
    </div>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: [string, string][] }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none focus:border-blue-400">
      {options.map(([optionValue, label]) => <option key={optionValue} value={optionValue}>{label}</option>)}
    </select>
  );
}
