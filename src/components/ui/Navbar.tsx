"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "/work") {
            // standard navigation to work page
            return;
        }
        if (href.startsWith("/#") && window.location.pathname === "/") {
            e.preventDefault();
            const targetId = href.replace("/#", "");
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else if (href === "/" && window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Mobile backdrop overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-zinc-900/20 backdrop-blur-xs md:hidden"
                    />
                )}
            </AnimatePresence>

            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 md:p-6 pointer-events-none">
                <nav
                    className={`pointer-events-auto w-full max-w-6xl border border-zinc-200/90 bg-white/90 md:bg-zinc-100/90 backdrop-blur-md shadow-lg shadow-zinc-900/5 transition-all duration-300 ${
                        isOpen ? "rounded-2xl sm:rounded-3xl border-zinc-300 shadow-xl" : "rounded-full"
                    }`}
                >
                    <div className="px-4 sm:px-6 h-13 sm:h-14 md:h-16 flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group shrink-0"
                            onClick={(e) => {
                                handleScroll(e, "/");
                                setIsOpen(false);
                            }}
                        >
                            <div className="relative w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Le Cygnex Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-[#07076b]">
                                LE CYGNEX
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs md:text-sm font-semibold text-zinc-600 hover:text-[#07076b] transition-colors relative py-1"
                                    onClick={(e) => handleScroll(e, link.href)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                <Link 
                                    href="https://wa.me/919074063277" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-5 py-2 bg-[#07076b] text-white rounded-full text-xs font-bold hover:bg-[#050552] transition-all duration-300 shadow-md shadow-[#07076b]/20"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-zinc-700 hover:text-[#07076b] transition-colors cursor-pointer rounded-full hover:bg-zinc-100"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Mobile Nav Dropdown */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="md:hidden border-t border-zinc-200/80 overflow-hidden"
                            >
                                <div className="px-5 py-4 flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:text-[#07076b] hover:bg-[#07076b]/10 transition-colors"
                                            onClick={(e) => {
                                                handleScroll(e, link.href);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <div className="pt-2 mt-1 border-t border-zinc-200/60">
                                        <Link 
                                            href="https://wa.me/919074063277" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-full py-3 bg-[#07076b] text-white text-center rounded-xl text-sm font-bold hover:bg-[#050552] transition-all shadow-md shadow-[#07076b]/20 block active:scale-[0.99]"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>
        </>
    );
}
