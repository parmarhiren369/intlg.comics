import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import marketingTechImage from "@/assets/images/exploring-social-media-technology.webp";
import { PAGE_X } from "@/lib/utils";

export const Route = createFileRoute("/services/social-media-digital-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media & Digital Marketing — Legacy Digitronics" },
      {
        name: "description",
        content:
          "High-performing digital marketing programs — social strategy, SEO, paid media, content, email automation and analytics — engineered to grow your brand and pipeline.",
      },
    ],
  }),
  component: SocialMediaDigitalMarketing,
});

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    title: "Social Media Strategy & Management",
    description:
      "Always-on content calendars, community management and platform-native creative that build brand presence where your audience actually spends time.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Technical audits, on-page optimization and content strategy that compound organic visibility instead of renting it.",
  },
  {
    title: "Paid Search & Social Advertising",
    description:
      "Full-funnel paid media across search and social, built around clear CPA/ROAS targets and continuous creative testing.",
  },
  {
    title: "Content Marketing & Copywriting",
    description:
      "Brand-safe content studios producing everything from blog and email copy to campaign creative, on-brief and on-brand.",
  },
  {
    title: "Email Marketing Automation",
    description:
      "Lifecycle and nurture flows that turn one-time visitors into repeat customers, built on the platforms you already use.",
  },
  {
    title: "Analytics, Reporting & Performance Optimization",
    description:
      "Attribution and LTV dashboards that show exactly what's working, so budget moves toward what performs.",
  },
];

const stats = [
  { value: "150+", label: "Global Clients Served" },
  { value: "98%", label: "Client Retention" },
  { value: "24×7", label: "Campaign Monitoring" },
];

function SocialMediaDigitalMarketing() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-background">
          <div
            aria-hidden
            className="absolute -right-40 top-1/3 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--navy) 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -left-32 -bottom-20 h-[480px] w-[480px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
          />
        </div>

        <div className={PAGE_X}>
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT: content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-navy/60 transition-colors hover:text-gold"
              >
                ← All Services
              </Link>

              <div className="mt-6 flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-navy shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Attention → Action
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] text-navy-deep sm:text-5xl md:text-6xl lg:text-7xl">
                Digital growth,{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                >
                  engineered.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/80">
                We build high-performing digital marketing programs that increase brand visibility,
                generate qualified leads, and accelerate business growth through integrated organic
                and paid strategies.
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
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Explore Other Services
                </Link>
              </div>

              {/* STATS ROW */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease }}
                className="mt-16 grid grid-cols-1 gap-4 max-w-xl sm:grid-cols-3"
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm backdrop-blur-xl"
                  >
                    <p className="text-3xl font-bold text-navy">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: image */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-30 blur-2xl"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              />
              <div
                className="overflow-hidden rounded-3xl border border-white/60"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={marketingTechImage}
                  alt="Exploring social media and digital marketing technology"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Key Capabilities</p>
            <h2 className="mt-4 text-4xl leading-tight text-navy sm:text-5xl">
              Everything your growth engine needs.
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 6) * 0.06, duration: 0.6, ease }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-(--shadow-elegant)"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg text-navy">{cap.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LEGACY */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className={PAGE_X}>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Why Legacy</p>
            <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-4xl">
              A marketing team that reports to your pipeline, not vanity metrics.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Integrated, not siloed",
                body: "Organic and paid work together under one strategy, not competing budgets and mixed messaging.",
              },
              {
                title: "Built on your platforms",
                body: "We work inside the tools you already use — no rip-and-replace, no vendor lock-in.",
              },
              {
                title: "Accountable to outcomes",
                body: "Every campaign ties back to attribution and LTV reporting you can actually act on.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="rounded-2xl border border-border bg-card p-8"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <h3 className="text-xl text-navy-deep">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className={PAGE_X}>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-10 backdrop-blur-xl md:p-14"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-gold">Ready to grow?</div>
                <h3 className="mt-3 max-w-xl text-3xl leading-tight text-navy-deep sm:text-4xl">
                  Let's build a marketing engine that compounds.
                </h3>
              </div>
              <Link
                to="/"
                hash="contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <div className="tracking-wide">Crafted with precision · Since 2004</div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
