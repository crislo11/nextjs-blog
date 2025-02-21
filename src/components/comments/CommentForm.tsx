"use client";

import { useState } from "react";
import useBlogStore from "@/lib/store";
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

export default function CommentForm({ postId }: { postId: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const { addComment } = useBlogStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComment = {
      id: Date.now(), // Temporary ID
      postId,
      name,
      email,
      body,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );

    if (response.ok) {
      addComment(newComment);

      const socket = new WebSocket("ws://localhost:3001");
      socket.onopen = () => {
        socket.send(JSON.stringify(newComment));
        socket.close();
      };

      setName("");
      setEmail("");
      setBody("");
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
