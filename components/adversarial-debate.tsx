import { Section } from "./section";

const useThis: string[] = [
  "An answer needs adversarial pressure to surface gaps and unsupported claims",
  "Sycophancy or single-model groupthink is the failure mode you fear most",
  "You want a structured trace of where agents disagreed, not just a final string",
];

const avoidThis: string[] = [
  "The task has a single uncontested correct answer (debate burns budget for nothing)",
  "Latency budget is tight — 2-4 rounds at 2-4 agents is the floor",
  "You only have one model available — adversarial pressure thins out fast",
];

const returns: { name: string; type: string; note: string }[] = [
  {
    name: "answer",
    type: "str",
    note: "final answer after the last accepted turn",
  },
  {
    name: "contested_claims",
    type: "tuple[ContestedClaim, ...]",
    note: "claims raised by ≥1 agent, with first/last turn + raised_by",
  },
  {
    name: "events",
    type: "tuple[DebateTraceEvent, ...]",
    note: "per-turn trace: messages, parsed critique, parsed contested",
  },
  {
    name: "termination",
    type: "DebateTermination",
    note: "convergence · exhaustion · persistent_disagreement",
  },
  {
    name: "num_turns",
    type: "int",
    note: "total turns executed (≤ max_rounds × num_agents)",
  },
  {
    name: "total_usage",
    type: "TokenUsage",
    note: "tokens + cost, populated by the integration shim",
  },
];

export function AdversarialDebateSection() {
  return (
    <Section
      number="04"
      eyebrow="First pattern"
      title={<>Adversarial Round-Robin Debate.</>}
      lede={
        <>
          N agents take turns critiquing and refining a shared answer. Arguments
          must be adversarial but reasonable — valid critique, not contrarian
          performance. The machine terminates on convergence, exhaustion, or
          persistent disagreement.
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7 space-y-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-subtle">
              Use this when
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-fg">
              {useThis.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-subtle">
              Avoid this when
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-muted">
              {avoidThis.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-fg/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-border bg-surface-2 p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-subtle">
              Failure modes to watch
            </p>
            <p className="mt-2 text-sm text-muted">
              Critic-as-contrarian (disagrees for the sake of it) ·
              frame-locking on the proposer's framing · disagreement that's
              real but never resolved (terminates on persistent_disagreement,
              not convergence — inspect <span className="font-mono">contested_claims</span>).
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-md border border-border">
            <div className="border-b border-border bg-surface-2 px-4 py-2 font-mono text-xs text-subtle">
              DebateResult
            </div>
            <table className="w-full text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                <tr className="border-b border-border bg-surface">
                  <th className="px-4 py-2 font-normal">field</th>
                  <th className="px-4 py-2 font-normal">type</th>
                </tr>
              </thead>
              <tbody>
                {returns.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="bg-surface px-4 py-3 align-top">
                      <div className="font-mono text-fg">{row.name}</div>
                      <div className="mt-0.5 text-xs text-muted">
                        {row.note}
                      </div>
                    </td>
                    <td className="bg-surface px-4 py-3 align-top font-mono text-xs text-muted">
                      {row.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-subtle">
            Cost &amp; latency: ~ <span className="tabular">N × R</span> LLM
            calls (N agents, R rounds). Budget {`<= 4 agents × 8 rounds`} in
            most production settings.
          </p>
        </div>
      </div>
    </Section>
  );
}
