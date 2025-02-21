describe("Blog Flow", () => {
  it("visits the blog page, clicks on a post, and views the post details", () => {
    // Visit the blog page
    cy.visit("/");

    // Check if the blog list is rendered
    cy.contains("Test Post").should("exist");

    // Click on the first blog post
    cy.contains("Test Post").click();

    // Check if the blog post details are rendered
    cy.contains("This is a test post content.").should("exist");
    cy.contains("John Doe").should("exist");
  });
});
