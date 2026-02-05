"use client";

import Hero3D from "@/components/canvas/Hero3D";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Hero3D />

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm md:text-base font-bold tracking-widest text-primary mb-4 uppercase">
                        Digital Marketing Agency
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
                        Sculpting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Digital Realities
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Le Cygnex is where innovation meets aesthetic. We craft high-performance websites, 3D animations, and AI-driven content to elevate your brand.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="https://wa.me/919074063277"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            Start Project <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/work"
                            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            View Work
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
