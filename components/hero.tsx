import Link from "next/link";

const bullets: string[] = [
  "Composable algorithmic patterns for multi-agent reasoning",
  "Wraps LangGraph, CrewAI, AutoGen — and your existing LLM clients",
  "Each pattern benchmarked against single-agent baselines",
  "Honest reporting of quality, cost, and latency tradeoffs",
];

export function Hero() {
  return (
    <section className="border-b border-border px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          <h1 className="font-mono text-6xl font-medium tracking-tight md:text-7xl">
            sematryx
          </h1>
          <p className="mt-4 italic text-muted text-xl md:text-2xl">
            Multi-agent reasoning in Python.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-fg shadow-sm transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/patterns/adversarial-debate"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-6 py-3 text-base font-medium transition-colors hover:bg-surface-2"
            >
              v0.1 — adversarial debate
            </Link>
          </div>
        </div>

        <ul className="md:col-span-6 space-y-4 text-lg text-fg md:text-xl">
          {bullets.map((b) => (
            <li key={b} className="flex gap-4">
              <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
