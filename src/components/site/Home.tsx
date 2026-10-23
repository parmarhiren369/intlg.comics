import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, Globe2, TrendingUp } from "lucide-react";
import { Nav } from "./Nav";
import { CountUp } from "./Stat";
import bridgeUrl from "@/assets/golden-gate.avif";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import growthIllustration from "@/assets/growth-illustration.png";
import { scrollToHash, PAGE_X } from "@/lib/utils";
import { useEffect } from "react";
import { ScrollToTop } from "./ScrollToTop";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: 20, suffix: "+", label: "Years of excellence" },
  { value: 40000, suffix: "+", label: "projects delivered" },
  { value: 2, suffix: "M+", label: "tasks delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Enterprise-grade rigor",
    body: "ISO-aligned processes, SOC-ready controls and dedicated governance for every engagement.",
  },
  {
    icon: Globe2,
    title: "Global delivery",
    body: "Follow-the-sun operations across three continents, tuned to your regulatory geography.",
  },
  {
    icon: TrendingUp,
    title: "Outcome economics",
    body: "Commercial models tied to your KPIs — cost, conversion, quality, time-to-value.",
  },
];

export function Home() {
  const testimonials = [
    {
      quote: "I've been working with the Legacy Group since my company got started.",
      name: "Kevin Saylor",
      designation: "CEO at Financial Recruiters International",
    },
    {
      quote: "I've worked with the Legacy Group at Raj for over seven years.",
      name: "Gary Boza",
      designation: "CEO of WorldBridge Partners",
    },
    {
      quote:
        "Along the way, someone recommended I reach out to Legacy Group International — LGI — and that turned out to be great advice.",
      name: "Karel Lukas",
      designation: "Head of the Trevi Group",
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Bright background */}
        <div className="absolute inset-0 -z-10 bg-background">
          <div
            aria-hidden
            className="absolute -right-40 top-1/2 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--navy) 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -left-32 -bottom-32 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--navy-deep) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.85),transparent_65%)]" />
        </div>

        <div
          className={`grid grid-cols-1 items-center gap-12 pt-28 pb-12 lg:grid-cols-[1fr_1fr]
2xl:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-36 xl:gap-24
2xl:gap-32 ${PAGE_X}`}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="w-full max-w-[760px] xl:max-w-[820px] 2xl:max-w-[900px]"
          >
            <motion.h1
              variants={fadeUp}
              className="mt-6
text-4xl
leading-[0.98]
text-navy-deep
sm:text-5xl
md:text-6xl
lg:text-6xl
xl:text-7xl
2xl:text-[6rem]
3xl:text-[7rem]"
            >
              Bridging enterprises to their{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                next chapter
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg xl:text-xl"
            >
              20+ years of outsourcing excellence since 2005 — from RPO and BPO to KPO, MRO,
              technical support and digital growth — for the world's most demanding organizations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="https://calendly.com/raj-kapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-(--shadow-gold) transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Explore our services
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60">
              <img
                src={bridgeUrl}
                alt="Golden Gate Bridge — bridging enterprises"
                className="
w-full
rounded-[28px]
object-cover
h-[260px]
sm:h-[360px]
md:h-[460px]
lg:h-[560px]
xl:h-[640px]
2xl:h-[760px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent p-6">
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold"></div>
                <div className="mt-1 font-display text-xl text-white"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className={`pt-10 pb-24 lg:pt-14 ${PAGE_X}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-(--shadow-elegant) sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative bg-card px-6 py-10 transition-colors hover:bg-navy"
              >
                <div className="text-3xl font-semibold text-navy transition-colors group-hover:text-gold sm:text-4xl xl:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-white/80">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="about" className="relative scroll-mt-28 py-28 lg:scroll-mt-32">
        <div className={PAGE_X}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">Who we are</div>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
                An outsourcing partner built for growth, driven by quality
              </h2>
              <p className="mt-6 text-lg font-medium leading-relaxed text-navy/80">
                For nearly two decades, Legacy Digitronics has quietly powered the back-offices,
                contact centers and growth engines of Fortune enterprises. We are the operators
                behind the operators.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Learn our story
                <ArrowRight className="h-4 w-4" />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 overflow-hidden rounded-2xl shadow-(--shadow-elegant) sm:col-span-4"
                >
                  <img
                    src={story1}
                    alt="Legacy Digitronics leadership collaborating"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-56"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="col-span-2 overflow-hidden rounded-2xl shadow-(--shadow-elegant) sm:col-span-2"
                >
                  <img
                    src={story3}
                    alt="Enterprise partnership handshake"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-56"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="col-span-2 overflow-hidden rounded-2xl shadow-(--shadow-elegant) sm:col-span-6"
                >
                  <img
                    src={story2}
                    alt="Global operations delivery center"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-64"
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative isolate min-h-[224px] overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-(--shadow-elegant)"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundImage: "var(--gradient-gold)", transformOrigin: "left" }}
                  />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#377589] text-white">
                    <p.icon className="h-5 w-5" />
                  </div>

                  <h3 className="relative mt-6 text-xl text-navy">{p.title}</h3>

                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative isolate flex min-h-[224px] items-center justify-center overflow-visible rounded-2xl border border-border bg-card p-6"
              >
                <img
                  src={growthIllustration}
                  alt="Global growth partnership illustration"
                  loading="lazy"
                  className="h-[190px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl p-8 text-white sm:col-span-2"
                style={{
                  background: "linear-gradient(135deg, #377589, #377589)",
                }}
              >
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.28em] text-white">
                    Since 2005 · 20+ Years
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {/* Previous */}
                    <button
                      type="button"
                      onClick={previousTestimonial}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>

                    {/* Testimonial */}
                    <div className="min-w-0 flex-1 text-center">
                      <p
                        key={activeTestimonial}
                        className="font-display text-2xl leading-snug text-white"
                      >
                        "{testimonials[activeTestimonial].quote}"
                      </p>

                      <div className="mt-6 text-center">
                        <div className="text-sm font-semibold text-white">
                          — {testimonials[activeTestimonial].name}
                        </div>

                        <div className="mt-1 text-sm text-white/70">
                          {testimonials[activeTestimonial].designation}
                        </div>
                      </div>
                    </div>
                    {/* Next */}
                    <button
                      type="button"
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Slide indicators */}
                  <div className="mt-6 flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                        className={`h-2 w-2 rounded-full transition-all ${
                          activeTestimonial === index ? "bg-[#EE8021]" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        id="contact"
        className="relative scroll-mt-28 overflow-hidden bg-background py-14 lg:scroll-mt-32"
      >
        <div
          className={`flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center ${PAGE_X}`}
        >
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#EE7F23]">
              Ready when you are
            </div>
            <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-black sm:text-4xl">
              Let's architect the next decade of your operations.
            </h3>
          </div>
          <a
            href="https://calendly.com/raj-kapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-(--shadow-gold) transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            Speak with our team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
