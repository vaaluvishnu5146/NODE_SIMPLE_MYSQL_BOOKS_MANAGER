// brew services start mongodb-community@6.0
// 1. npm install mongodb or npm install mongoose
const mongoose = require('mongoose');

const URI = `mongodb://localhost:27017/todos`;

async function createMongooseConnection() {
    try {
        await mongoose.connect(URI);
        console.log("Connecting to Mongodb successfull")
    } catch (error) {
        console.log("Mongodb connection failed")
    }
}

module.exports = {
    createMongooseConnection
};