import { fetchBlogPosts } from "@/lib/api";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto p-6 md:py-10">
      {posts.map((post) => (
        <BlogList key={post.id} post={post} />
      ))}
    </div>
  );
}
