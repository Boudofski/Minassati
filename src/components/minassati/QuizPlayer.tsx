"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, Sparkles, XCircle } from "lucide-react";
import type { Quiz } from "@/data/quizzes";
import { cn } from "@/lib/utils";

export function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = useMemo(
    () =>
      quiz.questions.reduce((total, question, index) => {
        const answerIndex = answers[index];
        return total + (typeof answerIndex === "number" && question.choices[answerIndex]?.correct ? 1 : 0);
      }, 0),
    [answers, quiz.questions],
  );
  const complete = Object.keys(answers).length === quiz.questions.length;

  return (
    <div className="space-y-5">
      {quiz.questions.map((question, questionIndex) => {
        const selected = answers[questionIndex];
        return (
          <article key={question.prompt} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700">{questionIndex + 1}</span>
              <h2 className="text-xl font-black leading-8 text-slate-950">{question.prompt}</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {question.choices.map((choice, choiceIndex) => {
                const active = selected === choiceIndex;
                const answered = typeof selected === "number";
                return (
                  <button
                    key={choice.text}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: choiceIndex }))}
                    className={cn(
                      "rounded-2xl border p-4 text-right text-sm font-extrabold leading-7 transition",
                      "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200",
                      active && choice.correct && "border-teal-300 bg-teal-50 text-teal-900",
                      active && !choice.correct && "border-rose-300 bg-rose-50 text-rose-900",
                      !active && answered && choice.correct && "border-teal-200 bg-teal-50/70 text-teal-900",
                      !answered && "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50",
                      answered && !active && !choice.correct && "border-slate-200 bg-white text-slate-500",
                    )}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span>{choice.text}</span>
                      {answered && choice.correct && <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600" />}
                      {active && !choice.correct && <XCircle className="h-5 w-5 shrink-0 text-rose-600" />}
                    </span>
                  </button>
                );
              })}
            </div>
            {typeof selected === "number" && (
              <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-7 text-slate-700">
                {question.choices[selected]?.feedback}
              </p>
            )}
          </article>
        );
      })}

      <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-navy-glow">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black text-amber-300">
              <Sparkles className="h-4 w-4" />
              نتيجة الاختبار
            </p>
            <h2 className="mt-2 text-3xl font-black">{score} من {quiz.questions.length}</h2>
            <p className="mt-2 leading-8 text-slate-300">
              {complete ? "تحدثوا مع الطفل عن إجابة واحدة تعلم منها شيئاً جديداً." : "أجب عن كل الأسئلة لتظهر النتيجة النهائية."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" />
            إعادة المحاولة
          </button>
        </div>
      </div>
    </div>
  );
}
