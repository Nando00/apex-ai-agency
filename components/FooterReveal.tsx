"use client";

import React, { useEffect, useRef, useState } from "react";

interface FooterRevealProps {
    children: React.ReactNode;
}

export default function FooterReveal({ children }: FooterRevealProps) {
    const [height, setHeight] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const updateDimensions = () => {
            if (ref.current) {
                const contentHeight = ref.current.offsetHeight;
                setHeight(contentHeight);
                // Enable only if screen is large (>= 1024px) AND content fits in viewport
                // This prevents the top of the content from being cut off if it's too tall
                setIsEnabled(window.innerWidth >= 1024 && contentHeight <= window.innerHeight);
            }
        };

        // Initial update
        updateDimensions();

        // Use ResizeObserver to detect size changes of the content itself
        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
        });

        resizeObserver.observe(ref.current);

        // Also listen to window resize to update enabled state based on viewport size
        window.addEventListener("resize", updateDimensions);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <div
            className="relative z-0"
            style={{ height: isEnabled ? `${height}px` : "auto" }}
        >
            <div
                ref={ref}
                className={`${isEnabled ? "fixed bottom-0" : "relative"} left-0 w-full z-0`}
            >
                {children}
            </div>
        </div>
    );
}
