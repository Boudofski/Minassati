import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  BookOpenCheck,
  Building2,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FilePenLine,
  FileText,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  MessagesSquare,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  WalletCards,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    eyebrow: "Lancement",
    title: "Création d’entreprise",
    description: "Structurez votre projet, préparez votre dossier et suivez chaque formalité depuis un espace unique.",
    bullets: ["SARL et SARLAU", "Dossier guidé", "Suivi des étapes"],
  },
  {
    icon: FilePenLine,
    eyebrow: "Juridique",
    title: "Modifications de société",
    description: "Centralisez vos changements statutaires, procès-verbaux et demandes administratives sans dispersion.",
    bullets: ["Transfert de siège", "Changement de gérant", "Mise à jour des statuts"],
  },
  {
    icon: BarChart3,
    eyebrow: "Pilotage",
    title: "Comptabilité & fiscalité",
    description: "Gardez une vue claire sur vos obligations, documents comptables et prochaines échéances.",
    bullets: ["Calendrier fiscal", "Documents centralisés", "Accompagnement expert"],
  },
  {
    icon: ReceiptText,
    eyebrow: "Opérations",
    title: "Devis & facturation",
    description: "Créez des documents professionnels, suivez les paiements et gardez votre activité organisée.",
    bullets: ["Devis et factures", "Suivi des règlements", "Historique client"],
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Décrivez votre projet",
    description: "Répondez à quelques questions simples sur votre activité, vos associés et vos besoins.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Validez votre dossier",
    description: "Vos informations sont structurées, contrôlées et transformées en un dossier prêt à traiter.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Suivez l’avancement",
    description: "Consultez les étapes, les demandes et vos documents depuis votre tableau de bord Minassati.",
  },
];

const faq = [
  {
    question: "Est-ce que tout peut être réalisé en ligne ?",
    answer: "La majorité du parcours est pensée pour être gérée à distance. Certaines formalités peuvent toutefois nécessiter une signature, une légalisation ou l’intervention d’un professionnel habilité.",
  },
  {
    question: "Minassati remplace-t-elle un avocat ou un expert-comptable ?",
    answer: "Non. Minassati centralise les informations, les documents et le suivi. Les prestations réglementées sont confiées, lorsque nécessaire, à des professionnels autorisés.",
  },
  {
    question: "Puis-je suivre plusieurs sociétés ?",
    answer: "L’architecture est prévue pour permettre à terme la gestion de plusieurs entreprises, établissements ou dossiers depuis un même compte.",
  },
  {
    question: "Les tarifs sont-ils fixes ?",
    answer: "Le prix dépend de la forme juridique, de la ville, des débours administratifs et du niveau d’accompagnement. Un récapitulatif clair doit être validé avant lancement.",
  },
];

