"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Shield } from "lucide-react";

export default function AboutSection() {
    const principles = [
        {
            icon: Zap,
            title: "Performance Driven",
            description: "Rapid load times, clean structures, and optimized codebase.",
        },
        {
            icon: Heart,
            title: "Human-Centric UX",
            description: "Tailored interfaces crafted for perfect usability and accessibility.",
        },
        {
            icon: Shield,
            title: "Visionary Strategy",
            description: "Aligning clean design with concrete, measurable growth objectives.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-transparent border-t border-zinc-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
                            Our Philosophy
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
                            We Don't Just Design. <br />
                            <span className="text-blue-600">We Engineer Success.</span>
                        </h2>
                        <p className="text-zinc-650 text-lg mb-6 leading-relaxed">
                            At <strong className="text-zinc-900 font-semibold">Le Cygnex</strong>, we believe that powerful design is more than just aesthetics—it’s a strategic asset. We combine artistic vision with engineering precision to build digital experiences that convert, engage, and inspire.
                        </p>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-zinc-200">
                            <div>
                                <h4 className="text-4xl font-black text-zinc-900 mb-1 tracking-tight">50+</h4>
                                <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-zinc-900 mb-1 tracking-tight">100%</h4>
                                <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Principles Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
                    >
                        {/* Subtle glow orb inside card */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                        
                        <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">
                            Our Core Principles
                        </h3>
                        
                        <div className="space-y-8">
                            {principles.map((principle, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="flex gap-4 items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <div className="mt-1 p-2 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-lg">
                                        <principle.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 mb-1">{principle.title}</h4>
                                        <p className="text-zinc-650 text-sm leading-relaxed">{principle.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
