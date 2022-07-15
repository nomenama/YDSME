const mysql = require("mysql2");

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Men526177!",
    database: 'ydsme',
});