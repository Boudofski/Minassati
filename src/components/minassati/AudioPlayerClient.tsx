"use client";

import { useMemo, useState } from "react";
import { PlayCircle, Search } from "lucide-react";
import type { Moshaf } from "@/lib/mp3quran-api";
import { getAudioUrl } from "@/lib/mp3quran-api";
import type { SurahMeta } from "@/lib/quran-api";

export function AudioPlayerClient({
  moshaf,
  surahs,
  reciterName,
}: {
  moshaf: Moshaf;
  surahs: SurahMeta[];
  reciterName: string;
}) {
  const [selected, setSelected] = useState(surahs[0]?.number ?? 1);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedSurah = useMemo(() => surahs.find((surah) => surah.number === selected) ?? surahs[0], [selected, surahs]);
  const audioUrl = getAudioUrl(moshaf, selected);

  const filteredSurahs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return surahs;
    return surahs.filter(
      (surah) =>
        surah.name.toLowerCase().includes(query) ||
        surah.englishName?.toLowerCase().includes(query) ||
        String(surah.number).includes(query)
    );
  }, [surahs, searchQuery]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <PlayCircle className="h-7 w-7 text-amber-600 animate-pulse-glow" />
        <h2 className="mt-4 text-2xl font-black text-slate-950">تشغيل {selectedSurah?.name ?? "السورة"}</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600 font-medium">
          القارئ: <span className="font-extrabold text-slate-900">{reciterName}</span>. المصدر الصوتي من خادم MP3Quran مباشرة.
        </p>
        <audio key={audioUrl} className="mt-6 w-full" controls preload="none" src={audioUrl}>
          متصفحك لا يدعم مشغل الصوت.
        </audio>
        <a
          href={audioUrl}
          className="mt-5 inline-flex rounded-full bg-slate-100 px-5 py-2.5 text-xs font-black text-slate-600 transition hover:bg-slate-950 hover:text-white"
        >
          فتح ملف MP3
        </a>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft flex flex-col">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-black text-slate-950">اختر السورة</h2>
          <div className="relative">
            <Search className="absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="بحث عن سورة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border border-slate-200 bg-white py-2.5 pe-4 ps-10 text-sm font-bold text-slate-800 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40 transition-all w-full sm:w-60"
            />
          </div>
        </div>

        <div className="mt-5 grid max-h-[32rem] gap-3 overflow-auto pe-2 sm:grid-cols-2 no-scrollbar">
          {filteredSurahs.length > 0 ? (
            filteredSurahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => setSelected(surah.number)}
                className={`rounded-2xl border p-4 text-right transition ${
                  selected === surah.number
                    ? "border-blue-300 bg-blue-50 text-blue-800 shadow-sm shadow-blue-100"
                    : "border-slate-100 bg-slate-50 text-slate-800 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <strong className="block text-base font-black">{surah.name}</strong>
                <span className="mt-1.5 block text-xs font-bold text-slate-500">
                  {String(surah.number).padStart(3, "0")}.mp3
                </span>
              </button>
            ))
          ) : (
            <p className="col-span-2 py-8 text-center text-sm font-semibold text-slate-400">
              لا توجد سورة تطابق البحث.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
