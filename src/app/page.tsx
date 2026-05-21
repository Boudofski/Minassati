import type { Metadata } from "next";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";
import { localizedAlternates } from "@/lib/seo-i18n";

export const metadata: Metadata = {
  title: "منصتي — دورات ومسارات تعليمية وموارد رقمية للمغاربة",
  description: "منصة مغربية للتعلم الرقمي، الدورات، المسارات، الموارد، والقرآن الكريم. تعلم التسويق، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، والمهارات العملية.",
  alternates: {
    canonical: "/",
    languages: localizedAlternates("/", "ar").languages,
  },
  openGraph: {
    title: "منصتي — منصة مغربية للتعلم والموارد الرقمية",
    description: "دورات ومسارات وموارد عملية للمغاربة مع قارئ قرآن مجاني وموثوق.",
  },
};

export default function HomePage() {
  return <LocalizedHome locale="ar" />;
}
