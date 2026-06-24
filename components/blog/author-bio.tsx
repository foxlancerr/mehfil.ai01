import { Author } from "@/lib/blog/types";
import { BlogImage } from "./blog-image";

function AuthorAvatar({ author }: { author: Author }) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-subtle">
      <BlogImage
        src={author.avatarUrl}
        alt={author.name}
        width={56}
        height={56}
        className="object-cover"
        placeholderLabel={initials}
      />
    </div>
  );
}

export function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="glass-panel bracket-frame flex items-start gap-4 p-5 sm:p-6">
      <div className="relative shrink-0">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-crimson/50 to-rose/20 blur-sm" />
        <AuthorAvatar author={author} />
      </div>
      <div>
        <p className="text-base font-bold text-white">{author.name}</p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted/70">
          {author.role}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{author.bio}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs">
          {author.sameAs.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-crimson/70 transition-colors hover:text-crimson-light"
            >
              {new URL(url).hostname.replace("www.", "")}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
