class SideBarMenu {
  mouseOver() {
    return cy.get(".k-sideBar__logoContainer").trigger("mouseover");
  }

  myCompany() {
    return cy.get(".k-sideBarMenu__itemLabel").contains("Moja firma");
  }

  workSchedule() {
    return cy.get(".k-sideBarMenu__itemLabel").contains("Grafik pracy");
  }

  vacationsAndBusinessTrips() {
    return cy.get(".k-sideBarMenu__itemLabel").contains("Urlopy i delegacje");
  }

  exports() {
    return cy.get(".k-sideBarMenu__itemLabel").contains("Eksporty");
  }

  navigateTo(section) {
    this.mouseOver().click();
    switch (section) {
      case "Moja firma":
        this.myCompany().click();
        break;
      case "Grafik pracy":
        this.workSchedule().click();
        break;
      case "Urlopy i delegacje":
        this.vacationsAndBusinessTrips().click();
        break;
      case "Eksporty":
        this.exports().click();
        break;
      default:
        throw new Error(`Section "${section}" not recognized`);
    }
  }
}

export default SideBarMenu;
