const MP3QURAN_BASE = "https://www.mp3quran.net/api/v3";

export type Moshaf = {
  id: number;
  name: string;
  server: string;
  surah_list: string;
  riwaya?: string;
};

export type Reciter = {
  id: number;
  name: string;
  letter?: string;
  moshaf: Moshaf[];
};

export const fallbackReciters: Reciter[] = [
  {
    id: 1,
    name: "مشاري العفاسي",
    moshaf: [{ id: 1, name: "حفص عن عاصم", riwaya: "حفص", server: "https://server8.mp3quran.net/afs/", surah_list: "1,112,113,114,67,36,18" }],
  },
  {
    id: 2,
    name: "ماهر المعيقلي",
    moshaf: [{ id: 2, name: "حفص عن عاصم", riwaya: "حفص", server: "https://server12.mp3quran.net/maher/", surah_list: "1,112,113,114,67,36,18" }],
  },
  {
    id: 3,
    name: "عبد الرحمن السديس",
    moshaf: [{ id: 3, name: "حفص عن عاصم", riwaya: "حفص", server: "https://server11.mp3quran.net/sds/", surah_list: "1,112,113,114,67,36,18" }],
  },
];

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 60 * 60 * 24 },
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(6000),
  });
  if (!response.ok) throw new Error(`MP3Quran API failed ${response.status}: ${url}`);
  return response.json() as Promise<T>;
}

export async function getReciters(): Promise<{ reciters: Reciter[]; source: "mp3quran.net" | "fallback" }> {
  try {
    const raw = await fetchJson<{ reciters: Reciter[] }>(`${MP3QURAN_BASE}/reciters?language=ar`);
    const reciters = raw.reciters.filter((reciter) => reciter.moshaf?.some((moshaf) => moshaf.server));
    return { reciters: reciters.length ? reciters : fallbackReciters, source: reciters.length ? "mp3quran.net" : "fallback" };
  } catch {
    return { reciters: fallbackReciters, source: "fallback" };
  }
}

export async function getReciter(id: number): Promise<{ reciter: Reciter | undefined; source: "mp3quran.net" | "fallback" }> {
  const { reciters, source } = await getReciters();
  return { reciter: reciters.find((reciter) => reciter.id === id), source };
}

export function getAudioUrl(moshaf: Moshaf, surahNumber: number) {
  const base = moshaf.server.endsWith("/") ? moshaf.server : `${moshaf.server}/`;
  return `${base}${String(surahNumber).padStart(3, "0")}.mp3`;
}

export function getAvailableSurahs(moshaf: Moshaf): number[] {
  return moshaf.surah_list
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item) && item >= 1 && item <= 114);
}
