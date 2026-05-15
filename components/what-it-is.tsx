import { Section } from "./section";

const wraps = [
  "LangGraph",
  "CrewAI",
  "AutoGen",
  "openai",
  "anthropic",
  "google-genai",
  "langchain",
];

export function WhatItIs() {
  return (
    <Section
      number="01"
      eyebrow="What it is"
      title={
        <>
          A patterns layer for multi-agent reasoning — not another framework.
        </>
      }
      lede={
        <>
          Sematryx ships, for each reasoning pattern, a deterministic state
          machine that owns the algorithm: turn selection, state transitions,
          termination, contested-claim modeling, trace construction. Production
          execution happens inside the framework you already use.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <ul className="space-y-4 text-base text-muted">
            <li className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-fg/40" />
              <span>
                A <span className="text-fg">pattern</span> is a frozen
                state machine: same scripted turn responses → identical
                canonical trace, regardless of the runtime driving it.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-fg/40" />
              <span>
                <span className="text-fg">Integration shims</span> drive the
                machine from inside LangGraph, CrewAI, AutoGen, or your own
                async runner. Shims own LLM calls, retries, persistence, cost.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-fg/40" />
              <span>
                Wraps existing LLM clients and frameworks — no provider lock-in,
                no parallel observability stack, no event loop of its own.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-fg/40" />
              <span>
                Patterns compose. An adversarial debate inside a K-fold
                ensemble; boosted reasoning over an adversarial base.
              </span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-md border border-border bg-surface p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
              Composes with
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {wraps.map((name) => (
                <li
                  key={name}
                  className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-muted"
                >
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
              Bring your own chat model. Sematryx defines the algorithm; the
              framework you target executes it.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
