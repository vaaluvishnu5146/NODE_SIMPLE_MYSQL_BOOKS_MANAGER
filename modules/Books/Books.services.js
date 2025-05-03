const { getConnection } = require("../../config/mysql-connection");

async function getAllBooks(req, res, next) {
    try {
        const [result,] = await getConnection().query(`SELECT * FROM books`);
        return result;
    } catch (error) {
        return res.status(500).json({
            message: "Somethng went wrong",
            error
        })
    }
}

module.exports = {
    getAllBooks
}