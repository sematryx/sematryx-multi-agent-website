type Props = {
  language?: string;
  filename?: string;
  children: string;
};

export function CodeBlock({ language = "python", filename, children }: Props) {
  return (
    <figure className="overflow-hidden rounded-md border border-border bg-surface">
      <figcaption className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2 font-mono text-xs text-subtle">
        <span>{filename ?? language}</span>
        <span aria-hidden>{language}</span>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-fg">{children}</code>
      </pre>
    </figure>
  );
}
