export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
  description:
    "دليل مغربي يساعد التلاميذ والطلبة على فهم اختيارات ما بعد الباك، المدارس والمعاهد، الفرص بالخارج، التوجيه الشخصي، والمقالات العملية.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
