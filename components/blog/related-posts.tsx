import { BlogPost } from "@/lib/blog/types";
import { BlogCard } from "./blog-card";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section aria-label="Related articles" className="mt-20 border-t border-subtle/30 pt-16">
      <p className="coord-label mb-4">§ RELATED CASE FILES</p>
      <h2 className="text-2xl font-black tracking-tight text-white">Related Case Files</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {posts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
