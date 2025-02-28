"use client";

import { useEffect, useState } from "react";
import useBlogStore from "@/lib/store";
import Comments from "@/components/comments/Comments";
import CommentForm from "@/components/comments/CommentForm";
import type { Comment } from "@/lib/types";

export default function RealTimeComments({
  postId,
  initialComments,
}: {
  postId: string;
  initialComments: Comment[];
}) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const addComment = useBlogStore((state) => state.addComment);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onmessage = async (event) => {
      try {
        let data;
        if (event.data instanceof Blob) {
          data = await event.data.text();
        } else {
          data = event.data;
        }

        const newComment = JSON.parse(data);

        if (newComment.postId === postId) {
          setComments((prevComments) => [...prevComments, newComment]);
          addComment(newComment);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, [postId, addComment]);

  return (
    <div className="space-y-8">
      <Comments comments={comments} />
      <CommentForm postId={postId} />
    </div>
  );
}
