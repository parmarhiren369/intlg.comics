import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle,
  FileText,
  Play,
  Check,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getVideoBySlug, getRelatedVideos, type VideoItem } from "@/data/videos";

export function VideoDetail({ slug }: { slug: string }) {
  const video: VideoItem | undefined = getVideoBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!video) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Nav />
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">Video Not Found</p>
          <h1 className="mt-4 font-sans text-3xl text-navy-deep sm:text-4xl">
            We couldn't locate this video briefing.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The video may have been archived or the URL might be incorrect.
          </p>
          <Link
            to="/videos"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Video Library
          </Link>
        </section>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  const relatedVideos = getRelatedVideos(video.slug, 3);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
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

      {/* TOP BREADCRUMB HEADER */}
      <section className="border-b border-border bg-slate-50/70 pt-28 pb-6 sm:pt-36">
        <div className={PAGE_X}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#EE7F23]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Video Intelligence
            </Link>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy border border-border shadow-xs">
                {video.category}
              </span>
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
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="py-10 sm:py-14">
        <div className={PAGE_X}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
            {/* LEFT / CENTER: PLAYER & DETAILS */}
            <div>
              {/* VIDEO PLAYER EMBED CONTAINER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-[28px] border border-border bg-black shadow-xl"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div className="relative aspect-video w-full">
                  {video.embedType === "local" ? (
                    <video controls preload="metadata" className="h-full w-full object-contain">
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support HTML5 video playback.
                    </video>
                  ) : (
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  )}
                </div>
              </motion.div>

              {/* VIDEO TITLE & METADATA */}
              <div className="mt-8">
                <h1 className="font-sans text-2xl font-bold text-[#071330] sm:text-3xl md:text-4xl leading-tight">
                  {video.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-6 border-b border-border pb-6 text-xs text-muted-foreground sm:text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-[#EE7F23]" />
                    <span className="font-semibold text-navy">{video.author}</span>
                    <span className="text-slate-400">({video.authorRole})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>{video.publishedAt}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-6">
                  <h3 className="font-sans text-lg font-semibold text-navy">Executive Overview</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">
                    {video.description}
                  </p>
                </div>

                {/* KEY TAKEAWAYS */}
                {video.keyTakeaways && video.keyTakeaways.length > 0 && (
                  <div className="mt-8 rounded-2xl border border-border bg-slate-50/70 p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#EE7F23]">
                      <CheckCircle className="h-4 w-4" />
                      Key Strategic Takeaways
                    </div>
                    <ul className="mt-4 space-y-3">
                      {video.keyTakeaways.map((takeaway) => (
                        <li
                          key={takeaway}
                          className="flex items-start gap-3 text-sm leading-relaxed text-slate-800"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#EE7F23] font-bold text-xs">
                            ✓
                          </span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TRANSCRIPT SUMMARY */}
                {video.transcriptSummary && (
                  <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
                      <FileText className="h-4 w-4 text-[#EE7F23]" />
                      Briefing Transcript & Summary
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {video.transcriptSummary}
                    </p>
                  </div>
                )}

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {video.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-medium text-slate-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR: SPEAKER & RELATED VIDEOS */}
            <aside className="space-y-8">
              {/* SPEAKER CARD */}
              <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#EE7F23]">
                  Featured Speaker
                </div>
                <h4 className="mt-2 font-sans text-lg font-semibold text-navy">{video.author}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{video.authorRole}</p>
                <p className="mt-4 text-xs leading-relaxed text-slate-600">
                  Leading strategic engagements and global operational governance at Legacy Group
                  International.
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <a
                    href="https://calendly.com/raj-kapoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    Schedule Executive Briefing
                  </a>
                </div>
              </div>

              {/* RELATED VIDEOS */}
              <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
                <h4 className="font-sans text-base font-semibold text-navy">Related Briefings</h4>
                <div className="mt-4 space-y-4">
                  {relatedVideos.map((rel) => (
                    <Link
                      key={rel.id}
                      to="/videos/$slug"
                      params={{ slug: rel.slug }}
                      className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50"
                    >
                      <div className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                        <img
                          src={rel.thumbnail}
                          alt={rel.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="h-3.5 w-3.5 fill-white text-white" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <h5 className="font-sans text-xs font-semibold text-navy line-clamp-2 group-hover:text-[#EE7F23]">
                          {rel.title}
                        </h5>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          {rel.duration} • {rel.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
