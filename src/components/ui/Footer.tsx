import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-transparent border-t border-zinc-200/80 pt-12 sm:pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900">
                        <span className="text-blue-600">Le</span> Cygnex
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                        Sculpting digital realities through premium design, intelligent code, and visionary strategy.
                    </p>
                </div>

                <div>
                    <h4 className="text-zinc-900 font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Services</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                        <li><Link href="#services" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
                        <li><Link href="#services" className="hover:text-blue-600 transition-colors">UI/UX Design</Link></li>
                        <li><Link href="#services" className="hover:text-blue-600 transition-colors">AI Content</Link></li>
                        <li><Link href="#services" className="hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-zinc-900 font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Company</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                        <li><Link href="#about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                        <li><Link href="/work" className="hover:text-blue-600 transition-colors">Our Work</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-zinc-900 font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Connect</h4>
                    <div className="flex gap-2.5 sm:gap-3">
                        <Link 
                            href="#" 
                            aria-label="Twitter"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                        >
                            <Twitter size={16} />
                        </Link>
                        <Link 
                            href="https://www.instagram.com/le_cygnex?igsh=MjJ5dmtjeXl5c2Zw" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/50 transition-all"
                        >
                            <Instagram size={16} />
                        </Link>
                        <Link 
                            href="#" 
                            aria-label="LinkedIn"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                        >
                            <Linkedin size={16} />
                        </Link>
                        <Link 
                            href="mailto:cygnexle@gmail.com" 
                            aria-label="Email"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                        >
                            <Mail size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-200/80 text-center text-xs text-zinc-400 font-medium">
                © {new Date().getFullYear()} Le Cygnex. All rights reserved.
            </div>
        </footer>
    );
}
