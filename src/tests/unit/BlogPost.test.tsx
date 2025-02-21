import { render, screen } from "@testing-library/react";
import BlogPost from "@/components/BlogPost";

const mockPost = {
  id: "1",
  title: "Test Post",
  content: "This is a test post content.",
  date: "2023-10-15",
  category: "Testing",
  author: {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
  },
};

describe("BlogPost Component", () => {
  it("renders the post title", () => {
    render(<BlogPost post={mockPost} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
  });

  it("renders the author's name", () => {
    render(<BlogPost post={mockPost} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the post content", () => {
    render(<BlogPost post={mockPost} />);
    expect(
      screen.getByText("This is a test post content.")
    ).toBeInTheDocument();
  });

  it("renders the post date", () => {
    render(<BlogPost post={mockPost} />);
    expect(screen.getByText("2023-10-15")).toBeInTheDocument();
  });

  it("renders the post category", () => {
    render(<BlogPost post={mockPost} />);
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });
});
