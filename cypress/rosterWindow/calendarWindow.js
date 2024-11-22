class CalendarWindow {
  prevButton() {
    return cy
      .get(".rdrMonthAndYearWrapper")
      .find(".rdrNextPrevButton")
      .eq(0)
      .should("be.visible");
  }

  selectDay(day) {
    return cy.get(".rdrDayNumber").contains(new RegExp(`^${day}$`));
  }

  selectDateRange(fromDay, toDay) {
    this.prevButton().click();
    this.selectDay(fromDay).click();
    this.selectDay(toDay).click();
  }

  close() {
    return cy.get(".k-topBarCalendar__close").click();
  }
}

export default CalendarWindow;
