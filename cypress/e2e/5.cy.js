/// <reference types="cypress" />

import { login } from "../loginPage/loginPage";
import * as XLSX from "xlsx";
import diff from "deep-diff";

context("Automated test involving downloading a report and comparing it to a reference file", () => {
  beforeEach(() => {
    login();
  });

  it("File downloading and diffing", () => {
    cy.get(".k-sideBar__logoContainer").trigger("mouseover").click();
    cy.get(".k-sideBarMenu__itemLabel").contains("Eksporty").click();
    cy.get(".kButton span").eq(1).click();
    cy.get('[data-test="confirmButton"]').click();
    cy.get('[data-test="confirmButton"]').click();
    cy.get('[data-test="confirmButton"]').click();
    cy.get(".k-exportsWidgetButton__title")
      .contains("Generowanie eksportu")
      .click();
    
      cy.intercept("GET", "https://api.kadromierz.pl/exports/file-url/**").as("downloadFile");
    cy.get(".k-exportsWidgetRow__download").contains("Pobierz").click();

    cy.wait("@downloadFile").then((interception) => {
      const downloadUrl = interception.response.body.url;

      cy.downloadFile(downloadUrl, "cypress/fixtures", "file.xlsx");

      cy.readFile("cypress/fixtures/wzorzec.xlsx", "binary").then((wzorzecContent) => {
        const wzorzecWorkbook = XLSX.read(wzorzecContent, { type: "binary" });
        const wzorzecData = XLSX.utils.sheet_to_json(wzorzecWorkbook.Sheets[wzorzecWorkbook.SheetNames[0]]);

        cy.log("Wzorzec Data:", wzorzecData); 

        cy.readFile("cypress/fixtures/file.xlsx", "binary").then((fileContent) => {
          const fileWorkbook = XLSX.read(fileContent, { type: "binary" });
          const fileData = XLSX.utils.sheet_to_json(fileWorkbook.Sheets[fileWorkbook.SheetNames[0]]);

          cy.log("File Data:", fileData); 
        
          const differences = diff(fileData, wzorzecData);

          if (differences) {
            cy.log("The files are different.");
            cy.log("Differences:", JSON.stringify(differences, null, 2));
          } else {
            cy.log("The files are a match.");
          }
          expect(differences).to.not.be.undefined;
        });
      });
    });
  });
});