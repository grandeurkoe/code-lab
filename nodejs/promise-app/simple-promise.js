var myPromise = new Promise(function(resolve, reject) {
    let nameOne = "Vishal";
    let nameTwo = "Shweta";
    if (nameOne == nameTwo)
        resolve();
    else
        reject();
});

myPromise.then(function() {
    console.log("Two names are a match!");
}, function() {
    console.log("Two names are not a match!");
});