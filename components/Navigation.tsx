"use client";
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="w-full max-w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo-2.png" alt="Logo" width={140} height={100} />
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#services">SERVICES</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#testimonials">TESTIMONIALS</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#faq">FAQ</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
