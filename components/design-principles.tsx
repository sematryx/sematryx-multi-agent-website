import { Section } from "./section";

const principles: { title: string; body: string }[] = [
  {
    title: "Non-competition with frameworks",
    body: "Sematryx wraps; it does not replace. LangGraph, AutoGen, CrewAI own execution. We own the algorithm.",
  },
  {
    title: "Composability",
    body: "Patterns compose at the state-machine level. An adversarial debate inside a K-fold ensemble is a real, expressible thing.",
  },
  {
    title: "Empirical honesty",
    body: "Every pattern ships with benchmarks against a single-agent baseline. Negative results are documented, not buried.",
  },
  {
    title: "Variance as signal",
    body: "Disagreement is information about contested regions of a problem, not noise to be averaged away.",
  },
  {
    title: "Structured traces",
    body: "Trace events and contested claims are typed, immutable data — designed for programmatic analysis, not just human reading.",
  },
  {
    title: "Task-oriented docs",
    body: "Docs lead with what you are trying to do. The pattern follows. You should not need to be a multi-agent expert to pick the right one.",
  },
];

export function DesignPrinciples() {
  return (
    <Section
      number="07"
      eyebrow="Design principles"
      title={<>The shape of the library is intentional.</>}
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <li
            key={p.title}
            className="flex flex-col gap-3 bg-surface p-6"
          >
            <p className="font-mono text-xs text-subtle tabular">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="text-base font-medium tracking-tight">{p.title}</h3>
            <p className="text-sm text-muted">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
