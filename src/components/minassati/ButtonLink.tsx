import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size    = "sm" | "md" | "lg";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-950 text-white shadow-lg shadow-slate-950/16 hover:-translate-y-0.5 hover:bg-slate-800",
  secondary:
    "bg-white/88 border border-slate-200 text-slate-800 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-card-glow",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  gold:
    "bg-gradient-to-l from-amber-500 to-orange-400 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export function ButtonLink({ href, children, variant = "primary", size = "md", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-black transition-all duration-200",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
