import { render, screen } from "@testing-library/react";
import Comments from "@/components/comments/Comments";

const mockComments = [
  {
    id: 1,
    postId: "1",
    name: "John Doe",
    email: "john@example.com",
    body: "This is a comment.",
  },
  {
    id: 2,
    postId: "1",
    name: "Jane Doe",
    email: "jane@example.com",
    body: "This is another comment.",
  },
];

describe("Comments Component", () => {
  it("renders the list of comments", () => {
    render(<Comments comments={mockComments} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("This is a comment.")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("This is another comment.")).toBeInTheDocument();
  });

  it("renders the correct number of comments", () => {
    render(<Comments comments={mockComments} />);
    const commentElements = screen.getAllByRole("article");
    expect(commentElements.length).toBe(2);
  });
});
