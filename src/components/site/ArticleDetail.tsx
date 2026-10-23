import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getArticleBySlug, getRelatedArticles, type Article } from "@/data/articles";

export function ArticleDetail({ slug }: { slug: string }) {
  const article: Article | undefined = getArticleBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Nav />
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">Article Not Found</p>
          <h1 className="mt-4 font-sans text-3xl text-navy-deep sm:text-4xl">
            We couldn't find this publication.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The article may have been updated or the link may have changed.
          </p>
          <Link
            to="/articles"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles Hub
          </Link>
        </section>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* TOP HEADER */}
      <header className="border-b border-border bg-slate-50/60 pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-4xl">
            {/* NAVIGATION & SHARE BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#EE7F23]"
              >
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Link>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-navy border border-border">
                  {article.category}
                </span>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-1 text-xs font-medium text-foreground transition-colors hover:border-[#EE7F23] hover:text-[#EE7F23]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 font-sans text-3xl font-normal leading-[1.18] text-[#071330] sm:text-4xl md:text-5xl"
            >
              {article.title}
            </motion.h1>

            {/* EXCERPT */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              {article.excerpt}
            </p>

            {/* AUTHOR & METADATA BAR */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
              <div className="flex items-center gap-3.5">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-navy">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{article.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  {article.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  {article.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <main className="py-12 sm:py-16">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-4xl">
            {/* FEATURED COVER IMAGE */}
            <div className="overflow-hidden rounded-[28px] border border-border shadow-lg">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover aspect-[16/9]"
              />
            </div>

            {/* RICH CONTENT SECTIONS */}
            <article className="mt-12 space-y-12">
              {article.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-6">
                  {section.heading && (
                    <h2 className="font-sans text-2xl font-semibold text-[#071330] sm:text-3xl pt-4">
                      {section.heading}
                    </h2>
                  )}

                  {section.subheading && (
                    <h3 className="font-sans text-xl font-medium text-[#EE7F23]">
                      {section.subheading}
                    </h3>
                  )}

                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-700">
                      {para}
                    </p>
                  ))}

                  {/* PULL QUOTE */}
                  {section.quote && (
                    <div className="my-8 rounded-2xl border-l-4 border-[#EE7F23] bg-orange-50/50 p-6 sm:p-8">
                      <p className="font-serif text-lg sm:text-xl italic leading-relaxed text-navy">
                        "{section.quote.text}"
                      </p>
                      <div className="mt-4 text-xs sm:text-sm font-semibold text-slate-700">
                        — {section.quote.author}
                        {section.quote.role && (
                          <span className="text-muted-foreground font-normal">
                            , {section.quote.role}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* BULLET LIST */}
                  {section.list && (
                    <div className="my-6 rounded-2xl border border-border bg-slate-50/60 p-6 sm:p-8">
                      {section.list.title && (
                        <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-navy">
                          {section.list.title}
                        </h4>
                      )}
                      <ul className="mt-4 space-y-3">
                        {section.list.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-800"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-white text-[11px] font-bold">
                              {iIdx + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CALLOUT BOX */}
                  {section.callout && (
                    <div className="my-8 rounded-2xl border border-orange-200 bg-orange-50/60 p-6 sm:p-8">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                        <CheckCircle2 className="h-4 w-4" />
                        {section.callout.title}
                      </div>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-800">
                        {section.callout.text}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </article>

            {/* TAGS */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-medium text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* AUTHOR BIO CARD */}
            <div className="mt-12 rounded-[28px] border border-border bg-slate-50/80 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                />
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                    Written By
                  </div>
                  <h4 className="mt-1 font-sans text-xl font-bold text-navy">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{article.author.role}</p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    Contributing to global workforce strategy, recruitment operations, and
                    enterprise business scaling at Legacy Group International.
                  </p>
                </div>
              </div>
            </div>

            {/* RELATED ARTICLES SECTION */}
            <div className="mt-20 border-t border-border pt-16">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#EE7F23]">
                    Explore More Insights
                  </div>
                  <h3 className="mt-1 font-sans text-2xl font-bold text-navy">Related Articles</h3>
                </div>

                <Link
                  to="/articles"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#EE7F23] hover:underline"
                >
                  View All
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to="/articles/$slug"
                    params={{ slug: rel.slug }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <span className="text-[11px] font-semibold text-[#EE7F23] uppercase tracking-wider">
                          {rel.category}
                        </span>
                        <h5 className="mt-1.5 font-sans text-sm font-semibold text-navy line-clamp-2 group-hover:text-[#EE7F23]">
                          {rel.title}
                        </h5>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                        <span>{rel.readingTime}</span>
                        <span className="inline-flex items-center gap-1 font-medium text-navy">
                          Read <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
