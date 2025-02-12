// Export express to our project
const express = require("express");

// Create an instance of the express for configuration
const app = express();

// Define a default PORT number
const PORT = 3000;

// Our URL: localhost:PORTNUMBER/url_name
app.get("/", (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from Express backend!</h1>");
    // res.sendStatus(201);
    res.status(201).send("Hello from Express backend!");
});

// Using JSON
app.get("/users", (req, res) => {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});


// Start the server & make it listen for incoming connections on a specified port
app.listen(PORT, ()=> {
    console.log(`Server is running on Port: ${PORT}`)
})