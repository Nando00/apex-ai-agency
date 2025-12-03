import React from "react";
import { motion, Variants } from "framer-motion";

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

export default function About() {
    return (
        <section id="about" className="relative w-full py-24 lg:py-32 px-8 md:px-12 z-10 bg-black text-white overflow-hidden">
            <div className="max-w-[90%] mx-auto">
                <motion.div
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >


                    {/* Left Column - Title & Abstract Visual */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between relative items-center lg:items-start ">
                        <motion.div variants={itemVariants} className="flex flex-col gap-6 ">
                            <span className="text-sm font-mono text-white/60 mb-6 tracking-wider block">
                                {"// OUR ADVANTAGE"}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-12">
                                <span className="text-white/80">Advantage</span>
                            </h2>
                        </motion.div>

                        {/* Abstract Visual / Gradient Placeholder */}
                        <motion.div variants={itemVariants} className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-80 blur-2xl animate-pulse" />
                            <div className="absolute inset-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Description & Cards */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 leading-relaxed mb-16 max-w-xl">
                            Selected by top industry leaders, we offer unique AI strategies,
                            access to proprietary LLMs, and automated workflows,
                            setting us apart in the digital landscape.
                        </motion.p>

                        <motion.div variants={itemVariants} className="w-full h-[1px] bg-white/10 mb-12" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <div className="h-12 mb-4 flex items-center">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <span className="ml-3 text-lg font-bold tracking-wide">Proprietary Models</span>
                                </div>
                                <h4 className="text-white font-bold mb-2">Custom LLM Training</h4>
                                <p className="text-sm text-white/60">
                                    Models trained on your specific data for maximum accuracy and security.
                                </p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <div className="h-12 mb-4 flex items-center">
                                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="ml-3 text-lg font-bold tracking-wide">Autonomous Agents</span>
                                </div>
                                <h4 className="text-white font-bold mb-2">24/7 Automation</h4>
                                <p className="text-sm text-white/60">
                                    Intelligent agents that handle complex workflows without human intervention.
                                </p>
                            </motion.div>
                        </div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}
