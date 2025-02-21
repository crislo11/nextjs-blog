import { fetchBlogPostBySlug, fetchComments } from "@/lib/api";
import Layout from "@/app/layout";
import BlogPost from "@/components/blog/BlogPost";
import RealTimeComments from "@/components/comments/RealTimeComments";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const postId = post?.id;

  const comments = await fetchComments(postId);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <BlogPost post={post} />
        <RealTimeComments postId={post.id} initialComments={comments} />
      </div>
    </Layout>
  );
}
