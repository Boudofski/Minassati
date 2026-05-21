import { cn } from "@/lib/utils";

type AdSlotProps = {
  label?: string;
  className?: string;
};

export function AdSlot({ label = "مساحة إعلانية", className }: AdSlotProps) {
  return (
    <aside
      className={cn(
        "rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-5 text-center text-xs font-bold text-slate-400",
        className,
      )}
      aria-label={label}
    >
      {label}
    </aside>
  );
}
