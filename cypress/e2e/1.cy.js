/// <reference types="cypress" />

import { login } from "../loginPage/loginPage";

context("Automated test for registered user login functionality", () => {
  beforeEach(() => {
    login();
  });

  it("type", () => {
    cy.get(".k-sideBar__logoContainer").trigger("mouseover").click();
  });
});
