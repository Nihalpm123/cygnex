"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-transparent border-t border-zinc-900/80 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
                            Let's Build the Future
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Ready to elevate your brand? Tell us about your project, and let's craft something extraordinary together.
                        </p>
                        <div className="space-y-4 text-zinc-400 font-medium">
                            <p>Email: <span className="text-white ml-2">cygnexle@gmail.com</span></p>
                            <p>Phone: <span className="text-white ml-2">+91 9074063277</span></p>
                            <a 
                                href="https://wa.me/919074063277" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold mt-2"
                            >
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/20 border border-zinc-800/80 p-8 rounded-3xl shadow-xl backdrop-blur-sm"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-black/40 border border-zinc-800 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-350 text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="bg-black/40 border border-zinc-800 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-350 text-sm"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-black/40 border border-zinc-800 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-350 text-sm"
                            />
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={4}
                                className="w-full bg-black/40 border border-zinc-800 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-350 text-sm"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/15 cursor-pointer"
                            >
                                Send Message <Send size={16} />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

