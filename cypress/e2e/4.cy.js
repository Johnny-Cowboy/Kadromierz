/// <reference types="cypress" />

import { login } from "../loginPage/loginPage";
import SideBarMenu from "../sidebarMenu/sideBarMenu";
import RequestsWindow from "../requestsWindow/requestsWindow";
import AddVacationWindow from "../requestsWindow/addVacationWindow";
import Assertions from "../assertions/assertions";

context("Automated test for leave request submission and approval", () => {
  let sideBarMenu, requestsWindow, addVacationWindow, assertions;

  const employeeName = "Adam Adamski"; // Employee first name and last name.
  const leaveType = "Oddanie krwi"; // Type of leave.
  const fromDate = 25; // Start of leave.
  const toDate = 26; // End of leave.

  before(() => {
     // Initialization of Page Object Model elements.
    sideBarMenu = new SideBarMenu();
    requestsWindow = new RequestsWindow();
    addVacationWindow = new AddVacationWindow();
    assertions = new Assertions();
    
  });

  beforeEach(() => {
    login(); // Logging in before each test.
  });

  it("Requesting and approving time off", () => {
    sideBarMenu.navigateTo("Urlopy i delegacje"); // Access the 'Urlopy i delegacje' section.
    requestsWindow.clickAddVacation(); // Opening the time off request page.
    addVacationWindow.selectEmployee(employeeName); // Choosing an employee.
    addVacationWindow.selectLeaveType(leaveType); // Selecting a leave type.
    addVacationWindow.setDateRange(fromDate, toDate); // Choosing the number of leave days.
   addVacationWindow.confirmVacationRequest(); // Approval of the leave request.
   requestsWindow.openRequestDetails(); // Select application options.
   requestsWindow.confirmVacationRequest(); // Select application details.
   requestsWindow.confirmButtonVacation(); // Request approved.
   assertions.statusChangedSuccessfully(); // Checking toast notification
  });
});


