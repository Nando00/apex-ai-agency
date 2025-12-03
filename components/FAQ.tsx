"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How does your AI integration process work?",
        answer: "We start with a comprehensive audit of your current workflows. Then, we design a custom AI strategy, implement the necessary models and agents, and provide ongoing training and support to ensure seamless adoption."
    },
    {
        question: "Is my data secure with your proprietary models?",
        answer: "Absolutely. Security is our top priority. We deploy isolated instances of our models within your secure infrastructure, ensuring your data never leaves your control and is never used to train public models."
    },
    {
        question: "Can you integrate with our existing software stack?",
        answer: "Yes, our autonomous agents are designed to be platform-agnostic. We build custom connectors to integrate seamlessly with your CRM, ERP, and other enterprise software tools."
    },
    {
        question: "What makes your agency different from others?",
        answer: "Unlike generalist agencies, we specialize in building proprietary models and autonomous agents. We don't just wrap existing APIs; we engineer custom solutions that provide a genuine competitive advantage."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full py-24 bg-black text-white">
            <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-16">

                {/* Header */}
                <div className="w-full lg:w-1/3">
                    <span className="text-sm font-mono text-white/60 tracking-wider block mb-4">
            // FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading mb-6">
                        Common <br />
                        <span className="text-white/60">Questions</span>
                    </h2>
                    <p className="text-white/60 max-w-sm">
                        Everything you need to know about our services and how we work. Can't find the answer you're looking for? Contact us.
                    </p>
                </div>

                {/* Accordion */}
                <div className="w-full lg:w-2/3">
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`border-b border-white/10 transition-colors duration-300 ${openIndex === index ? 'bg-white/5 rounded-lg border-transparent' : ''}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between py-6 px-4 text-left focus:outline-none"
                                >
                                    <span className="text-xl font-medium pr-8">{faq.question}</span>
                                    <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-4 pt-0 text-white/70 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
