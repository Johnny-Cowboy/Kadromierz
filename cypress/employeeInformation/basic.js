class Basics {
  enterName() {
    return cy.get('[data-test="name-input"]');
  }

  enterSurname() {
    return cy.get('[data-test="lastName-input"]');
  }

  enterEmail() {
    return cy.get('[data-test="email2-input"]');
  }

  jobRole() {
    return cy.get('[data-test="role-select-value"]');
  }

  typeRole() {
    return cy.get(".searchItem").find("input");
  }

  selectEmployee() {
    return cy.get('[data-test="Pracownik"]');
  }

  fillPersonalDetails({ name, surname, email, role }) {
    this.enterName().type(name);
    this.enterSurname().type(surname);
    this.enterEmail().type(email);
    this.jobRole().click();
    this.typeRole().type(role);
    this.selectEmployee().click();
  }
}
export default Basics;
