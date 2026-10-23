import { Nav } from "./Nav";
import { ScrollToTop } from "./ScrollToTop";
import { motion } from "framer-motion";
import leadVideo from "@/assets/videos/lead-generation.mp4";
const butchVideo = leadVideo;
const client1Video = leadVideo;
const client2Video = leadVideo;

import heroImage from "@/assets/images/testimonial.webp";
import { ArrowRight } from "lucide-react";
import { CountUp } from "./Stat";
import { PAGE_X } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.7,
      ease,
    },
  }),
};

const testimonials = [
  {
    name: "Butch Sweeder",
    company: "Legacy Group International",
    quote: "Legacy became an extension of our own team.",
    video: butchVideo,
  },

  {
    name: "Kevin Sailor",
    company: "CEO at Financial Recruiters International",
    quote: "Outstanding service and exceptional communication.",
    video: client1Video,
  },

  {
    name: "Lauren Kondic",
    company: "Research Manager at World Bridge Partners",
    quote: "A trusted long-term outsourcing partner.",
    video: client2Video,
  },
];

export function Testimonials() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden w-full">
        <div className="absolute inset-0 -z-10 bg-background">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle,var(--navy) 0%,transparent 70%)",
            }}
          />
        </div>

        <div
          className={`grid grid-cols-1 items-center gap-16 pt-32 pb-24 lg:grid-cols-2 lg:gap-10 xl:gap-16 ${PAGE_X}`}
        >
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl text-navy-deep sm:text-5xl md:text-6xl"
            >
              Real Experiences.
              <br />
              Real Results.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-justify"
            >
              Hear directly from organizations that have partnered with Legacy Group International
              for recruitment, research, technology support, and business process outsourcing.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#success-stories"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                Watch Stories
                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://calendly.com/raj-kapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-navy px-7 py-3.5 font-semibold transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Schedule Demo
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-[28px] border border-border transition-transform duration-500 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={heroImage}
                  alt="Legacy Group International Testimonials"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section id="success-stories" className="py-24 bg-background w-full">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <div className="text-sm uppercase tracking-[0.3em] text-[#EE7F23]">Success Stories</div>

            <h2 className="mt-4 text-3xl text-navy-deep sm:text-4xl lg:text-5xl">
              Real Voices.
              <br />
              Genuine Experiences.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground text-justify">
              Our clients' success stories speak louder than words. Discover why organizations
              continue to choose Legacy Group International.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] border border-border bg-white shadow-sm transition-shadow duration-500 hover:shadow-(--shadow-elegant)"
              >
                <div className="overflow-hidden">
                  <video
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    controls
                    preload="metadata"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-navy">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.company}</p>

                  <div className="mt-3 text-gold text-lg">★★★★★</div>

                  <p className="mt-4 leading-7 text-muted-foreground italic">"{item.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-24 bg-white w-full">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#EE7F23]">
              Trusted Worldwide
            </div>

            <h2 className="mt-4 text-4xl font-semibold text-navy-deep sm:text-5xl">
              Trusted by Businesses Worldwide
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground text-justify">
              For over <strong>20 years</strong>, Legacy Group International has delivered business
              intelligence and outsourcing solutions that help organizations improve performance,
              reduce operational costs, and accelerate sustainable growth.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground text-justify">
              Our expertise spans recruitment, market research, knowledge process outsourcing,
              technical support, and business process outsourcing, delivering measurable results for
              organizations around the world.
            </p>
          </motion.div>

          {/* Service Cards */}

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              "Recruitment Process Outsourcing",
              "Market Research Outsourcing",
              "Knowledge Process Outsourcing",
              "Technical Support",
              "Business Process Outsourcing",
            ].map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-(--shadow-elegant)"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                />

                <div className="relative mb-4 text-3xl transition-transform duration-500 group-hover:scale-110">
                  ✓
                </div>

                <h3 className="relative text-lg font-semibold text-navy">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 bg-white w-full">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <div className="text-sm uppercase tracking-[0.3em] text-[#EE7F23]">Our Impact</div>

            <h2 className="mt-4 text-3xl text-navy-deep sm:text-4xl lg:text-5xl">
              Delivering Results for
              <br />
              More Than Two Decades
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              { value: 20, suffix: "+", label: "Years Experience" },
              { value: 500, suffix: "+", label: "Global Projects" },
              { value: 98, suffix: "%", label: "Client Retention" },
              { value: 24, suffix: "/7", label: "Global Support" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-border bg-background p-5 text-center shadow-sm transition-shadow duration-500 hover:shadow-(--shadow-elegant) sm:p-8 lg:p-10"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                />

                <div className="text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                  <CountUp to={item.value} suffix={item.suffix} />
                </div>

                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm lg:text-base">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-28 w-full">
        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative overflow-hidden rounded-[36px] bg-[#377589] p-20 text-center text-white"
          >
            <div className="relative text-sm uppercase tracking-[0.3em] text-white">
              Let's Build Together
            </div>

            <h2 className="relative mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Ready to be our next
              <br />
              success story?
            </h2>

            <p className="relative mx-auto mt-8 max-w-3xl text-lg text-white/80 text-justify">
              Partner with Legacy Group International to build smarter teams, stronger operations,
              and sustainable business growth.
            </p>

            <div className="relative mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="https://calendly.com/raj-kapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Schedule a Demo
                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 font-semibold transition-colors duration-300 hover:bg-white hover:text-navy"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 w-full">
        <div
          className={`flex flex-col items-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left ${PAGE_X}`}
        >
          <div>© {new Date().getFullYear()} Legacy Group International</div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
