import type { Metadata } from "next";
import { GuidanceRequestForm } from "@/components/minassati/GuidanceRequestForm";

export const metadata: Metadata = {
  title: "التوجيه الشخصي - منصتي",
  description: "ابدأ تقييماً مبسطاً حول مستواك، مدينتك، اهتماماتك، والمجالات التي تفضلها للحصول على توجيه أولي.",
  alternates: { canonical: "/guidance-request" },
};

export default function GuidanceRequestPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#b91c1c,#0f7a3b)] text-white">
        <div className="page-shell py-16 sm:py-20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">التوجيه الشخصي</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">ابدأ التقييم الآن</h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-[2] text-white/90">أجب على أسئلة بسيطة حتى نفهم وضعك ونقترح طريقة تفكير أوضح. هذا ليس قبولاً رسمياً ولا بديلاً عن المواقع الرسمية.</p>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="page-shell py-16">
          <GuidanceRequestForm />
        </div>
      </section>
    </>
  );
}
