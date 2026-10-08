"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during loading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Smooth progress simulation
    const startTime = Date.now();
    const duration = 1000; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = originalOverflow;
        }, 200);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            filter: "blur(8px)",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-auto"
        >
          {/* Subtle ambient brand aura */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#07076b]/10 blur-[80px] pointer-events-none" />
          <div className="absolute w-44 h-44 rounded-full bg-amber-400/15 blur-[60px] pointer-events-none translate-x-10 translate-y-8" />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Logo container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative mb-5"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-3 rounded-2xl bg-white border border-zinc-200/90 shadow-xl shadow-[#07076b]/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Le Cygnex Logo"
                  width={84}
                  height={84}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Ping glow ring around logo */}
              <span className="absolute -inset-1.5 rounded-2xl bg-[#07076b]/20 animate-ping -z-10 opacity-70" />
            </motion.div>

            {/* Brand title */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-center mb-6"
            >
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#07076b]">
                LE CYGNEX
              </h1>
              <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500 mt-1">
                Digital Marketing & Design Agency
              </p>
            </motion.div>

            {/* Slim Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "160px" }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="h-1.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200 shadow-inner relative"
            >
              <div
                className="h-full bg-gradient-to-r from-[#07076b] via-[#0d0d87] to-[#1c1ca8] rounded-full transition-all duration-75 relative"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-0 bottom-0 w-2.5 bg-white/70 rounded-full blur-[1px]" />
              </div>
            </motion.div>

            {/* Progress counter */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[11px] font-mono text-zinc-500 mt-2.5 font-bold"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
