"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full max-w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo-new.png"
            alt="Logo"
            width={140}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
          {['SERVICES', 'ABOUT', 'TESTIMONIALS', 'FAQ', 'CONTACT'].map((item) => (
            <li key={item} className="hover:text-white transition-colors cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg md:hidden flex flex-col items-center py-8 space-y-6 animate-in slide-in-from-top-5 duration-300">
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
      )}
    </nav>
  );
}
