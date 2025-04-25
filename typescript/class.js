// TypeScript classes
// Visibility modifier set to public by default for all class properties.
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var newStudent = new Student();
newStudent.rollNo = 101;
newStudent.name = "Vishal Kushwaha";
newStudent.courseName = "Java Fundamentals";
newStudent.courseFees = 75000;
console.log("Student Details: ");
console.log("Roll Number: ".concat(newStudent.rollNo));
console.log("Name: ".concat(newStudent.name));
console.log("Course Name: ".concat(newStudent.courseName));
console.log("Course Fees: ".concat(newStudent.courseFees));
