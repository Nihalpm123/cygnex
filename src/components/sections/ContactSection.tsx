"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 md:py-24 bg-transparent border-t border-zinc-200/80 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-purple-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-blue-600 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4 sm:mb-6">
                            Let's Build the Future
                        </h2>
                        <p className="text-zinc-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                            Ready to elevate your brand? Tell us about your project, and let's craft something extraordinary together.
                        </p>

                        <div className="space-y-3.5">
                            <a 
                                href="mailto:cygnexle@gmail.com"
                                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-zinc-50/80 border border-zinc-200/90 text-zinc-700 hover:text-blue-600 hover:border-blue-200 transition-all group"
                            >
                                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Email</p>
                                    <p className="text-sm sm:text-base font-medium text-zinc-900 truncate">cygnexle@gmail.com</p>
                                </div>
                            </a>

                            <a 
                                href="tel:+919074063277"
                                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-zinc-50/80 border border-zinc-200/90 text-zinc-700 hover:text-blue-600 hover:border-blue-200 transition-all group"
                            >
                                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Phone</p>
                                    <p className="text-sm sm:text-base font-medium text-zinc-900 truncate">+91 9074063277</p>
                                </div>
                            </a>

                            <a 
                                href="https://wa.me/919074063277" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all font-semibold text-sm mt-1"
                            >
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50/80 border border-zinc-200/90 p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm"
                    >
                        <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full bg-white border border-zinc-200 rounded-xl p-3 sm:p-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition-all text-base sm:text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full bg-white border border-zinc-200 rounded-xl p-3 sm:p-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition-all text-base sm:text-sm"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white border border-zinc-200 rounded-xl p-3 sm:p-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition-all text-base sm:text-sm"
                            />
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={4}
                                className="w-full bg-white border border-zinc-200 rounded-xl p-3 sm:p-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition-all text-base sm:text-sm resize-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/10 cursor-pointer text-sm sm:text-base"
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
