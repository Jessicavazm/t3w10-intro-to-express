# t3w10-intro-to-express

Express.js is a fast, minimalist web framework for Node.js, designed to simplify building web applications and APIs. It provides an easy-to-use routing system, middleware support, and seamless integration with databases and templating engines. Express is widely used for creating RESTful APIs and full-stack applications, thanks to its flexibility and lightweight nature. 


### MVC Architecture
- MODEL: Database definition logic MongoDB operations
- VIEW: Front-end display REACT code
- CONTROLLER: Back-end logic EXPRESS code


### Import stuff
- JSON is the preferred way to send responses
- For GET requests we can use the console itself 
- For any other requests: POST, PUT we need to verify through Insomnia.
- Create folders called routes, and create different files for different sub routes.

### Steps
- Initialise the project: npm init -y
- Instal express: npm i express


## Middlewares
Middleware in JavaScript, especially in backend frameworks like Express.js, is a function that sits between the request and the response cycle. It processes incoming requests before they reach the final handler.

### How Middleware Works:
When a request is made to a server, middleware functions can:

- Middleware functions run before your request reaches the final route handler.
- Modify the request (req) or response (res) objects.
- End the request-response cycle.
- Call the next middleware function using next().
- Used for logging, authentication, error handling, parsing data.

