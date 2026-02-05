"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "CEO, NexTech",
        content: "Le Cygnex transformed our digital presence. Their 3D animations and sleek design completely elevated our brand perception.",
    },
    {
        name: "Sarah Chen",
        role: "Founder, Aura Studios",
        content: "The attention to detail is unmatched. An agency that truly understands the intersection of art and technology.",
    },
    {
        name: "Michael Ross",
        role: "Marketing Director, Velox",
        content: "Incredible results. Our conversion rates doubled after launching the new site. Highly recommended for premium brands.",
    },
];

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        Voices of Trust
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Partnering with visionaries to create digital excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors"
                        >
                            <Quote className="text-primary mb-6 opacity-50" size={40} />
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
