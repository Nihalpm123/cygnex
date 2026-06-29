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
        <section id="services" className="py-24 bg-zinc-50/60 border-t border-zinc-100 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                        We fuse creativity with technology to deliver comprehensive, high-performance digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08, type: "spring", stiffness: 80 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -8, 
                                borderColor: "#09090b",
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)"
                            }}
                            className="p-8 rounded-2xl bg-white border border-zinc-200 transition-colors duration-300 group cursor-pointer flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="mb-6 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                                    <service.icon size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
