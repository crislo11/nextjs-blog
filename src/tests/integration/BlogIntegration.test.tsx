import { render, screen } from "@testing-library/react";
import BlogList from "@/components/blog/BlogList";
import BlogPost from "@/components/blog/BlogPost";

const mockPost = {
  id: "1",
  title: "Test Post",
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

    // Check BlogList content
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test post excerpt.")
    ).toBeInTheDocument();

    // Check BlogPost content
    expect(
      screen.getByText("This is a test post content.")
    ).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
