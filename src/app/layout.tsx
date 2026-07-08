import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Cygnex | Digital Marketing Agency",
  description: "Sculpting Digital Realities. Premium digital marketing, web design, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-zinc-100 min-h-screen relative overflow-x-hidden`}>
        <InteractiveBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

