import Link from "next/link";
import { CodeBlock } from "./code-block";

const snippet = `# pip install sematryx[langgraph]
from langchain_anthropic import ChatAnthropic
from sematryx.patterns.adversarial_debate import AdversarialDebate
from sematryx.integrations.langgraph_shim import run_debate

result = await run_debate(
    AdversarialDebate(max_rounds=4),
    agents=[
        ("opus",   ChatAnthropic(model="claude-opus-4-7")),
        ("sonnet", ChatAnthropic(model="claude-sonnet-4-6")),
    ],
    prompt="Why does sycophancy emerge in RLHF-trained models?",
)

print(result.answer)
print(result.contested_claims)
`;

export function Quickstart() {
  return (
    <section className="border-t border-border px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-wider text-subtle">
            Quickstart
          </p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight md:text-4xl">
            One pattern.{" "}
            <span className="italic text-muted">Two agents.</span> A real
            answer with the disagreement preserved.
          </h2>
          <p className="mt-4 max-w-md text-base text-muted md:text-lg">
            The shim runs inside LangGraph; the algorithm lives in sematryx.
            You stay on your existing stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/docs"
              className="font-mono text-accent transition-colors hover:underline"
            >
              Full quickstart →
            </Link>
            <Link
              href="/patterns/adversarial-debate"
              className="font-mono text-muted transition-colors hover:text-fg"
            >
              Adversarial debate reference →
            </Link>
          </div>
        </div>
        <div className="md:col-span-7">
          <CodeBlock filename="quickstart.py">{snippet}</CodeBlock>
        </div>
      </div>
    </section>
  );
}
