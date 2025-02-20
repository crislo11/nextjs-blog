import create from "zustand";
import { fetchBlogPosts, Post } from "./api";

interface BlogState {
  posts: Post[];
  fetchPosts: () => Promise<void>;
}

const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  fetchPosts: async () => {
    const posts = await fetchBlogPosts();
    set({ posts });
  },
}));

export default useBlogStore;
