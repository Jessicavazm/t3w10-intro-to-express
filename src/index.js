// Import app
const { app } = require('./server.js')

// Define a default PORT number
// Fetch the value from an env variable
// ?? Nullish operator returns the right value if the left is undefined.
const PORT = process.env.PORT ?? 3000;

// Start the server & make it listen for incoming connections on a specified port
app.listen(PORT, ()=> {
    console.log(`Server is running on Port: ${PORT}`)
})