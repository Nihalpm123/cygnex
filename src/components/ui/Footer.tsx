import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tighter text-white">
                        <span className="text-primary">Le</span> Cygnex
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Sculpting digital realities through premium design, intelligent code, and visionary content.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">3D & Animation</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">AI Content</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Connect</h4>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        <Link href="mailto:hello@lecygnex.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} Le Cygnex. All rights reserved.
            </div>
        </footer>
    );
}
