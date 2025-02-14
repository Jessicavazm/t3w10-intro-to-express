// Import express to our project
const express = require("express");

// Import routes
const router = require('../routes/users');

// Create an instance of the express for configuration, create a server
const app = express();

// Define a default PORT number
const PORT = 3000;

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

// Start the server & make it listen for incoming connections on a specified port
app.listen(PORT, ()=> {
    console.log(`Server is running on Port: ${PORT}`)
})