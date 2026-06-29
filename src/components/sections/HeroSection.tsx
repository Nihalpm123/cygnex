"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white py-20">
            {/* Minimal Background Gridlines for Editorial Feel */}
            <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-24">
                <div className="w-[1px] h-full bg-zinc-100" />
                <div className="w-[1px] h-full bg-zinc-100 hidden md:block" />
                <div className="w-[1px] h-full bg-zinc-100 hidden md:block" />
                <div className="w-[1px] h-full bg-zinc-100" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
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
                        className="inline-block text-xs md:text-sm font-bold tracking-widest text-primary mb-4 uppercase bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                    >
                        Digital Marketing & Design Agency
                    </motion.span>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 mb-6 leading-[1.05]"
                    >
                        Sculpting <br />
                        <span className="text-zinc-900 relative">
                            Digital Realities
                            <span className="absolute bottom-1 left-0 w-full h-[6px] bg-blue-100 -z-10" />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
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
                                className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-lg shadow-zinc-900/20"
                            >
                                Start Project <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="https://www.instagram.com/le_cygnex?igsh=MjJ5dmtjeXl5c2Zw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-zinc-200 text-zinc-950 font-semibold rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-colors bg-white shadow-sm"
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
                <Link href="#services" className="group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-900 transition-colors">
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
