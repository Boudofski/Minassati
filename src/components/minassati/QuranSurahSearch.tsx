"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SurahCard } from "./Cards";
import type { SurahMeta } from "@/lib/quran-api";

export function QuranSurahSearch({ surahs }: { surahs: SurahMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return surahs;
    return surahs.filter((surah) =>
      `${surah.number} ${surah.name} ${surah.englishName}`.toLowerCase().includes(normalized)
    );
  }, [query, surahs]);

  return (
    <div>
      <label className="flex items-center gap-3 rounded-[2rem] border border-slate-200 bg-white px-5 py-4 shadow-soft">
        <Search className="h-5 w-5 text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="ابحث باسم السورة أو رقمها..."
          className="w-full bg-transparent text-base font-bold text-slate-900 outline-none placeholder:text-slate-400"
        />
      </label>

      <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((surah) => (
          <SurahCard
            key={surah.number}
            surah={{
              number: surah.number,
              name: surah.name,
              englishName: surah.englishName,
              ayahs: surah.numberOfAyahs,
              type: surah.revelationType === "Medinan" || surah.revelationType === "madani" ? "مدنية" : "مكية",
            }}
            href={`/quran/${surah.number}`}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 text-center font-bold text-slate-500">
          لا توجد سورة مطابقة لهذا البحث.
        </div>
      ) : null}
    </div>
  );
}
