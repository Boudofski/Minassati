export default function Loading() {
  return (
    <div className="page-shell py-12 sm:py-16">
      <div className="animate-pulse">
        <div className="h-8 w-48 rounded-2xl bg-slate-200" />
        <div className="mt-6 h-48 rounded-[2rem] bg-slate-100" />
        <div className="mt-4 grid gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-14 rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
