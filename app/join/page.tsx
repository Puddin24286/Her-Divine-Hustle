import Link from "next/link";

export default function Join() {
  return (
    <main className="min-h-screen bg-obsidian text-off-white selection:bg-gold/30 selection:text-white flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-header text-gradient-gold leading-tight">
            Join when ready.
          </h1>
          <p className="text-xl md:text-2xl text-off-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            This space is for women who feel the pull to build —<br />
            without abandoning themselves in the process.<br />
            There is no urgency here. Only alignment.
          </p>
        </div>
        <div className="space-y-6">
          <Link href="/member" className="inline-block px-10 py-5 bg-gold text-obsidian font-bold rounded-full uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/10">
            Step inside
          </Link>
          <p className="text-sm text-off-white/50 font-body">You may leave at any time.</p>
        </div>
      </div>
    </main>
  );
}