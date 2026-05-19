import { BookOpen, Heart, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: BookOpen, label: "محتوى عربي مبسط" },
  { icon: Heart, label: "بلا ضغط أو تخويف" },
  { icon: ShieldCheck, label: "بقيادة الوالدين" },
];

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 rounded-[1.5rem] border border-slate-100 bg-white/80 px-5 py-3 shadow-sm backdrop-blur" role="list" aria-label="مزايا منصتي">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <div key={pillar.label} className="flex items-center gap-2" role="listitem">
            {index > 0 && <span className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden="true" />}
            <Icon className="h-4 w-4 text-teal-600" aria-hidden="true" />
            <span className="text-sm font-black text-slate-700">{pillar.label}</span>
          </div>
        );
      })}
    </div>
  );
}
