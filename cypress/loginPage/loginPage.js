/// <reference types="cypress" />

export const login = () => {
  //Because the page loaded so slowly, I couldn't use the side menu. I fixed it by adding an intercept.
  cy.intercept(
    "GET",
    "https://api.kadromierz.pl/companies/locations/settings?locations**"
  ).as("pageLoaded");
  cy.visit("https://app.kadromierz.pl/");
  cy.contains("Zezwól na wszystkie").click();
  cy.get('[data-test="emailInput-input"]').type("dawid.kowalski@mailbox.org");
  cy.get('[data-test="passwordInput-input"]').type("digxim-jiRbah-hedva0");
  cy.get('[data-test="loginButton"] > span').click();
  cy.wait("@pageLoaded", { timeout: 20000 });
};
