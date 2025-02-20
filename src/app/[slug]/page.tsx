import { fetchBlogPostBySlug } from "@/lib/api";
import BlogPost from "@/components/BlogPost";
import Layout from "@/app/layout";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <BlogPost post={post} />
      </div>
    </Layout>
  );
}
