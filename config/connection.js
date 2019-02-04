var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "root",
//     database: "food_db"
// });
var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'food_db'
    })
};

var mysql = require('mysql');


connection.connect(function (error) {
    if (error) {
        console.log("error connecting: " + error.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
});

module.exports = connection;