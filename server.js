 // Import necessary modules and configure the environment
 const express = require('express');
 const routes = require('./Develop/routes');
 // import sequelize connection
 
 // Create a new Express app
 const app = express();
 
 // Set the port to be the value of the PORT environment variable, or 3001 if the variable is not defined
 const PORT = process.env.PORT || 3001;
 
 // Set up middleware to parse incoming JSON and urlencoded data
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 // Set up routes
 app.use(routes);
 
 // Start the server and listen for incoming requests
 app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}!`);
 });
 