import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Origin from "@/components/Origin";
import ForYouBlueprints from "@/components/ForYouBlueprints";
import Boundaries from "@/components/Boundaries";
import Footer from "@/components/Footer";

/**
 * HOME PAGE
 *
 * SECTION ORDER - DO NOT MODIFY:
 * 1. Hero
 * 2. Navbar
 * 3. Origin
 * 4. ForYouBlueprints (standalone section - "This Is For You If..." + "Digital Blueprints")
 * 5. Boundaries (standalone section - centered editorial moment with ONE CTA)
 * 6. Footer (minimal footer with copyright and social icons)
 *
 * IMPORTANT:
 * - Boundaries is a centered editorial moment, NOT a footer
 * - Footer must always render AFTER Boundaries
 * - Social icons only appear in Footer, not in Boundaries
 * - Do NOT merge or nest sections
 * - Each section is self-contained
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-obsidian via-obsidian-light to-obsidian">
      {/* Hero Section */}
      <Hero />

      {/* Navigation */}
      <Navbar />

      {/* Origin Story */}
      <Origin />

      {/* This Is For You If... + Digital Blueprints */}
      <ForYouBlueprints />

      {/* Boundaries Section - Centered Editorial Moment */}
      <Boundaries />

      {/* Footer - Minimal, Muted (DO NOT MOVE) */}
      <Footer />
    </main>
  );
}
