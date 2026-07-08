"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
            <nav className="pointer-events-auto w-full max-w-6xl rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-2xl transition-all duration-300">
                <div className="px-6 h-14 md:h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Le Cygnex Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-lg md:text-xl font-black tracking-tighter text-white">
                            <span className="text-blue-400">Le</span> Cygnex
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs md:text-sm font-medium text-zinc-400 hover:text-white transition-colors relative py-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                href="https://wa.me/919074063277" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-blue-400 transition-colors cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-white/5 overflow-hidden rounded-b-3xl"
                        >
                            <div className="px-6 py-4 flex flex-col gap-3.5 bg-zinc-950/95 backdrop-blur-md">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-base font-semibold text-zinc-300 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link 
                                    href="https://wa.me/919074063277" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-full text-sm font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md block mt-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

