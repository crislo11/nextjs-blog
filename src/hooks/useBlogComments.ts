import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "@/lib/api";
import { Comment } from "@/lib/types";

export function useComments(postId: string) {
  return useQuery<Comment[], Error>({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
    enabled: !!postId,
  });
}