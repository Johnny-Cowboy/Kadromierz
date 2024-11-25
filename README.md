Cypress Automated Tests:
This repository contains automated tests for the application’s key functionalities, developed using Cypress. 
The tests include workflows such as adding employees, submitting leave requests, and more.

User Credentials:
	
 •	Email: dawid.kowalski@mailbox.org	
 •	Password: digxim-jiRbah-hedva0

Test Data:
Test data is stored in the employeeData.json file located in the fixtures folder.
The test files are located in the e2e folder.

Prerequisites:
Make sure you have Node.js and npm.

Running the Tests:
Navigate to the project directory (the one containing the cypress folder) and use one of the following methods to execute the tests:

a) Running Tests in GUI Mode
 1.	Open a terminal in the project directory.	
 2.	Run the following command: 
 npx cypress open	
 3.	The Cypress Test Runner interface will open. From there, select the tests you want to run.

b) Running Tests in Headless Mode
 1.	Open a terminal in the project directory.	
 2.	Run the following command:
 npx cypress run
 3.	The tests will execute in the background, and the results will be displayed in the terminal.

The following plugins are used for Test 5:	
1.	cypress-downloadfileEnables file download handling in Cypress.
2.	xlsxProvides utilities to work with Excel files.
3.	deep-diffFacilitates comparison of deeply nested objects or structures.
