import Link from "next/link";

const bullets: string[] = [
  "Composable algorithmic patterns for multi-agent reasoning",
  "Wraps LangGraph, CrewAI, AutoGen — and your existing LLM clients",
  "Each pattern benchmarked against single-agent baselines",
  "Honest reporting of quality, cost, and latency tradeoffs",
];

export function Hero() {
  return (
    <section className="border-b border-border px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-6">
          <h1 className="font-mono text-5xl font-medium tracking-tight md:text-6xl">
            sematryx
          </h1>
          <p className="mt-2 italic text-muted text-lg md:text-xl">
            Multi-agent reasoning in Python.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-md border border-accent bg-accent/10 px-5 py-2 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-accent-fg"
            >
              Get started
            </Link>
            <Link
              href="/patterns/adversarial-debate"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2 text-base font-medium text-fg transition-colors hover:bg-surface-2"
            >
              v0.1 — adversarial debate
            </Link>
          </div>
        </div>

        <ul className="md:col-span-6 space-y-3 text-base text-fg md:text-lg">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
