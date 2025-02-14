// Creating a logger middleware
const logger = (req, res, next) => {
    console.log(`Request Info: ${req.method} ${req.url}`);
    // Pass the control to the next middleware
    next();
}

module.exports = { logger }