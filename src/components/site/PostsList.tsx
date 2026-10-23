import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Share2,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getPosts, getPostCategories, type PostItem } from "@/data/posts";

export function PostsList() {
  const allPosts = useMemo(() => getPosts(), []);
  const categories = useMemo(() => getPostCategories(), []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          post.title.toLowerCase().includes(q) ||
          post.content.some((c) => c.toLowerCase().includes(q)) ||
          post.author.name.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [allPosts, selectedCategory, searchQuery]);

  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const hasMore = visibleCount < filteredPosts.length;

  const handleShare = async (post: PostItem) => {
    const postUrl =
      typeof window !== "undefined" ? `${window.location.origin}/posts/${post.slug}` : "";

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.content[0],
          url: postUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(postUrl);
      setCopiedId(post.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

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
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#EE7F23]">
              <MessageSquare className="h-3.5 w-3.5" />
              Corporate Feed & Field Updates
            </div>

            <h1 className="mt-5 font-sans text-4xl font-normal leading-[1.12] text-[#071330] sm:text-5xl lg:text-6xl">
              Live Updates from the <br />
              <span className="font-serif italic text-[#EE7F23]">Global Frontline.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Real-time dispatches, executive commentary, client delivery milestones, and
              organizational announcements directly from Legacy Group International.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="border-y border-border bg-slate-50/70 py-6">
        <div className={PAGE_X}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* CATEGORY TABS */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 hidden items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:flex">
                <Filter className="h-3.5 w-3.5" />
                Filter:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(5);
                    }}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#071330] text-white shadow-xs"
                        : "border border-border bg-white text-foreground/80 hover:border-slate-300 hover:text-navy"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* SEARCH */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search updates by keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(5);
                }}
                className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-[#EE7F23] focus:outline-none focus:ring-1 focus:ring-[#EE7F23]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEED LIST */}
      <main className="py-12 lg:py-20">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-3xl">
            {filteredPosts.length === 0 ? (
              /* EMPTY STATE */
              <div className="rounded-3xl border border-dashed border-border bg-white p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#EE7F23]">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-sans text-xl font-semibold text-navy">No updates found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We couldn't find any posts matching "{searchQuery}". Try a different keyword or
                  reset filters.
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
              <div className="space-y-8">
                {displayedPosts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="overflow-hidden rounded-[26px] border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-gold/50 hover:shadow-md sm:p-8"
                  >
                    {/* POST HEADER */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-11 w-11 rounded-full object-cover border border-border"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-sans text-sm font-semibold text-navy">
                              {post.author.name}
                            </h4>
                            {post.author.verified && (
                              <CheckCircle className="h-3.5 w-3.5 fill-[#EE7F23] text-white" />
                            )}
                          </div>
                          <p className="text-[11px] text-muted-foreground">
                            {post.author.role} • {post.timestampFormatted}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-navy">
                        {post.category}
                      </span>
                    </div>

                    {/* POST TITLE */}
                    <h3 className="mt-5 font-sans text-lg font-semibold text-[#071330] sm:text-xl leading-snug">
                      <Link
                        to="/posts/$slug"
                        params={{ slug: post.slug }}
                        className="hover:text-[#EE7F23] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* POST CONTENT */}
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                      {post.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* MEDIA ATTACHMENTS */}
                    {post.mediaType === "image" && post.mediaUrl && (
                      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-slate-100">
                        <img
                          src={post.mediaUrl}
                          alt={post.mediaAlt ?? post.title}
                          loading="lazy"
                          className="h-auto w-full max-h-[420px] object-cover"
                        />
                      </div>
                    )}

                    {post.mediaType === "link" && post.linkPreview && (
                      <a
                        href={post.linkPreview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 block overflow-hidden rounded-2xl border border-border bg-slate-50 transition-colors hover:bg-slate-100/80"
                      >
                        {post.linkPreview.image && (
                          <div className="h-44 w-full overflow-hidden bg-slate-200">
                            <img
                              src={post.linkPreview.image}
                              alt={post.linkPreview.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                            <span>{post.linkPreview.domain}</span>
                            <ExternalLink className="h-3 w-3" />
                          </div>
                          <h5 className="mt-1 font-sans text-sm font-semibold text-navy">
                            {post.linkPreview.title}
                          </h5>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                            {post.linkPreview.description}
                          </p>
                        </div>
                      </a>
                    )}

                    {/* TAGS */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span key={t} className="text-[11px] font-medium text-[#EE7F23]">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                      <Link
                        to="/posts/$slug"
                        params={{ slug: post.slug }}
                        className="text-xs font-semibold text-navy hover:text-[#EE7F23] transition-colors"
                      >
                        Permalink & Discussion Details →
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleShare(post)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1 text-xs font-medium text-slate-700 hover:border-[#EE7F23] hover:text-[#EE7F23] transition-colors"
                      >
                        {copiedId === post.id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied Link!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="h-3.5 w-3.5" />
                            <span>Share</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* LOAD MORE BUTTON */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 5)}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-8 py-3.5 text-xs font-semibold text-navy transition-all duration-300 hover:border-[#EE7F23] hover:text-[#EE7F23] hover:shadow-md"
                >
                  <span>Load More Field Updates</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Showing {displayedPosts.length} of {filteredPosts.length} updates
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
