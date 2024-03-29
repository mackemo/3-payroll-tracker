// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const collectEmployees = function () {

  //created empty array to story employee data
  let employeesArray = [];
  

  //prompts for each data type
  while (true) {
    let employeeData = {
      firstName: prompt("Enter employee first name:"),
      lastName: prompt("Enter employee last name:"),
      salary: parseFloat(prompt("Enter employee salary:")),
    };

    //makes sure salary is a number
    employeeData.salary = parseFloat(employeeData.salary)|| 0;
    
    //if input is not a number, a prompt pops up
    while(isNaN(employeeData.salary)) {
      employeeData.salary = parseFloat(prompt("Please enter valid salary"))
    };
         
    //add to array
    employeesArray.push(employeeData);

    //prompt for adding new employee and if not, breaks the loop of adding employees
    addNewEmployee = prompt("Are you adding another employee? ('y' or 'n')").toLowerCase();
    if (addNewEmployee === "n") {
      break
    };
  }

  //logs array data into console
  console.log(employeesArray);

  //returns array for functionality
  return employeesArray
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //created var for for loop
  let sum= 0;

  //looping over each employee's salary in the array and adding the salaries
  for(i=0; i < employeesArray.length; i++ ) {
   sum += employeesArray[i].salary;
  }

  //creates average salary and logs to console
  let avgSalary = sum / employeesArray.length; 
  console.log(`The employee average salary is ${avgSalary}.`); 
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //creates var and selects random employee
  let randomEmp= Math.floor(Math.random()*employeesArray.length); 
  //logs random employee to console
  console.log(`Congrats to ${employeesArray[randomEmp].firstName} ${employeesArray[randomEmp].lastName}, our random drawing winner!`);
};



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
