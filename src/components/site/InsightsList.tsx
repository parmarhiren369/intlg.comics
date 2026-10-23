import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  TrendingUp,
  FileText,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import {
  getInsights,
  getInsightTypes,
  getInsightCategories,
  type InsightType,
} from "@/data/insights";

export function InsightsList() {
  const allInsights = useMemo(() => getInsights(), []);
  const types = useMemo(() => ["All", ...getInsightTypes()], []);
  const categories = useMemo(() => getInsightCategories(), []);

  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const featuredInsight = useMemo(() => {
    return allInsights.find((i) => i.featured) ?? allInsights[0];
  }, [allInsights]);

  const filteredInsights = useMemo(() => {
    return allInsights
      .filter((insight) => {
        const matchesType = selectedType === "All" || insight.type === selectedType;
        const matchesCategory = selectedCategory === "All" || insight.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          insight.title.toLowerCase().includes(q) ||
          insight.summary.toLowerCase().includes(q) ||
          insight.author.name.toLowerCase().includes(q);

        return matchesType && matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [allInsights, selectedType, selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(55,117,137,0.12),transparent_40%)]" />

        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#377589]">
              <TrendingUp className="h-3.5 w-3.5" />
              Strategic Intelligence Hub
            </div>

            <h1 className="mt-5 font-sans text-4xl font-normal leading-[1.12] text-[#071330] sm:text-5xl lg:text-6xl">
              Research, Reports & <br />
              <span className="font-serif italic text-[#EE7F23]">Market Intelligence.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Empirical data, global outsourcing benchmarks, and executive case studies to guide
              high-growth enterprises navigating complex labor and technology transformations.
            </p>
          </motion.div>

          {/* FEATURED REPORT BANNER */}
          {featuredInsight && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-12 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all hover:shadow-(--shadow-elegant)"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* COVER IMAGE */}
                <div className="relative aspect-[16/10] lg:aspect-auto w-full overflow-hidden bg-slate-900 group">
                  <img
                    src={featuredInsight.coverImage}
                    alt={featuredInsight.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-[#071330]/90 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      Flagship Report
                    </span>
                    <span className="rounded-full bg-[#EE7F23] px-3.5 py-1 text-xs font-semibold text-white">
                      {featuredInsight.type}
                    </span>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {featuredInsight.category}
                    </div>

                    <h2 className="mt-3 font-sans text-2xl font-semibold text-[#071330] sm:text-3xl leading-tight">
                      <Link
                        to="/insights/$slug"
                        params={{ slug: featuredInsight.slug }}
                        className="hover:text-[#EE7F23] transition-colors"
                      >
                        {featuredInsight.title}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {featuredInsight.summary}
                    </p>

                    {/* KEY STATS PREVIEW */}
                    <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-4">
                      {featuredInsight.keyFindings.map((finding) => (
                        <div key={finding.label}>
                          <div className="font-sans text-xl font-bold text-[#EE7F23] sm:text-2xl">
                            {finding.stat}
                          </div>
                          <div className="text-[11px] font-medium text-slate-500 line-clamp-1">
                            {finding.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {featuredInsight.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {featuredInsight.readingTime}
                      </span>
                    </div>

                    <Link
                      to="/insights/$slug"
                      params={{ slug: featuredInsight.slug }}
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                      style={{ backgroundImage: "var(--gradient-gold)" }}
                    >
                      Access Full Report
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="border-y border-border bg-slate-50/70 py-8">
        <div className={PAGE_X}>
          <div className="flex flex-col gap-6">
            {/* TYPE PILLS */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Report Type:
              </span>
              {types.map((type) => {
                const isActive = selectedType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#071330] text-white shadow-xs"
                        : "border border-border bg-white text-foreground/80 hover:border-slate-300 hover:text-navy"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>

            {/* CATEGORY & SEARCH ROW */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Vertical:
                </span>
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-3.5 py-1 text-xs transition-colors ${
                        isActive
                          ? "bg-[#377589] text-white font-medium"
                          : "bg-white border border-border text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* SEARCH & SORT */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search research & reports..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-[#EE7F23] focus:outline-none focus:ring-1 focus:ring-[#EE7F23]"
                  />
                </div>

                <select
                  aria-label="Sort research and reports"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                  className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground focus:border-[#EE7F23] focus:outline-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="py-16 lg:py-24">
        <div className={PAGE_X}>
          {filteredInsights.length === 0 ? (
            /* EMPTY STATE */
            <div className="mx-auto max-w-md rounded-3xl border border-dashed border-border bg-white p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#EE7F23]">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-sans text-xl font-semibold text-navy">No reports found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn't find any intelligence briefs matching "{searchQuery}". Try broadening
                your search or resetting filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                  setSelectedCategory("All");
                }}
                className="mt-6 inline-flex rounded-full bg-[#071330] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredInsights.map((insight, idx) => (
                <motion.article
                  key={insight.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-(--shadow-elegant)"
                >
                  {/* COVER IMAGE */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={insight.coverImage}
                      alt={insight.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="rounded-full bg-[#071330]/90 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-xs">
                        {insight.type}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-navy shadow-sm">
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  {/* BODY */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{insight.publishedAt}</span>
                        <span>•</span>
                        <span>{insight.readingTime}</span>
                      </div>

                      <h3 className="mt-3 font-sans text-lg font-semibold text-navy leading-snug transition-colors group-hover:text-[#EE7F23]">
                        <Link
                          to="/insights/$slug"
                          params={{ slug: insight.slug }}
                          className="focus:outline-none"
                        >
                          {insight.title}
                        </Link>
                      </h3>

                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {insight.summary}
                      </p>

                      {/* STAT HIGHLIGHT CALLOUT */}
                      {insight.keyFindings.length > 0 && (
                        <div className="mt-4 rounded-xl bg-orange-50/70 p-3 border border-orange-100 flex items-center justify-between">
                          <span className="text-[11px] font-medium text-slate-700 truncate pr-2">
                            {insight.keyFindings[0].label}
                          </span>
                          <span className="font-sans font-bold text-[#EE7F23] text-sm shrink-0">
                            {insight.keyFindings[0].stat}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={insight.author.avatar}
                          alt={insight.author.name}
                          className="h-6 w-6 rounded-full object-cover border border-border"
                        />
                        <span className="text-xs text-slate-600 truncate max-w-[120px]">
                          {insight.author.name}
                        </span>
                      </div>

                      <Link
                        to="/insights/$slug"
                        params={{ slug: insight.slug }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#EE7F23] hover:underline"
                      >
                        Read Briefing
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
