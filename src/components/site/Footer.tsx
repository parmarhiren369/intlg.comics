import { Link } from "@tanstack/react-router";
import { PAGE_X } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div
        className={`flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row ${PAGE_X}`}
      >
        <div>© {new Date().getFullYear()} Legacy Digitronics Pvt. Ltd. All rights reserved.</div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
          <Link to="/insights" className="transition-colors hover:text-[#EE7F23]">
            Insights
          </Link>
          <Link to="/articles" className="transition-colors hover:text-[#EE7F23]">
            Articles
          </Link>
          <Link to="/videos" className="transition-colors hover:text-[#EE7F23]">
            Videos
          </Link>
          <Link to="/posts" className="transition-colors hover:text-[#EE7F23]">
            Posts
          </Link>
          <Link to="/industries" className="transition-colors hover:text-[#EE7F23]">
            Industries
          </Link>
          <Link to="/agreements" className="transition-colors hover:text-[#EE7F23]">
            Agreements & Compliance
          </Link>
          <Link to="/contact" className="transition-colors hover:text-[#EE7F23]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
