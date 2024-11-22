class PositionsAndRates {
  contractsTab() {
    return cy.get('[data-test="contractsTab"]');
  }

  findJobTitle() {
    return cy.get('[data-test="jobTitlesSelect"]');
  }

  selectJobTitle() {
    return cy.get('[data-test="jobTitlesSelect"]');
  }
  clickCheckbox1() {
    return cy.get(".mdMultiSelect__dropdown__item__checkbox");
  }

  saveButton() {
    return cy.get('[data-test="confirmButton"]');
  }

  selectPositionAndSave(positionName) {
    this.contractsTab().click();
    this.findJobTitle().click();
    this.selectJobTitle().type(positionName).click();
    this.clickCheckbox1().first().click();
    this.saveButton().click();
  }
}
export default PositionsAndRates;
