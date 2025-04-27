const StationaryRouter = require('express').Router();

/**
 * GET ALL STATIONARY
 */
StationaryRouter.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Stationaries fetched successfully 1"
    })
})

StationaryRouter.get("/all", (req, res, next) => {
    return res.status(200).json({
        message: "Stationaries fetched successfully 2"
    })
})

module.exports = StationaryRouter;