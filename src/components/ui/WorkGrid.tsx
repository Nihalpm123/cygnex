"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const works = [
    {
        title: "Neon Horizon",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        link: "https://example.com/neon-horizon",
    },
    {
        title: "EcoSphere",
        category: "Branding & App",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb77c356?q=80&w=2662&auto=format&fit=crop",
        link: "https://example.com/ecosphere",
    },
    {
        title: "Aura AI",
        category: "AI Solution",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
        link: "https://example.com/aura-ai",
    },
    {
        title: "Velox Racing",
        category: "Creative Strategy",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
        link: "https://example.com/velox",
    },
    {
        title: "Lumina",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "https://example.com/lumina",
    },
    {
        title: "CyberPulse",
        category: "Marketing Campaign",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        link: "https://example.com/cyberpulse",
    },
];

export default function WorkGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 80 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl bg-zinc-900/30 border border-zinc-800/80 aspect-[4/3] cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300"
                >
                    <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <Link
                        href={work.link}
                        target="_blank"
                        className="absolute inset-0 z-20"
                    >
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-md border-t border-white/5 p-5 translate-y-[calc(100%-72px)] group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">{work.category}</span>
                                    <h3 className="text-lg font-bold text-white mt-1">{work.title}</h3>
                                </div>
                                <div className="p-2 bg-zinc-900 text-zinc-300 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-white/5">
                                    <ExternalLink size={14} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-1.5 text-xs font-bold text-zinc-300">
                                Explore Project <ArrowRight size={12} />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

