import { posts, getPostBySlug, getRelatedPosts, type Post } from "@/data/posts";
import BlogPostClient from "./BlogPostClient";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug || "");
  const related = getRelatedPosts(slug || "", 3);

  return <BlogPostClient post={post} related={related} />;
}
