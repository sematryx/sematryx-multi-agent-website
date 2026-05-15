import Link from "next/link";
import { Section } from "./section";

type Example = {
  slug: string;
  category: string;
  title: string;
  pattern: string;
  task: string;
  learn: string;
};

const examples: Example[] = [
  {
    slug: "adversarial-basics",
    category: "Getting started",
    title: "Adversarial debate basics",
    pattern: "Adversarial Round-Robin Debate",
    task: "Two agents critique and refine an answer to a prompt across four rounds.",
    learn:
      "How turns, contested claims, and termination are exposed in the result.",
  },
  {
    slug: "sycophancy-challenge",
    category: "Reasoning quality",
    title: "Sycophancy challenge",
    pattern: "Adversarial Round-Robin Debate",
    task: "A loaded prompt that nudges single-agent models toward agreement.",
    learn:
      "How adversarial pressure surfaces the underlying disagreement instead of papering over it.",
  },
  {
    slug: "design-review",
    category: "Applied",
    title: "Architecture / design review",
    pattern: "Adversarial Round-Robin Debate",
    task: "Three agents critique a proposed system design across rounds.",
    learn:
      "Reading contested_claims as a structured punch list of unresolved issues.",
  },
  {
    slug: "ambiguous-decision",
    category: "Applied",
    title: "Ambiguous decision support",
    pattern: "Adversarial Round-Robin Debate",
    task: "A decision with multiple defensible answers and conflicting priorities.",
    learn:
      "When persistent_disagreement is the right termination — not convergence.",
  },
  {
    slug: "single-agent-baseline",
    category: "Benchmarking",
    title: "Benchmark against a single-agent baseline",
    pattern: "Benchmark harness",
    task: "Run the same task through a single agent and a debate; compare quality / cost / latency.",
    learn:
      "How to decide whether a pattern is worth its cost on your specific task.",
  },
  {
    slug: "inspecting-contested-claims",
    category: "Traces",
    title: "Inspecting contested claims",
    pattern: "Adversarial Round-Robin Debate",
    task: "Walk through a saved DebateResult and read the contested-claims structure.",
    learn:
      "Treating disagreement as signal: which claims persisted, who raised them, when.",
  },
];

export function ExamplesGallery() {
  return (
    <Section
      number="06"
      eyebrow="Examples gallery"
      title={<>Concrete tasks. Runnable code.</>}
      lede={
        <>
          The fastest way to evaluate a pattern is to read an example that
          matches a task you actually have. Each example links to a runnable
          script and a saved trace.
        </>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {examples.map((ex) => (
          <li key={ex.slug}>
            <Link
              href={`/examples`}
              className="block h-full bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                {ex.category}
              </p>
              <h3 className="mt-3 text-balance text-base font-medium tracking-tight">
                {ex.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{ex.task}</p>
              <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                <div className="flex gap-2">
                  <dt className="font-mono text-subtle">pattern</dt>
                  <dd className="font-mono text-fg">{ex.pattern}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-mono text-subtle">learn</dt>
                  <dd className="text-muted">{ex.learn}</dd>
                </div>
              </dl>
              <p className="mt-4 font-mono text-xs text-accent">Open →</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <Link
          href="/examples"
          className="font-mono text-sm text-muted transition-colors hover:text-fg"
        >
          All examples →
        </Link>
      </div>
    </Section>
  );
}
