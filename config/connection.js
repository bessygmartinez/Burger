require("dotenv").config();
const mysql = require("mysql");

//Create connection to burgers database
const connection = mysql.createConnection({
    host: process.env.dbServer,
    port: process.env.dbPort,
    user: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.db
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connection: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;