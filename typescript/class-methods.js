var EmployeeThree = /** @class */ (function () {
    function EmployeeThree(id, name, designation, salary) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
    EmployeeThree.prototype.displayEmployee = function () {
        console.log("".concat(this.id, "\t").concat(this.name, "\t").concat(this.designation, "\t\t").concat(this.salary));
    };
    return EmployeeThree;
}());
var newEmployeeArray = [
    new EmployeeThree(101, "Vishal Kushwaha", "Manager", 50000),
    new EmployeeThree(102, "Meena Devi", "Sales", 40000),
    new EmployeeThree(103, "Shweta Kumari", "I.T.", 55000),
];
console.log("ID\tName\t\tDesignation\tSalary");
for (var _i = 0, newEmployeeArray_1 = newEmployeeArray; _i < newEmployeeArray_1.length; _i++) {
    var emp = newEmployeeArray_1[_i];
    emp.displayEmployee();
}
