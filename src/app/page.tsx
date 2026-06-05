import type { Metadata } from "next";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";
import { localizedAlternates } from "@/lib/seo-i18n";

export const metadata: Metadata = {
  title: "منصتي — منصة مغربية للتوجيه الدراسي والمهني",
  description: "منصة مغربية تساعد التلاميذ والطلبة على اختيار المسار الدراسي والمهني، فهم اختيارات ما بعد الباك، اكتشاف المهن، قراءة المقالات، والوصول إلى موارد عملية للتوجيه.",
  alternates: {
    canonical: "/",
    languages: localizedAlternates("/", "ar").languages,
  },
  openGraph: {
    title: "منصتي — منصة مغربية للتوجيه الدراسي والمهني",
    description: "توجيه دراسي ومهني للمغاربة: بعد الباك، المهن، المدارس، المنح، المقالات، والموارد العملية.",
  },
};

export default function HomePage() {
  return <LocalizedHome locale="ar" />;
}
