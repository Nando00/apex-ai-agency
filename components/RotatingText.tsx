"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Automate ambition. Accelerate growth.",
  "Automating the empire you’re building.",
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <h1
        className={`text-7xl md:text-8xl lg:text-9xl font-heading text-white leading-tight transition-all duration-500 ${isAnimating
          ? "opacity-0 translate-y-10"
          : "opacity-100 translate-y-0"
          }`}
      >
        {phrases[currentIndex]}
      </h1>
    </div>
  );
}
