const mysql = require("mysql")
const inquirer = require("inquirer")

const sql = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "employees_db"
  })

inquirer.prompt
  ({
      name: "select",
      message: "Please select an option.",
      type: "list",
      choices: [
          "View employees",
          "View department",
          "Exit"
      ]
  })

  .then(function ({select}) {
      switch(select) {
          case "View employees":
              viewEmployee()
              break;
          case "View department":
              viewDepartment()
              break;
          case "Exit":
              exit()
              break;
      }
  })

  function viewEmployee() {
      const employeeList = 'SELECT id, name FROM employee_name'

      const 

  }



  function viewDepartment() {
    const employeeList = 'SELECT id, first_name FROM employee_name'

    
}