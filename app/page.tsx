import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Origin from "@/components/Origin";
import ForYouBlueprints from "@/components/ForYouBlueprints";
import Boundaries from "@/components/Boundaries";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-obsidian via-obsidian-light to-obsidian">
      <Hero />
      <Navbar />
      <Origin />
      <ForYouBlueprints />
      <Boundaries />
    </main>
  );
}
