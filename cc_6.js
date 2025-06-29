// step 2
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
// describe method
  describe() {
    return this.name + " works in the " + this.department + " department.";
  }
}

// step 3
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }
//describe method
  describe() {
    return this.name + " manages the " + this.department + " department with a team of " + this.teamSize + ".";
  }
}

// step 4
const employee1 = new Employee("Megan", "Cashier");
const employee2 = new Employee("Patrick", "Server");

const manager1 = new Manager("Manny", "Kitchen Manager", 7);
const manager2 = new Manager("Erica", "Corporate Manager", 3);

// step 5
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (let i = 0; i < this.employees.length; i++) {
      console.log(this.employees[i].describe());
    }
  }
}