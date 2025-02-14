// Creating a timing function
const timing = (req, res, next) => {
    req.startTime = Date.now();
    next();
}

module.exports = { timing }