const express = require('express');
const BooksRouter = require('./modules/Books');
const { createMYSQLConnection } = require('./config/mysql-connection');

// Creating MYSQL connection
createMYSQLConnection();

// Create HTTP server
const HTTP_SERVER = express();

// Enabling Body parser
HTTP_SERVER.use(express.json());

// Injecting Routers into HTTP_SERVER
HTTP_SERVER.use('/books', BooksRouter)

// HTTP METHODS
// 1. GET
// 2. POST
// 3. DELETE
// 4. PUT
// 5. PATCH
// 6. OPTIONS

// Listening to the server
HTTP_SERVER.listen(3000, "localhost", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server started at http://localhost:3000/`)
    }
});