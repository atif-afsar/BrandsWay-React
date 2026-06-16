import React from "react";
import { ReactLenis } from "lenis/react";
import { LENIS_OPTIONS } from "../../config/lenisOptions.js";

/** Root Lenis instance — smooth wheel + touch (mobile) sitewide. */
export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
