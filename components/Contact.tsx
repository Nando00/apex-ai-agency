import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full bg-white text-black overflow-hidden">
            {/* Top Marquee - Moved from Footer */}
            <div className="w-full bg-black text-white py-4 overflow-hidden flex whitespace-nowrap">
                <div className="animate-marquee flex gap-8 items-center">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-4xl md:text-6xl font-heading font-bold tracking-tight">Apex AI Automation</span>
                            <span className="text-sm font-mono text-gray-500">[2025]</span>
                        </React.Fragment>
                    ))}
                </div>
                <div className="animate-marquee flex gap-8 items-center ml-8" aria-hidden="true">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={`clone-${i}`}>
                            <span className="text-4xl md:text-6xl font-heading font-bold tracking-tight">Apex AI Automation</span>
                            <span className="text-sm font-mono text-gray-500">[2025]</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[90%] mx-auto py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16">

                    {/* Left: Large Brand Name */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-tighter leading-[0.9]">
                            Apex AI <br />
                            Automation
                        </h2>

                        <div className="mt-16 space-y-2">
                            <div className="flex items-center gap-2 text-blue-600 font-medium">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                Get in touch with us
                            </div>
                            <a
                                href="mailto:hello@apexai.com"
                                className="text-2xl md:text-3xl font-medium hover:text-blue-600 transition-colors block"
                            >
                                hello@apexai.com
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
                                    className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-black transition-colors"
                                >
                                    <span className="text-xl font-medium tracking-wide">{item}</span>
                                    <span className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-end gap-6">
                            <a href="#" className="font-bold text-xl hover:text-blue-600 transition-colors">LN</a>
                            <a href="#" className="font-bold text-xl hover:text-blue-600 transition-colors">X</a>
                            <a href="#" className="font-bold text-xl hover:text-blue-600 transition-colors">IG</a>
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
