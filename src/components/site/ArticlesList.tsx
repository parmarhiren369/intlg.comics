import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  Clock,
  Calendar,
  Filter,
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getArticles, getArticleCategories } from "@/data/articles";

export function ArticlesList() {
  const allArticles = useMemo(() => getArticles(), []);
  const categories = useMemo(() => getArticleCategories(), []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredArticle = useMemo(() => {
    return allArticles.find((a) => a.featured) ?? allArticles[0];
  }, [allArticles]);

  const filteredArticles = useMemo(() => {
    return allArticles
      .filter((article) => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.author.name.toLowerCase().includes(q) ||
          article.tags.some((t) => t.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [allArticles, selectedCategory, searchQuery, sortOrder]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(238,127,35,0.1),transparent_40%)]" />

        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#EE7F23]">
              <BookOpen className="h-3.5 w-3.5" />
              Editorial & Thought Leadership
            </div>

            <h1 className="mt-5 font-sans text-4xl font-normal leading-[1.12] text-[#071330] sm:text-5xl lg:text-6xl">
              Perspectives on <br />
              <span className="font-serif italic text-[#EE7F23]">Enterprise Scaling.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              In-depth articles, operational frameworks, and strategic analysis on talent
              acquisition, business process optimization, cybersecurity, and global delivery.
            </p>
          </motion.div>

          {/* FEATURED ARTICLE SPOTLIGHT */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-12 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all hover:shadow-(--shadow-elegant)"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* COVER IMAGE */}
                <div className="relative aspect-[16/10] lg:aspect-auto w-full overflow-hidden bg-slate-100 group">
                  <img
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#071330]/90 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      Featured Analysis
                    </span>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {featuredArticle.category}
                    </div>

                    <h2 className="mt-3 font-sans text-2xl font-semibold text-[#071330] sm:text-3xl lg:text-4xl leading-tight">
                      <Link
                        to="/articles/$slug"
                        params={{ slug: featuredArticle.slug }}
                        className="hover:text-[#EE7F23] transition-colors"
                      >
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <img
                        src={featuredArticle.author.avatar}
                        alt={featuredArticle.author.name}
                        className="h-10 w-10 rounded-full object-cover border border-border"
                      />
                      <div>
                        <p className="text-xs font-semibold text-navy">
                          {featuredArticle.author.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {featuredArticle.author.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {featuredArticle.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {featuredArticle.readingTime}
                      </span>
                    </div>

                    <Link
                      to="/articles/$slug"
                      params={{ slug: featuredArticle.slug }}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                      style={{ backgroundImage: "var(--gradient-gold)" }}
                    >
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="border-y border-border bg-slate-50/70 py-8">
        <div className={PAGE_X}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 hidden items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:flex">
                <Filter className="h-3.5 w-3.5" />
                Category:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(6);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#071330] text-white shadow-sm"
                        : "border border-border bg-white text-foreground/80 hover:border-slate-300 hover:text-navy"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* SEARCH AND SORT */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(6);
                  }}
                  className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-[#EE7F23] focus:outline-none focus:ring-1 focus:ring-[#EE7F23]"
                />
              </div>

              <select
                aria-label="Sort articles"
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
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 lg:py-24">
        <div className={PAGE_X}>
          {filteredArticles.length === 0 ? (
            /* EMPTY STATE */
            <div className="mx-auto max-w-md rounded-3xl border border-dashed border-border bg-white p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#EE7F23]">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-sans text-xl font-semibold text-navy">No articles found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn't find any articles matching "{searchQuery}". Try searching for another
                topic or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 inline-flex rounded-full bg-[#071330] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayedArticles.map((article, idx) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="group flex flex-col overflow-hidden rounded-[24px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-(--shadow-elegant)"
                  >
                    {/* COVER IMAGE */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-navy shadow-sm backdrop-blur-xs">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* CARD BODY */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{article.publishedAt}</span>
                          <span>•</span>
                          <span>{article.readingTime}</span>
                        </div>

                        <h3 className="mt-3 font-sans text-lg font-semibold text-navy leading-snug transition-colors group-hover:text-[#EE7F23]">
                          <Link
                            to="/articles/$slug"
                            params={{ slug: article.slug }}
                            className="focus:outline-none"
                          >
                            {article.title}
                          </Link>
                        </h3>

                        <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="h-7 w-7 rounded-full object-cover border border-border"
                          />
                          <span className="text-xs font-medium text-slate-700">
                            {article.author.name}
                          </span>
                        </div>

                        <Link
                          to="/articles/$slug"
                          params={{ slug: article.slug }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#EE7F23] hover:underline"
                        >
                          Read More
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* PAGINATION / LOAD MORE */}
              {hasMore && (
                <div className="mt-14 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-8 py-3.5 text-xs font-semibold text-navy transition-all duration-300 hover:border-[#EE7F23] hover:text-[#EE7F23] hover:shadow-md"
                  >
                    <span>Load More Articles</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    Showing {displayedArticles.length} of {filteredArticles.length} articles
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
