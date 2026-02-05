"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 rounded-full" />
                        <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            We Don't Just Design. <br />
                            <span className="text-primary">We Engineer Success.</span>
                        </h2>
                        <p className="relative text-gray-400 text-lg mb-6">
                            At <strong className="text-white">Le Cygnex</strong>, we believe that powerful design is more than just aesthetics—it’s a strategic asset. We combine artistic vision with data-driven insights to build digital experiences that convert, engage, and inspire.
                        </p>
                        <div className="relative grid grid-cols-2 gap-8 mt-8">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">50+</h4>
                                <p className="text-gray-500 text-sm">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                                <p className="text-gray-500 text-sm">Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8 text-center"
                    >
                        {/* Abstract Graphic Placeholder */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                            <p className="text-gray-400">
                                Leveraging the latest in AI and 3D web technologies to keep you ahead of the curve.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
