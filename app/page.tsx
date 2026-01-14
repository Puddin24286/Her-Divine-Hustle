import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Origin from "@/components/Origin";
import ForYouBlueprints from "@/components/ForYouBlueprints";
import Boundaries from "@/components/Boundaries";

/**
 * HOME PAGE
 *
 * SECTION ORDER - DO NOT MODIFY:
 * 1. Hero
 * 2. Navbar
 * 3. Origin
 * 4. ForYouBlueprints (standalone section - "This Is For You If..." + "Digital Blueprints")
 * 5. Boundaries (standalone section - final section, includes closing row)
 *
 * IMPORTANT:
 * - Boundaries is the FINAL section on the page
 * - Do NOT merge or nest Boundaries with ForYouBlueprints
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

      {/* Boundaries Section (FINAL - DO NOT MOVE) */}
      <Boundaries />
    </main>
  );
}
