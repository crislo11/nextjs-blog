import { create } from "zustand";
import type { Comment } from "./types";

interface BlogState {
  comments: Comment[];
  addComment: (comment: Comment) => void;
}

const useBlogStore = create<BlogState>((set) => ({
  comments: [],
  addComment: (comment) =>
    set((state) => ({ comments: [...state.comments, comment] })),
}));

export default useBlogStore;