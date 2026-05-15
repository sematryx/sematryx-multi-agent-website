import Link from "next/link";

const cols: {
  heading: string;
  items: { href: string; label: string }[];
}[] = [
  {
    heading: "Docs",
    items: [
      { href: "/docs", label: "Getting started" },
      { href: "/docs", label: "Choosing a pattern" },
      { href: "/patterns/adversarial-debate", label: "Adversarial debate" },
      { href: "/benchmarks", label: "Benchmarking" },
      { href: "/docs", label: "Result objects" },
      { href: "/docs", label: "Traces" },
    ],
  },
  {
    heading: "Examples",
    items: [
      { href: "/examples", label: "Adversarial debate basics" },
      { href: "/examples", label: "Sycophancy challenge" },
      { href: "/examples", label: "Design review" },
      { href: "/examples", label: "Single-agent baseline" },
      { href: "/examples", label: "Inspecting contested claims" },
    ],
  },
  {
    heading: "Patterns",
    items: [
      { href: "/patterns/adversarial-debate", label: "Adversarial debate" },
      { href: "/patterns/adversarial-debate", label: "K-fold reasoning" },
      { href: "/patterns/adversarial-debate", label: "Self-consistency" },
      { href: "/patterns/adversarial-debate", label: "Boosted reasoning" },
      { href: "/patterns/adversarial-debate", label: "Bagging" },
      { href: "/patterns/adversarial-debate", label: "Stacking" },
    ],
  },
  {
    heading: "Project",
    items: [
      {
        href: "https://github.com/anthropics/sematryx-multi-agent",
        label: "GitHub",
      },
      {
        href: "https://github.com/anthropics/sematryx-multi-agent/issues",
        label: "Issues",
      },
      {
        href: "https://github.com/anthropics/sematryx-multi-agent/blob/main/LICENSE",
        label: "MIT license",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-subtle">
                {col.heading}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {col.items.map((item) => (
                  <li key={`${col.heading}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="text-muted transition-colors hover:text-fg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <p className="font-mono">
            sematryx · algorithmic patterns for multi-agent reasoning
          </p>
          <p className="font-mono">MIT licensed · 0.1 — preview</p>
        </div>
      </div>
    </footer>
  );
}
