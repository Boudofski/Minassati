export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي | منصة تعليمية للأطفال لتعلّم أساسيات الإسلام",
  description:
    "منصتي منصة تعليمية تساعد الأطفال على فهم أساسيات الإسلام من خلال دروس مبسطة، أسئلة وأجوبة، وتجربة تفاعلية تناسب الصغار وتدعم الآباء والمعلمين.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
