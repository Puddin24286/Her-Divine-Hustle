"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Origin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-12 leading-tight"
          >
            <span className="text-off-white">This is not hustle culture.</span>
          </motion.h2>

          {/* Body Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 text-lg md:text-xl leading-relaxed font-light"
          >
            <p className="text-gradient-gold-animated">
              Here, success is built with intention.
            </p>
            <p className="text-gradient-gold-animated">
              Boundaries become power.
            </p>
            <p className="text-gradient-gold-animated">
              And ambition expands without burning out your nervous system.
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
