import { render, screen } from "@testing-library/react";
import BlogList from "@/components/blog/BlogList";
import BlogPost from "@/components/blog/BlogPost";

const mockPost = {
  id: "1",
  title: "Testing title",
  excerpt: "This is a test post excerpt.",
  slug: "test-post",
  date: "2023-10-15",
  category: "Testing",
  content: "This is a test post content.",
  author: {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
  },
};

describe("Blog Integration", () => {
  it("renders BlogList and navigates to BlogPost", () => {
    render(
      <>
        <BlogList post={mockPost} />
        <BlogPost post={mockPost} />
      </>
    );

    const blogListTitle = screen.getByRole("link", { name: "Testing title" });
    expect(blogListTitle).toBeInTheDocument();

    expect(
      screen.getByText("This is a test post excerpt.")
    ).toBeInTheDocument();

    const blogPostTitle = screen.getByRole("heading", {
      name: "Testing title",
    });
    expect(blogPostTitle).toBeInTheDocument();

    expect(
      screen.getByText("This is a test post content.")
    ).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
