describe("Blog Post Page", () => {
  it("displays the post and comments", () => {
    cy.visit("http://localhost:3000/blog/1");

    cy.contains("His mother had always taught him").should("exist");
    cy.contains(
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
    ).should("exist");

    cy.contains("Comments").should("exist");
    cy.contains("leahw").should("exist");
    cy.contains("These are fabulous ideas!").should("exist");
  });

  it("allows adding a new comment", () => {
    cy.visit("http://localhost:3000/blog/1");

    cy.get('input[placeholder="Your name"]').type("Jane Doe");
    cy.get('textarea[placeholder="Your comment"]').type(
      "This is a new comment."
    );

    cy.contains("Add Comment").click();

    cy.contains("Jane Doe").should("exist");
    cy.contains("This is a new comment.").should("exist");
  });
});
