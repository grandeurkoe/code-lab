// Function with no parameters and no return values
function oneAdd() {
    var numberOne = 10;
    var numberTwo = 20;
    console.log("Function with no parameters and no return values!");
    console.log("".concat(numberOne, " + ").concat(numberTwo, " = ").concat(numberOne + numberTwo));
}
// Function with parameters and no return values
function twoAdd(numberOne, numberTwo) {
    console.log("Function with parameters and no return values!");
    console.log("".concat(numberOne, " + ").concat(numberTwo, " = ").concat(numberOne + numberTwo));
}
// Function with parameters and return value
function threeAdd(numberOne, numberTwo) {
    console.log("Function with parameters and return values!");
    return "".concat(numberOne, " + ").concat(numberTwo, " = ").concat(numberOne + numberTwo);
}
// Function with no parameters and return value
function fourAdd() {
    var numberOne = 10;
    var numberTwo = 20;
    console.log("Function with no parameters and return values!");
    return "".concat(numberOne, " + ").concat(numberTwo, " = ").concat(numberOne + numberTwo);
}
var firstNumber = 10;
var secondNumber = 20;
oneAdd();
twoAdd(firstNumber, secondNumber);
console.log(threeAdd(firstNumber, secondNumber));
console.log(fourAdd());
