const mysql = require('mysql2/promise');

let connection = null;

async function createMYSQLConnection() {
    try {
        const _c = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "changemeinprod!",
            database: "books"
        })
        connection = _c;
    } catch (error) {
        console.log("Database connection unsuccessfull", error)
    }
}

function getConnection() {
    return connection;
}

module.exports = {createMYSQLConnection, getConnection};