const rd = require('readline');

const interface = rd.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Enter first number: ", (numberOne) => {
    interface.question("Enter second number: ", (numberTwo) => {
        let first = parseInt(numberOne);
        let second = parseInt(numberTwo);
        let multiply = first * second;
        console.log(`Multiplication of ${first} and ${second} is ${multiply}.`);
        interface.close();
    })
})