"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

// Define a type for legacy MediaQueryList methods (without deprecation warnings)
type LegacyMediaQueryList = {
  addListener: (callback: (event: MediaQueryListEvent) => void) => void;
  removeListener: (callback: (event: MediaQueryListEvent) => void) => void;
};

/**
 * Hook to detect if the device is mobile.
 * Uses CSS media queries for better SSR compatibility.
 * Returns false during SSR and initial render to ensure consistent hydration.
 */
export function useIsMobile() {
  // Start with false to match SSR (assumes desktop by default)
  // This ensures server and client render the same initial HTML
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Mark as mounted after hydration
    setHasMounted(true);

    // Use matchMedia for better performance and accuracy
    // This matches CSS media queries exactly
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Handler function
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Use modern API if available, fallback to legacy for older browsers
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else if (typeof (mediaQuery as unknown as LegacyMediaQueryList).addListener === "function") {
      // Legacy browser support (IE, very old browsers) - using type assertion to bypass deprecation warnings
      const legacyMql = mediaQuery as unknown as LegacyMediaQueryList;
      legacyMql.addListener(handleChange);
      return () => {
        legacyMql.removeListener(handleChange);
      };
    }

    return () => { };
  }, []);

  // Return false during SSR and initial render to ensure consistent hydration
  // Only return the actual value after the component has mounted on the client
  return hasMounted ? isMobile : false;
}
