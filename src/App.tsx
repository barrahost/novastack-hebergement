import { useState } from "react";
import {
  Activity, ArrowRight, ChevronDown, CircleCheck, Clock3, Globe, HeadphonesIcon,
  Mail, MonitorSmartphone, MoveRight, RefreshCw, Server, ShieldCheck, Wrench,
} from "lucide-react";

const CONTACT_EMAIL = "contact@novastack.africa";
const WHATSAPP = "https://wa.me/2250556000002?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20vos%20offres%20d%27h%C3%A9bergement.";
const ESPACE_CLIENT = "https://espace.novastack.africa";

const guarantees = [
  { icon: Activity, value: "99,9 %", label: "Disponibilité visée", sub: "Supervision toutes les 5 min" },
  { icon: RefreshCw, value: "Quotidienne", label: "Sauvegarde", sub: "Restauration sur demande" },
  { icon: Clock3, value: "< 24 h", label: "Prise en charge", sub: "Support local en français" },
  { icon: MoveRight, value: "Incluse", label: "Migration de site", sub: "Réalisée par notre équipe" },
];

const services = [
  {
    icon: Globe,
    title: "Hébergement Web",
    desc: "Comptes d'hébergement sur infrastructure haute performance, avec espace de gestion complet, SSL automatique et sauvegardes quotidiennes.",
    features: ["Espace de gestion + installateur 1-clic", "SSL automatique", "Sauvegardes quotidiennes", "Webmail dédié"],
  },
  {
    icon: Server,
    title: "Serveurs dédiés",
    desc: "Serveurs pour les projets nécessitant isolation, ressources dédiées et environnement de production autonome.",
    features: ["Ressources dédiées", "Accès complet", "Stockage SSD performant", "Supervision incluse"],
  },
  {
    icon: Mail,
    title: "Email professionnel",
    desc: "Boîtes email à votre nom de domaine, accessibles partout, avec anti-spam et webmail.",
    features: ["contact@votredomaine", "Accès ordinateur & mobile", "Quota configurable", "Anti-spam intégré"],
  },
  {
    icon: Globe,
    title: "Noms de domaine",
    desc: "Enregistrement, transfert, renouvellement et configuration DNS de vos domaines locaux et internationaux.",
    features: [".ci · .africa · .com · .net", "Configuration DNS complète", "Renouvellement géré", "Alerte d'expiration"],
  },
  {
    icon: Wrench,
    title: "Infogérance",
    desc: "Nous opérons votre infrastructure : mises à jour, sauvegardes, incidents, migrations et interventions techniques.",
    features: ["Interventions incluses", "Correctifs de sécurité", "Migration de données", "Rapport mensuel"],
  },
  {
    icon: MonitorSmartphone,
    title: "Supervision continue",
    desc: "Vos services sont vérifiés en continu. Alertes immédiates et historique d'uptime depuis votre espace client.",
    features: ["Vérification toutes les 5 min", "Alertes email + WhatsApp", "Historique uptime", "Gestion des incidents"],
  },
];

const strengths = [
  { icon: ShieldCheck, title: "Infrastructure éprouvée", body: "Serveurs hébergés en datacenter, supervisés en continu pour une fiabilité maximale de vos services." },
  { icon: HeadphonesIcon, title: "Support local", body: "Une équipe basée à Abidjan, joignable par email, WhatsApp et ticket — en français." },
  { icon: RefreshCw, title: "Sauvegarde & continuité", body: "Sauvegardes quotidiennes et réplication hors-site. Restauration sur demande." },
  { icon: MonitorSmartphone, title: "Espace client dédié", body: "Vos services, domaines, factures et tickets, accessibles 24h/24 depuis votre espace." },
];

