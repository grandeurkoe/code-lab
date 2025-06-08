const mysql = require('mysql');

// Connect to MySQL database.
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '172958',
    database: 'studentrecords',
    port: 3306
});

conn.connect((err) => {
    if (err) throw err;
    console.log("studentrecords connected!");
});

// // CREATE TABLE
// const createQuery = `
//     CREATE TABLE student (
//         id INT PRIMARY KEY,
//         name VARCHAR(50),
//         email VARCHAR(100),
//         cellno VARCHAR(11)
//     )
// `;

// conn.query(createQuery, (err, result) => {
//     if (err) throw err;
//     console.log("Table student created!");
// });


// // INSERT RECORD
// const insertQuery = `
//     INSERT INTO student VALUES(101, 'Vishal Kushwaha', 'connect.vishal@gmail.com', '9934565455')
// `;

// conn.query(insertQuery, (err, result) => {
//     if (err) throw err;
//     console.log(`${result.affectedRows} record inserted!`);
// });

// // MULTI-INSERT RECORD
// const multiInsertQuery = `
//     INSERT INTO student VALUES ?
// `;

// const values = [
//     [102, 'Shubham Singh', 'connect.shubham@gmail.com', '9988776677'],
//     [103, 'Suman Gill', 'connect.suman@gmail.com', '9989876677'],
//     [104, 'Poonam Yadav', 'connect.poonam@gmail.com', '9988554477']
// ];

// conn.query(multiInsertQuery, [values], (err, result) => {
//     if (err) throw err;
//     console.log(`${result.affectedRows} record inserted!`);
// });

// // DISPLAY RECORDS
// const selectQuery = `SELECT * FROM student`;

// conn.query(selectQuery, (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
// });

// // DELETE RECORDS
// const deleteQuery = `
//     DELETE FROM student where id = 104;
// `;

// conn.query(deleteQuery, (err, result) => {
//     if (err) throw err;
//     console.log("1 record deleted!");
// });

// UPDATE RECORD
const updateQuery = `
    UPDATE student
    SET name = 'Poonam Yadav',
        email = 'connect.poonam@gmail.com',
        cellno = '1234567891'
    WHERE id = 103
`;

conn.query(updateQuery, (err, result) => {
    if (err) throw err;
    console.log("1 record updated!");
});