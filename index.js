const express = require('express');
const BooksRouter = require('./modules/Books');
const StationaryRouter = require('./modules/Stationaries/index');
const { createMYSQLConnection } = require('./config/mysql-connection');
const log = require('./utils/logger');
const UsersRouter = require('./modules/Users');
const cors = require('cors');
const { getAllBooks } = require('./modules/Books/Books.services');
const { createMongooseConnection } = require('./config/mongodb-connection');
const TodosRouter = require('./modules/Useraccounts/Todos.controller');
const { getAllTodos } = require('./modules/Useraccounts/Todos.services');

// Creating MYSQL connection
createMYSQLConnection();

// Creating mongosb connection
createMongooseConnection();

// Create HTTP server
const HTTP_SERVER = express();

// Enabling Body parser
HTTP_SERVER.use(express.json());
HTTP_SERVER.use(express.urlencoded(true));

// Enable Custom Logging middleware
HTTP_SERVER.use(log)

// Enble cors policies
var whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000/']
var corsOptions = {
  origin: function (origin, callback) {
    // console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

HTTP_SERVER.use(cors());

// Enable view engine
// set the view engine to ejs
HTTP_SERVER.set('view engine', 'ejs');

// Injecting API Routers into HTTP_SERVER
/// Path = http://localhost:3000/
HTTP_SERVER.get('/', async (req, res) => {
  res.render('pages/index', {
    pageName: "Show all books",
    books: await getAllBooks()
  });
})
HTTP_SERVER.get('/todos', async (req, res) => {
  res.render('pages/todos', {
    todos: await getAllTodos()
  });
})
HTTP_SERVER.get('/createTodos', async (req, res) => {
  res.render('pages/createTodos');
})


HTTP_SERVER.use('/books', BooksRouter)
HTTP_SERVER.use('/stationaries', StationaryRouter)
HTTP_SERVER.use('/users', UsersRouter)
HTTP_SERVER.use('/todos', TodosRouter)

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