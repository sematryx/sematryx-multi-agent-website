import { Section } from "./section";

const reportFields: {
  metric: string;
  description: string;
  unit: string;
  value: string;
}[] = [
  {
    metric: "Accuracy / quality delta",
    description: "Pattern result vs. single-agent baseline on the same task.",
    unit: "Δ pp",
    value: "—",
  },
  {
    metric: "Cost multiplier",
    description: "Total token cost divided by single-agent cost.",
    unit: "×",
    value: "—",
  },
  {
    metric: "Latency multiplier",
    description: "Wall-clock latency divided by single-agent latency.",
    unit: "×",
    value: "—",
  },
  {
    metric: "Disagreement / variance",
    description: "Contested-claim count and distribution across runs.",
    unit: "n",
    value: "—",
  },
  {
    metric: "Conditions where pattern hurts",
    description: "Documented task slices where the multi-agent loss is real.",
    unit: "—",
    value: "—",
  },
];

export function BenchmarksRationale() {
  return (
    <Section
      number="05"
      eyebrow="Why benchmarks matter"
      title={<>Honest reporting is the credibility lever.</>}
      lede={
        <>
          Multi-agent reasoning can improve quality — but it almost always
          costs more in tokens and latency. A pattern that ships without
          benchmarks against a single-agent baseline is asking you to take its
          improvement claims on faith.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-md border border-border">
            <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2 font-mono text-xs text-subtle">
              <span>BenchmarkReport — schema</span>
              <span aria-hidden>measured per run</span>
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
                      <div className="mt-0.5 text-xs text-muted">
                        {row.description}
                      </div>
                    </td>
                    <td className="bg-surface px-4 py-3 align-top font-mono text-xs text-muted">
                      {row.unit}
                    </td>
                    <td className="bg-surface px-4 py-3 text-right align-top font-mono text-muted">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-subtle">
            No fabricated numbers on this page. Real benchmarks land per
            release, with the harness, scripts, and seed control in the repo.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-4 text-sm">
          <p className="text-fg">
            Sematryx's benchmark harness drives each pattern through its
            state machine using scripted turn responses, so results are
            framework-agnostic and reproducible byte-for-byte.
          </p>
          <p className="text-muted">
            Equivalence is checked with{" "}
            <span className="font-mono text-fg">
              assert_traces_equivalent
            </span>
            . If a LangGraph shim and a custom async runner disagree on the
            same scripted inputs, exactly one is wrong — they cannot both be
            valid integrations.
          </p>
          <p className="text-muted">
            Negative results are first-class. We document the task slices where
            an adversarial debate burns budget for no measurable lift.
          </p>
        </div>
      </div>
    </Section>
  );
}