function MiniDashboard() {
  return (
    <div className="business-dashboard-card" aria-label="Aperçu du tableau de bord Minassati">
      <div className="business-dashboard-topbar">
        <div className="business-window-dots"><span /><span /><span /></div>
        <span className="business-secure-label"><LockKeyhole size={13} /> Espace sécurisé</span>
      </div>
      <div className="business-dashboard-body">
        <aside className="business-dashboard-sidebar">
          <div className="business-dashboard-symbol"><LayoutDashboard size={20} /></div>
          {[Building2, FileText, ReceiptText, CalendarCheck2].map((Icon, index) => (
            <span key={index} className={index === 0 ? "is-active" : ""}><Icon size={17} /></span>
          ))}
        </aside>
        <div className="business-dashboard-main">
          <div className="business-dashboard-heading">
            <div>
              <small>Bonjour Abdelkhalek</small>
              <strong>Votre création avance</strong>
            </div>
            <span className="business-avatar">AB</span>
          </div>
          <div className="business-progress-card">
            <div className="business-progress-row">
              <span>Dossier SARLAU</span>
              <strong>68%</strong>
            </div>
            <div className="business-progress-track"><span /></div>
            <div className="business-step-list">
              <div className="is-complete"><CheckCircle2 size={17} /><span>Informations validées</span></div>
              <div className="is-complete"><CheckCircle2 size={17} /><span>Documents préparés</span></div>
              <div className="is-current"><TimerReset size={17} /><span>Contrôle du dossier</span></div>
              <div><span className="business-step-dot" /><span>Dépôt administratif</span></div>
            </div>
          </div>
          <div className="business-dashboard-stats">
            <div><FileText size={18} /><span><strong>8</strong><small>Documents</small></span></div>
            <div><BellRing size={18} /><span><strong>2</strong><small>Actions</small></span></div>
            <div><MessagesSquare size={18} /><span><strong>1</strong><small>Message</small></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BusinessHome() {
  return (
    <div id="top" className="business-site">
      <section className="business-hero" id="creation">
        <div className="business-hero-orb business-hero-orb-one" />
        <div className="business-hero-orb business-hero-orb-two" />
        <div className="business-container business-hero-grid">
          <div className="business-hero-copy">
            <div className="business-eyebrow"><Sparkles size={16} /> La plateforme des entrepreneurs au Maroc</div>
            <h1>Créez et gérez votre entreprise <span>sans subir la paperasse.</span></h1>
            <p>
              Minassati rassemble vos démarches administratives, documents juridiques, échéances et outils de gestion dans une expérience simple, claire et entièrement centralisée.
            </p>
            <div className="business-hero-actions">
              <Link href="#contact" className="business-button">
                Créer mon entreprise <ArrowRight size={18} />
              </Link>
              <Link href="#services" className="business-button business-button-secondary">
                Découvrir les services
              </Link>
            </div>
            <div className="business-hero-proof">
              <span><ShieldCheck size={18} /> Parcours sécurisé</span>
              <span><BadgeCheck size={18} /> Dossier structuré</span>
              <span><Users size={18} /> Accompagnement humain</span>
            </div>
          </div>
          <div className="business-hero-visual">
            <div className="business-floating-note business-floating-note-left">
              <CalendarCheck2 size={18} />
              <span><small>Prochaine échéance</small><strong>Déclaration fiscale</strong></span>
            </div>
            <MiniDashboard />
            <div className="business-floating-note business-floating-note-right">
              <CheckCircle2 size={18} />
              <span><small>Document validé</small><strong>Statuts de société</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="business-trust-strip" aria-label="Principaux bénéfices">
        <div className="business-container business-trust-grid">
          <div><strong>100%</strong><span>Parcours digital</span></div>
          <div><strong>1 espace</strong><span>Pour tout centraliser</span></div>
          <div><strong>3 langues</strong><span>Français, arabe, anglais</span></div>
          <div><strong>Maroc</strong><span>Conçu pour le marché local</span></div>
        </div>
      </section>

      <section className="business-section" id="services">
        <div className="business-container">
          <div className="business-section-heading">
            <div>
              <span className="business-kicker">Une plateforme, plusieurs besoins</span>
              <h2>Tout ce qu’il faut pour lancer et piloter votre entreprise</h2>
            </div>
            <p>Minassati réduit les allers-retours, les documents éparpillés et le manque de visibilité qui ralentissent les entrepreneurs.</p>
          </div>
          <div className="business-services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="business-service-card" key={service.title}>
                  <div className="business-service-icon"><Icon size={25} /></div>
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.bullets.map((bullet) => <li key={bullet}><Check size={15} /> {bullet}</li>)}
                  </ul>
                  <Link href="#contact">En savoir plus <ChevronRight size={16} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="business-section business-section-dark" id="about">
        <div className="business-container business-product-grid">
          <div className="business-product-copy">
            <span className="business-kicker business-kicker-light">Votre entreprise, enfin lisible</span>
            <h2>Un tableau de bord qui vous dit quoi faire, et quand.</h2>
            <p>
              Au lieu de chercher vos fichiers dans des conversations, des e-mails et des dossiers, Minassati transforme chaque obligation en une action claire et traçable.
            </p>
            <div className="business-feature-list">
              <div><BellRing size={20} /><span><strong>Rappels utiles</strong><small>Recevez les échéances importantes avant qu’elles deviennent urgentes.</small></span></div>
              <div><BookOpenCheck size={20} /><span><strong>Documents centralisés</strong><small>Retrouvez statuts, attestations, factures et justificatifs dans un seul espace.</small></span></div>
              <div><MessagesSquare size={20} /><span><strong>Suivi transparent</strong><small>Visualisez les actions en cours et échangez autour de chaque dossier.</small></span></div>
            </div>
            <Link href="#contact" className="business-button business-button-light">Découvrir Minassati <ArrowRight size={18} /></Link>
          </div>
          <div className="business-product-panel">
            <div className="business-panel-header">
              <span>Vue d’ensemble</span>
              <small>Juillet 2026</small>
            </div>
            <div className="business-panel-metrics">
              <div><span className="business-metric-icon"><CircleDollarSign size={20} /></span><small>Chiffre d’affaires</small><strong>24 800 MAD</strong><em>+12,4%</em></div>
              <div><span className="business-metric-icon"><WalletCards size={20} /></span><small>Factures en attente</small><strong>3</strong><em>7 200 MAD</em></div>
            </div>
            <div className="business-chart-card">
              <div><span>Activité financière</span><small>6 derniers mois</small></div>
              <div className="business-bars" aria-hidden="true">
                {[38, 52, 44, 68, 61, 83].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
              </div>
            </div>
            <div className="business-panel-tasks">
              <div><span className="business-task-icon"><Landmark size={17} /></span><span><strong>Déclaration TVA</strong><small>À préparer avant le 30 juillet</small></span><em>À faire</em></div>
              <div><span className="business-task-icon"><FileText size={17} /></span><span><strong>Facture #2026-042</strong><small>Envoyée à Atlas Conseil</small></span><em className="is-paid">Payée</em></div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-section" id="process">
        <div className="business-container">
          <div className="business-centered-heading">
            <span className="business-kicker">Comment ça marche</span>
            <h2>De votre idée à une entreprise structurée</h2>
            <p>Un parcours guidé, sans jargon inutile et avec une visibilité complète sur la prochaine étape.</p>
          </div>
          <div className="business-process-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="business-process-card">
                  <span className="business-process-number">{step.number}</span>
                  <div className="business-process-icon"><Icon size={25} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index < steps.length - 1 && <span className="business-process-arrow"><ArrowRight size={20} /></span>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="business-section business-pricing-section" id="tarifs">
        <div className="business-container business-pricing-grid">
          <div className="business-pricing-copy">
            <span className="business-kicker">Des tarifs lisibles</span>
            <h2>Vous payez pour un résultat clair, pas pour du flou.</h2>
            <p>
              Les coûts varient selon votre forme juridique, la ville, les frais administratifs et les services sélectionnés. Minassati vous présente un récapitulatif détaillé avant toute validation.
            </p>
            <ul>
              <li><CheckCircle2 size={18} /> Prestations clairement séparées</li>
              <li><CheckCircle2 size={18} /> Frais administratifs identifiés</li>
              <li><CheckCircle2 size={18} /> Aucun lancement sans validation</li>
            </ul>
          </div>
          <div className="business-pricing-card">
            <div className="business-pricing-card-top">
              <span>Création SARL / SARLAU</span>
              <strong>Devis personnalisé</strong>
              <p>Une formule construite selon votre situation et votre ville.</p>
            </div>
            <div className="business-pricing-includes">
              <span>Le parcours peut inclure :</span>
              {["Analyse initiale du projet", "Préparation des documents", "Dépôt et suivi administratif", "Espace documentaire", "Accompagnement après création"].map((item) => (
                <div key={item}><Check size={16} /> {item}</div>
              ))}
            </div>
            <Link href="#contact" className="business-button business-button-full">Obtenir mon estimation <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="business-section" id="faq">
        <div className="business-container business-faq-grid">
          <div className="business-faq-intro">
            <span className="business-kicker">Questions fréquentes</span>
            <h2>Les réponses avant de commencer.</h2>
            <p>Une information nette vaut mieux qu’une promesse commerciale vague.</p>
            <Link href="#contact">Poser une autre question <ArrowRight size={17} /></Link>
          </div>
          <div className="business-faq-list">
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="business-cta-section" id="contact">
        <div className="business-container business-cta-card">
          <div>
            <span className="business-kicker business-kicker-light">Prêt à structurer votre projet ?</span>
            <h2>Commencez par une demande simple. Nous organisons la suite.</h2>
            <p>Présentez votre besoin et recevez les prochaines étapes adaptées à votre situation.</p>
          </div>
          <div className="business-cta-actions">
            <Link href="mailto:contact@minassati.ma" className="business-button business-button-light">Démarrer ma demande <ArrowRight size={18} /></Link>
            <span><ShieldCheck size={17} /> Vos informations restent confidentielles</span>
          </div>
        </div>
      </section>
    </div>
  );
}
