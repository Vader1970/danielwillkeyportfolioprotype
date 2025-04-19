"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

// Define a type that includes both modern and legacy MediaQueryList methods
type MediaQueryListWithLegacy = MediaQueryList & {
  /** @deprecated Use addEventListener('change', callback) instead */
  addListener?: (callback: (event: MediaQueryListEvent) => void) => void;
  /** @deprecated Use removeEventListener('change', callback) instead */
  removeListener?: (callback: (event: MediaQueryListEvent) => void) => void;
};

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    // This only runs on the client
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Check immediately
    checkIfMobile();

    // Set up event listener with passive option for better performance
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`) as MediaQueryListWithLegacy;

    // Modern browsers use addEventListener, older browsers use addListener
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", checkIfMobile, { passive: true });
      return () => mql.removeEventListener("change", checkIfMobile);
    } else if (typeof mql.addListener === "function") {
      // For older browsers (like IE) that don't support addEventListener
      mql.addListener(checkIfMobile);
      return () => {
        if (mql.removeListener) {
          mql.removeListener(checkIfMobile);
        }
      };
    }

    // Fallback if no event listener method is available
    return () => {};
  }, []);

  // Return false during SSR and initial render, then actual value after hydration
  return isMobile === null ? false : isMobile;
}
