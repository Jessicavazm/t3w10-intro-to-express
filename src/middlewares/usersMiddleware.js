const checkIfAdmin = (req, res, next) => {
    if (req.body.isAdmin == true) {
        // req.auth = {
        //     isAdmin: true
        // };
        req.isAdmin = true;
    } else {
        res.json ({
            error: 'Not an authorised user!'
        })
    }
    // Move on to the next middleware
    next();
}

module.exports = { checkIfAdmin }