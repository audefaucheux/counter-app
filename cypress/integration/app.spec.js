describe("Visits the counter app", () => {
  it("loads the home page", () => {
    cy.visit("/");
    cy.contains("A Useless App");
    cy.contains("Counter");
    cy.contains("Clock");
    cy.percySnapshot();
  });

  it("increments the counter", () => {
    cy.contains("+").click();
    cy.get(".count").should("have.text", "1");
  });

  it("decrements the counter", () => {
    cy.contains("-").click();
    cy.get(".count").should("have.text", "0");
  });
});
