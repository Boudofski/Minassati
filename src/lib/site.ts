export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي — منصة التوجيه المدرسي المغربية",
  description:
    "منصة مغربية تساعد التلاميذ والطلبة على فهم اختيارات المدارس، ما بعد الباك، الفرص الأجنبية، التوجيه الشخصي، والمقالات العملية.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
