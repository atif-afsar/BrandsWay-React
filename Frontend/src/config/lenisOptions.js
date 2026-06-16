/** Desktop-only Lenis — touch devices use native momentum scroll (no syncTouch jank). */
export const DESKTOP_LENIS_OPTIONS = {
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 1,
  autoRaf: true,
  anchors: {
    offset: 88,
  },
};

/** Navbar + fixed header offset for programmatic scroll targets */
export const SCROLL_OFFSET = -88;
