import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Runnable examples for Sematryx Multi-Agent patterns — adversarial debate, benchmarks, contested claims.",
};

const examples: { title: string; tag: string; note: string }[] = [
  {
    title: "Adversarial debate basics",
    tag: "getting started",
    note: "Two-agent debate over four rounds with the LangGraph shim.",
  },
  {
    title: "Sycophancy challenge",
    tag: "reasoning quality",
    note: "Loaded prompt that single-agent models tend to agree with.",
  },
  {
    title: "Architecture / design review",
    tag: "applied",
    note: "Three agents critiquing a proposed system design.",
  },
  {
    title: "Ambiguous decision support",
    tag: "applied",
    note: "Decision with multiple defensible answers and conflicting priorities.",
  },
  {
    title: "Benchmark vs. single-agent baseline",
    tag: "benchmarking",
    note: "Quality / cost / latency comparison harness.",
  },
  {
    title: "Inspecting contested claims",
    tag: "traces",
    note: "Reading the structured ContestedClaim output of a saved run.",
  },
];

export default function ExamplesPage() {
  return (
    <div className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wider text-subtle">
          Examples · scaffold
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          Runnable examples — landing alongside 0.1.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted">
          Each example will ship as a runnable Python script with a saved
          DebateResult JSON, so you can read the trace without having to run
          the LLMs yourself.
        </p>

        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-md border border-border bg-surface">
          {examples.map((ex) => (
            <li key={ex.title} className="flex flex-col gap-2 px-5 py-4 md:flex-row md:items-baseline md:gap-6">
              <div className="md:flex-1">
                <h2 className="text-base font-medium">{ex.title}</h2>
                <p className="mt-0.5 text-sm text-muted">{ex.note}</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                {ex.tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/"
            className="font-mono text-muted transition-colors hover:text-fg"
          >
            ← Back to overview
          </Link>
          <a
            href="https://github.com/anthropics/sematryx-multi-agent/tree/main/examples"
            rel="noreferrer"
            target="_blank"
            className="font-mono text-muted transition-colors hover:text-fg"
          >
            examples/ in the repo ↗
          </a>
        </div>
      </div>
    </div>
  );
}
