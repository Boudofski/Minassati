import type { Metadata } from "next";
import { GuidanceRequestForm } from "@/components/minassati/GuidanceRequestForm";

export const metadata: Metadata = {
  title: "طلب توجيه - منصتي",
  description: "أرسل سؤالاً بسيطاً حول اختيار التخصص، بعد الباك، المسارات المهنية، المدارس، أو المنح.",
  alternates: { canonical: "/guidance-request" },
};

export default function GuidanceRequestPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">طلب توجيه</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">اكتب سؤالك بوضوح</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">النموذج لا يقدم قبولاً أو معلومة رسمية. يساعدنا فقط على فهم وضعك واقتراح خطوات بحث مناسبة.</p>
        </div>
      </section>
      <section className="section-soft">
        <div className="page-shell py-16">
          <GuidanceRequestForm />
        </div>
      </section>
    </>
  );
}
