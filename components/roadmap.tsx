import { Section } from "./section";

const patterns: {
  name: string;
  status: "shipping" | "next" | "later";
  short: string;
}[] = [
  {
    name: "Adversarial Round-Robin Debate",
    status: "shipping",
    short:
      "N agents critique and refine a shared answer with adversarial-but-reasonable arguments.",
  },
  {
    name: "K-fold reasoning",
    status: "next",
    short:
      "Parallel independent reasoning paths with explicit variance estimation across folds.",
  },
  {
    name: "Self-consistency",
    status: "next",
    short:
      "Parallel sampling at temperature, majority vote across answers — well-known baseline.",
  },
  {
    name: "Boosted reasoning",
    status: "later",
    short:
      "Sequential residual targeting: each agent corrects the prior agent's mistakes.",
  },
  {
    name: "Bagging",
    status: "later",
    short:
      "Bootstrapped or randomized inputs across parallel agents; aggregate the outputs.",
  },
  {
    name: "Stacking",
    status: "later",
    short:
      "Meta-agent learns to combine the outputs of multiple base reasoners.",
  },
];

const statusLabel: Record<(typeof patterns)[number]["status"], string> = {
  shipping: "0.1 · shipping",
  next: "next",
  later: "later",
};

const statusClass: Record<(typeof patterns)[number]["status"], string> = {
  shipping:
    "border-accent/30 bg-accent/10 text-accent",
  next: "border-border bg-surface-2 text-fg",
  later: "border-border text-subtle",
};

export function Roadmap() {
  return (
    <Section
      number="10"
      eyebrow="Roadmap"
      title={<>One pattern at a time. Discipline beats breadth.</>}
      lede={
        <>
          Each future pattern requires its own state machine, benchmark
          harness, and integration shim that passes the same parity test set.
          We ship them in order, not in bulk.
        </>
      }
    >
      <ol className="overflow-hidden rounded-md border border-border">
        {patterns.map((p, i) => (
          <li
            key={p.name}
            className="grid grid-cols-12 items-baseline gap-4 border-b border-border px-5 py-5 last:border-b-0 md:px-8"
          >
            <div className="col-span-2 font-mono text-xs text-subtle tabular md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-10 md:col-span-7">
              <h3 className="text-base font-medium tracking-tight">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.short}</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusClass[p.status]}`}
              >
                {statusLabel[p.status]}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
