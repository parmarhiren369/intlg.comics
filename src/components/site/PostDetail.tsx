import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Check,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { PAGE_X } from "@/lib/utils";
import { getPostBySlug, getPosts, type PostItem } from "@/data/posts";

export function PostDetail({ slug }: { slug: string }) {
  const post: PostItem | undefined = getPostBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Nav />
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#EE7F23]">Update Not Found</p>
          <h1 className="mt-4 font-sans text-3xl text-navy-deep sm:text-4xl">
            We couldn't locate this post.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The post may have been removed or the URL link may be outdated.
          </p>
          <Link
            to="/posts"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Posts Feed
          </Link>
        </section>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  const otherPosts = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.content[0],
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

      {/* TOP BAR */}
      <section className="border-b border-border bg-slate-50/70 pt-28 pb-6 sm:pt-36">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-3xl flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/posts"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#EE7F23]"
            >
              <ArrowLeft className="h-4 w-4" />
              All Field Updates
            </Link>

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
                  <span>Share Update</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="py-12 sm:py-16">
        <div className={PAGE_X}>
          <div className="mx-auto max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[28px] border border-border bg-card p-6 shadow-sm sm:p-10"
            >
              {/* AUTHOR HEADER */}
              <div className="flex items-start justify-between gap-4 border-b border-border pb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-14 w-14 rounded-full object-cover border border-border shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-sans text-base font-semibold text-navy">
                        {post.author.name}
                      </h4>
                      {post.author.verified && (
                        <CheckCircle className="h-4 w-4 fill-[#EE7F23] text-white" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Posted {post.timestampFormatted}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-semibold text-[#EE7F23]">
                  {post.category}
                </span>
              </div>

              {/* POST TITLE */}
              <h1 className="mt-6 font-sans text-2xl font-bold text-[#071330] sm:text-3xl leading-snug">
                {post.title}
              </h1>

              {/* POST BODY CONTENT */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                {post.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* MEDIA ATTACHMENTS */}
              {post.mediaType === "image" && post.mediaUrl && (
                <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-xs">
                  <img
                    src={post.mediaUrl}
                    alt={post.mediaAlt ?? post.title}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}

              {post.mediaType === "link" && post.linkPreview && (
                <a
                  href={post.linkPreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block overflow-hidden rounded-2xl border border-border bg-slate-50 transition-colors hover:bg-slate-100/80"
                >
                  {post.linkPreview.image && (
                    <div className="h-52 w-full overflow-hidden bg-slate-200">
                      <img
                        src={post.linkPreview.image}
                        alt={post.linkPreview.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                      <span>{post.linkPreview.domain}</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                    <h5 className="mt-1 font-sans text-base font-semibold text-navy">
                      {post.linkPreview.title}
                    </h5>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {post.linkPreview.description}
                    </p>
                  </div>
                </a>
              )}

              {/* TAGS */}
              <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-medium text-slate-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.article>

            {/* OTHER RECENT UPDATES */}
            <div className="mt-16">
              <h3 className="font-sans text-xl font-bold text-navy">Other Recent Updates</h3>
              <div className="mt-6 space-y-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.id}
                    to="/posts/$slug"
                    params={{ slug: p.slug }}
                    className="group block rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-gold/50 hover:shadow-xs"
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{p.author.name}</span>
                      <span>{p.timestampFormatted}</span>
                    </div>
                    <h5 className="mt-2 font-sans text-sm font-semibold text-navy group-hover:text-[#EE7F23] transition-colors">
                      {p.title}
                    </h5>
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
