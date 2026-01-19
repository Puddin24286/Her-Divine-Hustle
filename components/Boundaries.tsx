"use client";

import Link from "next/link";

/**
 * BOUNDARIES SECTION - LOCKED
 *
 * STRUCTURE REQUIREMENTS - DO NOT MODIFY:
 * - This is a standalone <section id="boundaries">
 * - Acts as the EMOTIONAL FOOTER of the homepage
 * - Centered editorial moment with ONE CTA
 * - Do NOT add additional rows, icons, or footer elements to this section
 * - Do NOT merge with or nest inside other sections
 * - This section is COMPLETE as-is
 *
 * LAYOUT (LOCKED):
 * - Single centered editorial moment
 * - Vertically and horizontally centered content
 * - One button: "Join the Coven" (opens /join page, NOT a scroll)
 * - Full viewport height (min-h-screen) for breathing room
 * - Intentional empty space above and below
 *
 * MOBILE:
 * - No directional arrows on CTA
 * - Copy remains identical to desktop
 * - Technical footer (copyright + contact) sits below this section
 */
export default function Boundaries() {
  return (
    <section id="boundaries" className="relative min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-36">
      <div className="max-w-[72rem] mx-auto py-32 md:py-40">

        {/* ============================================
            EDITORIAL CONTENT - CENTERED PAUSE
            ============================================ */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-off-white mb-8">
            Boundaries Are the Architecture of Power.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-off-white/80 font-light leading-relaxed">
            <p>
              Boundaries are not walls. They are the gates that decide what enters your nervous system, your calendar, and your calling.
            </p>

            <p>
              Without them, ambition leaks. With them, your energy compounds.
            </p>

            <p>
              This is where over-functioning ends and intentional expansion begins.
            </p>
          </div>

          {/* Join the Coven Button - Opens join page */}
          <div className="mt-12">
            <Link
              href="/join"
              className="inline-block px-8 py-3 border border-gold/60 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Join the Coven
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
