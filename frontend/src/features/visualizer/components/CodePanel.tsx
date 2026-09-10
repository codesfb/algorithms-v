import { Code2 } from "lucide-react";

type CodePanelProps = {
  title?: string;
  language?: string;
  code?: string;
};

export function CodePanel({
  title = "Algorithm code",
  language = "typescript",
  code = "// The implementation will appear here.\n// This panel accepts algorithm or data structure code.",
}: CodePanelProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-code-background shadow-sm">
      <header className="flex items-center justify-between border-b border-code-border bg-code-surface px-5 py-4">
        <div className="flex items-center gap-2 text-foreground">
          <Code2 className="size-4 text-secondary" aria-hidden="true" />
          <h2 className="font-semibold">{title}</h2>
        </div>
        <span className="font-mono text-xs text-muted">{language}</span>
      </header>
      <pre className="min-h-44 overflow-x-auto p-5 font-mono text-sm leading-7 text-text-secondary"><code>{code}</code></pre>
    </section>
  );
}
