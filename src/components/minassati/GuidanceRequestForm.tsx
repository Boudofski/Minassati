"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

export function GuidanceRequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const message = [
      `الهاتف: ${formData.get("phone") || "-"}`,
      `المدينة: ${formData.get("city") || "-"}`,
      `المستوى الحالي: ${formData.get("level") || "-"}`,
      `الاهتمامات: ${formData.get("interests") || "-"}`,
      "",
      `السؤال: ${formData.get("question") || ""}`,
    ].join("\n");
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        interestType: "guidance_request",
        message,
        source: "guidance-request",
        sourcePage: window.location.pathname,
        subject: "طلب توجيه من منصتي",
        website: formData.get("website"),
      }),
    }).catch(() => null);
    setStatus(response?.ok ? "success" : "error");
    if (response?.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto grid max-w-3xl gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-soft">
      <label className="hidden">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="الاسم" className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-blue-400" />
        <input required type="email" name="email" placeholder="البريد الإلكتروني" className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-blue-400" />
        <input name="phone" placeholder="الهاتف (اختياري)" className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-blue-400" />
        <input required name="city" placeholder="المدينة" className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-blue-400" />
        <input required name="level" placeholder="المستوى الحالي" className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-blue-400" />
        <input required name="interests" placeholder="الاهتمامات: طب، هندسة، تسويق..." className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-blue-400" />
      </div>
      <textarea required minLength={10} name="question" placeholder="اكتب سؤالك أو الحيرة التي تريد توجيهاً حولها" className="min-h-36 rounded-xl border border-slate-200 p-4 font-bold leading-7 outline-none focus:border-blue-400" />
      <button type="submit" disabled={status === "loading"} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-black text-white disabled:opacity-60">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        إرسال طلب التوجيه
      </button>
      {status === "success" ? <p className="rounded-xl bg-emerald-50 p-3 text-sm font-black text-emerald-800">تم إرسال الطلب.</p> : null}
      {status === "error" ? <p className="rounded-xl bg-red-50 p-3 text-sm font-black text-red-800">تعذر إرسال الطلب. حاول مرة أخرى.</p> : null}
    </form>
  );
}
