describe("Blog Post Page", () => {
  it("displays the post and comments", () => {
    cy.visit("http://localhost:3000/post-1");

    cy.contains(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    ).should("exist");
    cy.contains("quia et suscipit suscipit ").should("exist");

    cy.contains("Comments").should("exist");
    cy.contains("id labore ex et quam laborum").should("exist");
    cy.contains(
      "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
    ).should("exist");
  });

  it("allows adding a new comment", () => {
    cy.visit("http://localhost:3000/post-1");

    cy.get('input[placeholder="Your name"]').type("Jane Doe");
    cy.get('input[placeholder="Your email"]').type("jane@example.com");
    cy.get('textarea[placeholder="Your comment"]').type(
      "This is a new comment."
    );

    cy.contains("Add Comment").click();

    cy.contains("Jane Doe").should("exist");
    cy.contains("This is a new comment.").should("exist");
  });
});
