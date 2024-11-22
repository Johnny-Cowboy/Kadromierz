class RosterWindow {
  openCalendar() {
    return cy.get(".k-topBarCalendar__dateText").click();
  }
  //Field responsible for the date 4.09.
  selectDate() {
    return cy
      .get("tbody")
      .should("be.visible")
      .find(".scheduleTable__row")
      .eq(0)
      .find(".k-scheduleDropArea")
      .eq(2)
      .click();
  }
}

export default RosterWindow;
