import Link from "next/link";
import { Section } from "./section";

type Tree = {
  root: string;
  href: string;
  status?: "shipping" | "planned" | "scaffold";
  items: { label: string; href: string; status?: "shipping" | "planned" }[];
};

const trees: Tree[] = [
  {
    root: "/docs",
    href: "/docs",
    status: "scaffold",
    items: [
      { label: "Getting started", href: "/docs", status: "planned" },
      { label: "Choosing a pattern", href: "/docs", status: "planned" },
      {
        label: "Adversarial debate",
        href: "/patterns/adversarial-debate",
        status: "shipping",
      },
      { label: "Benchmarking", href: "/benchmarks", status: "planned" },
      { label: "Result objects", href: "/docs", status: "planned" },
      { label: "Traces", href: "/docs", status: "planned" },
      { label: "Examples", href: "/examples", status: "planned" },
    ],
  },
  {
    root: "/examples",
    href: "/examples",
    status: "scaffold",
    items: [
      { label: "Adversarial debate basics", href: "/examples", status: "shipping" },
      { label: "Sycophancy challenge", href: "/examples", status: "shipping" },
      { label: "Design review", href: "/examples", status: "shipping" },
      {
        label: "Benchmark vs. single-agent baseline",
        href: "/examples",
        status: "shipping",
      },
      {
        label: "Inspecting contested claims",
        href: "/examples",
        status: "shipping",
      },
    ],
  },
  {
    root: "/patterns",
    href: "/patterns/adversarial-debate",
    status: "scaffold",
    items: [
      {
        label: "Adversarial debate",
        href: "/patterns/adversarial-debate",
        status: "shipping",
      },
      { label: "K-fold reasoning", href: "/patterns/adversarial-debate", status: "planned" },
      { label: "Self-consistency", href: "/patterns/adversarial-debate", status: "planned" },
      { label: "Boosted reasoning", href: "/patterns/adversarial-debate", status: "planned" },
      { label: "Bagging", href: "/patterns/adversarial-debate", status: "planned" },
      { label: "Stacking", href: "/patterns/adversarial-debate", status: "planned" },
    ],
  },
];

export function DocsRoadmap() {
  return (
    <Section
      number="09"
      eyebrow="Documentation roadmap"
      title={<>How the docs will grow.</>}
      lede={
        <>
          The site is organized the way scikit-learn organizes its docs:
          patterns, examples, and a user guide that teaches you which to use.
          This is the structure that will fill in over the next releases.
        </>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
        {trees.map((tree) => (
          <li key={tree.root} className="bg-surface p-6">
            <Link
              href={tree.href}
              className="font-mono text-sm text-fg transition-colors hover:text-accent"
            >
              {tree.root}/
            </Link>
            <ul className="mt-4 space-y-1.5 font-mono text-xs">
              {tree.items.map((item) => (
                <li key={`${tree.root}-${item.label}`}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-muted transition-colors hover:text-fg"
                  >
                    <span aria-hidden className="text-subtle">
                      └─
                    </span>
                    <span>{item.label}</span>
                    {item.status === "planned" ? (
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-subtle">
                        planned
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
