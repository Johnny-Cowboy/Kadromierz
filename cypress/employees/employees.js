class Employees {
  addEmployee() {
    return cy.get('button[data-test="showAddEmployeeModal"]');
  }
}
export default Employees;
