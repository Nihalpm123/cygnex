"use client";

import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Video, PenTool, Cpu } from "lucide-react";

const services = [
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Visually stunning branding and creative assets that resonate.",
    },
    {
        icon: Globe,
        title: "Web Design",
        description: "Immersive websites built for performance and aesthetic excellence.",
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Robust mobile applications for iOS and Android platforms.",
    },
    {
        icon: Video,
        title: "Animation",
        description: "Captivating 3D and 2D animations to bring stories to life.",
    },
    {
        icon: Cpu,
        title: "AI & Automation",
        description: "Cutting-edge AI video creation and intelligent workflows.",
    },
    {
        icon: PenTool,
        title: "Content Writing",
        description: "Compelling narratives and SEO-driven content strategies.",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We fuse creativity with technology to deliver comprehensive digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10 group cursor-pointer"
                        >
                            <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
