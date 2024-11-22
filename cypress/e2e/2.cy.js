/// <reference types="cypress" />

import { login } from "../loginPage/loginPage";
import SideBarMenu from "../sidebarMenu/sideBarMenu";
import Employees from "../employees/employees";
import Basics from "../employeeInformation/basic";
import Locations from "../employeeInformation/locations";
import PositionsAndRates from "../employeeInformation/positionsAndRates";

context("Automated test for adding a new employee functionality", () => {
  let sideBarMenu, employees, basics, locations, positionsAndRates;
  //Test data
  const employeeData = {
    name: "John",
    surname: "Frusciante",
    email: "john.frusciante@rhcp.com",
    role: "Pracownik",
  };

  before(() => {
    // Initialization of Page Object Model elements.
    sideBarMenu = new SideBarMenu();
    employees = new Employees();
    basics = new Basics();
    locations = new Locations();
    positionsAndRates = new PositionsAndRates();
  });

  beforeEach(() => {
    login(); // Logging in before each test.
  });

  it("Employee addition", () => {
    sideBarMenu.navigateTo("Moja firma"); // Access the 'Moja firma' section.
    employees.addEmployee().click(); // Opening the employee addition window.
    basics.fillPersonalDetails(employeeData); // Completing basic data.
    locations.selectLocation("Twoja lokalizacja"); // Location selection.
    positionsAndRates.selectPositionAndSave("Obsługa klienta"); // Selecting a position and signing up.
  });
});
