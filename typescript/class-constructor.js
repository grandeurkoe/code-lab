var EmployeeTwo = /** @class */ (function () {
    function EmployeeTwo(id, name, designation, salary) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
    return EmployeeTwo;
}());
var employeeOne = new EmployeeTwo(101, "Vishal Kushwaha", "Manager", 50000);
var employeeTwo = new EmployeeTwo(102, "Meena Devi", "Sales", 40000);
var employeeThree = new EmployeeTwo(103, "Shweta Kumari", "I.T.", 55000);
var employeeArray = [];
employeeArray.push(employeeOne);
employeeArray.push(employeeTwo);
employeeArray.push(employeeThree);
console.log("ID\tName\t\tDesignation\tSalary");
for (var _i = 0, employeeArray_1 = employeeArray; _i < employeeArray_1.length; _i++) {
    var emp = employeeArray_1[_i];
    console.log("".concat(emp.id, "\t").concat(emp.name, "\t").concat(emp.designation, "\t\t").concat(emp.salary));
}
