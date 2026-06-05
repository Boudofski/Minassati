export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي — منصة التوجيه المدرسي المغربية",
  description:
    "منصة مغربية تساعد التلاميذ والطلبة على اختيار المدارس، فهم اختيارات ما بعد الباك، التعرف على الفرص والمنح، وطلب توجيه شخصي مع مقالات ونصائح عملية.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
