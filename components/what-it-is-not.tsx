import { Section } from "./section";

const items: { title: string; body: string; useInstead: string }[] = [
  {
    title: "Not an orchestration framework",
    body: "No graphs, crews, or group chats live here. Sematryx defines the algorithm; the orchestration framework executes it.",
    useInstead: "LangGraph · CrewAI · AutoGen",
  },
  {
    title: "Not an LLM client",
    body: "Zero provider-specific code. Bring the chat model wrapper your stack already uses.",
    useInstead: "openai · anthropic · google-genai · langchain-*",
  },
  {
    title: "Not an eval / observability platform",
    body: "Sematryx emits structured traces. Ship them to whatever you already use for runs, evals, and dashboards.",
    useInstead: "Braintrust · Langfuse · Arize",
  },
  {
    title: "Not generic agent tooling",
    body: "No memory, planners, tool registries, or skills. Those belong in the agent framework, not the patterns layer.",
    useInstead: "Your existing agent stack",
  },
];

export function WhatItIsNot() {
  return (
    <Section
      number="02"
      eyebrow="What it is not"
      title="Defined by what it doesn't try to be."
      lede={
        <>
          The discipline of staying in the patterns layer is what makes
          benchmarks, traces, and shim parity mechanically enforceable.
        </>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 bg-surface p-6 md:p-7"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-subtle">
              ✗ {item.title}
            </p>
            <p className="text-base text-fg">{item.body}</p>
            <p className="mt-auto pt-2 font-mono text-xs text-muted">
              <span className="text-subtle">use →</span> {item.useInstead}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
