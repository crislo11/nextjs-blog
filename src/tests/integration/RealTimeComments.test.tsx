import { render, screen, fireEvent } from "@testing-library/react";
import RealTimeComments from "@/components/comments/RealTimeComments";

const mockComments = [
  {
    id: 1,
    postId: "1",
    name: "John Doe",
    email: "john@example.com",
    body: "This is a comment.",
  },
];

describe("RealTimeComments Component", () => {
  it("renders the initial comments", () => {
    render(<RealTimeComments postId="1" initialComments={mockComments} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("This is a comment.")).toBeInTheDocument();
  });

  it("allows adding a new comment", async () => {
    render(<RealTimeComments postId="1" initialComments={mockComments} />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your comment"), {
      target: { value: "This is a new comment." },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText("Add Comment"));

    // Verify the new comment is displayed
    expect(await screen.findByText("Jane Doe")).toBeInTheDocument();
    expect(
      await screen.findByText("This is a new comment.")
    ).toBeInTheDocument();
  });
});
