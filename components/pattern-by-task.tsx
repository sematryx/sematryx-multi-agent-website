import Link from "next/link";

type TaskCard = {
  task: string;
  useWhen: string;
  pattern: string;
  status: "shipping" | "planned";
  output: string;
  symbols: string[];
  href?: string;
};

const cards: TaskCard[] = [
  {
    task: "Challenge a draft answer",
    useWhen:
      "You want agents to find gaps, weak claims, or missing caveats in an answer that already looks reasonable.",
    pattern: "Adversarial Round-Robin Debate",
    status: "shipping",
    output: "revised answer, critique trace, contested claims",
    symbols: ["AdversarialDebate", "run_debate", "DebateResult"],
    href: "/patterns/adversarial-debate",
  },
  {
    task: "Surface hidden assumptions",
    useWhen:
      "The problem may contain unstated premises or sycophancy traps the proposer would otherwise miss.",
    pattern: "Adversarial Round-Robin Debate",
    status: "shipping",
    output: "assumptions, objections, confidence notes",
    symbols: ["AdversarialDebate", "ContestedClaim", "parse_turn_response"],
    href: "/patterns/adversarial-debate",
  },
  {
    task: "Compare competing reasoning paths",
    useWhen:
      "Multiple plausible answers exist and you want to see them side-by-side rather than collapsed into one.",
    pattern: "K-fold reasoning · self-consistency",
    status: "planned",
    output: "variance, disagreement, consensus summary",
    symbols: ["KFoldReasoning", "SelfConsistency"],
  },
  {
    task: "Estimate uncertainty through disagreement",
    useWhen:
      "Answer confidence matters more than producing a single fluent response.",
    pattern: "K-fold reasoning",
    status: "planned",
    output: "disagreement signal, confidence distribution",
    symbols: ["KFoldReasoning", "VarianceReport"],
  },
  {
    task: "Decide whether multi-agent is worth the cost",
    useWhen:
      "You need to know if a pattern actually helps on your task before adopting it.",
    pattern: "Benchmark harness",
    status: "shipping",
    output: "Δ quality, cost ×, latency ×",
    symbols: ["ReferenceTrace", "run_reference", "assert_traces_equivalent"],
    href: "/benchmarks",
  },
  {
    task: "Inspect contested claims and trace output",
    useWhen:
      "You need transparency into where agents agreed, disagreed, and what changed across turns.",
    pattern: "All Sematryx patterns",
    status: "shipping",
    output: "structured trace, contested claims, cost summary",
    symbols: ["DebateTraceEvent", "ContestedClaim", "DebateResult"],
    href: "/docs",
  },
];

export function PatternByTask() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 font-mono text-xs uppercase tracking-wider text-subtle">
          Choose a pattern by task
        </p>
        <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const inner = (
              <article className="flex h-full flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-2 md:p-7">
                <header className="flex items-start justify-between gap-2">
                  <h3 className="text-balance text-xl font-medium tracking-tight md:text-2xl">
                    {card.task}
                  </h3>
                  <span
                    className={
                      card.status === "shipping"
                        ? "shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent"
                        : "shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-subtle"
                    }
                  >
                    {card.status === "shipping" ? "0.1" : "planned"}
                  </span>
                </header>

                <p className="text-base text-muted">
                  <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                    Use when ·{" "}
                  </span>
                  {card.useWhen}
                </p>

                <dl className="mt-auto space-y-2 border-t border-border pt-4 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                      Pattern
                    </dt>
                    <dd className="mt-0.5 font-mono text-sm text-fg">
                      {card.pattern}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                      Output
                    </dt>
                    <dd className="mt-0.5 text-muted">{card.output}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                      Symbols
                    </dt>
                    <dd className="mt-1 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted">
                      {card.symbols.map((sym, i) => (
                        <span key={sym}>
                          {sym}
                          {i < card.symbols.length - 1 ? (
                            <span aria-hidden className="ml-2 text-subtle">
                              ·
                            </span>
                          ) : null}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                {card.href ? (
                  <p className="mt-2 font-mono text-xs text-accent">
                    Read more →
                  </p>
                ) : null}
              </article>
            );

            return (
              <li key={card.task}>
                {card.href ? (
                  <Link href={card.href} className="block h-full">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
