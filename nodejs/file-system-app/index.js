const http = require('http');
const fs = require('fs');

// // Reading a file.
// const server = http.createServer( function(req, res) {
//     fs.readFile("demo.html", function(err, data) {
//         if (err) {
//             res.writeHead(404);
//             console.log("Couldn't read the file!");
//         } else {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//         }
//         res.end();
//     });
// }).listen(7000);

// // Appending to a file.
// fs.appendFile("hello.txt", "I'm appending some text to this file.\nMore text here.", function(err) {
//     if (err) {
//         console.log("Error: Couldn't append contents to the file!");
//     } else {
//         console.log("Appended contents to the file successfully!");
//     }
// });

// // Writing or overwriting to a file.
// fs.writeFile("hello.txt", "I'm overwriting the contents of this file\nOverwriting here too.", function(err) {
//     if (err) {
//         console.log("Error: Couldn't write to file!")
//     } else {
//          console.log("Written contents to the file successfully!");
//     }
// });

// // Renaming a file.
// fs.rename("hello.txt", "renamed-hello.txt", function(err) {
//     if (err) {
//         console.log("Error: Couldn't rename the file!");
//     } else {
//         console.log("Renamed the file successfully!");
//     }
// });

// // Deleting a file.
// fs.unlink("renamed-hello.txt", function(err) {
//     if (err) {
//         console.log("Error: Couldn't delete the file!");
//     } else {
//         console.log("Deleted the file successfully!");
//     }
// });