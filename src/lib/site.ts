export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي — منصة مغربية للتوجيه الدراسي والمهني",
  description:
    "منصة مغربية تساعد التلاميذ والطلبة على اختيار المسار الدراسي والمهني، فهم اختيارات ما بعد الباك، اكتشاف المهن، قراءة المقالات، والوصول إلى موارد عملية للتوجيه.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
