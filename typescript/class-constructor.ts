class EmployeeTwo {
    id: number;
    name: string;
    designation: string;
    salary: number;

    constructor(id: number, name: string, designation: string, salary: number) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
}

var employeeOne = new EmployeeTwo(101, "Vishal Kushwaha", "Manager", 50000);
var employeeTwo = new EmployeeTwo(102, "Meena Devi", "Sales", 40000);
var employeeThree = new EmployeeTwo(103, "Shweta Kumari", "I.T.", 55000);

var employeeArray: EmployeeTwo[] = [];
employeeArray.push(employeeOne);
employeeArray.push(employeeTwo);
employeeArray.push(employeeThree);

console.log(`ID\tName\t\tDesignation\tSalary`);
for (let emp of employeeArray) {
    console.log(`${emp.id}\t${emp.name}\t${emp.designation}\t\t${emp.salary}`);
}