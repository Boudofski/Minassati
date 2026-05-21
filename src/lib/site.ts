export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي — دورات ومسارات تعليمية وموارد رقمية للمغاربة",
  description:
    "منصة مغربية للتعلم الرقمي، الدورات، المسارات، الموارد، والقرآن الكريم. تعلم التسويق، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، والمهارات العملية.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
