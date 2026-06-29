"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-transparent border-t border-zinc-200/80 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
                            Let's Build the Future
                        </h2>
                        <p className="text-zinc-650 text-lg mb-8 leading-relaxed">
                            Ready to elevate your brand? Tell us about your project, and let's craft something extraordinary together.
                        </p>
                        <div className="space-y-4 text-zinc-600 font-medium">
                            <p>Email: <span className="text-zinc-900">cygnexle@gmail.com</span></p>
                            <p>Phone: <span className="text-zinc-900">+91 9074063277</span></p>
                            <a 
                                href="https://wa.me/919074063277" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold mt-2"
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
                        className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl shadow-sm"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-white border border-zinc-200 rounded-xl p-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300 text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="bg-white border border-zinc-200 rounded-xl p-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300 text-sm"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300 text-sm"
                            />
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={4}
                                className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300 text-sm"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm cursor-pointer"
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
