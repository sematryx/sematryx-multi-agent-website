import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benchmarks",
  description:
    "Empirical benchmarks comparing multi-agent reasoning patterns to single-agent baselines.",
};

const reportFields: { metric: string; unit: string; note: string }[] = [
  {
    metric: "Accuracy / quality delta",
    unit: "Δ pp",
    note: "Pattern result vs. single-agent baseline on the same task.",
  },
  {
    metric: "Cost multiplier",
    unit: "×",
    note: "Total token cost divided by single-agent cost.",
  },
  {
    metric: "Latency multiplier",
    unit: "×",
    note: "Wall-clock latency divided by single-agent latency.",
  },
  {
    metric: "Disagreement",
    unit: "n",
    note: "Number and shape of contested claims across the run.",
  },
];

export default function BenchmarksPage() {
  return (
    <div className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wider text-subtle">
          Benchmarks · scaffold
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          Real numbers, real conditions — landing alongside 0.1.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted">
          The 0.1 release ships the benchmark harness and the parity-test
          fixtures. Standard-task benchmarks (GPQA, MMLU, MATH) follow
          alongside the second integration shim. No fabricated numbers will
          appear here in the meantime.
        </p>

        <div className="mt-12 overflow-hidden rounded-md border border-border">
          <div className="border-b border-border bg-surface-2 px-4 py-2 font-mono text-xs text-subtle">
            BenchmarkReport — schema
          </div>
          <table className="w-full text-left text-sm tabular">
            <thead className="font-mono text-[11px] uppercase tracking-wider text-subtle">
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-2 font-normal">metric</th>
                <th className="px-4 py-2 font-normal">unit</th>
                <th className="px-4 py-2 text-right font-normal">value</th>
              </tr>
            </thead>
            <tbody>
              {reportFields.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="bg-surface px-4 py-3 align-top">
                    <div className="text-fg">{row.metric}</div>
                    <div className="mt-0.5 text-xs text-muted">{row.note}</div>
                  </td>
                  <td className="bg-surface px-4 py-3 align-top font-mono text-xs text-muted">
                    {row.unit}
                  </td>
                  <td className="bg-surface px-4 py-3 text-right align-top font-mono text-muted">
                    —
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/"
            className="font-mono text-muted transition-colors hover:text-fg"
          >
            ← Back to overview
          </Link>
        </div>
      </div>
    </div>
  );
}
