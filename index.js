const express = require('express');
const BooksRouter = require('./modules/Books');
const StationaryRouter = require('./modules/Stationaries/index');
const { createMYSQLConnection } = require('./config/mysql-connection');
const log = require('./utils/logger');
const UsersRouter = require('./modules/Users');
const cors = require('cors');

// Creating MYSQL connection
createMYSQLConnection();

// Create HTTP server
const HTTP_SERVER = express();

// Enabling Body parser
HTTP_SERVER.use(express.json());

// Enable Custom Logging middleware
HTTP_SERVER.use(log)

// Enble cors policies

var whitelist = ['http://127.0.0.1:5500']
var corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

HTTP_SERVER.use(cors(corsOptions));

// Injecting API Routers into HTTP_SERVER
HTTP_SERVER.use('/books', BooksRouter)
HTTP_SERVER.use('/stationaries', StationaryRouter)
HTTP_SERVER.use('/users', UsersRouter)

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