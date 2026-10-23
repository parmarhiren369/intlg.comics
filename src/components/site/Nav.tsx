import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { scrollToHash, PAGE_X } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  route?: string;
};

const links: NavLink[] = [
  { label: "About", href: "", route: "/about" },
  { label: "Services", href: "", route: "/services" },
  { label: "Industries", href: "", route: "/industries" },
  { label: "Insights", href: "", route: "/videos" },
  { label: "Testimonials", href: "", route: "/testimonials" },
  { label: "Contact", href: "", route: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const renderLink = (l: NavLink, cls: string, onClick?: () => void) => {
    const isInsights = l.label === "Insights";
    const isActive = isInsights
      ? pathname.startsWith("/videos") || pathname.startsWith("/insights")
      : l.route === "/"
        ? pathname === "/"
        : l.route
          ? pathname.startsWith(l.route)
          : false;

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
          className={`${cls} ${isActive ? "text-[#EE7F23] font-semibold" : ""}`}
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
        className={`${cls} ${isActive ? "text-[#EE7F23] font-semibold" : ""}`}
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
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) =>
            renderLink(
              l,
              "text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-navy",
            ),
          )}
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
            className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 px-5 py-5 sm:px-8">
              {links.map((l) =>
                renderLink(
                  l,
                  "rounded-xl px-4 py-3 text-base font-medium text-foreground/85 transition-all duration-300 hover:bg-navy/5 hover:text-navy",
                  () => setMobileOpen(false),
                ),
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
