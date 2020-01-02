require("dotenv").config();
const mysql = require("mysql");

//Create connection to burgers database
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Yesyesno1!",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connection: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;