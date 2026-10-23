import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  BookOpen,
  Video as VideoIcon,
  MessageSquare,
} from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { scrollToHash, PAGE_X } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  route?: string;
  hasDropdown?: boolean;
};

const links: NavLink[] = [
  { label: "About", href: "", route: "/about" },
  { label: "Services", href: "", route: "/services" },
  { label: "Industries", href: "", route: "/industries" },
  { label: "Insights", href: "", route: "/insights", hasDropdown: true },
  { label: "Testimonials", href: "", route: "/testimonials" },
  { label: "Contact", href: "", route: "/contact" },
];

const insightsMenuItems = [
  {
    label: "Insights Hub",
    description: "Strategic research, benchmarks & market reports",
    route: "/insights",
    icon: TrendingUp,
  },
  {
    label: "Articles & Editorial",
    description: "Thought leadership & operational playbooks",
    route: "/articles",
    icon: BookOpen,
  },
  {
    label: "Videos & Briefings",
    description: "Executive briefings & client success stories",
    route: "/videos",
    icon: VideoIcon,
  },
  {
    label: "Company Posts",
    description: "Live field updates & milestone announcements",
    route: "/posts",
    icon: MessageSquare,
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu & dropdown whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLink = (l: NavLink, cls: string, onClick?: () => void) => {
    if (l.href && l.route === "/" && pathname === "/") {
      return (
        <a
          key={l.label}
          href={l.href}
          onClick={(event) => {
            event.preventDefault();
            scrollToHash(l.href);
            window.history.pushState(null, "", l.href);
            onClick?.();
          }}
          className={cls}
        >
          {l.label}
        </a>
      );
    }
    return (
      <Link
        key={l.label}
        to={l.route ?? "/"}
        hash={l.href ? l.href.replace("#", "") : undefined}
        className={cls}
        onClick={onClick}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? "shadow-[0_8px_30px_-15px_rgba(15,23,42,0.18)]" : ""
      }`}
    >
      <div className={`flex items-center justify-between py-3 ${PAGE_X}`}>
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Legacy Group International"
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20 transition-all duration-300"
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((l) => {
            if (l.hasDropdown) {
              const isChildActive =
                pathname.startsWith("/insights") ||
                pathname.startsWith("/articles") ||
                pathname.startsWith("/videos") ||
                pathname.startsWith("/posts");

              return (
                <div
                  key={l.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      to={l.route ?? "/insights"}
                      className={`text-sm font-medium tracking-wide transition-colors ${
                        isChildActive
                          ? "text-[#EE7F23] font-semibold"
                          : "text-foreground/80 hover:text-navy"
                      }`}
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Insights Menu"
                      aria-expanded={dropdownOpen}
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="p-1 text-foreground/60 hover:text-navy"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-[#EE7F23]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* DESKTOP DROPDOWN PANEL */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-80 rounded-2xl border border-border bg-white p-3 shadow-xl backdrop-blur-md"
                      >
                        <div className="space-y-1">
                          {insightsMenuItems.map((item) => {
                            const Icon = item.icon;
                            const isCurrent = pathname.startsWith(item.route);

                            return (
                              <Link
                                key={item.route}
                                to={item.route}
                                onClick={() => setDropdownOpen(false)}
                                className={`group flex items-start gap-3 rounded-xl p-2.5 transition-colors ${
                                  isCurrent ? "bg-orange-50/70" : "hover:bg-slate-50"
                                }`}
                              >
                                <div
                                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                    isCurrent
                                      ? "bg-[#EE7F23] text-white"
                                      : "bg-slate-100 text-[#071330] group-hover:bg-[#EE7F23] group-hover:text-white"
                                  } transition-colors`}
                                >
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <div
                                    className={`text-xs font-semibold ${
                                      isCurrent
                                        ? "text-[#EE7F23]"
                                        : "text-navy group-hover:text-[#EE7F23]"
                                    } transition-colors`}
                                  >
                                    {item.label}
                                  </div>
                                  <div className="text-[11px] leading-snug text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return renderLink(
              l,
              "text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-navy",
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/raj-kapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-(--shadow-gold) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            Get in Touch
          </a>

          {/* Mobile / tablet menu toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors hover:bg-navy/5 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[85vh] overflow-y-auto border-t border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5 px-5 py-5 sm:px-8">
              {renderLink(
                links[0],
                "rounded-xl px-4 py-2.5 text-base font-medium text-foreground/85 transition-all hover:bg-navy/5 hover:text-navy",
                () => setMobileOpen(false),
              )}
              {renderLink(
                links[1],
                "rounded-xl px-4 py-2.5 text-base font-medium text-foreground/85 transition-all hover:bg-navy/5 hover:text-navy",
                () => setMobileOpen(false),
              )}
              {renderLink(
                links[2],
                "rounded-xl px-4 py-2.5 text-base font-medium text-foreground/85 transition-all hover:bg-navy/5 hover:text-navy",
                () => setMobileOpen(false),
              )}

              {/* Mobile Insights Subgroup */}
              <div className="my-1 rounded-2xl bg-slate-50/80 p-3 border border-border/60">
                <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#EE7F23]">
                  Knowledge & Media
                </div>
                <div className="space-y-1 mt-1">
                  {insightsMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.route}
                        to={item.route}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-orange-50 hover:text-[#EE7F23]"
                      >
                        <Icon className="h-4 w-4 text-[#EE7F23]" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {renderLink(
                links[4],
                "rounded-xl px-4 py-2.5 text-base font-medium text-foreground/85 transition-all hover:bg-navy/5 hover:text-navy",
                () => setMobileOpen(false),
              )}
              {renderLink(
                links[5],
                "rounded-xl px-4 py-2.5 text-base font-medium text-foreground/85 transition-all hover:bg-navy/5 hover:text-navy",
                () => setMobileOpen(false),
              )}

              <a
                href="https://calendly.com/raj-kapoor"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-(--shadow-gold)"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Get in Touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
