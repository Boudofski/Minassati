"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { LessonCard } from "./Cards";
import type { Lesson, LessonDifficulty } from "@/data/lessons";
import { cn } from "@/lib/utils";

const ages = ["الكل", "6-10", "8-12", "الأسرة"];
const difficulties: Array<"الكل" | LessonDifficulty> = ["الكل", "مبتدئ", "متوسط", "عائلي"];

type CategoryOption = { slug: string; title: string };

export function LearningBrowser({ lessons, categories }: { lessons: Lesson[]; categories: CategoryOption[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const [age, setAge] = useState("الكل");
  const [difficulty, setDifficulty] = useState<"الكل" | LessonDifficulty>("الكل");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return lessons.filter((lesson) => {
      const matchesQuery = !normalized || `${lesson.title} ${lesson.summary} ${lesson.tags.join(" ")}`.toLowerCase().includes(normalized);
      const matchesCategory = category === "الكل" || lesson.category === category;
      const matchesAge = age === "الكل" || lesson.ageRange.includes(age) || (age === "الأسرة" && lesson.ageRange.includes("الأسرة"));
      const matchesDifficulty = difficulty === "الكل" || lesson.difficulty === difficulty;
      return matchesQuery && matchesCategory && matchesAge && matchesDifficulty;
    });
  }, [age, category, difficulty, lessons, query]);

  return (
    <div>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
        <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث عن درس أو قيمة أو موضوع..."
            className="w-full bg-transparent font-bold text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          {["الكل", ...categories.map((item) => item.slug)].map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={cn("rounded-full px-4 py-2 text-sm font-black transition", category === item ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700")}>
              {item === "الكل" ? "كل التصنيفات" : categories.find((categoryItem) => categoryItem.slug === item)?.title}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {ages.map((item) => (
            <button key={item} onClick={() => setAge(item)} className={cn("rounded-full px-4 py-2 text-sm font-bold transition", age === item ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700")}>{item}</button>
          ))}
          {difficulties.map((item) => (
            <button key={item} onClick={() => setDifficulty(item)} className={cn("rounded-full px-4 py-2 text-sm font-bold transition", difficulty === item ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-700")}>{item}</button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((lesson) => <LessonCard key={`${lesson.category}-${lesson.slug}`} lesson={lesson} />)}
      </div>
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 text-center text-slate-600">
          <p className="font-bold">لا توجد دروس مطابقة. جرّب تخفيف الفلاتر أو البحث بكلمة أبسط.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/start" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">ابدأ من هنا</Link>
            <Link href="/daily" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800">درس اليوم</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
