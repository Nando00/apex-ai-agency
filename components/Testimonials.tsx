import React from "react";
import { motion, Variants } from "framer-motion";

const testimonials = [
    {
        quote: "The AI strategies implemented completely transformed our workflow efficiency. Truly a game changer.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow",
        company: "TechFlow"
    },
    {
        quote: "Their proprietary models gave us the competitive edge we needed in a crowded market.",
        author: "David Chen",
        role: "Founder, DataSphere",
        company: "DataSphere"
    },
    {
        quote: "Exceptional attention to detail and a deep understanding of autonomous agents.",
        author: "Elena Rodriguez",
        role: "VP of Product, InnovateX",
        company: "InnovateX"
    }
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
            ease: "easeOut",
        },
    },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-24 bg-black text-white">
            <div className="max-w-[90%] mx-auto">
                <div className="mb-16">
                    <span className="text-sm font-mono text-white/60 tracking-wider block mb-4">
                        {"// WHAT THEY SAY"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading">
                        Trusted by <span className="text-white/60">Visionaries</span>
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="mb-8 text-4xl text-white/20 font-serif">&quot;</div>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed min-h-[80px]">
                                {item.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{item.author}</h4>
                                    <p className="text-sm text-white/50">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
