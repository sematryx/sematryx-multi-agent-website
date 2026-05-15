import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Documentation for Sematryx Multi-Agent — patterns, benchmarks, traces, and integration shims.",
};

const sections: { heading: string; items: string[] }[] = [
  {
    heading: "Getting started",
    items: ["Install", "First debate", "Picking a chat model"],
  },
  {
    heading: "Choosing a pattern",
    items: ["By task", "By failure mode", "Cost / latency budget"],
  },
  {
    heading: "Adversarial debate",
    items: ["Configuration", "Termination policies", "Contested claims"],
  },
  {
    heading: "Benchmarking",
    items: ["The harness", "Reference traces", "Reading results"],
  },
  {
    heading: "Result objects",
    items: ["DebateResult", "TokenUsage", "Trace events"],
  },
  {
    heading: "Traces",
    items: ["Schema", "Inspecting runs", "Persisting"],
  },
];

export default function DocsPage() {
  return (
    <div className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wider text-subtle">
          Documentation · scaffold
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          Docs are landing alongside 0.1.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted">
          The full user guide, API reference, and pattern-by-pattern docs are in
          progress. The structure below reflects what will ship; sections fill
          in as patterns and shims land in the package.
        </p>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
          {sections.map((s) => (
            <li key={s.heading} className="bg-surface p-6">
              <h2 className="font-mono text-xs uppercase tracking-wider text-subtle">
                {s.heading}
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {s.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2 text-muted">
                    <span aria-hidden className="text-subtle">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
            href="https://github.com/anthropics/sematryx-multi-agent"
            rel="noreferrer"
            target="_blank"
            className="font-mono text-muted transition-colors hover:text-fg"
          >
            Repo & README ↗
          </a>
        </div>
      </div>
    </div>
  );
}
