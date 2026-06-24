import { BlogPost } from "@/lib/blog/types";
import { formatDate, cn } from "@/lib/utils";

const severityStyle: Record<BlogPost["severity"], string> = {
  Critical: "border-red-500/40 bg-red-500/10 text-red-400",
  High: "border-crimson/40 bg-crimson/10 text-crimson-light",
  Moderate: "border-subtle bg-surface/80 text-text-muted",
};

export function DiagnosticTicket({ post }: { post: BlogPost }) {
  return (
    <div className="glass-panel bracket-frame relative overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between border-b border-subtle/50 px-4 py-2.5 text-text-muted/70">
        <span className="uppercase tracking-[0.2em]">Case File</span>
        <span className="text-crimson/50">#{post.slug.slice(0, 6).toUpperCase()}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 py-4 sm:grid-cols-4">
        <Field label="Severity">
          <span
            className={cn(
              "inline-block rounded border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
              severityStyle[post.severity]
            )}
          >
            {post.severity}
          </span>
        </Field>
        <Field label="Status">{post.status}</Field>
        <Field label="Read Time">{post.readingTimeMinutes} min</Field>
        <Field label="Filed">{formatDate(post.publishedAt)}</Field>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted/50">{label}</div>
      <div className="mt-1.5 text-sm text-white">{children}</div>
    </div>
  );
}
