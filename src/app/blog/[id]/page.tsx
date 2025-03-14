"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronLeft, Loader2 } from "lucide-react";
import { fetchBlogPostBySlug, fetchComments } from "@/lib/api";
import Layout from "@/app/layout";
import BlogPost from "@/components/blog/BlogPost";
import RealTimeComments from "@/components/comments/RealTimeComments";
import { Post, Comment } from "@/lib/types";
import Link from "next/link";

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

  if (loading)
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center"
        role="status"
        aria-label="Loading"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary"
          aria-hidden="true"
        />
      </div>
    );

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
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            aria-label="Back to blog list"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Blog list</span>
          </Link>
        </div>
        <BlogPost post={post} />
        <RealTimeComments postId={post.id} initialComments={comments} />
      </div>
    </Layout>
  );
}
