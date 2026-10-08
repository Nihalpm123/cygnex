"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-transparent pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12">
            {/* Glowing background hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#07076b]/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

            {/* Content Container */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto w-full">
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
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="mb-4 sm:mb-6"
                    >
                        <span className="inline-block text-[11px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest text-[#07076b] uppercase bg-[#07076b]/10 border border-[#07076b]/20 px-3.5 py-1.5 rounded-full">
                            Digital Marketing & Design Agency
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-5 sm:mb-6 leading-[1.18] sm:leading-[1.1] max-w-4xl mx-auto"
                    >
                        Not Just Marketing. <br className="hidden xs:inline" />
                        <span className="text-[#07076b] relative">
                            A Competitive Advantage.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2"
                    >
                        High-performance websites and growth strategies for brands that play to win.
                        We turn ambition into architecture — every page, every pixel built to perform.
                        Because in a crowded market, only the sharpest brands get remembered.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="https://wa.me/919074063277"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto min-w-[170px] px-8 py-3.5 sm:py-4 bg-[#07076b] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#050552] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#07076b]/20 text-center"
                            >
                                Start Project <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/work"
                                className="w-full sm:w-auto min-w-[170px] px-8 py-3.5 sm:py-4 border border-zinc-200 text-zinc-800 hover:text-[#07076b] hover:border-[#07076b]/40 text-sm sm:text-base font-semibold rounded-full hover:bg-zinc-50 transition-all bg-white shadow-sm flex items-center justify-center text-center"
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
                className="w-full text-center flex flex-col items-center justify-center mt-6 sm:mt-8 shrink-0"
            >
                <Link href="#services" className="group flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-800 transition-colors">
                    <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
