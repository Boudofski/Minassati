export default function Loading() {
  return (
    <div className="page-shell py-12 sm:py-16">
      <div className="animate-pulse">
        <div className="h-8 w-56 rounded-2xl bg-slate-200" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-28 rounded-[2rem] bg-slate-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
