"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import WorkGrid from "@/components/ui/WorkGrid";

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 md:py-24 bg-transparent border-t border-zinc-200/80 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#07076b]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#07076b] uppercase bg-[#07076b]/10 border border-[#07076b]/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Sparkles size={12} />
                Selected Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900"
            >
              Completed <span className="text-[#07076b]">Masterpieces</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-2xl mt-3 leading-relaxed"
            >
              Real completed projects categorized by Logo, Poster, Branding, Website, and Social Media. Engineered with aesthetic mastery and brand precision.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#07076b] text-white text-xs sm:text-sm font-bold hover:bg-[#050552] transition-all shadow-md shadow-[#07076b]/20 group"
            >
              <Layers size={15} />
              <span>Explore All Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Work Grid with Category Filters */}
        <WorkGrid limit={6} showSearch={false} />

        {/* Bottom Banner to Visit Full Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-zinc-50 via-[#07076b]/5 to-zinc-50 border border-zinc-200/90 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
              Ready to see the complete archive?
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1 max-w-xl">
              Browse our complete library of completed logos, posters, branding kits, e-commerce stores, and social media campaigns.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/work"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#07076b] text-white text-xs sm:text-sm font-bold hover:bg-[#050552] transition-all shadow-md shadow-[#07076b]/20 text-center"
            >
              Open Full Work Gallery (34 Projects)
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
