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

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-slate-900"
      >
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <p className="pb-6 text-sm leading-7 text-slate-600">{a}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
              <Server className="h-5 w-5" />
            </span>
            <span className="text-lg font-black tracking-tight">
              Nova<span className="text-accent">Stack</span>
              <span className="ml-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">hébergement</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href={ESPACE_CLIENT} target="_blank" rel="noreferrer" className="hidden text-sm font-semibold text-slate-600 hover:text-brand sm:inline">
              Espace client
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
              <Server className="h-3.5 w-3.5" /> Hébergement infogéré
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.6rem]">
              Votre site, vos emails, vos serveurs — <span className="text-brand">opérés pour vous</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              NovaStack héberge et supervise l'infrastructure de vos projets : hébergement web, serveurs,
              domaines et email professionnel. Supervision continue, support local, migration incluse.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </a>
              <a href={ESPACE_CLIENT} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand hover:text-brand">
                Accéder à l'espace client
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_24px_60px_-20px_rgba(26,107,255,0.25)]">
              {guarantees.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.label} className="bg-white p-6">
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-2xl font-black text-brand-dark">{g.value}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{g.label}</p>
                    <p className="text-xs text-slate-500">{g.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Garanties (mobile) */}
      <section className="border-b border-slate-200 bg-slate-50 lg:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-200 px-0">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.label} className="bg-slate-50 p-5">
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-2 text-xl font-black text-brand-dark">{g.value}</p>
                <p className="text-sm font-semibold text-slate-800">{g.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-brand">Nos offres</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Tout ce dont votre présence en ligne a besoin.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.2)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CircleCheck className="h-4 w-4 shrink-0 text-brand" /> {f}
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
      <section className="border-b border-slate-200 bg-brand">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-start gap-4">
            <MoveRight className="mt-1 h-7 w-7 shrink-0 text-white" />
            <div>
              <p className="text-xl font-black text-white">Migration gratuite par notre équipe</p>
              <p className="mt-1 text-sm text-white/80">Vous changez de prestataire ? Nous transférons tout, sans interruption ni frais.</p>
            </div>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand transition-opacity hover:opacity-90">
            Demander une migration <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-brand">Pourquoi NovaStack</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Un hébergement fiable, géré localement.</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {strengths.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-brand">Questions fréquentes</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Bon à savoir avant de démarrer.</h2>
          <div className="mt-8">
            {faq.map((f) => <Faq key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Prêt à héberger votre projet ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/80">
            Parlez-nous de votre besoin : site, email, serveur ou migration. Réponse sous 24 h.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1F33] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6">
          <span className="font-black text-white">Nova<span className="text-accent">Stack</span> <span className="font-normal text-slate-400">Hébergement</span></span>
          <div className="flex items-center gap-5">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
            <a href={ESPACE_CLIENT} target="_blank" rel="noreferrer" className="hover:text-white">Espace client</a>
          </div>
          <span>© {new Date().getFullYear()} NovaStack Africa</span>
        </div>
      </footer>
    </div>
  );
}
