class EmployeeOne {
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

var employeeArray: EmployeeOne[] = [
    new EmployeeOne(101, "Vishal Kushwaha", "Manager", 50000),
    new EmployeeOne(102, "Meena Devi", "Sales", 40000),
    new EmployeeOne(103, "Shweta Kumari", "I.T.", 55000),
];

console.log(`ID\tName\t\tDesignation\tSalary`);
for (let emp of employeeArray) {
    console.log(`${emp.id}\t${emp.name}\t${emp.designation}\t\t${emp.salary}`);
}