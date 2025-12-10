"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down (if scrolled past 100px), show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isMenuOpen ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <div className="w-full max-w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo-new.png"
            alt="Logo"
            width={140}
            height={100}
            className={`object-contain transition-all duration-300 ${isMenuOpen ? "invert" : ""}`}
          />
        </div>

        {/* Desktop Navigation Menu */}
        <ul className={`hidden md:flex items-center space-x-8 text-sm font-medium ${isMenuOpen ? "text-black/80" : "text-white/80"}`}>
          {['SERVICES', 'ABOUT', 'TESTIMONIALS', 'FAQ', 'CONTACT'].map((item) => (
            <li key={item} className="hover:text-current transition-colors cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block ml-8">
          <a
            href="https://cal.com/astrodiverge/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${isMenuOpen ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"}`}
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${isMenuOpen ? "text-black" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white text-black shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {['SERVICES', 'ABOUT', 'TESTIMONIALS', 'FAQ', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            {/* Mobile CTA Button */}
            <div className="px-8 pb-8 w-full">
              <a
                href="https://cal.com/astrodiverge/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-black text-white text-center rounded-full font-bold text-lg tracking-wide hover:bg-gray-800 transition-colors"
              >
                BOOK NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
