import type { ReactElement, ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TocItem } from "@/lib/blog/types";

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

export function ArticleBody({
  markdown,
  toc,
}: {
  markdown: string;
  toc: TocItem[];
}) {
  const idMap = buildIdMap(toc);

  return (
    <div className="prose-blog max-w-none">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const id = resolveHeadingId(getNodeText(children), idMap);
            return <h2 id={id}>{children}</h2>;
          },
          h3: ({ children }) => {
            const id = resolveHeadingId(getNodeText(children), idMap);
            return <h3 id={id}>{children}</h3>;
          },
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
              {children}
            </a>
          ),
        }}
      >
        {markdown.trim()}
      </Markdown>
    </div>
  );
}
