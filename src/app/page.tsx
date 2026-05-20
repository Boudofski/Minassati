import type { Metadata } from "next";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";
import { localizedAlternates } from "@/lib/seo-i18n";

export const metadata: Metadata = {
  title: "منصتي - تعليم إسلامي يومي للأطفال والأسرة",
  description: "علّم طفلك الإسلام بحب ووضوح كل يوم عبر القرآن، الأسئلة، الأنشطة، القصص، والأذكار في تجربة آمنة موجهة للأهل.",
  alternates: {
    canonical: "/",
    languages: localizedAlternates("/", "ar").languages,
  },
  openGraph: {
    title: "منصتي - تعليم إسلامي يومي للأطفال والأسرة",
    description: "منصة تعليمية إسلامية متعددة اللغات تساعد الأسرة على بناء عادة يومية قصيرة وواضحة للأطفال.",
  },
};

export default function HomePage() {
  return <LocalizedHome locale="ar" />;
}
