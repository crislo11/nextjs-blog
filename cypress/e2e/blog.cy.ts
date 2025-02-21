describe("Blog Post Page", () => {
  it("displays the post and comments", () => {
    // Visit the blog post page
    cy.visit("/post-1");

    // Verify the post title and content
    cy.contains("Test Post").should("exist");
    cy.contains("This is a test post content.").should("exist");

    // Verify the comments section
    cy.contains("Comments").should("exist");
    cy.contains("John Doe").should("exist");
    cy.contains("This is a comment.").should("exist");
  });

  it("allows adding a new comment", () => {
    // Visit the blog post page
    cy.visit("/post-1");

    // Fill out the comment form
    cy.get('input[placeholder="Name"]').type("Jane Doe");
    cy.get('input[placeholder="Email"]').type("jane@example.com");
    cy.get('textarea[placeholder="Your comment"]').type(
      "This is a new comment."
    );

    // Submit the form
    cy.contains("Add Comment").click();

    // Verify the new comment is displayed
    cy.contains("Jane Doe").should("exist");
    cy.contains("This is a new comment.").should("exist");
  });
});
