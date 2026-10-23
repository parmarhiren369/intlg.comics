import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Play,
  Search,
  Clock,
  Calendar,
  User,
  Filter,
  ArrowRight,
  Video as VideoIcon,
  Sparkles,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getVideos, getVideoCategories, type VideoItem } from "@/data/videos";

export function VideosList() {
  const allVideos = useMemo(() => getVideos(), []);
  const categories = useMemo(() => getVideoCategories(), []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [activePlayVideo, setActivePlayVideo] = useState<VideoItem | null>(null);

  const featuredVideo = useMemo(() => {
    return allVideos.find((v) => v.featured) ?? allVideos[0];
  }, [allVideos]);

  const filteredVideos = useMemo(() => {
    return allVideos
      .filter((video) => {
        const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          video.title.toLowerCase().includes(q) ||
          video.description.toLowerCase().includes(q) ||
          video.author.toLowerCase().includes(q) ||
          video.tags.some((t) => t.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [allVideos, selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(238,127,35,0.12),transparent_40%)]" />

        <div className={PAGE_X}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#EE7F23]">
              <VideoIcon className="h-3.5 w-3.5" />
              Video Intelligence & Briefings
            </div>

            <h1 className="mt-5 font-sans text-4xl font-normal leading-[1.12] text-[#071330] sm:text-5xl lg:text-6xl">
              Enterprise Insights, <br />
              <span className="font-serif italic text-[#EE7F23]">Live in Action.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore client transformation spotlights, executive strategy briefings, and
              operational deep dives from Legacy Group International's global leadership.
            </p>
          </motion.div>

          {/* FEATURED VIDEO SPOTLIGHT */}
          {featuredVideo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-12 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all hover:shadow-(--shadow-elegant)"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                {/* VIDEO PREVIEW CONTAINER */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 transition-colors group-hover:bg-slate-950/25" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setActivePlayVideo(featuredVideo)}
                      aria-label={`Play ${featuredVideo.title}`}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EE7F23] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#d96f1d]"
                    >
                      <Play className="ml-1 h-7 w-7 fill-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {featuredVideo.duration}
                    </span>
                    <span className="rounded-full bg-[#EE7F23] px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  </div>
                </div>

                {/* FEATURED DETAILS */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {featuredVideo.category}
                    </div>

                    <h2 className="mt-3 font-sans text-2xl font-semibold text-[#071330] sm:text-3xl">
                      {featuredVideo.title}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {featuredVideo.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <User className="h-4 w-4 text-[#EE7F23]" />
                        <span>{featuredVideo.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>{featuredVideo.publishedAt}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span>{featuredVideo.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActivePlayVideo(featuredVideo)}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                      style={{ backgroundImage: "var(--gradient-gold)" }}
                    >
                      <Play className="h-4 w-4 fill-white" />
                      Watch Now
                    </button>

                    <Link
                      to="/videos/$slug"
                      params={{ slug: featuredVideo.slug }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FILTER & SEARCH CONTROLS */}
      <section className="border-y border-border bg-slate-50/70 py-8">
        <div className={PAGE_X}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* CATEGORY PILLS */}
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
                    onClick={() => setSelectedCategory(cat)}
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
              {/* SEARCH INPUT */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-[#EE7F23] focus:outline-none focus:ring-1 focus:ring-[#EE7F23]"
                />
              </div>

              {/* SORT SELECT */}
              <select
                aria-label="Sort videos"
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

      {/* VIDEOS GALLERY GRID */}
      <section className="py-16 lg:py-24">
        <div className={PAGE_X}>
          {filteredVideos.length === 0 ? (
            /* EMPTY STATE */
            <div className="mx-auto max-w-md rounded-3xl border border-dashed border-border bg-white p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#EE7F23]">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-sans text-xl font-semibold text-navy">No videos found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn't find any videos matching "{searchQuery}". Try adjusting your keywords or
                selecting another category.
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-(--shadow-elegant)"
                >
                  {/* THUMBNAIL */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 transition-colors group-hover:bg-slate-950/15" />

                    {/* Quick Play Trigger */}
                    <button
                      type="button"
                      onClick={() => setActivePlayVideo(video)}
                      aria-label={`Play ${video.title}`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#EE7F23] group-hover:text-white">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </div>
                    </button>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="rounded-full bg-black/75 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                        {video.duration}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-navy shadow-sm">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{video.publishedAt}</span>
                        <span>•</span>
                        <span>{video.author}</span>
                      </div>

                      <h3 className="mt-2.5 font-sans text-lg font-semibold text-navy leading-snug transition-colors group-hover:text-[#EE7F23]">
                        <Link
                          to="/videos/$slug"
                          params={{ slug: video.slug }}
                          className="focus:outline-none"
                        >
                          {video.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                      <button
                        type="button"
                        onClick={() => setActivePlayVideo(video)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EE7F23] transition-colors hover:text-[#d96f1d]"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        Quick Watch
                      </button>

                      <Link
                        to="/videos/$slug"
                        params={{ slug: video.slug }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-navy transition-colors hover:text-[#EE7F23]"
                      >
                        Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* QUICK WATCH MODAL (ACCESSIBLE, NO AUTOPLAY WITH SOUND) */}
      {activePlayVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePlayVideo.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#EE7F23]">
                  {activePlayVideo.category}
                </p>
                <h4 className="font-sans text-base font-semibold text-navy truncate max-w-xl">
                  {activePlayVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActivePlayVideo(null)}
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              {activePlayVideo.embedType === "local" ? (
                <video controls preload="metadata" className="h-full w-full object-contain">
                  <source src={activePlayVideo.videoUrl} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <iframe
                  src={activePlayVideo.videoUrl}
                  title={activePlayVideo.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              )}
            </div>

            <div className="flex items-center justify-between bg-slate-50 px-5 py-3">
              <div className="text-xs text-muted-foreground">
                Speaker: <strong className="text-navy">{activePlayVideo.author}</strong> (
                {activePlayVideo.duration})
              </div>
              <Link
                to="/videos/$slug"
                params={{ slug: activePlayVideo.slug }}
                onClick={() => setActivePlayVideo(null)}
                className="text-xs font-semibold text-[#EE7F23] hover:underline"
              >
                Open Full Detail Page →
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
}
