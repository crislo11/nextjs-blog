"use client";

import { useState } from "react";
import useBlogStore from "@/lib/store";
import { useWebSocket } from "@/hooks/useWebSocket";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Comment } from "@/lib/types";

export default function CommentForm({ postId }: { postId: string }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const { addComment } = useBlogStore();

  const { sendMessage } = useWebSocket("ws://localhost:3001", (data) => {
    addComment(data);
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = {
      id: Date.now(), // Temporary ID
      postId,
      userId: Math.floor(Math.random() * 30) + 1,
      name,
      body,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}comments/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (response.ok) {
        sendMessage(newComment);

        setName("");
        setBody("");
      } else {
        console.error("Error sending comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a Comment</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              id="comment"
              placeholder="Your comment"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Add Comment</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
