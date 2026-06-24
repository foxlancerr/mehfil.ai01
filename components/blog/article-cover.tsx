import { BlogImage } from "./blog-image";

export function ArticleCover({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="glass-panel glow-border bracket-frame relative mt-8 aspect-[16/9] w-full overflow-hidden">
      <BlogImage
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1100px) 100vw, 1100px"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/50 via-base/10 to-transparent" />
    </figure>
  );
}
