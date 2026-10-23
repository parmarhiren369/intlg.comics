import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Globe } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { getIndustryBySlug, industries } from "@/data/industries";
import { PAGE_X } from "@/lib/utils";

export const Route = createFileRoute("/industries/$slug")({
  component: IndustryPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function IndustryPage() {
  const { slug } = Route.useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Nav />
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Industry not found</p>
          <h1 className="mt-4 font-sans text-3xl text-navy-deep sm:text-4xl">
            We couldn't find that industry.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            It may have moved, or the link might be off. Browse the full list of industries we serve
            below.
          </p>
          <Link
            to="/industries"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
            style={{
              backgroundImage: "var(--gradient-gold)",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            View all industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
        <ScrollToTop />
      </div>
    );
  }

  // Other industries to cross-link at the bottom, excluding the current one.
  const related = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img
            src={industry.image}
            alt={industry.name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gray-600 transition-colors hover:text-gold-soft"
            >
              ← All Industries
            </Link>

            <h1 className="mt-6 max-w-3xl font-sans text-4xl leading-[1.08] text-[#071330] sm:text-5xl md:text-6xl lg:text-7xl">
              {industry.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              {industry.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#071330]/20 px-7 py-3.5 text-sm font-semibold text-[#071330] transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-gold">What we do</p>
            <h2 className="mt-4 font-sans text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              Built for {industry.name}
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industry.focusAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#377589] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="pt-1.5 text-base leading-relaxed text-foreground">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LEGACY (shared across all industry pages) */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className={PAGE_X}>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                k: "19+",
                icon: CheckCircle2,
                label: "Years of engineered rigor",
                body: "A partner that has scaled operations across cycles, geographies and platforms since 2004.",
              },
              {
                k: "24x7x365",
                icon: Clock3,
                label: "Always-on delivery",
                body: "True follow-the-sun coverage with governance and escalation you can audit.",
              },
              {
                k: "3",
                icon: Globe,
                label: "Continents",
                body: "Native-language coverage and regulatory fluency across global delivery centers.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="rounded-2xl border border-border bg-card p-8"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#377589]">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <p className="font-sans text-3xl font-bold text-navy sm:text-4xl">{f.k}</p>
                <p className="mt-3 text-sm font-semibold text-navy">{f.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES */}
      <section className="py-24">
        <div className={PAGE_X}>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Explore more</p>
          <h2 className="mt-4 font-sans text-3xl leading-tight text-navy sm:text-4xl">
            Other industries we serve
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((ind) => (
              <Link
                key={ind.slug}
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-sans text-base font-semibold text-navy">{ind.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className={PAGE_X}>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-10 backdrop-blur-xl md:p-14"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-gold">
                  Ready to talk {industry.name.toLowerCase()}?
                </div>
                <h3 className="mt-3 max-w-xl font-sans text-3xl leading-tight text-navy-deep sm:text-4xl">
                  Let's design the right operating layer for your team.
                </h3>
              </div>
              <Link
                to="/"
                hash="contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div
          className={`flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left ${PAGE_X}`}
        >
          <div>© {new Date().getFullYear()} Legacy Digitronics Pvt. Ltd. All rights reserved.</div>
          <div className="tracking-wide">Crafted with precision · Since 2005</div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
