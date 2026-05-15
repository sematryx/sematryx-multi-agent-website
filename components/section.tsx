import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  number?: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, number, title, lede, children }: Props) {
  return (
    <section
      id={id}
      className="border-t border-border px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-wider text-subtle">
              {number ? <span>{number}</span> : null}
              {eyebrow ? <span>{eyebrow}</span> : null}
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-balance text-2xl font-medium tracking-tight md:text-3xl">
              {title}
            </h2>
            {lede ? (
              <p className="mt-4 max-w-2xl text-pretty text-base text-muted md:text-lg">
                {lede}
              </p>
            ) : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
