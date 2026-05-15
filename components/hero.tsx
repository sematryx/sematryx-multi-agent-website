import Link from "next/link";

const bullets: string[] = [
  "Composable algorithmic patterns for multi-agent reasoning",
  "Wraps LangGraph, CrewAI, AutoGen — and your existing LLM clients",
  "Each pattern benchmarked against single-agent baselines",
  "Honest reporting of quality, cost, and latency tradeoffs",
];

export function Hero() {
  return (
    <section className="border-b border-border px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          <h1 className="font-mono text-5xl font-medium tracking-tight md:text-6xl">
            sematryx
          </h1>
          <p className="mt-3 italic text-muted text-lg md:text-xl">
            Multi-agent reasoning in Python.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-sm bg-fg px-4 py-2 font-mono text-sm text-bg transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/patterns/adversarial-debate"
              className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-4 py-2 font-mono text-sm transition-colors hover:bg-surface-2"
            >
              v0.1 — adversarial debate
            </Link>
          </div>
        </div>

        <ul className="md:col-span-6 space-y-2.5 text-base text-fg md:text-lg">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-fg/40" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
