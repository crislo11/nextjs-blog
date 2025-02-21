export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface Comment {
  id: number;
  postId: string;
  name: string;
  email: string;
  body: string;
}

// JSONPlaceholder endpoint
const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

// Mock author data (since JSONPlaceholder doesn't provide author information)
const MOCK_AUTHOR = {
  name: "Jane Doe",
  avatar: "https://i.pravatar.cc/100?img=1",
};

export async function fetchBlogPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${JSON_PLACEHOLDER_URL}/posts`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const data = await response.json();

    const posts: Post[] = data.map((post: any) => ({
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

export async function fetchBlogPostBySlug(slug: string): Promise<Post | null> {
  try {
    const postId = slug.split("-")[1];

    const response = await fetch(`${JSON_PLACEHOLDER_URL}/posts/${postId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog post");
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
    const response = await fetch(
      `${JSON_PLACEHOLDER_URL}/comments?postId=${postId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const comments: Comment[] = await response.json();
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}
