import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { DESKTOP_LENIS_OPTIONS } from "../../config/lenisOptions.js";
import { isDesktopLenisContext } from "../../utils/scrollEnvironment.js";

/**
 * Lenis only on desktop (fine pointer). Mobile uses native touch scroll —
 * syncTouch causes lag/jerk on most phones.
 */
export default function SmoothScroll({ children }) {
  const [enableLenis, setEnableLenis] = useState(() => isDesktopLenisContext());

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setEnableLenis(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enableLenis) {
    return children;
  }

  return (
    <ReactLenis root options={DESKTOP_LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
