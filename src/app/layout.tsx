import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Le Cygnex | Premium Digital Marketing & Design Agency",
    template: "%s | Le Cygnex"
  },
  description: "Le Cygnex engineers high-performance websites and growth strategies for brands that play to win. Custom web design, app development, SEO, and AI automation.",
  keywords: ["digital marketing agency", "web design", "app development", "AI automation", "SEO services", "Le Cygnex", "creative design agency"],
  authors: [{ name: "Le Cygnex" }],
  creator: "Le Cygnex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lecygnex.com",
    title: "Le Cygnex | Premium Digital Marketing & Design Agency",
    description: "Le Cygnex engineers high-performance websites and growth strategies for brands that play to win.",
    siteName: "Le Cygnex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Cygnex | Premium Digital Marketing & Design Agency",
    description: "Le Cygnex engineers high-performance websites and growth strategies for brands that play to win.",
    creator: "@le_cygnex",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-zinc-900 min-h-screen relative overflow-x-hidden`}>
        <InteractiveBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

