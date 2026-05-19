"use client";

import { useMemo, useState } from "react";
import { PlayCircle } from "lucide-react";
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
  const selectedSurah = useMemo(() => surahs.find((surah) => surah.number === selected) ?? surahs[0], [selected, surahs]);
  const audioUrl = getAudioUrl(moshaf, selected);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <PlayCircle className="h-7 w-7 text-amber-600" />
        <h2 className="mt-4 text-2xl font-black text-slate-950">تشغيل {selectedSurah?.name ?? "السورة"}</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">القارئ: {reciterName}. المصدر الصوتي من خادم MP3Quran مباشرة.</p>
        <audio key={audioUrl} className="mt-6 w-full" controls preload="none" src={audioUrl}>
          متصفحك لا يدعم مشغل الصوت.
        </audio>
        <a href={audioUrl} className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-600 transition hover:bg-slate-950 hover:text-white">
          فتح ملف MP3
        </a>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-black text-slate-950">اختر السورة</h2>
        <div className="mt-5 grid max-h-[32rem] gap-3 overflow-auto pe-2 sm:grid-cols-2">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              onClick={() => setSelected(surah.number)}
              className={`rounded-2xl border p-4 text-right transition ${selected === surah.number ? "border-blue-300 bg-blue-50 text-blue-800" : "border-slate-100 bg-slate-50 text-slate-800 hover:border-blue-200 hover:bg-blue-50"}`}
            >
              <strong className="block">{surah.name}</strong>
              <span className="mt-1 block text-xs font-bold text-slate-500">{String(surah.number).padStart(3, "0")}.mp3</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
