// Import express to our project
const express = require("express");

// Create an instance of the express for configuration, create a server
const app = express();

// Import routes
const router = require('../routes/users');

// Import Logger & Timing middleware
const { timing } = require('./middlewares/timing');

// How to use a middleware
// instance.verb(routePath, middleware, middleware, ....., finalMiddleware) 

// One way to use the middleware, this sets it globally for all the routes created for the app instance.
// Second way is to pass the entire function inside of app.get()
// Third way is to create the request function and pass the middleware names in it

app.use(timing); 

// Example of the third way to use middleware
// Our URL: localhost:PORT/url_name
app.get("/", timing, (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from Express backend!</h1>");
    // res.sendStatus(201);
    // res.download('./src/index.js');
    const responseTime = Date.now() - req.startTime;
    res.status(201).send(`<h1>Hello from Express Backend!</h1><p>Response time: ${responseTime}ms</p>`);
});

app.post("/", timing, (req, res) => {
    // Function logic executed
    res.json({
        message: "Post request made!"
    });
});

app.use("/users", router);

// Export the app itself (server)
module.exports = { app }