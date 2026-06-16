/** Shared Lenis config — syncTouch keeps momentum smooth on mobile swipe. */
export const LENIS_OPTIONS = {
  lerp: 0.08,
  duration: 1.15,
  smoothWheel: true,
  syncTouch: true,
  syncTouchLerp: 0.1,
  touchMultiplier: 1.15,
  touchInertiaExponent: 1.6,
  wheelMultiplier: 1,
  autoRaf: true,
  allowNestedScroll: true,
  anchors: {
    offset: 88,
  },
};

/** Navbar + fixed header offset for programmatic scroll targets */
export const SCROLL_OFFSET = -88;
