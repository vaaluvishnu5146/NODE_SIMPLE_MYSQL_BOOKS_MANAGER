const UsersRouter = require('express').Router();
const { getConnection } = require('../../config/mysql-connection');

UsersRouter.get("/", async(req, res, next) => {
    try {
        const [result, fields] = await getConnection().query(`SELECT * FROM users`);
        if(result.length > 0) {
            return res.status(200).json({
                message: "Users fetched successfully",
                users: result
            })
        } else {
            return res.status(200).json({
                message: "No Users Found",
                users: result
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Users fetching unsuccessfull",
            error: error
        })
    }
})

UsersRouter.post("/create", (req, res, next) => {
    return res.status(200).json({
        message: "Users Created successfully"
    })
})

module.exports = UsersRouter;