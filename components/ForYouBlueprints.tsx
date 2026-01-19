"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ForYouBlueprints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blueprints" ref={ref} className="relative py-20 px-6 md:py-32 md:px-8 lg:px-12">
      <div className="max-w-[80rem] mx-auto">
        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Column: This Is For You If... */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-off-white mb-6">
              This Is For You If...
            </h2>

            <ul className="space-y-3 text-base md:text-lg text-off-white/80 font-light">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>You feel stagnant in a life</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>You wear burnout as a badge of honor.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Your nervous system screaming for balance.</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Digital Blueprints */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-off-white text-center mb-12"
            >
              Digital Blueprints
            </motion.h2>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1: The Corporate Alchemist */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href="#"
                  className="block bg-gradient-to-br from-obsidian-light/60 to-obsidian-light/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-300 h-full flex flex-col items-center text-center"
                >
                  {/* Moon Icon */}
                  <div className="mb-8">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gold"
                    >
                      <path
                        d="M45 15C45 28.8071 33.8071 40 20 40C15.5817 40 11.4581 38.7093 8 36.5V36.5C12.7985 48.9632 24.6416 58 38.5 58C56.4493 58 71 43.4493 71 25.5C71 11.6416 61.9632 -0.201462 49.5 -5V-5C47.2907 -1.54191 46 2.58172 46 7C46 9.5 45.5 12.5 45 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-gold mb-3">
                    The Corporate Alchemist
                  </h3>

                  <p className="text-sm md:text-base text-off-white/60 mb-8 flex-grow">
                    A Guide for a High-Achieving Soul
                  </p>

                  <p className="text-2xl md:text-3xl text-off-white font-light">
                    $47
                  </p>
                </Link>
              </motion.div>

              {/* Card 2: The Nervous System Reset */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="#"
                  className="block bg-gradient-to-br from-obsidian-light/60 to-obsidian-light/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-300 h-full flex flex-col items-center text-center"
                >
                  {/* Wheat Icon */}
                  <div className="mb-8">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gold"
                    >
                      <path
                        d="M40 70V30M40 30L35 35M40 30L45 35M40 30L35 25M40 30L45 25M35 45L30 50C28 52 28 55 30 57C32 59 35 59 37 57L40 54M45 45L50 50C52 52 52 55 50 57C48 59 45 59 43 57L40 54M40 54V50M35 25L30 20C28 18 28 15 30 13C32 11 35 11 37 13L40 16M45 25L50 20C52 18 52 15 50 13C48 11 45 11 43 13L40 16M40 16V20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-gold mb-3">
                    The Nervous System Reset
                  </h3>

                  <p className="text-sm md:text-base text-off-white/60 mb-8 flex-grow">
                    Rituals for High-Achieving Soul
                  </p>

                  <p className="text-2xl md:text-3xl text-off-white font-light">
                    $39
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
