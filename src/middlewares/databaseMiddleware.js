// Getting users from DB takes sometime, ensure it's an ASYNC fn
async function getUsersFromDatabase(req, res, next) {
    // Query would run here and we would get the list of users from DB
    req.userData = [
        "John", "Alice", "Bob", "Mario", "Ethan", "Jess", "Luke"
    ];
    next();
}

module.exports = { getUsersFromDatabase }