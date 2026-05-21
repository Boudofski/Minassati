"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Clock, Search, Star, Users } from "lucide-react";
import { courses, courseCategories, courseLanguages, courseLevels, priceLabel, type Course } from "@/data/courses";
import { cn } from "@/lib/utils";

const priceOptions = [
  { value: "all", label: "كل الأسعار" },
  { value: "free", label: "مجاني" },
  { value: "paid", label: "مدفوع" },
  { value: "comingSoon", label: "قريبًا" },
];

export function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="relative min-h-28 bg-slate-950 p-5 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.28),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.26),transparent_30%),linear-gradient(135deg,rgba(15,23,42,1),rgba(15,23,42,0.9))]" />
        <div className="absolute inset-0 islamic-bg-white opacity-[0.04]" />
        <div className="relative flex items-start justify-between gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-xs font-black text-slate-950 shadow-lg">{course.icon}</span>
          <span className={cn("rounded-full px-3 py-1 text-xs font-black", course.priceType === "free" ? "bg-emerald-300 text-emerald-950" : course.priceType === "paid" ? "bg-amber-300 text-amber-950" : "bg-blue-300 text-blue-950")}>
            {priceLabel(course)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
      <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-500">
        <span>{course.category}</span>
        <span>•</span>
        <span>{course.level}</span>
        <span>•</span>
        <span>{course.language}</span>
      </div>
      <h3 className="mt-3 text-xl font-black leading-snug text-slate-950 group-hover:text-blue-700">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{compact ? course.subtitle : course.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
        <span>{course.lessonsCount} درس</span>
        {course.rating ? <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />{course.rating}</span> : null}
        {course.studentsCount ? <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.studentsCount}</span> : null}
      </div>
      <span className="mt-5 inline-flex text-sm font-black text-blue-700">عرض الدورة</span>
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
