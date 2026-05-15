import Link from "next/link";
import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
  title: "Adversarial Round-Robin Debate",
  description:
    "N agents take turns critiquing and refining a shared answer with adversarial-but-reasonable arguments.",
};

const snippet = `from langchain_anthropic import ChatAnthropic
from sematryx.patterns.adversarial_debate import AdversarialDebate
from sematryx.integrations.langgraph_shim import compile_debate, run_debate

debate = AdversarialDebate(
    max_rounds=8,
    disagreement_window=3,
)

# As a one-shot:
result = await run_debate(
    debate,
    agents=[
        ("opus",   ChatAnthropic(model="claude-opus-4-7")),
        ("sonnet", ChatAnthropic(model="claude-sonnet-4-6")),
    ],
    prompt="Why does sycophancy emerge in RLHF-trained models?",
)

# Or as a real LangGraph CompiledStateGraph for composition:
graph = compile_debate(debate, agents=[...])
`;

const termPolicies: { name: string; meaning: string }[] = [
  {
    name: "convergence",
    meaning:
      "An agent reports no substantive critique and no contested claims.",
  },
  {
    name: "exhaustion",
    meaning: "The configured max_rounds budget was reached.",
  },
  {
    name: "persistent_disagreement",
    meaning:
      "The same contested claims persist across disagreement_window rounds with no answer movement.",
  },
];

export default function AdversarialDebatePatternPage() {
  return (
    <div className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wider text-subtle">
          Pattern · 0.1 — shipping
        </p>
        <h1 className="mt-3 text-balance text-3xl font-medium tracking-tight md:text-4xl">
          Adversarial Round-Robin Debate
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted">
          N agents (typically 2–4) take turns critiquing and refining a shared
          answer. Round-robin scheduling: agent 0 proposes, agents 1…N-1
          critique in order. Critiques must be adversarial but reasonable —
          valid disagreement, not contrarian performance.
        </p>

        <div className="mt-10">
          <CodeBlock filename="adversarial_debate.py">{snippet}</CodeBlock>
        </div>

        <h2 className="mt-16 font-mono text-xs uppercase tracking-wider text-subtle">
          Termination
        </h2>
        <ul className="mt-3 divide-y divide-border overflow-hidden rounded-md border border-border bg-surface">
          {termPolicies.map((t) => (
            <li key={t.name} className="px-5 py-4">
              <div className="font-mono text-sm text-fg">{t.name}</div>
              <p className="mt-1 text-sm text-muted">{t.meaning}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-mono text-xs uppercase tracking-wider text-subtle">
          What you get back
        </h2>
        <p className="mt-3 text-sm text-muted">
          A <span className="font-mono">DebateResult</span> with the final
          answer, structured contested-claims, the per-turn trace, the
          termination cause, and a usage summary populated by the integration
          shim. The result is a frozen dataclass — safe to log, persist, and
          diff.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/"
            className="font-mono text-muted transition-colors hover:text-fg"
          >
            ← Back to overview
          </Link>
          <Link
            href="/examples"
            className="font-mono text-muted transition-colors hover:text-fg"
          >
            Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
