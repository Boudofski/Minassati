import Link from "next/link";
import { ArrowUpRight, Layers3, Mail, MapPin } from "lucide-react";

const footerGroups = [
  {
    title: "Services",
    links: [
      ["Création d’entreprise", "#creation"],
      ["Modifications juridiques", "#services"],
      ["Comptabilité", "#services"],
      ["Facturation", "#services"],
    ],
  },
  {
    title: "Ressources",
    links: [
      ["Comment ça marche", "#process"],
      ["Tarifs", "#tarifs"],
      ["Questions fréquentes", "#faq"],
      ["Nous contacter", "#contact"],
    ],
  },
  {
    title: "Légal",
    links: [
      ["Confidentialité", "/privacy"],
      ["Conditions d’utilisation", "/terms"],
      ["Mentions légales", "/legal"],
      ["Cookies", "/cookies"],
    ],
  },
];

export function BusinessFooter() {
  return (
    <footer className="business-footer">
      <div className="business-container business-footer-grid">
        <div className="business-footer-intro">
          <Link href="/" className="business-logo business-logo-light">
            <span className="business-logo-mark" aria-hidden="true">
              <Layers3 size={22} strokeWidth={2.2} />
            </span>
            <span>Minassati</span>
          </Link>
          <p>
            La plateforme marocaine qui simplifie la création, l’administration et la gestion quotidienne de votre entreprise.
          </p>
          <div className="business-footer-contact">
            <span><MapPin size={16} /> Maroc</span>
            <a href="mailto:contact@minassati.ma"><Mail size={16} /> contact@minassati.ma</a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="business-container business-footer-disclaimer">
        <p>
          Minassati est une plateforme technologique d’accompagnement administratif. Les prestations réglementées sont réalisées, lorsque nécessaire, par des professionnels habilités.
        </p>
      </div>

      <div className="business-container business-footer-bottom">
        <span>© {new Date().getFullYear()} Minassati.ma. Tous droits réservés.</span>
        <a href="#top">Retour en haut <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}
