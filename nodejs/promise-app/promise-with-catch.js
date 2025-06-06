var rd = require('readline');

var interface = rd.createInterface({
    input: process.stdin,
    output: process.stdout
});

var myPromise = new Promise(function(resolve, reject) {
    interface.question("Enter weekday[1 - 7]: ", (weekDay) => {
        switch(parseInt(weekDay)) {
            case 1: resolve("Sunday!");
                break;
            case 2: resolve("Monday!");
                break;        
            case 3: resolve("Tuesday!");
                break;                   
            case 4: resolve("Wednesday!");
                break;   
            case 5: resolve("Thurday!");
                break;   
            case 6: resolve("Friday!");
                break;
            case 7: resolve("Saturday!");
                break;  
            default: reject("Invalid input!");
        }
        interface.close();
    });
});

myPromise.then(function(message) {
    console.log(message);
}).catch(function(error) {
    console.log(error);
});