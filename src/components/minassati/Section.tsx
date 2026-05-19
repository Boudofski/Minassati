import { cn } from "@/lib/utils";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  pattern?: boolean;
  id?: string;
}

export function Section({ eyebrow, title, description, children, className, centered = true, pattern = false, id }: SectionProps) {
  return (
    <section id={id} className={cn("section-space relative overflow-hidden", pattern && "islamic-bg", className)}>
      {pattern && <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 pointer-events-none" />}
      <div className="page-shell relative">
        {(eyebrow || title || description) && (
          <div className={cn("mb-10 sm:mb-14", centered && "text-center")}>
            {eyebrow && (
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-sm font-extrabold text-blue-600 shadow-sm shadow-blue-100/40 backdrop-blur">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className={cn("text-balance text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl", eyebrow && "mt-3")}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn("text-pretty mt-4 text-base leading-8 text-slate-600 sm:text-lg", centered && "mx-auto max-w-3xl")}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
