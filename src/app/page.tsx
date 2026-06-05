import type { Metadata } from "next";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";
import { localizedAlternates } from "@/lib/seo-i18n";

export const metadata: Metadata = {
  title: "منصتي — منصة التوجيه المدرسي المغربية",
  description: "منصة مغربية تساعد التلاميذ والطلبة على اختيار المدارس، فهم اختيارات ما بعد الباك، التعرف على الفرص والمنح، وطلب توجيه شخصي مع مقالات ونصائح عملية.",
  alternates: {
    canonical: "/",
    languages: localizedAlternates("/", "ar").languages,
  },
  openGraph: {
    title: "منصتي — منصة التوجيه المدرسي المغربية",
    description: "اختيار المدارس، الفرص الأجنبية، التوجيه الشخصي، التقويم، والنصائح العملية للطلبة في المغرب.",
  },
};

export default function HomePage() {
  return <LocalizedHome locale="ar" />;
}
