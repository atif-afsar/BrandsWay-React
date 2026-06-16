/** True on phones / coarse-pointer devices where native scroll is smoother than Lenis. */
export function isMobileScrollContext() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
}

/** Desktop with fine pointer — safe to run Lenis wheel smoothing. */
export function isDesktopLenisContext() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 768px) and (pointer: fine)").matches;
}
