import Link from "next/link";
import { ArrowLeft, Clock, Users, BookOpen, Headphones, Tag } from "lucide-react";
import type { Category } from "@/data/categories";
import type { Lesson } from "@/data/lessons";
import type { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

// ─── Color maps ───────────────────────────────────────────────────────────────

const catGradient: Record<string, string> = {
  blue:   "from-blue-600 to-blue-400",
  teal:   "from-teal-600 to-teal-400",
  gold:   "from-amber-500 to-orange-400",
  navy:   "from-slate-800 to-slate-600",
  green:  "from-emerald-600 to-green-400",
  purple: "from-purple-600 to-violet-400",
  rose:   "from-rose-600 to-pink-400",
  orange: "from-orange-600 to-amber-400",
};

const catBg: Record<string, string> = {
  blue:   "bg-blue-50 hover:bg-blue-50/80",
  teal:   "bg-teal-50 hover:bg-teal-50/80",
  gold:   "bg-amber-50 hover:bg-amber-50/80",
  navy:   "bg-slate-50 hover:bg-slate-50/80",
  green:  "bg-emerald-50 hover:bg-emerald-50/80",
  purple: "bg-purple-50 hover:bg-purple-50/80",
  rose:   "bg-rose-50 hover:bg-rose-50/80",
  orange: "bg-orange-50 hover:bg-orange-50/80",
};

const catBorder: Record<string, string> = {
  blue:   "hover:border-blue-200 hover:shadow-blue-100/60",
  teal:   "hover:border-teal-200 hover:shadow-teal-100/60",
  gold:   "hover:border-amber-200 hover:shadow-amber-100/60",
  navy:   "hover:border-slate-300 hover:shadow-slate-100/60",
  green:  "hover:border-emerald-200 hover:shadow-emerald-100/60",
  purple: "hover:border-purple-200 hover:shadow-purple-100/60",
  rose:   "hover:border-rose-200 hover:shadow-rose-100/60",
  orange: "hover:border-orange-200 hover:shadow-orange-100/60",
};

const catText: Record<string, string> = {
  blue: "text-blue-600", teal: "text-teal-600", gold: "text-amber-600",
  navy: "text-slate-700", green: "text-emerald-600", purple: "text-purple-600",
  rose: "text-rose-600", orange: "text-orange-600",
};

const levelBadge: Record<string, string> = {
  "مبتدئ": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "متوسط": "bg-blue-50 text-blue-700 border-blue-100",
  "عائلي": "bg-amber-50 text-amber-700 border-amber-100",
};

// ─── Category Card ─────────────────────────────────────────────────────────────

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  const grad   = catGradient[category.color] ?? catGradient.blue;
  const bg     = catBg[category.color]      ?? catBg.blue;
  const border = catBorder[category.color]  ?? catBorder.blue;
  const text   = catText[category.color]    ?? catText.blue;

  return (
    <Link
      href={`/learn/${category.slug}`}
      className={cn(
        "group relative flex flex-col rounded-card border border-slate-200 p-6 shadow-soft transition-all duration-300",
        "hover:-translate-y-1.5 hover:shadow-xl",
        bg, border,
      )}
    >
      <span className={cn("mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-sm", grad)}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-black text-slate-950">{category.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{category.description}</p>
      {category.lessonCount > 0 && (
        <p className="mt-3 text-xs font-bold text-slate-400">{category.lessonCount} درس</p>
      )}
      <span className={cn("mt-4 inline-flex items-center gap-1.5 text-sm font-bold", text)}>
        افتح المسار
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

// ─── Lesson Card ──────────────────────────────────────────────────────────────

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const level = (lesson as { level?: string }).level;
  return (
    <Link
      href={`/learn/${lesson.category}/${lesson.slug}`}
      className="group flex flex-col rounded-card border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
    >
      {level && (
        <span className={cn("mb-4 self-start rounded-full border px-3 py-1 text-xs font-bold", levelBadge[level] ?? levelBadge["مبتدئ"])}>
          {level}
        </span>
      )}
      <h3 className="text-lg font-black leading-snug text-slate-950">{lesson.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-slate-600 line-clamp-2">{lesson.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
          <Clock className="h-3 w-3" />{lesson.duration}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-600">
          <Users className="h-3 w-3" />{lesson.age}
        </span>
      </div>
    </Link>
  );
}

// ─── Question Card ─────────────────────────────────────────────────────────────

export function QuestionCard({ question }: { question: Question }) {
  const tags = (question as { tags?: string[] }).tags ?? [];
  return (
    <Link
      href={`/qa/${question.slug}`}
      className="group flex flex-col rounded-card border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/60"
    >
      <span className="mb-4 self-start rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700">
        {question.category}
      </span>
      <h3 className="text-lg font-black leading-snug text-slate-950">{question.question}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">{question.shortAnswer}</p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
              <Tag className="h-2.5 w-2.5" />{tag}
            </span>
          ))}
        </div>
      )}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
        قراءة الإجابة
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

