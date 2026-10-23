import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shared horizontal page container — the single source of truth for
 * max-width + padding used across every page/section so alignment stays
 * consistent site-wide. Import this everywhere instead of hardcoding
 * max-w/px classes.
 */
export const PAGE_X =
  "w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16";

export function scrollToHash(hash: string) {
  if (typeof window === "undefined") {
    return;
  }

  const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(targetId);

  if (!element) {
    return;
  }

  const headerOffset = 112;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(elementTop - headerOffset, 0),
    behavior: "smooth",
  });
}
