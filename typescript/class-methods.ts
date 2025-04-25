class EmployeeThree {
    private id: number;
    private name: string;
    private designation: string;
    private salary: number;

    constructor(id: number, name: string, designation: string, salary: number) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }

    displayEmployee() {
        console.log(`${this.id}\t${this.name}\t${this.designation}\t\t${this.salary}`);
    }
}

var newEmployeeArray: EmployeeThree[] = [
    new EmployeeThree(101, "Vishal Kushwaha", "Manager", 50000),
    new EmployeeThree(102, "Meena Devi", "Sales", 40000),
    new EmployeeThree(103, "Shweta Kumari", "I.T.", 55000),
];

console.log(`ID\tName\t\tDesignation\tSalary`);
for (let emp of newEmployeeArray) {
    emp.displayEmployee();
}
