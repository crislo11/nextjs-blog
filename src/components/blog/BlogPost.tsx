import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <Badge variant="secondary">{post.category}</Badge>
        </div>
      </div>
      <div className="prose max-w-none dark:prose-invert">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
