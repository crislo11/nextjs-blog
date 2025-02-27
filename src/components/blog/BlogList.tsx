import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
}

export default function BlogList({ post }: { post: Post }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
