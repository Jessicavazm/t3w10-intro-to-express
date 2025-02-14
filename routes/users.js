// Export express to our project
const express = require("express");

// Creates a mini version of the express server 
const router = express.Router();

const { logger } = require('../src/middlewares/logger');
const { checkIfAdmin } = require("../src/middlewares/usersMiddleware");
const { getUsersFromDatabase } = require("../src/middlewares/databaseMiddleware");

router.use(logger);

// Using JSON
router.post("/", 
    // Middlewares functions
    checkIfAdmin, // Middle to check Auth
    getUsersFromDatabase, // Middleware to query database
    (req, res) => {
    // Function logic executed
    res.json({
        users: req.userData // Middleware result in the endpoint response
    });
});


// Make sure to define any static parameters towards the top
router.get("/new", (req, res) => {
    // Function logic executed
    res.json({
        message: "New User details!"
    });
});

//

// Fetching ID from URL use cases: 
// When you need to perform operations on specific element.
// Fetch something from database or frontend.
// Chain all the requests with the same URL pattern

router.route('/:id')
.get((req, res) => {
    // Function logic executed
    // To fetch the query parameter: req.params.id
    res.json({
        message: `Getting a specific user detail with id: ${req.params.id}`
    });
})
.patch((req, res) => {
    // Function logic executed
    res.json({
        message: `Editing a specific user detail with id: ${req.params.id}`
    });
})
.put((req, res) => {
    // Function logic executed
    res.json({
        message: `Changing a specific user detail with id: ${req.params.id}`
    });
})
.delete((req, res) => {
    // Function logic executed
    res.json({
        message: `Deleting a specific user detail with id: ${req.params.id}`
    });
});

// router.get("/:id", (req, res) => {
//     res.json({
//         message: `Getting a specific user detail with id: ${req.params.id}`
//     });
// });

// router.patch("/:id", (req, res) => {
//     res.json({
//         message: `Editing a specific user detail with id: ${req.params.id}`
//     });
// });

// router.put("/:id", (req, res) => {
//     res.json({
//         message: `Changing a specific user detail with id: ${req.params.id}`
//     });
// });

// router.delete("/:id", (req, res) => {
//     res.json({
//         message: `Deleting a specific user detail with id: ${req.params.id}`
//     });
// });

// Export to ensure it works
module.exports = router

