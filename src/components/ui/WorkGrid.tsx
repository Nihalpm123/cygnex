"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
        category: "3D Animation",
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
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/3]"
                >
                    <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                    />

                    <Link
                        href={work.link}
                        target="_blank"
                        className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity"
                    >
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-primary text-sm font-medium mb-2">{work.category}</p>
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-white">{work.title}</h3>
                                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
