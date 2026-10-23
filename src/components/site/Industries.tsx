import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { ScrollToTop } from "./ScrollToTop";
import { industries } from "@/data/industries";
import { PAGE_X } from "@/lib/utils";
import industriesHero from "@/assets/industries-hero.jpg";

const ease = [0.22, 1, 0.36, 1];

// Keep a stable, alphabetically-sorted copy so the grid always renders A → Z
// regardless of the order items are defined in the data file.
const sortedIndustries = [...industries].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export function Industries() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-background">
          <div
            aria-hidden
            className="absolute -right-40 top-1/2 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--navy) 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -left-32 -bottom-32 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
          />
        </div>

        <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 ${PAGE_X}`}>
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="mt-6 text-4xl leading-[1.05] text-navy-deep sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
            >
              Industries we{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                power
              </span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-justify"
            >
              At Legacy India, we serve a range of industries with expertise and commitment. From
              recruitment and market research outsourcing to business process support, we tailor our
              services to meet the specific needs of each sector. With years of experience and a deep
              understanding of industry demands, we help organizations streamline processes, improve
              performance, and achieve growth. Explore how our specialized solutions can benefit your
              industry.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60">
              <img
                src={industriesHero}
                alt="Industries we power"
                className="h-[260px] w-full rounded-[28px] object-cover sm:h-[340px] md:h-[400px] lg:h-[460px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID (alphabetically sorted A → Z) */}
      <section className="pb-28">
        <div className={PAGE_X}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {sortedIndustries.map((ind, i) => (
              <Link
                key={ind.slug}
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 6) * 0.05, duration: 0.6, ease }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-(--shadow-elegant)"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(255,255,255,0.95))",
                    }}
                  />
                  <div className="relative overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  </div>
                  <div className="relative flex items-center justify-between p-6">
                    <h3 className="font-sans text-lg font-semibold tracking-tight text-navy">{ind.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-navy/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED ACROSS INDUSTRIES */}
      <section className="bg-white py-20">
        <div className={PAGE_X}>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#EE7F23]">
              Trusted Across Industries
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#071330] lg:text-5xl">
              Delivering Results Across Every Sector
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-justify">
              From engineering and manufacturing to healthcare, finance,
              energy and technology, Legacy Group International helps
              organizations build stronger teams and accelerate business growth.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-6 lg:p-8">
              <h3 className="font-sans text-3xl font-bold text-[#071330] sm:text-4xl lg:text-5xl">
  20+
</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-gray-500 sm:tracking-[0.18em] lg:text-sm lg:tracking-[0.25em]">Industries</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-6 lg:p-8">
              <h3 className="text-3xl font-sans text-[#071330] sm:text-4xl lg:text-5xl">150+</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-gray-500 sm:tracking-[0.18em] lg:text-sm lg:tracking-[0.25em]">Global Clients</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-6 lg:p-8">
              <h3 className="text-3xl font-sans text-[#071330] sm:text-4xl lg:text-5xl">98%</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-gray-500 sm:tracking-[0.18em] lg:text-sm lg:tracking-[0.25em]">Client Retention</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-6 lg:p-8">
              <h3 className="text-3xl font-sans text-[#071330] sm:text-4xl lg:text-5xl">30+</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-gray-500 sm:tracking-[0.18em] lg:text-sm lg:tracking-[0.25em]">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLING INDUSTRIES (alphabetically sorted A → Z) */}
      <section className="overflow-hidden border-y border-gray-200 bg-[#377589] py-6">
        <div className="flex whitespace-nowrap">
          <div className="animate-[marquee_28s_linear_infinite] flex items-center gap-12 text-lg font-semibold uppercase tracking-[0.25em] text-white">
            <span>Automotive</span>
            <span className="text-white">✦</span>

            <span>Chemical</span>
            <span className="text-white">✦</span>

            <span>Construction</span>
            <span className="text-white">✦</span>

            <span>Cybersecurity</span>
            <span className="text-white">✦</span>

            <span>Energy</span>
            <span className="text-white">✦</span>

            <span>Engineering</span>
            <span className="text-white">✦</span>

            <span>Finance</span>
            <span className="text-white">✦</span>

            <span>Healthcare</span>
            <span className="text-white">✦</span>

            <span>Insurance</span>
            <span className="text-white">✦</span>

            <span>Legal</span>
            <span className="text-white">✦</span>

            <span>Manufacturing</span>
            <span className="text-white">✦</span>

            <span>Oil & Gas</span>
            <span className="text-white">✦</span>

            <span>Printing</span>
            <span className="text-white">✦</span>

            <span>Sales</span>
            <span className="text-white">✦</span>

            <span>Service Industry</span>
            <span className="text-white">✦</span>

            <span>Solar Energy</span>
            <span className="text-white">✦</span>

            <span>Steel</span>
            <span className="text-white">✦</span>

            {/* Duplicate for seamless looping */}
            <span>Automotive</span>
            <span className="text-white">✦</span>

            <span>Chemical</span>
            <span className="text-white">✦</span>

            <span>Construction</span>
            <span className="text-white">✦</span>

            <span>Cybersecurity</span>
            <span className="text-white">✦</span>

            <span>Energy</span>
            <span className="text-white">✦</span>

            <span>Engineering</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className={PAGE_X}>
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-10 shadow-(--shadow-elegant) backdrop-blur-xl md:p-14">
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">
                  Don't see your industry?
                </div>
                <h3 className="mt-3 max-w-xl font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
                  We adapt our operating layer to your sector.
                </h3>
              </div>
              <a
  href="https://calendly.com/raj-kapoor"
  target="_blank"
  rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-(--shadow-gold) transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
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
