// Function with no parameters and no return values
function oneAdd() {
    var numberOne: number = 10;
    var numberTwo: number = 20;
    console.log(`Function with no parameters and no return values!`);
    console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
}

// Function with parameters and no return values
function twoAdd(numberOne: number, numberTwo: number) {
    console.log(`Function with parameters and no return values!`);
    console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
}

// Function with parameters and return value
function threeAdd(numberOne: number, numberTwo: number): string {
    console.log(`Function with parameters and return values!`);
    return `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
}

// Function with no parameters and return value
function fourAdd(): string {
    var numberOne: number = 10;
    var numberTwo: number = 20;
    console.log(`Function with no parameters and return values!`);
    return `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
}

var firstNumber: number = 10;
var secondNumber: number = 20;

oneAdd();

twoAdd(firstNumber, secondNumber);

console.log(threeAdd(firstNumber, secondNumber));

console.log(fourAdd());