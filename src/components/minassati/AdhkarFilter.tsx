"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type DhikrItem = {
  title: string;
  text: string;
  guidance: string;
};

type DhikrGroup = {
  key: string;
  title: string;
  items: DhikrItem[];
};

export function AdhkarFilter({ groups }: { groups: DhikrGroup[] }) {
  const [active, setActive] = useState(groups[0]?.key ?? "");
  const selected = groups.find((group) => group.key === active) ?? groups[0];

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {groups.map((group) => (
          <button
            key={group.key}
            type="button"
            onClick={() => setActive(group.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-black transition",
              active === group.key ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700",
            )}
          >
            {group.title}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {selected.items.map((dhikr) => (
          <article key={dhikr.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <Heart className="h-7 w-7 text-teal-600" />
            <h2 className="mt-4 text-xl font-black text-slate-950">{dhikr.title}</h2>
            <p className="quran-text mt-3 text-slate-950">{dhikr.text}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{dhikr.guidance}</p>
            <p className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm font-bold leading-7 text-slate-700">
              شرح للطفل: هذا ذكر صغير يربط الموقف بالله ويعلّم القلب الطمأنينة.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
