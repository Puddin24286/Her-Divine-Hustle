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
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full backdrop-blur-sm bg-gold/5">
              The Origin Story
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight"
          >
            From the{" "}
            <span className="text-off-white">Corporate Grind</span>
            <br />
            to the{" "}
            <span className="text-gradient-gold">Divine Hustle</span>
          </motion.h2>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg md:text-xl text-off-white/80 leading-relaxed font-light"
          >
            <p>
              You've climbed the corporate ladder. You've earned the title, the corner office, the respect. But somewhere along the way, you lost yourself in someone else's vision.
            </p>
            <p>
              You're tired of trading your energy for someone else's empire. You're ready to build something that actually means something—to you, on your terms, aligned with your values.
            </p>
            <p className="text-gold/90 font-normal">
              This is where the divine hustle begins.
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
