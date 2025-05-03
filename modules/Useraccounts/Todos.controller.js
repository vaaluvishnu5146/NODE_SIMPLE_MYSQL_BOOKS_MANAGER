const TodosModel = require("./Todos.model");
const { saveATodo, getAllTodos } = require("./Todos.services");
const TodosRouter = require("express").Router();

TodosRouter.get('/', async (req, res, next) => {
    try {
        const result = await getAllTodos();
        return res.status(200).json({
            message: "Todos fetched successfully",
            data: result,
            success: true
        });
    } catch (error) {
        return res.status(200).json({
            message: "Error fetching todos",
            success: false
        });
    }

})

TodosRouter.post('/create', async (req, res, next) => {
    console.log(req.body)
    try {
        const result  = await saveATodo(req.body);
        return res.status(200).json({
            message: "Todos created successfully",
            data: result,
            success: true
        });
    } catch (error) {
        return res.status(200).json({
            message: "Error creating todos",
            success: false,
            error: error.message
        });
    }
})

module.exports = TodosRouter;