import Link from "next/link";
import { ArrowRight, ChevronDown, Layers3 } from "lucide-react";

const navigation = [
  { label: "Créer une entreprise", href: "#creation" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "À propos", href: "#about" },
];

export function BusinessHeader() {
  return (
    <header className="business-header">
      <div className="business-container business-nav-shell">
        <Link href="/" className="business-logo" aria-label="Minassati - Accueil">
          <span className="business-logo-mark" aria-hidden="true">
            <Layers3 size={22} strokeWidth={2.2} />
          </span>
          <span>Minassati</span>
        </Link>

        <nav className="business-desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="business-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="business-nav-actions">
          <button className="business-language" type="button" aria-label="Choisir la langue">
            FR <ChevronDown size={14} />
          </button>
          <Link href="#contact" className="business-login-link">
            Connexion
          </Link>
          <Link href="#creation" className="business-button business-button-small">
            Commencer <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
