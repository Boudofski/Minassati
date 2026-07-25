import type { Metadata } from "next";
import { BusinessHome } from "@/components/business/BusinessHome";

export const metadata: Metadata = {
  title: "Création et gestion d’entreprise au Maroc",
  description: "Minassati centralise la création d’entreprise, les démarches juridiques, la comptabilité, les échéances et la facturation pour les entrepreneurs au Maroc.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Minassati — Créez et gérez votre entreprise au Maroc",
    description: "Une plateforme claire pour lancer, administrer et piloter votre entreprise au Maroc.",
  },
};

export default function HomePage() {
  return <BusinessHome />;
}
