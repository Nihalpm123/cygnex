"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle2, MessageCircle, ExternalLink, Award } from "lucide-react";
import { Project } from "@/lib/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
}: ProjectModalProps) {
  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev && hasPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext && hasNext) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-zinc-200/90 overflow-hidden my-auto max-h-[92vh] flex flex-col"
          >
            {/* Top Bar with Controls */}
            <div className="flex items-center justify-between px-5 py-3.5 sm:px-7 sm:py-4 border-b border-zinc-100 bg-zinc-50/80 sticky top-0 z-20">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#07076b]/10 text-[#07076b] border border-[#07076b]/20">
                  {project.categoryLabel}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {project.client} • {project.year}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {onPrev && (
                  <button
                    onClick={onPrev}
                    disabled={!hasPrev}
                    className="p-1.5 sm:p-2 rounded-full border border-zinc-200 hover:bg-white hover:border-[#07076b]/30 text-zinc-600 hover:text-[#07076b] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
                {onNext && (
                  <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className="p-1.5 sm:p-2 rounded-full border border-zinc-200 hover:bg-white hover:border-[#07076b]/30 text-zinc-600 hover:text-[#07076b] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    aria-label="Next Project"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-full border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-all cursor-pointer ml-1"
                  aria-label="Close Modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6">
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-inner group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Completed & Delivered
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-1 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Impact / Metric Badge Box */}
              <div className="p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#07076b]/10 via-[#07076b]/5 to-transparent border border-[#07076b]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#07076b] text-white shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#07076b]">
                    Key Result & Performance
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-zinc-900 mt-0.5">
                    {project.metrics}
                  </p>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Two Column Section: Deliverables & Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {/* Deliverables */}
                <div className="bg-zinc-50/80 border border-zinc-200/90 p-4 sm:p-5 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Delivered Assets
                  </h4>
                  <ul className="space-y-2">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-800 font-medium">
                        <CheckCircle2 size={15} className="text-[#07076b] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Tech Stack */}
                <div className="bg-zinc-50/80 border border-zinc-200/90 p-4 sm:p-5 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-zinc-200 text-zinc-700 shadow-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Call to Action */}
            <div className="p-4 sm:p-6 bg-zinc-50 border-t border-zinc-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
              <p className="text-xs text-zinc-500 text-center sm:text-left">
                Need a similar solution for your brand? We're ready to engineer it.
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={project.liveUrl || "https://wa.me/919074063277"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#07076b] text-white font-bold text-xs sm:text-sm hover:bg-[#050552] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#07076b]/20"
                >
                  <MessageCircle size={15} />
                  Discuss Similar Project
                </Link>
                <button
                  onClick={onClose}
                  className="hidden sm:inline-flex px-4 py-2.5 rounded-full border border-zinc-300 text-zinc-700 font-semibold text-xs hover:bg-zinc-100 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
