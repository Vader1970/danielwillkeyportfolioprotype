"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if a component has mounted on the client.
 * Useful for preventing hydration mismatches when rendering
 * client-only content.
 * 
 * @returns true if component has mounted on the client, false otherwise
 * 
 * @example
 * ```tsx
 * const mounted = useMounted();
 * 
 * return (
 *   <div>
 *     {mounted && <ClientOnlyComponent />}
 *   </div>
 * );
 * ```
 */
export function useMounted(): boolean {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

