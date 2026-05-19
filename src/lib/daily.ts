import { activities } from "@/data/activities";
import { challenges } from "@/data/challenges";
import { lessons } from "@/data/lessons";
import { adhkarItems } from "@/data/platform";
import { questions } from "@/data/questions";
import { quizzes } from "@/data/quizzes";
import { stories } from "@/data/stories";

const dailyAyahs = [
  { surah: 1, label: "الفاتحة 1", text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", reflection: "نبدأ يومنا باسم الله وطلب رحمته." },
  { surah: 1, label: "الفاتحة 5", text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", reflection: "نعبد الله ونطلب عونه في الدراسة والبيت والعبادة." },
  { surah: 94, label: "الشرح 5", text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", reflection: "عند الصعوبة نتذكر أن فرج الله قريب." },
  { surah: 103, label: "العصر 3", text: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", reflection: "الإيمان يظهر في العمل الصالح والكلمة الطيبة." },
  { surah: 112, label: "الإخلاص 1", text: "قُلْ هُوَ اللَّهُ أَحَدٌ", reflection: "الله واحد لا شريك له، وإليه نتوجه بالدعاء." },
];

function dayIndex(date = new Date()) {
  const start = Date.UTC(2026, 0, 1);
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((today - start) / 86_400_000);
}

function pick<T>(items: T[], offset = 0, date = new Date()) {
  if (!items.length) {
    throw new Error("Cannot pick a daily item from an empty list.");
  }
  const index = Math.abs(dayIndex(date) + offset) % items.length;
  return items[index];
}

export function getDailyLearning(date = new Date()) {
  return {
    lesson: pick(lessons, 0, date),
    question: pick(questions, 17, date),
    dhikr: pick(adhkarItems, 31, date),
    ayah: pick(dailyAyahs, 7, date),
    activity: pick(activities, 11, date),
    quiz: pick(quizzes, 5, date),
    story: pick(stories, 19, date),
    challenge: pick(challenges, 3, date),
  };
}
