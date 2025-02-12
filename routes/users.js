// Export express to our project
const express = require("express");

// Creates a mini version of the express server 
const router = express.Router();

// Using JSON
router.get("/", (req, res) => {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

router.get("/new", (req, res) => {
    // Function logic executed
    res.json({
        message: "New User details!"
    });
});

router.get("/:id", (req, res) => {
    // Function logic executed
    res.json({
        message: "Getting a specific user detail."
    });
});

router.patch("/:id", (req, res) => {
    // Function logic executed
    res.json({
        message: "Editing something specific from a specific user."
    });
});

// Export to ensure it works
module.exports = router

