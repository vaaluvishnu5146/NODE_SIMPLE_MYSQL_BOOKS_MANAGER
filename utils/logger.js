const chalk = require('chalk');

function log(req, res, next) {
    console.log(`${chalk.bgBlue(new Date())} [${chalk.bgYellow(req.ip)}] [${chalk.bgGreenBright(req.method)}] [${req.url}]`)
    next();
}

module.exports = log;