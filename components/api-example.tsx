import { Section } from "./section";
import { CodeBlock } from "./code-block";

const snippet = `from langchain_anthropic import ChatAnthropic
from langchain_openai import ChatOpenAI

from sematryx.patterns.adversarial_debate import AdversarialDebate
from sematryx.integrations.langgraph_shim import run_debate

debate = AdversarialDebate(
    max_rounds=8,
    disagreement_window=3,   # rounds of unmoved disagreement → terminate
)

agents = [
    ("opus",     ChatAnthropic(model="claude-opus-4-7", max_tokens=4096)),
    ("sonnet",   ChatAnthropic(model="claude-sonnet-4-6", max_tokens=4096)),
    ("gpt-mini", ChatOpenAI(model="gpt-5-mini")),
]

result = await run_debate(
    debate,
    agents=agents,
    prompt="Why does sycophancy emerge in RLHF-trained language models?",
)

print(result.answer)              # final answer string
print(result.contested_claims)    # tuple[ContestedClaim, ...]
print(result.termination)         # DebateTermination
print(result.total_usage)         # tokens + cost, populated by the shim
print(result.events)              # full structured trace
`;

const callouts: { title: string; body: string }[] = [
  {
    title: "Bring your own chat model",
    body: "Sematryx has zero provider-specific code. You pass framework-native LLM wrappers (langchain_anthropic, langchain_openai, …) directly into the shim.",
  },
  {
    title: "The shim drives, the machine decides",
    body: "run_debate translates messages to / from the LLM and tracks cost. State transitions, turn selection, and termination all live in DebateMachine.",
  },
  {
    title: "Same machine, multiple runtimes",
    body: "The same debate, run via the LangGraph shim, the CrewAI shim, or the reference async runner, produces identical canonical traces.",
  },
];

export function ApiExample() {
  return (
    <Section
      number="08"
      eyebrow="Example API"
      title={<>End-to-end in eight lines of orchestration.</>}
      lede={
        <>
          The shim turns a sematryx pattern into a real LangGraph
          CompiledStateGraph. From your application's perspective, you are
          still using LangGraph — sematryx contributes the algorithm running
          inside one node.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <CodeBlock filename="run_debate.py">{snippet}</CodeBlock>
        </div>
        <div className="lg:col-span-5 space-y-5">
          {callouts.map((c) => (
            <div
              key={c.title}
              className="border-l-2 border-border pl-4"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-subtle">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
