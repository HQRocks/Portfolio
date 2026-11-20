export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      
      <section className="flex flex-col gap-6">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Marko</span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed font-sans">
          I&apos;m a computer science student based in Budapest, driven by a deep curiosity for exploring and building across all fields of tech. Alongside web development projects—including the one you&apos;re looking at right now—I&apos;ve recently been diving into the fascinating world of neural networks.
        </p>

        <p className="text-lg text-slate-300 leading-relaxed font-sans">
          When I’m not coding, you&apos;ll usually find me tackling university work, playing a game of chess, or working toward my ultimate goal of visiting every country in the world.
        </p>

        <p className="text-base font-mono text-cyan-400 tracking-wide pt-2">
          // Feel free to check out my projects!
        </p>

      </section>
    </main>
  );
}