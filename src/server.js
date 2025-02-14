// Import express to our project
const express = require("express");

// Import routes
const router = require('../routes/users');

// Create an instance of the express for configuration, create a server
const app = express();

// Our URL: localhost:PORTNUMBER/url_name
app.get("/", (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from Express backend!</h1>");
    // res.sendStatus(201);
    // res.download('./src/index.js')
    res.status(201).send("Hello from Express backend!");
});

app.post("/", (req, res) => {
    // Function logic executed
    res.json({
        message: "Post request made!"
    });
});

app.use("/users", router);

// Export the app itself (server)
module.exports = { app }