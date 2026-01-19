"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gold-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container w-full">
        {/* Hero Image Container with Overlaid Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]"
        >
          <div className="relative h-full w-full rounded-4xl overflow-hidden shadow-luxury border border-white/10">
            {/* Hero Image */}
            <Image
              src="/hero-image.jpg"
              alt="Her Divine Hustle - Ambitious Woman Working Late"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent pointer-events-none" />

            {/* Text Content Overlaid on Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight mb-6"
              >
                <span className="text-gradient-gold-animated">
                  A Sanctuary for Ambitious Women.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl text-off-white/90 leading-relaxed max-w-3xl mb-6 font-light"
              >
                You didn't lose your drive.<br />
                You outgrew the systems that demanded too much of it.
              </motion.p>

              {/* Supporting Lines */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-sm md:text-base text-off-white/70 leading-relaxed max-w-2xl mb-10 font-light"
              >
                Here, success is built with intention.<br />
                Boundaries become power.<br />
                And ambition expands without burning out your nervous system.
              </motion.p>

              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <Link href="#blueprints" className="btn-primary group">
                  Explore the Blueprints
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 hidden md:inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
