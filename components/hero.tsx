import { CodeBlock } from "./code-block";

const snippet = `from langchain_anthropic import ChatAnthropic
from sematryx.patterns.adversarial_debate import AdversarialDebate
from sematryx.integrations.langgraph_shim import run_debate

debate = AdversarialDebate(max_rounds=8)

result = await run_debate(
    debate,
    agents=[
        ("opus",   ChatAnthropic(model="claude-opus-4-7")),
        ("sonnet", ChatAnthropic(model="claude-sonnet-4-6")),
    ],
    prompt="Why does sycophancy emerge in RLHF-trained models?",
)

print(result.answer)
print(result.contested_claims)   # tuple of ContestedClaim
print(result.total_usage)        # cost / tokens, populated by the shim
`;

export function Hero() {
  return (
    <section className="relative px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-subtle">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          v0.1 · adversarial debate
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Algorithmic patterns
              <br />
              for{" "}
              <span className="font-mono text-3xl tracking-tight md:text-5xl">
                multi-agent
              </span>{" "}
              reasoning.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg text-muted md:text-xl">
              Sematryx is a Python library of composable multi-agent reasoning
              patterns, each benchmarked against single-agent baselines with
              explicit quality, cost, and latency tradeoffs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/anthropics/sematryx-multi-agent"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-sm bg-fg px-4 py-2 font-mono text-sm text-bg transition-opacity hover:opacity-90"
              >
                <span aria-hidden>↗</span>
                View on GitHub
              </a>
              <a
                href="/docs"
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-4 py-2 font-mono text-sm transition-colors hover:bg-surface-2"
              >
                Read the docs
              </a>
              <a
                href="/patterns/adversarial-debate"
                className="inline-flex items-center gap-2 px-1 py-2 font-mono text-sm text-muted transition-colors hover:text-fg"
              >
                Patterns →
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  Pattern
                </dt>
                <dd className="mt-1.5">Headless state machine</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  Runtime
                </dt>
                <dd className="mt-1.5">LangGraph · CrewAI · custom</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  Reporting
                </dt>
                <dd className="mt-1.5">Δ quality · cost × · latency ×</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-5">
            <CodeBlock filename="run_debate.py">{snippet}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
