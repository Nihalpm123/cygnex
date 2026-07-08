import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-transparent border-t border-zinc-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tighter text-white">
                        <span className="text-blue-400">Le</span> Cygnex
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Sculpting digital realities through premium design, intelligent code, and visionary strategy.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</h4>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li><Link href="#services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
                        <li><Link href="#services" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
                        <li><Link href="#services" className="hover:text-blue-400 transition-colors">AI Content</Link></li>
                        <li><Link href="#services" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Company</h4>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link href="/work" className="hover:text-blue-400 transition-colors">Our Work</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
                    <div className="flex gap-4">
                        <Link href="#" className="text-zinc-400 hover:text-white transition-colors"><Twitter size={18} /></Link>
                        <Link href="https://www.instagram.com/le_cygnex?igsh=MjJ5dmtjeXl5c2Zw" target="_blank" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={18} /></Link>
                        <Link href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                        <Link href="mailto:cygnexle@gmail.com" className="text-zinc-400 hover:text-white transition-colors"><Mail size={18} /></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-500">
                © {new Date().getFullYear()} Le Cygnex. All rights reserved.
            </div>
        </footer>
    );
}

