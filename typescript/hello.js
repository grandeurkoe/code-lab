/**
 * This function greet the user by name.
 * @param name - Person's name
 * @returns Welcome message
 */
function greet(name) {
    return "Welcome, ".concat(name, "!");
}
var myName = "Vishal Kushwaha";
console.log(greet(myName));
