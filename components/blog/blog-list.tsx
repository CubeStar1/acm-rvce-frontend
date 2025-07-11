import { BlogCard } from "./blog-card";
import type { PostsQueryResult } from "@/sanity.types";

interface BlogListProps {
  posts: PostsQueryResult;
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-muted-foreground py-12">No blog posts found.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post as any} />
      ))}
    </div>
  );
} 