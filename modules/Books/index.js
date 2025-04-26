const { getConnection } = require('../../config/mysql-connection');

const BooksRouter = require('express').Router();

BooksRouter.get("/", async (req, res, next) => {
    try {
        const [result, fields] = await getConnection().query(`SELECT * FROM books`);
        return res.status(200).json({
            message: "Successfull",
            result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Somethng went wrong",
            error
        })
    }
})

BooksRouter.post("/create", async (req, res, next) => {
    try {
        const [result, fields] = await getConnection().query(`INSERT INTO books (book_name, book_published_year, book_type) VALUES ('${req.body.title}', ${req.body.publishedYear}, '${req.body.type}');`);
        if(result) {
            return res.status(200).json({
                message: "Successfull created a book"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Somethng went wrong",
            error
        })
    }
})

BooksRouter.put("/update/:bookId", async (req, res, next) => {
    const { bookId } = req.params;

    if(!bookId) {
        return res.status(400).json({
            message: "Book Id is missing",
            success: false
        })
    } 

    try {
        const [result, field] = await getConnection().query(`UPDATE books SET book_name = '${req.body.title}', book_published_year = ${req.body.publishedYear}, book_type = '${req.body.type}'`);

        if(result) {
            return res.status(200).json({
                message: "Book Successfully Updated",
                success: true
            })
        } else {
            return res.status(200).json({
                message: "Book couldnt be updated",
                success: false
            })
        }

    } catch (error) {
        return res.status(200).json({
            message: "Sonething went wrong",
            error,
            success: false
        })
    }
})

BooksRouter.delete("/delete/:bookId", async (req, res, next) => {
    const { bookId } = req.params;

    if(!bookId) {
        return res.status(400).json({
            message: "Book Id is missing",
            success: false
        })
    } else {
        try {
            const [result, fields] = await getConnection().query(`DELETE FROM books WHERE book_id = ${Number(bookId)}`);
            console.log(result)
            if(result) {
                return res.status(200).json({
                    message: "Book Successfully Deleted",
                    result,
                    success: true
                })
            } else {
                return res.status(200).json({
                    message: "Book couldnt be Deleted",
                    result,
                    success: false
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: "Something went wrong",
                error,
                success: false
            })
        }
    }
})

module.exports = BooksRouter;