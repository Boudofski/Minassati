"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Baby, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { lessons } from "@/data/lessons";
import { paths } from "@/data/paths";
import { cn } from "@/lib/utils";

const ages = ["6-8 سنوات", "9-10 سنوات", "11-12 سنة"];
const goals = [
  { key: "aqeedah", title: "تعلم العقيدة", icon: Sparkles, pathSlug: "aqeedah-basics" },
  { key: "fiqh", title: "الصلاة والوضوء", icon: HeartHandshake, pathSlug: "prayer-purity" },
  { key: "quran", title: "القرآن", icon: BookOpen, pathSlug: "quran-at-home" },
  { key: "akhlaq", title: "الأخلاق", icon: Baby, pathSlug: "young-muslim-akhlaq" },
];

export function StartJourney() {
  const [age, setAge] = useState(ages[0]);
  const [goal, setGoal] = useState(goals[0].key);
  const selectedGoal = goals.find((item) => item.key === goal) ?? goals[0];
  const path = useMemo(
    () => paths.find((item) => item.slug === selectedGoal.pathSlug) ?? paths[0],
    [selectedGoal.pathSlug],
  );
  const pathLessons = path.steps.flatMap((step) =>
    step.lessonSlugs
      .map((slug) => lessons.find((lesson) => lesson.category === step.category && lesson.slug === slug))
      .filter((lesson): lesson is (typeof lessons)[number] => Boolean(lesson)),
  );
  const firstLesson = pathLessons[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-5">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">اختر عمر الطفل</h2>
          <div className="mt-5 grid gap-3">
            {ages.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAge(item)}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-right font-black transition",
                  age === item ? "border-blue-300 bg-blue-50 text-blue-800" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">اختر الهدف</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {goals.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setGoal(item.key)}
                  className={cn(
                    "rounded-2xl border p-4 text-right transition",
                    goal === item.key ? "border-teal-300 bg-teal-50 text-teal-900" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-200",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="mt-3 block font-black">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <article className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow">
        <div className="absolute inset-0 islamic-bg-white opacity-20" />
        <div className="relative">
          <p className="text-sm font-black text-teal-300">المسار المقترح لعمر {age}</p>
          <h2 className="mt-3 text-4xl font-black">{path.title}</h2>
          <p className="mt-4 leading-8 text-slate-300">{path.description}</p>
          <div className="mt-6 grid gap-3">
            {pathLessons.slice(0, 4).map((lesson, index) => (
              <Link
                key={`${lesson.category}-${lesson.slug}`}
                href={`/learn/${lesson.category}/${lesson.slug}`}
                className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 transition hover:bg-white/12"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-black text-slate-950">{index + 1}</span>
                <span className="font-bold text-white">{lesson.title}</span>
              </Link>
            ))}
          </div>
          {firstLesson && (
            <Link
              href={`/learn/${firstLesson.category}/${firstLesson.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              ابدأ بأول درس <ArrowLeft className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
