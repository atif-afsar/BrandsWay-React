import { SCROLL_OFFSET } from "../config/lenisOptions.js";

/** Native smooth scroll with navbar offset — used when Lenis is off (mobile). */
export function nativeScrollTo(target, offset = SCROLL_OFFSET) {
  const el = target?.current ?? target;
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
