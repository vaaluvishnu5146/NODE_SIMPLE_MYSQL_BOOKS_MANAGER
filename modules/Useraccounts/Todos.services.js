const TodosModel = require("./Todos.model");

async function getAllTodos() {
    return await TodosModel.find();
}

async function saveATodo(data = {}) {
    const TodoFromModel = new TodosModel(data)
    return await TodoFromModel.save();
}

module.exports = {
    getAllTodos,
    saveATodo
};