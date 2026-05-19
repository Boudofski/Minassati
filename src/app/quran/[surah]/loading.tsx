export default function Loading() {
  return (
    <div className="page-shell py-12 sm:py-16">
      <div className="animate-pulse">
        <div className="h-8 w-48 rounded-2xl bg-slate-200" />
        <div className="mt-6 h-64 rounded-[2rem] bg-slate-100" />
        <div className="mt-4 h-32 rounded-[2rem] bg-slate-100" />
      </div>
    </div>
  );
}
