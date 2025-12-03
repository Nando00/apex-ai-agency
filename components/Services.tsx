import React from "react";
import { motion, Variants } from "framer-motion";

const services = [
    {
        icon: (
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        title: "AI Strategy & Consulting",
        description: "We help businesses identify high-impact AI opportunities. Our strategic roadmap ensures seamless integration of AI into your existing workflows for maximum ROI.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
        ),
        title: "Custom LLM Development",
        description: "Tailored Large Language Models trained on your proprietary data. Secure, private, and specialized for your specific industry needs and terminology.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
            </svg>
        ),
        title: "Process Automation",
        description: "End-to-end automation of complex business processes using intelligent agents. Reduce manual overhead and eliminate errors with autonomous workflows.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
        ),
        title: "Predictive Analytics",
        description: "Unlock the power of your data with advanced predictive modeling. Forecast trends, optimize inventory, and make data-driven decisions with confidence.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom ease for smooth "tech" feel
        },
    },
};

export default function Services() {
    return (
        <section id="services" className="relative w-full py-24 lg:py-32 px-8 md:px-12 z-10 bg-black">
            <div className="max-w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column - Header */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-start">
                        <span className="text-sm font-mono text-white/60 mb-6 tracking-wider">
                            {"// EXPERTISE"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
                            <span className="text-white/80">Services</span>
                        </h2>
                    </div>

                    {/* Right Column - Grid */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col group"
                                    variants={itemVariants}
                                >
                                    {/* Icon & Title Row */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-heading text-white">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Divider Line */}
                                    <div className="w-full h-[1px] bg-white/20 mb-6 group-hover:bg-white/40 transition-colors duration-300" />

                                    {/* Description */}
                                    <p className="text-lg text-white/60 leading-relaxed max-w-sm">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
