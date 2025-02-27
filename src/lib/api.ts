import type { Post, Comment, PostDetail } from "./types";

const API_URL = "https://dummyjson.com";

const MOCK_AUTHOR = {
  name: "Jane Doe",
  avatar: "https://i.pravatar.cc/100?img=1",
};

export async function fetchBlogPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${API_URL}/posts`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const data = await response.json();

    const posts: Post[] = data?.posts?.map((post: PostDetail) => ({
      id: post.id.toString(),
      title: post.title,
      excerpt: post.body.substring(0, 100),
      content: `${post.body}`,
      slug: `post-${post.id}`,
      category: "Uncategorized",
      date: new Date().toISOString().split("T")[0],
      author: MOCK_AUTHOR,
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

export async function fetchBlogPostBySlug(id: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog post by slug");
    }

    const post = await response.json();

    return {
      id: post.id.toString(),
      title: post.title,
      excerpt: post.body.substring(0, 100),
      content: `${post.body}`,
      slug: `post-${post.id}`,
      category: "Uncategorized",
      date: new Date().toISOString().split("T")[0],
      author: MOCK_AUTHOR,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

export async function fetchComments(postId: string): Promise<Comment[]> {
  try {
    const response = await fetch(`${API_URL}/comments/post/${postId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();

    return data.comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}
