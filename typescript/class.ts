// TypeScript classes
// Visibility modifier set to public by default for all class properties.

class Student {
    rollNo: number;
    name: string;
    courseName: string;
    courseFees: number;
}

var newStudent = new Student();
newStudent.rollNo = 101;
newStudent.name = "Vishal Kushwaha";
newStudent.courseName = "Java Fundamentals";
newStudent.courseFees = 75000;

console.log(`Student Details: `);
console.log(`Roll Number: ${newStudent.rollNo}`);
console.log(`Name: ${newStudent.name}`);
console.log(`Course Name: ${newStudent.courseName}`);
console.log(`Course Fees: ${newStudent.courseFees}`);