// ─── Surah Card ───────────────────────────────────────────────────────────────

interface SurahCardProps {
  surah: { number: number; name: string; englishName: string; ayahs: number; type: "مكية" | "مدنية" };
  href?: string;
}

export function SurahCard({ surah, href }: SurahCardProps) {
  const to = href ?? `/quran/${surah.number}`;
  return (
    <Link
      href={to}
      className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md hover:shadow-blue-100/50"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 text-sm font-black text-white shadow-sm">
        {surah.number}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-black text-slate-950">{surah.name}</p>
        <p className="text-xs text-slate-500">{surah.englishName}</p>
      </div>
      <div className="text-left shrink-0 space-y-1">
        <p className="text-xs font-bold text-slate-500">{surah.ayahs} آية</p>
        <span className={cn(
          "inline-block rounded-full px-2 py-0.5 text-xs font-bold",
          surah.type === "مكية" ? "bg-amber-50 text-amber-700" : "bg-teal-50 text-teal-700",
        )}>
          {surah.type}
        </span>
      </div>
    </Link>
  );
}

// ─── Reciter Card ─────────────────────────────────────────────────────────────

interface ReciterCardProps {
  reciter: { id?: number; name: string; rewaya?: string; style?: string; Server?: string };
  onClick?: () => void;
}

export function ReciterCard({ reciter, onClick }: ReciterCardProps) {
  const inner = (
    <div className="group flex flex-col rounded-card border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-gold-glow hover:bg-amber-50/30">
      <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-md shadow-amber-500/20">
        <Headphones className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-black text-slate-950">{reciter.name}</h3>
      {reciter.rewaya && (
        <span className="mt-2 self-start rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
          رواية {reciter.rewaya}
        </span>
      )}
      {reciter.style && <p className="mt-3 text-sm leading-6 text-slate-500">{reciter.style}</p>}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-600">
        <Headphones className="h-4 w-4" /> استمع الآن
      </span>
    </div>
  );

  if (reciter.id) {
    return (
      <Link href={`/audio/${reciter.id}`} className="block">
        {inner}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-right">
        {inner}
      </button>
    );
  }
  return inner;
}

// ─── Path Card ────────────────────────────────────────────────────────────────

interface PathCardProps {
  path: {
    slug: string; title: string; subtitle: string; description: string;
    color: "blue" | "teal" | "gold" | "navy"; audience: string; totalLessons: number; duration: string; icon: string;
    steps: Array<{ title: string; description: string; category: string; lessonSlugs: string[] }>;
  };
}

const pathGrad: Record<string, string> = {
  blue:  "from-blue-600 to-blue-400",
  teal:  "from-teal-600 to-teal-400",
  gold:  "from-amber-500 to-orange-400",
  navy:  "from-slate-800 to-slate-600",
};
const pathBg: Record<string, string> = {
  blue:  "bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100/70",
  teal:  "bg-gradient-to-br from-teal-50 to-emerald-50 hover:from-teal-100/70",
  gold:  "bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100/70",
  navy:  "bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100/70",
};

export function PathCard({ path }: PathCardProps) {
  const grad = pathGrad[path.color] ?? pathGrad.blue;
  const bg   = pathBg[path.color]   ?? pathBg.blue;
  return (
    <Link
      href={`/learn?path=${path.slug}`}
      className={cn(
        "group flex flex-col rounded-section border border-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
        bg,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-2xl shadow-sm", grad)}>
          {path.icon}
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-slate-600 backdrop-blur-sm">
          {path.totalLessons} درس
        </span>
      </div>
      <h3 className="mt-5 text-xl font-black text-slate-950">{path.title}</h3>
      <p className="mt-1 text-sm font-semibold text-slate-500">{path.subtitle}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{path.description}</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-600">{path.audience}</span>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-600">{path.duration}</span>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-black text-slate-800">
        <BookOpen className="h-4 w-4" /> ابدأ المسار
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
