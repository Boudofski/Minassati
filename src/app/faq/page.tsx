import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { guidanceFaqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "النصائح والأسئلة - منصتي",
  description: "أسئلة شائعة ونصائح عملية حول ما بعد الباك، اختيار التخصص، الجامعة، التكوين المهني، المباريات، والمنح.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#b91c1c,#0f7a3b)] text-white">
        <div className="page-shell py-16 sm:py-20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">النصائح والأسئلة</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">أسئلة عملية للطلبة المغاربة</h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-[2] text-white/90">إجابات قصيرة تساعدك على التفكير، مع تذكير دائم بالتحقق من المصادر الرسمية.</p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="page-shell py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {guidanceFaqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{faq.category}</span>
                    <h2 className="mt-3 text-xl font-black text-slate-950">{faq.question}</h2>
                    <p className="mt-3 text-sm font-bold leading-8 text-slate-700">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
