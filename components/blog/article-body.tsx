import type { ReactElement, ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TocItem } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

function getNodeText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    return getNodeText(el.props.children);
  }
  return "";
}

function buildIdMap(toc: TocItem[]): Map<string, string> {
  return new Map(toc.map((item) => [item.label.trim(), item.id]));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function resolveHeadingId(text: string, idMap: Map<string, string>): string {
  const trimmed = text.trim();
  return idMap.get(trimmed) ?? slugify(trimmed);
}

const bodyText = "leading-[1.75] text-text-muted";
const strongText = "font-semibold text-white";

export function ArticleBody({
  markdown,
  toc,
}: {
  markdown: string;
  toc: TocItem[];
}) {
  const idMap = buildIdMap(toc);

  return (
    <div className="prose-blog max-w-none space-y-5 text-sm leading-relaxed text-text-muted md:text-base">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const id = resolveHeadingId(getNodeText(children), idMap);
            return (
              <h2
                id={id}
                className="scroll-mt-28 border-l-2 border-crimson/60 pl-4 text-xl font-bold tracking-tight text-white md:text-2xl"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = resolveHeadingId(getNodeText(children), idMap);
            return (
              <h3
                id={id}
                className="scroll-mt-28 text-lg font-semibold text-white"
              >
                {children}
              </h3>
            );
          },
          p: ({ children }) => <p className={bodyText}>{children}</p>,
          strong: ({ children }) => <strong className={strongText}>{children}</strong>,
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-crimson-light underline-offset-2 transition-colors hover:text-crimson hover:underline"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-none space-y-2.5 pl-0 [&>li]:relative [&>li]:list-none [&>li]:pl-5 [&>li]:leading-[1.75] [&>li]:text-text-muted [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:font-mono [&>li]:before:text-xs [&>li]:before:text-crimson/70 [&>li]:before:content-['—'] [&>li>strong]:font-semibold [&>li>strong]:text-white">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-2.5 pl-5 marker:text-crimson/70 [&>li]:leading-[1.75] [&>li]:text-text-muted [&>li>strong]:font-semibold [&>li>strong]:text-white">
              {children}
            </ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-crimson/40 bg-surface/40 py-3 pl-4 pr-3 italic text-text-muted">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-subtle/50" />,
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="block overflow-x-auto rounded-lg border border-subtle/50 bg-surface px-4 py-3 font-mono text-xs text-crimson-light">
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded border border-subtle/50 bg-surface/80 px-1.5 py-0.5 font-mono text-xs text-crimson-light">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-2 overflow-x-auto rounded-lg border border-subtle/50 bg-surface p-0">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto rounded-lg border border-subtle/50">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-subtle bg-surface/60">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-t border-subtle/30 transition-colors first:border-t-0 hover:bg-surface/30">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-semibold text-white">{children}</th>
          ),
          td: ({ children }) => (
            <td className={cn("px-4 py-3", bodyText)}>{children}</td>
          ),
        }}
      >
        {markdown.trim()}
      </Markdown>
    </div>
  );
}
