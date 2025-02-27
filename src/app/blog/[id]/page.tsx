"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchBlogPostBySlug, fetchComments } from "@/lib/api";
import Layout from "@/app/layout";
import BlogPost from "@/components/blog/BlogPost";
import RealTimeComments from "@/components/comments/RealTimeComments";
import { Post, Comment } from "@/lib/types";

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await fetchBlogPostBySlug(id);
        if (fetchedPost) {
          setPost(fetchedPost);
          const fetchedComments = await fetchComments(fetchedPost.id);
          setComments(fetchedComments);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto p-4">Loading...</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto p-4">Post not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <BlogPost post={post} />
        <RealTimeComments postId={post.id} initialComments={comments} />
      </div>
    </Layout>
  );
}
