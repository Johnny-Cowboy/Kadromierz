/// <reference types="cypress" />

import { login } from "../loginPage/loginPage";
import SideBarMenu from "../sidebarMenu/sideBarMenu";
import Employees from "../employees/employees";
import Basics from "../employeeInformation/basic";
import Locations from "../employeeInformation/locations";
import PositionsAndRates from "../employeeInformation/positionsAndRates";
import Assertions from "../assertions/assertions";

context("Automated test for adding a new employee functionality", () => {
  let sideBarMenu, employees, basics, locations, positionsAndRates, assertions;
  let employeeData;

  before(() => {
    // Initialize Page Object Model elements
    sideBarMenu = new SideBarMenu();
    employees = new Employees();
    basics = new Basics();
    locations = new Locations();
    positionsAndRates = new PositionsAndRates();
    assertions = new Assertions();

    // Load data from JSON fixture
    cy.fixture("employeeData.json").then((data) => {
      employeeData = data.employee;
    });
  });

  beforeEach(() => {
    login(); // Logging in before each test
  });

  it("Employee addition", () => {
    sideBarMenu.navigateTo("Moja firma"); // Access 'Moja firma' section
    employees.addEmployee().click(); // Open the employee addition window
    basics.fillPersonalDetails(employeeData); // Complete personal details
    locations.selectLocation("Twoja lokalizacja"); // Select location
    positionsAndRates.selectPositionAndSave("Obsługa klienta"); // Select position and save
    assertions.newEmployeeAdded(); // Check toast notification
  });
});