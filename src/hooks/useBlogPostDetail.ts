import { useQuery } from "@tanstack/react-query";
import { fetchBlogPostBySlug } from "@/lib/api";
import { Post } from "@/lib/types";

export function useBlogPostDetail(id: string) {
  return useQuery<Post | null, Error>({
    queryKey: ["blogPost", id],
    queryFn: () => fetchBlogPostBySlug(id),
    enabled: !!id,
  });
}