const faq = [
  { q: "Puis-je migrer mon site déjà hébergé ailleurs ?", a: "Oui. La migration est incluse : notre équipe transfère vos fichiers, bases de données et emails depuis votre prestataire actuel, sans interruption visible pour vos visiteurs." },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Virement bancaire, Mobile Money et espèces. Vos factures sont émises en FCFA et consultables dans votre espace client." },
  { q: "Quel est le délai de mise en service ?", a: "Un compte d'hébergement ou une boîte email est créé sous 24 h ouvrées après validation. Les domaines sont enregistrés le jour même." },
  { q: "Comment suivre mes services et mes factures ?", a: "Depuis votre espace client : statut en temps réel de vos sites, historique d'uptime, factures, domaines et tickets de support." },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <span className="icon-box-blue h-9 w-9" style={{ borderRadius: 4 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17L9 11L13 15L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="6" r="2.4" fill="#FF934E" />
        </svg>
      </span>
      <span className="text-lg font-extrabold tracking-tight leading-none">
        <span className="text-white">Nova</span><span className="text-orange-primary">Stack</span>
        <span className="ml-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-text">hébergement</span>
      </span>
    </a>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1e3a5f]/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white"
      >
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 text-blue-light transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <p className="pb-6 text-sm leading-7 text-slate-text">{a}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1e3a5f]/60 bg-dark-900/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-4">
            <a href={ESPACE_CLIENT} target="_blank" rel="noreferrer" className="hidden text-sm font-semibold text-slate-text transition-colors hover:text-white sm:inline">
              Espace client
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1e3a5f]/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(26,107,255,0.14),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <span className="badge">
              <Server className="h-3.5 w-3.5" /> Hébergement infogéré
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              <span className="text-gradient-hero">Votre site, vos emails, vos serveurs — </span>
              <span className="text-gradient-blue">opérés pour vous</span>
              <span className="text-gradient-hero">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-text">
              NovaStack héberge et supervise l'infrastructure de vos projets : hébergement web, serveurs,
              domaines et email professionnel. Supervision continue, support local, migration incluse.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </a>
              <a href={ESPACE_CLIENT} target="_blank" rel="noreferrer" className="btn-outline">
                Accéder à l'espace client
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#1e3a5f]/60 bg-[#1e3a5f]/40 glow-blue">
              {guarantees.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.label} className="bg-dark-800 p-6">
                    <Icon className="h-5 w-5 text-orange-primary" />
                    <p className="mt-3 text-2xl font-extrabold text-white">{g.value}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-text">{g.label}</p>
                    <p className="text-xs text-slate-muted">{g.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Garanties (mobile) */}
      <section className="border-b border-[#1e3a5f]/60 bg-dark-950 lg:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#1e3a5f]/40">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.label} className="bg-dark-900 p-5">
                <Icon className="h-5 w-5 text-orange-primary" />
                <p className="mt-2 text-xl font-extrabold text-white">{g.value}</p>
                <p className="text-sm font-semibold text-slate-text">{g.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#1e3a5f]/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="label-orange">Nos offres</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tout ce dont votre présence en ligne a besoin.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="card-dark p-7">
                  <span className="icon-box-orange h-12 w-12" style={{ borderRadius: 4 }}>
                    <Icon className="h-6 w-6 text-orange-primary" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-text">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-text">
                        <CircleCheck className="h-4 w-4 shrink-0 text-blue-light" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="border-b border-[#1e3a5f]/60 bg-blue-secondary">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-start gap-4">
            <MoveRight className="mt-1 h-7 w-7 shrink-0 text-orange-primary" />
            <div>
              <p className="text-xl font-extrabold text-white">Migration gratuite par notre équipe</p>
              <p className="mt-1 text-sm text-white/75">Vous changez de prestataire ? Nous transférons tout, sans interruption ni frais.</p>
            </div>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex shrink-0 items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-blue-secondary transition-colors hover:bg-orange-primary hover:text-white">
            Demander une migration <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="border-b border-[#1e3a5f]/60 bg-dark-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="label-orange">Pourquoi NovaStack</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Un hébergement fiable, géré localement.</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {strengths.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="card-dark p-7">
                  <span className="icon-box-blue h-12 w-12" style={{ borderRadius: 4 }}>
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-text">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#1e3a5f]/60 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="label-orange">Questions fréquentes</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Bon à savoir avant de démarrer.</h2>
          <div className="mt-8">
            {faq.map((f) => <Faq key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-dark-950 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgba(26,107,255,0.16),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Prêt à héberger votre projet ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-text">
            Parlez-nous de votre besoin : site, email, serveur ou migration. Réponse sous 24 h.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e3a5f]/60 bg-dark-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-text sm:flex-row sm:px-6">
          <span className="font-extrabold">
            <span className="text-white">Nova</span><span className="text-orange-primary">Stack</span>{" "}
            <span className="font-normal text-slate-muted">Hébergement</span>
          </span>
          <div className="flex items-center gap-5">
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">{CONTACT_EMAIL}</a>
            <a href={ESPACE_CLIENT} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Espace client</a>
          </div>
          <span className="text-slate-muted">© {new Date().getFullYear()} NovaStack Africa</span>
        </div>
      </footer>
    </div>
  );
}
