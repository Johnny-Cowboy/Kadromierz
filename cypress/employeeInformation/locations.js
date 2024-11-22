class Locations {
  locationsWindow() {
    return cy.get('[data-test="locationsTab"]');
  }

  selectDropdown() {
    return cy.get('[data-test="locationsSelect"]');
  }

  checkLocation() {
    return cy.get('[data-test="locationsSelect-input-search"]');
  }

  clickCheckbox() {
    return cy.get(".mdMultiSelect__dropdown__item__checkbox");
  }

  selectLocation(locationName) {
    this.locationsWindow().click();
    this.selectDropdown().click();
    this.checkLocation().type(locationName).click();
    this.clickCheckbox().first().click();
  }
}
export default Locations;
