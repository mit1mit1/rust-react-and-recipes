describe("Test the front page", () => {
  it("Checks the title renders", () => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
    cy.contains("Recipe");
    cy.checkA11y();
  });
});
