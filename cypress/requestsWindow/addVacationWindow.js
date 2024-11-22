class AddVacationWindow {
  selectEmployee(employeeName) {
    cy.get(".mdSelectInput").eq(0).click();
    cy.get(`[data-test="${employeeName}"] .listItem__text`).click();
  }

  selectLeaveType(leaveType) {
    cy.get(".mdSelectInput").eq(1).click();
    cy.get(".mdSelectDropdown")
      .eq(1)
      .find(".listItem")
      .contains(leaveType)
      .click();
  }

  setDateRange(fromDay, toDay) {
    cy.get(".k-calendarPopoverInput").click();
    cy.get(".rdrDayNumber").contains(new RegExp(`^${fromDay}$`)).click();
    cy.get(".rdrDayNumber").contains(new RegExp(`^${toDay}$`)).click();
  }

  confirmVacationRequest(){
    return cy.get('[data-test="confirmButton"]').click();
  }

  confirmVacation() {
    cy.get('[data-test="confirmButton"]').click();
  }
}

export default AddVacationWindow;















/*class AddVacationWindow {
  employeeList() {
    return cy.get(".mdSelectInput");
  }
  selectEmployee() {
    return cy.get('[data-test="Adam Adamski"] > .listItem__text');
  }
  typeOfLeaveList() {
    return cy.get(".mdSelectInput");
  }
  selectTypeOfLeave() {
    return cy
      .get(".mdSelectDropdown")
      .eq(1)
      .find(".listItem")
      .contains("Oddanie krwi");
  }
  selectDate() {
    return cy.get(".k-calendarPopoverInput");
  }

  fromDate() {
    return cy.get(".rdrDayNumber").contains(/^25$/);
  }

  toDate() {
    return cy.get(".rdrDayNumber").contains(/^26$/);
  }

  confirmButton() {
    return cy.get('[data-test="confirmButton"]');
  }
}
export default AddVacationWindow;*/
