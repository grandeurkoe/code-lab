// Data Types

// Implicit allocation of data type happens (if you don't specify it explicitly) based on the value that is assigned to that particular variable.
var studentName = "Vishal Kushwaha";

// string
var courseSelected: string = "TypeScript Fundamentals";

// number
var courseFees : number = 45000;

// any
var courseFaculty: any = "Hasan Minhaj";
var courseCode: any = 101;

// boolean
var isCourseAvailable: boolean = true;

console.log(`Welcome ${studentName} to session!`);
console.log(`Course Code: ${courseCode}\nCourse Name: ${courseSelected}\nFaculty: ${courseFaculty}`);
console.log(`Status: ${isCourseAvailable}`);