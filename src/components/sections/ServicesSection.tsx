"use client";

import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Video, PenTool, Cpu } from "lucide-react";

const services = [
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Visually stunning branding and creative assets that resonate.",
        glowClass: "hover:border-rose-500/40",
        iconColor: "text-rose-600 bg-rose-500/10 group-hover:bg-rose-600 group-hover:text-white"
    },
    {
        icon: Globe,
        title: "Web Design",
        description: "Immersive websites built for performance and aesthetic excellence.",
        glowClass: "hover:border-cyan-500/40",
        iconColor: "text-cyan-600 bg-cyan-500/10 group-hover:bg-cyan-600 group-hover:text-white"
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Robust mobile applications for iOS and Android platforms.",
        glowClass: "hover:border-violet-500/40",
        iconColor: "text-violet-600 bg-violet-500/10 group-hover:bg-violet-600 group-hover:text-white"
    },
    {
        icon: Video,
        title: "Animation",
        description: "Captivating 3D and 2D animations to bring stories to life.",
        glowClass: "hover:border-amber-500/40",
        iconColor: "text-amber-600 bg-amber-500/10 group-hover:bg-amber-600 group-hover:text-white"
    },
    {
        icon: Cpu,
        title: "AI & Automation",
        description: "Cutting-edge AI video creation and intelligent workflows.",
        glowClass: "hover:border-emerald-500/40",
        iconColor: "text-emerald-600 bg-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white"
    },
    {
        icon: PenTool,
        title: "Content Writing",
        description: "Compelling narratives and SEO-driven content strategies.",
        glowClass: "hover:border-pink-500/40",
        iconColor: "text-pink-600 bg-pink-500/10 group-hover:bg-pink-600 group-hover:text-white"
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-transparent border-t border-zinc-200 relative">
            {/* Ambient background glow */}
            <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <p className="text-zinc-650 max-w-2xl mx-auto text-lg leading-relaxed">
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
                                y: -8
                            }}
                            className={`p-8 rounded-2xl bg-zinc-50 border border-zinc-200 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full shadow-sm hover:shadow-md ${service.glowClass}`}
                        >
                            <div>
                                <div className={`mb-6 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${service.iconColor}`}>
                                    <service.icon size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors duration-350">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-650 leading-relaxed text-sm group-hover:text-zinc-900 transition-colors duration-300">
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

