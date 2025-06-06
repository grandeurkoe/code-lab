// Global Objects

// 1. global object.
global.a = "This is a global variable."
console.log(a);

// 2. console object.
console.log("This is a log message.");
console.warn("This is a warning message.");
console.error("This is an error message");

// 3. process object.
console.log(`Process id: ${process.pid}`);
console.log(`NodeJS version: ${process.version}`);

// 4. __dirname and __filename
console.log(`Full path for current directory: ${__dirname}`);
console.log(`Full path for current file: ${__filename}`); 

// 5. setTimeout() and setInterval()
setTimeout(() => {
    console.log("This run after a 2 second delay.");
}, 2000);

// setInterval(() => {
//     console.log("This runs every 3 seconds");
// }, 3000);

// 6. Buffer class
const buffer = Buffer.from("Hello node.js");
console.log(buffer);

// 7. URL and searchParams
const myUrl = new URL("http://www.example.com/?name=vishal");
console.log(myUrl.searchParams.get('name'));
myUrl.searchParams.append('age', '28');
console.log(myUrl.href);