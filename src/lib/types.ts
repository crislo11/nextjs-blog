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
  userId: number;
  body: string;
  user?: {
    fullName?: string;
    username?: string;
  };
}

export interface PostDetail {
  postId: number;
  id: number;
  title: string;
  name: string;
  email: string;
  body: string;
}

export interface CommentMessage {
  id: number;
  postId: string;
  userId: number;
  name: string;
  body: string;
  timestamp?: string;
}
