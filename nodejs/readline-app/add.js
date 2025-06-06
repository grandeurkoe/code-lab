// Import the readline module which also reading user input through the command line.
const rd = require('readline');

// Setup input/output stream for interaction
const interface = rd.createInterface({
   input: process.stdin,
   output: process.stdout 
});

interface.question("Enter first number: ", (numberOne) => {
    interface.question("Enter second number: ", (numberTwo) => {
        let first = parseInt(numberOne);
        let second = parseInt(numberTwo);
        let sum = first + second;
        console.log(`Sum of ${first} and ${second} is ${sum}.`);
        interface.close();
    });
});