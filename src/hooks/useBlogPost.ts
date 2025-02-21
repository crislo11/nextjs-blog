import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/api";

export function useBlogPosts() {
  return useQuery(["blogPosts"], fetchBlogPosts);
}
