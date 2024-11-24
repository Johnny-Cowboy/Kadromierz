/// <reference types="cypress" />

import { login } from "../loginPage/loginPage";
import SideBarMenu from "../sidebarMenu/sideBarMenu";
import RosterWindow from "../rosterWindow/rosterWindow";
import CalendarWindow from "../rosterWindow/calendarWindow";
import ScheduleChange from "../rosterWindow/scheduleChange";
import Assertions from "../assertions/assertions";

context(
  "Automated test for adding a new employee shift to the calendar",
  () => {
    let sideBarMenu, rosterWindow, calendarWindow, scheduleChange, assertions;

    const testHours = "8001600"; // Employee shift hours.
    const fromDate = 2; // Date range start.
    const toDate = 6; // EDate range end.
    //The date '4.09' has been set within the 'RosterWindow' class.
    before(() => {
      // Initialization of Page Object Model elements.
      sideBarMenu = new SideBarMenu();
      rosterWindow = new RosterWindow();
      calendarWindow = new CalendarWindow();
      scheduleChange = new ScheduleChange();
      assertions = new Assertions();
    });

    beforeEach(() => {
      login(); // Logging in before each test.
    });

    it("Adding an employee shift on September 4th", () => {
      sideBarMenu.navigateTo("Grafik pracy"); // Access the 'Grafik pracy' section.
      rosterWindow.openCalendar(); // Opens the calendar pop-up.
      calendarWindow.selectDateRange(fromDate, toDate); // Sets a date range.
      calendarWindow.close(); // Closing the calendar.
      rosterWindow.selectDate(); // Picks a days from the schedule.
      scheduleChange.updateHours(testHours); // Hour update.
      scheduleChange.confirm(); // Confirmation of the added employee shif.
      assertions.changeAdded(); // Checking toast notification
    });
  }
);
