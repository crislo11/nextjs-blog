import { render, screen } from "@testing-library/react";
import BlogList from "@/components/blog/BlogList";

const mockPost = {
  id: "1",
  title: "Test Post",
  excerpt: "This is a test post excerpt.",
  slug: "test-post",
  date: "2023-10-15",
  category: "Testing",
};

describe("BlogList Component", () => {
  it("renders the post title", () => {
    render(<BlogList post={mockPost} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
  });

  it("renders the post excerpt", () => {
    render(<BlogList post={mockPost} />);
    expect(
      screen.getByText("This is a test post excerpt.")
    ).toBeInTheDocument();
  });

  it("renders the post date", () => {
    render(<BlogList post={mockPost} />);
    expect(screen.getByText("2023-10-15")).toBeInTheDocument();
  });

  it("renders the post category", () => {
    render(<BlogList post={mockPost} />);
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

  it("renders a 'Read More' button", () => {
    render(<BlogList post={mockPost} />);
    expect(screen.getByText("Read More")).toBeInTheDocument();
  });
});
