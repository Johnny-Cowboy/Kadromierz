class ScheduleChange {
  typeHoursInput() {
    return cy.get(".k-textInput");
  }

  confirmButton() {
    return cy.get('[data-test="confirmButton"]');
  }

  updateHours(hours) {
    this.typeHoursInput().clear().type(hours);
  }

  confirm() {
    this.confirmButton().click();
  }
}

export default ScheduleChange;
