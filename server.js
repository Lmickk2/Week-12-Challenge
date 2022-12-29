const mysql = require("mysql")
const inquirer = require("inquirer")

const sql = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "employees_db"
  })


function questions() {
    inquirer.prompt
  ({
      name: "select",
      message: "Please select an option.",
      type: "list",
      choices: [
          "View employees",
          "View department",
          "View positions",
          "Add role",
          "Add employee",
          "Add department",
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
          case "View positions":
              viewPositions()
              break;  
          case "Add role":
              addRole()
              break;
          case "Add employee":
              addEmployee()
              break;
          case "Add department":
              addDepartment()
              break;
          case "Exit":
              exit()
              break;
      }
  })
}

  function viewEmployee() {
      const employeeList = 'SELECT * FROM employee_name'
      sql.query(query, function(err, res) {
        if(err) throw err
        console.log(res)
    })
  }



  function viewDepartment() {
    const department = 'SELECT * FROM department'
    sql.query(query, function(err, res) {
        if(err) throw err
        console.log(res)
    })
    
}

function viewPositions() {
    const positions = 'SELECT positions, FROM role'
    sql.query(query, function(err, res) {
        if(err) throw err
        console.log(res)
    })
    
}

function addRole() {
    inquirer.prompt
    ([
        {
        name: "role",
        message: "Add title of role.",
        type: "input",
        },  
        
        {
        name: "department",
        message: "Add department of role.",
        type: "input",
        },

        {
        name: "salary",
        message: "Add salary for this role",
        type: "input",
        }
    ])
    .then(function(response) {
        sql.query("INSERT INTO role (position,department,salary) VALUES (?, ?, ?)",
        [response.title, response.department, response.salary], function(err, res) {
            if(err) throw err
            console.log(res)
            questions()
        })
    })
}


function addEmployee() {
    inquirer.prompt
    ([
        {
        name: "first",
        message: "Add employee first name",
        type: "input",
        },

        {
        name: "last",
        message: "Add employee last name",
        type: "input",
        },  

        {
        name: "id",
        message: "Add employee's ID",
        type: "input",
        },
    
        {
        name: "role",
        message: "Add employee's role",
        type: "input",
        },  
        
        {
        name: "department",
        message: "Add employee's department",
        type: "input",
        }
    ])
    .then(function(response) {
        sql.query("INSERT INTO role (first_name, last_name, id, role, department) VALUES (?, ?, ?, ?, ?)",
        [response.first, response.last, response.id, response.role, response.department], function(err, res) {
            if(err) throw err
            console.log(res)
            questions()
        })
    })
}

function addDepartment() {
    inquirer.prompt
    
        ({
        name: "department",
        message: "Add department of role",
        type: "input",
        })
    .then(function(response) {
        sql.query("INSERT INTO department (name) VALUES (?)",
        [response.department], function(err, res) {
            if(err) throw err
            console.log(res)
            questions()
        })
    })
}



function exit() {
    sql.end();
    process.exit();
  }