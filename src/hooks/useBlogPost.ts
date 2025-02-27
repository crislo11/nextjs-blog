import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/api";
import { Post } from "@/lib/types";

export function useBlogPosts() {
  return useQuery<Post[], Error>({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });
}