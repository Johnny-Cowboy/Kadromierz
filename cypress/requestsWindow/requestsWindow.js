class RequestsWindow {
  clickAddVacation() {
    return cy.get(".absencesViewHeaderOptions button").click();
  }

  openRequestDetails() {
    return cy.get(".material-symbols-outlined").contains("more_vert").click();
  }

  confirmVacationRequest() {
    return cy
      .get(".k-dropdownMenu__title")
      .contains("Szczegóły wniosku")
      .click();
  }

  confirmButtonVacation() {
    cy.get('[data-test="confirmButton"]', { timeout: 10000 }).should("exist");
    return cy.get('[data-test="confirmButton"] > span').should("be.visible").click();
  }
}

export default RequestsWindow;

