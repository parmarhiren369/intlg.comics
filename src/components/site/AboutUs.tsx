import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import worldTeamImg from "../../assets/about-us-group.png";
import { PAGE_X } from "@/lib/utils";

export function AboutUs() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <ScrollToTop />
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative overflow-visible bg-white pt-28 pb-40 sm:pt-36 sm:pb-44 lg:pt-44 lg:pb-52">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,166,44,0.18),transparent_35%)]"></div>

          <div
            className={`relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-14 ${PAGE_X}`}
          >
            {/* LEFT */}
            <div className="relative z-10">
              <h1 className="text-4xl font-normal leading-[1.15] text-[#071330] sm:text-5xl lg:text-5xl lg:leading-[1.1] xl:text-6xl">
                <span className="block">Building</span>
                <span className="block">Exceptional Teams.</span>
                <span className="mt-2 block text-[#F58220] sm:mt-3">Powering</span>

                <span className="block text-[#F58220]">Business Growth.</span>
              </h1>

              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-lg sm:mt-8 sm:px-6 sm:py-4">
                <span className="text-base text-[#E8A62C] sm:text-lg">★★★★★</span>
                <span className="text-sm font-medium text-gray-700 sm:text-base">
                  Trusted by 150+ Global Clients
                </span>
              </div>

              {/* TRUST BADGE / QUOTE */}
              <div className="mt-6 border-l-4 border-[#E8A62C] pl-5 sm:mt-6 sm:pl-6">
                <p className="text-base font-medium italic leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  Trusted outsourcing partner delivering people, technology, and business solutions
                  to organizations worldwide for more than two decades.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#071330]/70 sm:text-base">
                  Trusted by Global Organizations for over 20 Years
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-4 sm:mt-8 sm:gap-5">
                <button className="rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e87416] hover:scale-105 hover:shadow-2xl sm:px-9 sm:py-4 sm:text-base">
                  Explore Services
                </button>

                <a
                  href="tel:+12159394490"
                  className="rounded-full border border-[#071330]/20 bg-[#071330]/5 px-7 py-3.5 text-sm font-semibold text-[#071330] backdrop-blur transition hover:bg-[#071330] hover:text-white sm:px-9 sm:py-4 sm:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative mt-4 lg:mt-0">
              {/* USA NETWORK */}
              <div className="mb-8 mx-auto max-w-[680px] overflow-hidden rounded-[28px] shadow-[0_25px_80px_rgba(7,19,48,0.35)] sm:rounded-[32px]">
                <img
                  src={worldTeamImg}
                  alt="Global team with world map"
                  className="h-64 w-full object-cover sm:h-72 lg:h-80"
                  loading="lazy"
                />
              </div>

              {/* Main Image */}
              <div className="mx-auto max-w-[680px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.35)] sm:rounded-[36px]">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                  alt="Team collaboration"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="bg-white py-16 sm:py-24">
          <div
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16 ${PAGE_X}`}
          >
            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Legacy Story"
                className="w-full rounded-[24px] shadow-xl sm:rounded-[32px]"
              />

              <div className="absolute -bottom-6 -right-4 max-w-[75%] rounded-2xl bg-[#377589] p-5 text-white shadow-xl sm:-bottom-8 sm:-right-8 sm:max-w-none sm:rounded-3xl sm:p-8">
                <div className="text-2xl font-bold text-white] sm:text-4xl">Since 2005</div>
                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  Delivering business excellence worldwide.
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="mt-6 lg:mt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#EE7F23]">
                OUR STORY
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071330] sm:mt-6 sm:text-4xl lg:text-5xl">
                Two Decades of
                <br />
                Business Transformation.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9">
                Legacy Group International was founded with a clear vision: helping organizations
                achieve sustainable growth through exceptional talent, operational excellence,
                technology, and innovative business solutions.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:mt-6 sm:text-lg sm:leading-9">
                Today we proudly serve organizations across multiple industries, delivering
                Executive Search, Recruitment, Business Process Outsourcing, Digital Marketing,
                Research Services, Technology Solutions, and Strategic Consulting.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6">
                <div className="rounded-2xl border p-5 sm:p-6">
                  <div className="text-2xl font-bold text-[#071330] sm:text-3xl">20+</div>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base">Years Experience</p>
                </div>

                <div className="rounded-2xl border p-5 sm:p-6">
                  <div className="text-2xl font-bold text-[#071330] sm:text-3xl">150+</div>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base">Global Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className={PAGE_X}>
            <div className="mb-12 text-center sm:mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#EE7F23]">
                OUR PURPOSE
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#071330] sm:mt-5 sm:text-4xl lg:text-5xl">
                Mission <span className="font-sans font-bold">&</span> Vision
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                We are committed to helping organizations build stronger teams, smarter operations,
                and sustainable growth through innovative business solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-10">
              {/* Mission */}
              <div className="rounded-[24px] bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 sm:rounded-[32px] sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071330] text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                  🎯
                </div>

                <h3 className="text-2xl font-bold text-[#071330] sm:text-3xl">Our Mission</h3>

                <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                  To empower organizations with world-class recruitment, outsourcing, technology,
                  research, and consulting solutions that create measurable business value.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-[24px] bg-[#377589] p-7 text-white shadow-lg transition duration-300 hover:-translate-y-2 sm:rounded-[32px] sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8A62C] text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                  🚀
                </div>

                <h3 className="text-2xl font-bold sm:text-3xl">Our Vision</h3>

                <p className="mt-5 text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-9">
                  To become the world's most trusted strategic business partner, helping
                  organizations grow through exceptional people, innovative technology, and
                  operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
