class Assertions {
  newEmployeeAdded() {
    cy.get(".rrt-middle-container")
      .should("be.visible")
      .and("contain.text", "Dodano nowego pracownika!");
  }

  changeAdded() {
    cy.get(".rrt-middle-container")
      .should("be.visible")
      .and("contain.text", "Dodano zmianę!");
  }
  statusChangedSuccessfully() {
    cy.get(".rrt-middle-container")
      .should("be.visible")
      .and("contain.text", "Poprawnie zmieniono status");
  }
}
export default Assertions;
