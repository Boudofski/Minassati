export const site = {
  name: "Minassati",
  url: "https://minassati.ma",
  title: "Minassati — Créez et gérez votre entreprise au Maroc",
  description:
    "La plateforme marocaine qui centralise la création d’entreprise, les démarches juridiques, la comptabilité, les échéances et la facturation.",
  author: "Abdelkhalek Boudofi",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
