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
  Printer,
  Sparkles,
  TrendingUp,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getInsightBySlug, getRelatedInsights, type InsightItem } from "@/data/insights";
import { getArticleBySlug } from "@/data/articles";

export function InsightDetail({ slug }: { slug: string }) {
  const insight: InsightItem | undefined = getInsightBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!insight) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Nav />
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">
            Insight Report Not Found
          </p>
          <h1 className="mt-4 font-sans text-3xl text-navy-deep sm:text-4xl">
            We couldn't locate this research report.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The requested intelligence publication may have been relocated or updated.
          </p>
          <Link
            to="/insights"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights Hub
          </Link>
        </section>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  const relatedInsights = getRelatedInsights(insight.slug, 2);
  const relatedArticles = insight.relatedArticleSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: insight.title,
          text: insight.summary,
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

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground print:bg-white print:text-black">
      <div className="print:hidden">
        <Nav />
      </div>

      {/* TOP HEADER */}
      <header className="border-b border-border bg-slate-50/70 pt-28 pb-10 sm:pt-36 sm:pb-14 print:pt-4 print:pb-4 print:border-b-2">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-4xl">
            {/* NAVIGATION & ACTION BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#EE7F23]"
              >
                <ArrowLeft className="h-4 w-4" />
                All Insights & Reports
              </Link>

              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-navy border border-border">
                  {insight.type}
                </span>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-[#377589] hover:text-[#377589]"
                  title="Print / Save Executive PDF"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print / PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-[#EE7F23] hover:text-[#EE7F23]"
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

            {/* REPORT TYPE & VERTICAL */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{insight.category}</span>
              <span>•</span>
              <span>{insight.type}</span>
            </div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-3 font-sans text-3xl font-normal leading-[1.18] text-[#071330] sm:text-4xl md:text-5xl"
            >
              {insight.title}
            </motion.h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {insight.summary}
            </p>

            {/* AUTHOR & DATE */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <img
                  src={insight.author.avatar}
                  alt={insight.author.name}
                  className="h-11 w-11 rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-navy">
                    {insight.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{insight.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  {insight.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  {insight.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* REPORT CONTENT BODY */}
      <main className="py-12 sm:py-16">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-4xl space-y-12">
            {/* KEY FINDINGS GRID */}
            <section>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#EE7F23]">
                Executive Metrics
              </h3>
              <h2 className="mt-1 font-sans text-2xl font-bold text-[#071330] sm:text-3xl">
                Key Empirical Findings
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {insight.keyFindings.map((finding) => (
                  <div
                    key={finding.label}
                    className="rounded-2xl border border-border bg-slate-50/80 p-6 shadow-xs"
                  >
                    <div className="font-sans text-3xl font-extrabold text-[#EE7F23] sm:text-4xl">
                      {finding.stat}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-navy">{finding.label}</div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {finding.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* EXECUTIVE SUMMARY BOX */}
            <section className="rounded-[28px] border border-[#377589]/20 bg-teal-50/30 p-8 sm:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#377589]">
                <TrendingUp className="h-4 w-4" />
                Executive Summary
              </div>
              <p className="mt-4 font-serif text-lg sm:text-xl leading-relaxed text-[#071330] italic">
                "{insight.executiveSummary}"
              </p>
            </section>

            {/* DEEP DIVE RESEARCH SECTIONS */}
            <div className="space-y-10 border-t border-border pt-10">
              {insight.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-5">
                  <h2 className="font-sans text-2xl font-semibold text-[#071330] sm:text-3xl">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-700">
                      {p}
                    </p>
                  ))}

                  {section.takeaways && section.takeaways.length > 0 && (
                    <div className="rounded-2xl border border-border bg-slate-50/60 p-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                        Strategic Takeaways
                      </div>
                      <ul className="mt-3 space-y-2">
                        {section.takeaways.map((takeaway, tIdx) => (
                          <li
                            key={tIdx}
                            className="flex items-start gap-2.5 text-sm text-slate-800"
                          >
                            <span className="text-[#EE7F23] font-bold">›</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* STRATEGIC RECOMMENDATIONS */}
            {insight.strategicRecommendations && (
              <section className="rounded-[28px] border border-border bg-card p-8 sm:p-10 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                  <CheckCircle2 className="h-4 w-4" />
                  Actionable Next Steps
                </div>
                <h3 className="mt-2 font-sans text-2xl font-bold text-navy">
                  Strategic Recommendations for Leadership
                </h3>

                <ul className="mt-6 space-y-4">
                  {insight.strategicRecommendations.map((rec, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3.5 text-sm sm:text-base leading-relaxed text-slate-800"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#EE7F23] font-bold text-xs">
                        {rIdx + 1}
                      </span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* PRINT / DOWNLOAD ACTIONS CARD */}
            <div className="rounded-2xl border border-border bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
              <div>
                <h4 className="font-sans text-base font-semibold text-navy">
                  Need this research offline?
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Print or generate a clean executive PDF version for your strategy sessions.
                </p>
              </div>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-transform hover:-translate-y-0.5 shrink-0"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                <Printer className="h-3.5 w-3.5" />
                Print Executive Summary (PDF)
              </button>
            </div>

            {/* RELATED ARTICLES & INSIGHTS */}
            <div className="space-y-8 border-t border-border pt-12 print:hidden">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#EE7F23]">
                  Connected Knowledge
                </div>
                <h3 className="mt-1 font-sans text-2xl font-bold text-navy">
                  Related Research & Analysis
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedInsights.map((rel) => (
                  <Link
                    key={rel.id}
                    to="/insights/$slug"
                    params={{ slug: rel.slug }}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-sm"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#EE7F23] uppercase tracking-wider">
                        {rel.type} • {rel.category}
                      </span>
                      <h4 className="mt-2 font-sans text-base font-semibold text-navy group-hover:text-[#EE7F23] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-3">
                      <span>{rel.readingTime}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-[#EE7F23]">
                        Read Report <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
