import { fetchBlogPosts } from "@/lib/api";
import BlogList from "@/components/blog/BlogList";

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, stories and ideas.
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto p-6 md:py-10">
        {posts?.map((post) => (
          <BlogList key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
}
