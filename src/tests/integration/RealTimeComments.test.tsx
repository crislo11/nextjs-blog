import { render, screen, fireEvent, act } from "@testing-library/react";
import RealTimeComments from "@/components/comments/RealTimeComments";
import fetchMock from "jest-fetch-mock";

const mockComments = [
  {
    id: 1,
    postId: "1",
    name: "John Test Doe",
    email: "john@example.com",
    body: "This is another comment.",
  },
];

describe("RealTimeComments Component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders the initial comments", () => {
    render(<RealTimeComments postId="1" initialComments={mockComments} />);
    expect(screen.getByText("John Test Doe")).toBeInTheDocument();
    expect(screen.getByText("This is another comment.")).toBeInTheDocument();
  });

  it("allows adding a new comment", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

    render(<RealTimeComments postId="1" initialComments={mockComments} />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Name"), {
        target: { value: "Juan" },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "juan@example.com" },
      });
      fireEvent.change(screen.getByLabelText("Comment"), {
        target: { value: "This is a new comment." },
      });
      fireEvent.click(screen.getByText("Add Comment"));
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/comments`,
      {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
          postId: "1",
          name: "Juan",
          email: "juan@example.com",
          body: "This is a new comment.",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
});
