import Link from "next/link";

const links: { href: string; label: string }[] = [
  { href: "/patterns/adversarial-debate", label: "Patterns" },
  { href: "/examples", label: "Examples" },
  { href: "/benchmarks", label: "Benchmarks" },
  { href: "/docs", label: "Docs" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span aria-hidden className="text-subtle">
            [
          </span>
          <span className="font-medium">sematryx</span>
          <span aria-hidden className="text-subtle">
            ]
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/anthropics/sematryx-multi-agent"
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-fg"
        >
          <span aria-hidden>↗</span>
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
}
