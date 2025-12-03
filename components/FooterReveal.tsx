"use client";

import React, { useEffect, useRef, useState } from "react";

interface FooterRevealProps {
    children: React.ReactNode;
}

export default function FooterReveal({ children }: FooterRevealProps) {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const updateHeight = () => {
                setHeight(ref.current?.offsetHeight || 0);
            };

            updateHeight();
            window.addEventListener("resize", updateHeight);

            return () => window.removeEventListener("resize", updateHeight);
        }
    }, []);

    return (
        <div
            className="relative z-0"
            style={{ height: height > 0 ? `${height}px` : "auto" }}
        >
            <div
                ref={ref}
                className="fixed bottom-0 left-0 w-full z-0"
            >
                {children}
            </div>
        </div>
    );
}
