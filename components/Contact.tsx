import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full bg-white text-black overflow-hidden">
            {/* Top Marquee - Moved from Footer */}
            <div className="w-full bg-black text-white py-4 overflow-hidden flex whitespace-nowrap relative z-10">
                <div className="animate-marquee flex gap-8 items-center min-w-full pr-8 flex-shrink-0">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-2xl md:text-4xl lg:text-6xl font-heading font-bold tracking-tight">Astro Diverge AI Automation</span>
                            <span className="text-xs md:text-sm font-mono text-gray-500">[2025]</span>
                        </React.Fragment>
                    ))}
                </div>
                <div className="animate-marquee flex gap-8 items-center min-w-full pr-8 flex-shrink-0" aria-hidden="true">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={`clone-${i}`}>
                            <span className="text-2xl md:text-4xl lg:text-6xl font-heading font-bold tracking-tight">Astro Diverge AI Automation</span>
                            <span className="text-xs md:text-sm font-mono text-gray-500">[2025]</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[95%] md:max-w-[90%] mx-auto py-8 md:py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-16">

                    {/* Left: Large Brand Name */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading tracking-tighter leading-[0.9]">
                            Astro Diverge <br />
                            AI Automation
                        </h2>

                        <div className="mt-8 md:mt-16 space-y-2">
                            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm md:text-base">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                Get in touch with us
                            </div>
                            <a
                                href="mailto:support@astrodiverge.com"
                                className="text-xl md:text-2xl lg:text-3xl font-medium hover:text-blue-600 transition-colors block break-all"
                            >
                                support@astrodiverge.com
                            </a>
                        </div>
                    </div>

                    {/* Right: Navigation Links */}
                    <div className="w-full lg:w-1/3">
                        <div className="flex flex-col">
                            {['SERVICES', 'ABOUT', 'TESTIMONIALS', 'FAQ'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="group flex items-center justify-between py-4 md:py-6 border-b border-gray-200 hover:border-black transition-colors"
                                >
                                    <span className="text-lg md:text-xl font-medium tracking-wide">{item}</span>
                                    <span className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 md:mt-12 flex justify-end gap-6">
                            <a href="#" className="font-bold text-lg md:text-xl hover:text-blue-600 transition-colors">LN</a>
                            <a href="#" className="font-bold text-lg md:text-xl hover:text-blue-600 transition-colors">X</a>
                            <a href="#" className="font-bold text-lg md:text-xl hover:text-blue-600 transition-colors">IG</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
        </section>
    );
}
