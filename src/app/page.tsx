import type { Metadata } from "next";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";

export const metadata: Metadata = {
  title: "منصتي — منصة التوجيه المدرسي المغربية",
  description: "منصة مغربية تساعد التلاميذ والطلبة على فهم اختيارات المدارس، ما بعد الباك، الفرص الأجنبية، التوجيه الشخصي، والمقالات العملية.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "منصتي — منصة التوجيه المدرسي المغربية",
    description: "اختيار المدارس، الفرص الأجنبية، التوجيه الشخصي، التقويم، والنصائح العملية للطلبة في المغرب.",
  },
};

export default function HomePage() {
  return <LocalizedHome locale="ar" />;
}
