"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Comment } from "@/lib/types";

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Comments</h2>
      {comments?.map((comment) => (
        <Card key={comment.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/150?u`} />
                <AvatarFallback>
                  {comment?.user?.fullName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{comment.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {comment?.user?.username}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{comment.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
