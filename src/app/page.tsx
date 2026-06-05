import type { Metadata } from "next";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";

export const metadata: Metadata = {
  title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
  description: "دليل مغربي يساعد التلاميذ والطلبة على فهم اختيارات ما بعد الباك، المدارس والمعاهد، الفرص بالخارج، التوجيه الشخصي، والمقالات العملية.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
    description: "اختيار المدارس، الفرص الأجنبية، التوجيه الشخصي، التقويم، والنصائح العملية للطلبة في المغرب.",
  },
};

export default function HomePage() {
  return <LocalizedHome locale="ar" />;
}
