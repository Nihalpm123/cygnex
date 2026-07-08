"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent py-20">
            {/* Minimal Background Gridlines for Editorial Feel */}
            <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-24">
                <div className="w-[1px] h-full bg-white/5" />
                <div className="w-[1px] h-full bg-white/5 hidden md:block" />
                <div className="w-[1px] h-full bg-white/5 hidden md:block" />
                <div className="w-[1px] h-full bg-white/5" />
            </div>

            {/* Glowing background hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex-1 flex flex-col justify-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="inline-block text-xs md:text-sm font-bold tracking-widest text-blue-400 mb-4 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full"
                    >
                        Digital Marketing & Design Agency
                    </motion.span>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05]"
                    >
                        Sculpting <br />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent relative">
                            Digital Realities
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
                    >
                        Le Cygnex crafts exceptional digital experiences. We design, build, and optimize high-performance platforms to scale your brand with precision and aesthetic execution.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="https://wa.me/919074063277"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-violet-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
                            >
                                Start Project <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="/work"
                                className="px-8 py-4 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all bg-white/5 backdrop-blur-sm shadow-sm"
                            >
                                View Work
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bouncing Scroll Down Arrow */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="w-full text-center flex flex-col items-center justify-center"
            >
                <Link href="#services" className="group flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors">
                    <span className="text-xs tracking-widest uppercase font-medium">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}

