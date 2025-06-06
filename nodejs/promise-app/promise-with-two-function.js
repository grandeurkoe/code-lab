var rd = require('readline');

var interface = rd.createInterface({
    input: process.stdin,
    output: process.stdout
});

var myPromise = new Promise(function(resolve, reject) {
    interface.question("Enter x: ", (x) => {
        interface.question("Enter y: ", (y) => {
            if (parseInt(x) > parseInt(y)) {
                resolve(`${x} is greater than ${y}.`);
            } else {
                reject(`${y} is greater than ${x}.`)
            }
            interface.close();
        });
    });

});

myPromise.then(function(message) {
    console.log(message);
}, function(message) {
    console.log(message);
})