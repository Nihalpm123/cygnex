"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Let's Build the Future
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Ready to elevate your brand? Tell us about your project, and let's craft something extraordinary together.
                        </p>
                        <div className="space-y-4 text-gray-300">
                            <p>Email: cygnexle@gmail.com</p>
                            <p>Phone: +91 9074063277</p>
                            <a href="https://wa.me/919074063277" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
