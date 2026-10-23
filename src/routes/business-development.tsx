import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PAGE_X } from "@/lib/utils";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";

export const Route = createFileRoute("/business-development")({
  component: BusinessDevelopment,
});

// Lightweight count-up, no external dependency required.
function useCountUp(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return value;
}

function DealsClosedCard() {
  const [inView, setInView] = useState(false);
  const count = useCountUp(180, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors duration-500 hover:border-gold/60"
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      />
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      />

      <p className="relative text-sm font-medium text-muted-foreground">Complex Deals Progressed</p>

      <h3 className="relative mt-2 font-sans text-3xl font-bold text-gold sm:text-4xl lg:text-5xl">
        {count}+
      </h3>

      <p className="relative mt-2 text-sm text-muted-foreground">
        Enterprise opportunities advanced this year
      </p>
    </motion.div>
  );
}

const processSteps = [
  {
    step: "01",
    title: "Named-Account Mapping",
    description:
      "We identify and prioritize the accounts that matter most, mapping org charts and buying committees before the first outreach.",
  },
  {
    step: "02",
    title: "Door-Opening Outreach",
    description:
      "Senior BD reps engage decision-makers directly — no scripts, no spray-and-pray, just relevant conversations that earn a meeting.",
  },
  {
    step: "03",
    title: "Deal Progression",
    description:
      "We don't stop at the intro call. Our team stays embedded through discovery, stakeholder alignment, and negotiation to keep deals moving.",
  },
  {
    step: "04",
    title: "Handoff and Close Support",
    description:
      "Deals are handed to your closers fully briefed, with a documented history of every touchpoint and objection along the way.",
  },
];

const stats = [
  { label: "Named Accounts Engaged", value: "500+" },
  { label: "Avg. Deal Cycle Reduction", value: "31%" },
  { label: "Stakeholders Mapped / Deal", value: "6.2" },
];

function BusinessDevelopment() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <Nav />
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-navy/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[140px]" />

        <div
          className={`relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 ${PAGE_X}`}
        >
          {/* LEFT */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              Business Development
            </p>

            <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Named accounts.
              <span className="block text-gold">Open doors.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl">
              Dedicated BD teams that target your highest-value accounts, build relationships with
              real decision-makers, and progress complex, multi-stakeholder deals — not just book
              meetings.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3">
              <div className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium text-gold sm:text-sm">
                ✓ Named-Account Targeting
              </div>
              <div className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium text-gold sm:text-sm">
                ✓ Multi-Stakeholder Deal Management
              </div>
              <div className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium text-gold sm:text-sm">
                ✓ Senior BD Reps, Not Bots
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
              <button
                type="button"
                className="rounded-full px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:-translate-y-1 sm:px-8 sm:py-4 sm:text-base"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Talk to Our BD Team
              </button>
              <button
                type="button"
                className="rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold hover:text-gold sm:px-8 sm:py-4 sm:text-base"
              >
                See Our Playbook
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center">
            <div className="grid w-full max-w-md gap-5">
              <DealsClosedCard />

              <div className="grid grid-cols-2 gap-5">
                <div
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  />
                  <p className="relative text-sm text-muted-foreground">Named Accounts</p>
                  <h4 className="relative mt-3 font-sans text-3xl font-bold text-foreground">
                    500+
                  </h4>
                </div>

                <div
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  />
                  <p className="relative text-sm text-muted-foreground">Avg. Cycle Time</p>
                  <h4 className="relative mt-3 font-sans text-3xl font-bold text-foreground">
                    -31%
                  </h4>
                </div>
              </div>

              <div
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Stakeholder Alignment</span>
                  <span className="font-sans font-semibold text-gold">94%</span>
                </div>

                <div className="relative mt-4 h-3 rounded-full bg-secondary">
                  <div
                    className="h-3 w-[94%] rounded-full"
                    style={{ background: "var(--gradient-gold)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-secondary/50 py-12">
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-3 ${PAGE_X}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-sans text-3xl font-bold text-navy sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={`py-24 ${PAGE_X}`}>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
          How It Works
        </p>
        <h2 className="max-w-2xl font-display text-4xl leading-tight text-foreground lg:text-5xl">
          A process built for complex, multi-stakeholder deals.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative isolate overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              />
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              />

              <span className="relative font-sans text-3xl font-bold text-gold-soft">
                {item.step}
              </span>
              <h3 className="relative mt-4 text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="relative mt-3 leading-7 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-navy/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/15 blur-[140px]" />
        <div className={`relative z-10 text-center ${PAGE_X}`}>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-4xl text-foreground lg:text-5xl">
              Ready to open doors that stay open?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Let's talk about which named accounts your BD team should be chasing next quarter.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full px-8 py-4 font-semibold text-navy-deep transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default BusinessDevelopment;
