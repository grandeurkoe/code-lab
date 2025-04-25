/**
 * This function greet the user by name.
 * @param name - Person's name
 * @returns Welcome message
 */
function greet(name: string) {
    return `Welcome, ${name}!`;
}

let myName: string = "Vishal Kushwaha";
console.log(greet(myName));
