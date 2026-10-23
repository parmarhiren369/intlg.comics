import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import marketingImage from "../../assets/images/marketing-team.webp";
import servicesHero from "../../assets/images/services-hero.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Briefcase,
  Brain,
  Wrench,
  Headphones,
  Target,
  TrendingUp,
  Database,
  Megaphone,
  Clock,
  Globe2,
  Award,
  Sparkles,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Link } from "@tanstack/react-router";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";

type Service = {
  key: string;
  title: string;
  short: string;
  icon: LucideIcon;
  bullets: string[];
  tint: string;
};

type Category = {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "recruitment",
    label: "Recruitment",
    eyebrow: "Talent operations",
    headline: "Hire faster. Hire smarter.",
    services: [
      {
        key: "rpo",
        title: "RPO",
        short: `End-to-end Recruitment Process Outsourcing designed to help organizations attract, engage, and hire top talent faster. Our dedicated recruitment specialists integrate with your hiring teams, streamline sourcing, screening, and interview coordination, while ensuring a consistent candidate experience and measurable hiring outcomes.

Key Capabilities

• Dedicated recruitment teams aligned to your hiring goals
• AI-powered sourcing and talent mapping
• Resume screening and candidate assessment
• Interview scheduling and stakeholder coordination
• Employer branding and candidate engagement
• Offer management and onboarding support`,
        icon: Users,
        tint: "from-amber-400/20 to-amber-200/5",
        bullets: [
          "Requisition to onboarding in a single pipeline",
          "Dedicated sourcing pods per role family",
          "ATS, EVP & employer-brand alignment",
        ],
      },
    ],
  },
  {
    id: "growth",
    label: "Business Growth",
    eyebrow: "Revenue engines",
    headline: "Pipeline, meetings, deals — on repeat.",
    services: [
      {
        key: "lead",
        title: "Lead Generation",
        short: "Multi-channel B2B pipeline built with intent data and human precision.",
        icon: Target,
        tint: "from-blue-400/20 to-blue-200/5",
        bullets: [
          "ICP modeling & TAM enrichment",
          "Email, LinkedIn & voice orchestration",
          "SQL delivery with dashboards",
        ],
      },
      {
        key: "bd",
        title: "Business Development",
        short: "Named-account BD teams that open doors and progress complex deals.",
        icon: TrendingUp,
        tint: "from-emerald-400/20 to-emerald-200/5",
        bullets: [
          "Executive outreach & meeting-setting",
          "Partner & channel expansion",
          "Deal-desk & proposal support",
        ],
      },
    ],
  },
  {
    id: "data",
    label: "Data & CRM",
    eyebrow: "The source of truth",
    headline: "Clean data. Compounding advantage.",
    services: [
      {
        key: "db",
        title: "Database Management",
        short: "Enrichment, hygiene, dedupe and governance for enterprise CRMs.",
        icon: Database,
        tint: "from-violet-400/20 to-violet-200/5",
        bullets: [
          "24×7 CRM & MDM operations",
          "Enrichment against 50+ providers",
          "Compliance-first data lineage",
        ],
      },
      {
        key: "kpo",
        title: "KPO",
        short: "Analyst-grade knowledge process outsourcing for research and insight.",
        icon: Brain,
        tint: "from-rose-400/20 to-rose-200/5",
        bullets: [
          "Market, competitive & financial research",
          "Domain-specialist analyst pods",
          "Delivery in your templates & tools",
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    eyebrow: "Attention → action",
    headline: "Digital Solutions. Built for Growth..",
    services: [
      {
        key: "smm",
        title: "Social Media & Digital Marketing",
        short: `We build high-performing digital marketing programs that increase brand visibility, generate qualified leads, and accelerate business growth through integrated organic and paid strategies.

Key Capabilities

• Social Media Strategy & Management
• Search Engine Optimization (SEO)
• Paid Search & Social Advertising
• Content Marketing & Copywriting
• Email Marketing Automation
• Analytics, Reporting & Performance Optimization`,
        icon: Megaphone,
        tint: "from-fuchsia-400/20 to-fuchsia-200/5",
        bullets: [
          "Brand-safe content studios",
          "Paid social, SEM & SEO squads",
          "Attribution & LTV dashboards",
        ],
      },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    eyebrow: "Run the operating layer",
    headline: "Support that never sleeps.",
    services: [
      {
        key: "bpo",
        title: "BPO",
        short: "Contact-center, back-office and transactional operations at global scale.",
        icon: Briefcase,
        tint: "from-cyan-400/20 to-cyan-200/5",
        bullets: [
          "Omnichannel voice, chat & email",
          "COPC-aligned quality frameworks",
          "Workforce management maturity",
        ],
      },
      {
        key: "mro",
        title: "MRO",
        short: "Maintenance, repair & operations catalog and procurement support.",
        icon: Wrench,
        tint: "from-orange-400/20 to-orange-200/5",
        bullets: [
          "Item master enrichment & taxonomy",
          "Supplier normalization",
          "Spend analytics & sourcing support",
        ],
      },
      {
        key: "tech",
        title: "Technical Support",
        short: "L1–L3 technical support with product-grade engineering rigor.",
        icon: Headphones,
        tint: "from-sky-400/20 to-sky-200/5",
        bullets: [
          "24× 7× 365 follow-the-sun coverage",
          "Knowledge-base & CSAT loop",
          "Escalation to engineering swarms",
        ],
      },
    ],
  },
];

const highlights = [
  { icon: Award, k: "20+", label: "Years of excellence", hint: "Trusted since 2005" },
  { icon: Clock,k: "24 × 7 × 365", label: "Always-on operations", hint: "Follow-the-sun delivery" },
  { icon: Globe2, k: "3", label: "Continents", hint: "Global delivery centers" },
  { icon: Sparkles, k: "98%", label: "Client retention", hint: "Outcome-first partnerships" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const categoryBackgrounds: Record<string, string> = {
  growth:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  data: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
  marketing:
    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1600&q=80",
  technology:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
};

const categoryFeature: Record<string, { image: string; caption: string; sub: string }> = {
  recruitment: {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    caption: "Global sourcing pods, crafted for velocity",
    sub: "Requisition to onboarding in a single pipeline",
  },
  growth: {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
    caption: "Named-account BD teams that progress complex deals",
    sub: "Executive outreach · Partner expansion · Deal-desk",
  },
  marketing: {
    image: marketingImage,
    caption: "Always-on marketing teams that build brands and drive demand.",
    sub: "Social Media · SEO · Paid Media · Content Strategy",
  },
};

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3252773/3252773-hd_1920_1080_25fps.mp4";

// Maps each service card's `key` to the route it should navigate to.
// Add new entries here as you build out more service pages.
const SERVICE_ROUTES: Record<string, string> = {
  lead: "/lead-generation",
  bd: "/business-development",
  smm: "/services/social-media-digital-marketing",
};

// Height of the main site Nav (px). Adjust if your Nav's actual height differs.
const MAIN_NAV_HEIGHT = 80;
// Extra breathing room between the fixed nav and the top of whatever
// section is scrolled into view (applies whether or not the category
// pill bar is currently showing).
const SCROLL_BREATHING_ROOM = 24;

export function Services() {
  const [categorySelected, setCategorySelected] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // If a category was clicked (bar hidden), bring the bar back once the
  // user scrolls back up near the top of the page — whether that's via
  // the "scroll to top" button or manual scrolling.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setCategorySelected(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Hide the pill bar first. It's `fixed`, so it never occupies space in
    // the document flow — hiding it does NOT shift where `el` sits. That
    // means we only ever need to offset by the main Nav's real height, not
    // a hardcoded guess, and not the (now irrelevant) bar height. This is
    // what prevents the leftover blank gap after the bar disappears.
    setCategorySelected(true);

    const navEl = document.querySelector("nav") as HTMLElement | null;
    const headerHeight = navEl?.getBoundingClientRect().height || MAIN_NAV_HEIGHT;

    const y =
      el.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div aria-hidden className="absolute inset-0 -z-10">
          <img
            src={servicesHero}
            alt="Services"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/65 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
          <motion.div
            style={{ y: yOrb }}
            className="absolute -right-32 top-1/3 h-[560px] w-[560px] rounded-full opacity-25 blur-3xl"
          >
            <div
              className="h-full w-full rounded-full"
              style={{ background: "radial-gradient(circle, var(--navy) 0%, transparent 70%)" }}
            />
          </motion.div>
        </div>

        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-4xl"
          >
            <h1 className="mt-6 text-4xl leading-[1.05] text-navy-deep sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Several service lines.{" "}
              <span className="text-[#EE8021]">
                One operating partner.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#071330] text-justify">
              From talent and growth to data, marketing and technology — Legacy engineers the outsourced
              operating layer that lets enterprises move faster without breaking.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#catalog"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-(--shadow-gold) transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Explore the catalog
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Talk to an expert
              </Link>
            </div>
          </motion.div>

          {/* Highlight rail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease }}
            className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-(--shadow-elegant)"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#377589] text-white">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-semibold text-navy">{h.k}</div>
                </div>
                <div className="mt-3 text-sm font-medium text-navy">{h.label}</div>
                <div className="text-xs text-muted-foreground">{h.hint}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      {/*
        Fixed, and only rendered until the user picks a category — once they
        do, it unmounts entirely so it never lingers over content. Because it
        is `fixed`, unmounting it doesn't reflow anything below, so there's
        no jump; the scroll offset in `scrollToCategory` already accounts for
        this by only ever measuring the real Nav height.
      */}
      {!categorySelected && (
        <section
          id="catalog"
          className="sticky top-[80px] z-40 border-y border-border bg-white shadow-sm"
        >
          <div className={`flex min-h-[68px] items-center gap-2 overflow-x-auto py-3 ${PAGE_X}`}>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollToCategory(c.id)}
                className="whitespace-nowrap rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy/80 transition-colors hover:border-gold hover:bg-gold/10 hover:text-navy"
              >
                {c.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      {categories.map((cat, idx) => (
        <CategoryBlock key={cat.id} category={cat} index={idx} />
      ))}

      {/* WHY LEGACY */}
      <section className="relative overflow-hidden bg-background py-28">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-black">Why Legacy</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-black sm:text-5xl">
              Two decades of quiet, relentless execution.
            </h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-black text-justify">
              We're the operators behind the operators — measured, methodical and available every hour of
              every day the business needs us.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 xl:gap-8">
            {[
              {
                icon: Award,
                title: "20+ years of created rigor",
                body: "A partner that has scaled operations across cycles, geographies and platforms since 2005.",
              },
              {
                icon: Clock,
                title: "24×7×365 support",
                body: "True follow-the-sun coverage with governance, escalation and continuity you can audit.",
              },
              {
                icon: Globe2,
                title: "Global delivery",
                body: "Three continents, native-language coverage and regulatory fluency for regulated industries.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white p-8 shadow-(--shadow-elegant) transition-all hover:-translate-y-1 hover:border-gold"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#377589] text-white">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-sans font-semibold text-xl text-navy-deep">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-justify">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white"
        />
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">Ready when you are</div>
                <h3 className="mt-3 max-w-xl font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
                  Design the outsourced operating layer for your next chapter.
                </h3>
                <p className="mt-4 max-w-lg text-sm text-muted-foreground text-justify">
                  A 30-minute working session with our solution architects — no slides, just a look at what
                  we'd change first.
                </p>
              </div>
              <a
                href="https://calendly.com/raj-kapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-(--shadow-gold) transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Book a working session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className={`flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row ${PAGE_X}`}>
          <div>© {new Date().getFullYear()} Legacy Digitronics Pvt. Ltd. All rights reserved.</div>
          
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

function CategoryBlock({ category, index }: { category: Category; index: number }) {
  const alt = index % 2 === 1;
  return (
    <section
      id={category.id}
      className={`relative isolate overflow-hidden pb-24 ${
        alt ? "bg-slate-50/60" : "bg-background"
      }`}
      style={{
        // Real padding (not scroll-margin) so the space is part of the
        // section's own background — it reads as intentional breathing
        // room, not a blank gap. Covers both cases: the pill bar sitting
        // fixed on top of this section pre-selection, and general
        // clearance under the main Nav once the bar is gone.
        paddingTop: MAIN_NAV_HEIGHT + SCROLL_BREATHING_ROOM,
        scrollMarginTop: MAIN_NAV_HEIGHT,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100"
      />
      <div className={PAGE_X}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-[#377589]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#377589] shadow-sm">
              {category.label}
            </div>

            <h2 className="max-w-2xl font-display text-4xl leading-tight text-navy sm:text-5xl">
              {category.headline}
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start">
          <div
            className={`flex-1 grid gap-6 ${
              category.services.length === 1
                ? "grid-cols-1"
                : category.services.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 2xl:grid-cols-3"
            }`}
          >
            {category.services.map((s, i) => (
              <ServiceCard key={s.key} service={s} delay={i * 0.08} />
            ))}
          </div>

          {categoryFeature[category.id] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="relative w-full lg:w-[42%] xl:w-[40%] 2xl:w-[48%] aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-(--shadow-elegant) self-start"
            >
              <img
                src={categoryFeature[category.id].image}
                alt={categoryFeature[category.id].caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function TitleWithAmpersand({ title }: { title: string }) {
  const parts = title.split("&");
  if (parts.length === 1) return <>{title}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="mx-1 font-serif italic text-navy/70">&</span>
          )}
        </span>
      ))}
    </>
  );
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const href = SERVICE_ROUTES[service.key] ?? "#";
  return (
    <Link to={href} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay, duration: 0.6, ease }}
        className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-(--shadow-elegant)"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        />

        <div className="flex items-start justify-between">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#377589] text-white shadow-(--shadow-elegant) transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
            <Icon className="h-6 w-6" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-navy/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
        </div>

        <h3 className="mt-6 font-display text-2xl text-navy"><TitleWithAmpersand title={service.title} /></h3>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground text-justify">{service.short}</p>

        <div className="mt-auto">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-navy/15 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:border-gold hover:bg-gold/10"
            aria-expanded={open}
          >
            {open ? "Show less" : "Learn more"}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-navy/80">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
}
