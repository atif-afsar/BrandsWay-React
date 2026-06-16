import { useCallback } from "react";
import { useLenis } from "lenis/react";
import { SCROLL_OFFSET } from "../config/lenisOptions.js";
import { nativeScrollTo } from "../utils/nativeScrollTo.js";

/**
 * Scroll to a ref or element via Lenis (desktop) or native smooth scroll (mobile).
 */
export default function useSmoothScrollTo(offset = SCROLL_OFFSET) {
  const lenis = useLenis();

  return useCallback(
    (target) => {
      const el = target?.current ?? target;
      if (!el) return;

      if (lenis) {
        lenis.scrollTo(el, { offset, duration: 1.2 });
        return;
      }

      nativeScrollTo(el, offset);
    },
    [lenis, offset],
  );
}
